"use client";

import { Button } from "../ui/button";
import { Textarea } from "@/components/ui/textarea";
import { useState, useEffect } from "react";

import { socket } from "@/utils/socket";

import {
  HiOutlineMicrophone,
  HiOutlinePaperClip,
  HiOutlineCamera,
} from "react-icons/hi";
import { RiSendPlaneFill } from "react-icons/ri";

import { EmojisPicker } from "./emoji";

export function ChatInput({ discussionId }: { discussionId: string }) {
  const [inputState, setInputState] = useState({
    message: "",
    state: "idle",
  });

  function dispatchTyping() {
    socket.emit("typing", {
      userId: "6601b1aff3c1ffaef1ac9bed",
    });
  }

  const AddEmoji = (emoji: any) => {
    setInputState({ ...inputState, message: `${inputState.message}${emoji}` });
    dispatchTyping();
  };

  const handleUserTyping = (value: string) => {
    if (value === "") {
      setInputState({ ...inputState, message: value, state: "idle" });
      return;
    }
    setInputState({ ...inputState, message: value, state: "typing" });
  };

  const handleClick = () => {
    dispatchTyping();
  };

  const sendMessage = () => {
    socket.emit("stopTyping", {
      userId: "6601b1aff3c1ffaef1ac9bed",
    });

    if (inputState.message === "") return;
    socket.emit("newMessage", {
      userId: "6601b1aff3c1ffaef1ac9bed",
      message: {
        senderId: "6601b1aff3c1ffaef1ac9bed",
        receiverId: "6601b2d3f3c1ffaef1ac9c02",
        discussionId: discussionId,
        typeOf: "text",
        message: inputState.message,
      },
    });
    setTimeout(() => {
      socket.emit("discussionList", { userId: "6601b1aff3c1ffaef1ac9bed" });
      socket.emit("discussionMessageList", { discussionId: discussionId });
    }, 500);
    setInputState({ ...inputState, message: "", state: "idle" });
  };

  return (
    <>
      <div className="flex items-center justify-between gap-4 py-4 px-3 w-full dark:bg-[#1f1f1f] bg-white rounded-t border-t border-slate-200  dark:border-slate-800">
        <div className="flex items-center gap-4">
          <EmojisPicker AddEmoji={AddEmoji} />
          <Button variant="circle" size="icon" className="w-[46px] h-[46px]">
            <HiOutlinePaperClip className="h-[1.3rem] w-[1.3rem] transition-all" />
          </Button>
          <Button variant="circle" size="icon" className="w-[46px] h-[46px]">
            <HiOutlineCamera className="h-[1.3rem] w-[1.3rem] transition-all" />
          </Button>
        </div>
        <div className="flex flex-1 items-center gap-2">
          <Textarea
            onClick={handleClick}
            value={inputState.message}
            onChange={(e) => handleUserTyping(e.target.value)}
            placeholder="Type your message here."
            className="dark:bg-[#2b2b2b] dark:text-[#fff] w-full p-3 rounded-lg focus:outline-none overflow-y-scroll overflow-x-hidden scrollbar scroll-ml-5 scrollbar-thumb-[#313235] dark:scrollbar-thumb-[#FFFFFF] scrollbar-w-[4px] scrollbar-h-full scrollbar-thumb-rounded-full"
          />{" "}
          <Button
            onClick={sendMessage}
            variant="circle"
            size="icon"
            className="w-[50px] h-[46px]"
          >
            <RiSendPlaneFill className="h-[1.3rem] w-[1.3rem] transition-all" />
          </Button>
          <Button variant="circle" size="icon" className="w-[50px] h-[46px]">
            <HiOutlineMicrophone className="h-[1.3rem] w-[1.3rem] transition-all" />
          </Button>
        </div>
      </div>
    </>
  );
}
