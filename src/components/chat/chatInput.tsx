import { Button } from "../ui/button";
import { Textarea } from "@/components/ui/textarea";
import { useState } from "react";
import { useProfile } from "@/hooks/useProfile";

import { socket } from "@/utils/socket";
import { checkTypingState } from "@/utils/checkTypingState";

import {
  HiOutlineMicrophone,
  HiOutlinePaperClip,
  HiOutlineCamera,
} from "react-icons/hi";
import { RiSendPlaneFill } from "react-icons/ri";

import { EmojisPicker } from "./emoji";

export function ChatInput() {
  const [inputState, setInputState] = useState({
    message: "",
  });
  const [contactDetail, setContactDetail] = useState({} as any);
  const [discussionId, setDiscussionId] = useState("" as any);

  const { user } = useProfile();

  function dispatchTyping(state: boolean = false) {
    if (state) {
      socket.emit("typing", {
        userId: user?.id,
        discussionId: discussionId,
      });
    } else {
      socket.emit("stopTyping", {
        userId: user?.id,
        discussionId: discussionId,
      });
    }
  }

  const AddEmoji = (emoji: any) => {
    let message = document.getElementById("message");
    message.innerText = `${inputState.message}${emoji}`;
  };

  const handleUserTyping = (value: string) => {
    dispatchTyping(true);
    checkTypingState().then((res) => {
      if (res) {
        dispatchTyping(false);
      }
      setInputState({ ...inputState, message: value });
    });
  };

  // const handleClick = () => {
  //   dispatchTyping();
  // };

  socket.on("loadContactDetail", (data) => {
    setContactDetail(data.contactDetail);
  });

  socket.on("activeDiscussion", (data) => {
    setDiscussionId(data.discussionId);
  });

  const sendMessage = () => {
    dispatchTyping(false);

    if (inputState.message === "") return;
    socket.emit("newMessage", {
      userId: user?.id,
      message: {
        senderId: user?.id,
        receiverId: contactDetail._id,
        discussionId: discussionId,
        typeOf: "text",
        message: inputState.message,
      },
    });
    setTimeout(() => {
      socket.emit("discussionList", { userId: user?.id });
      socket.emit("discussionMessageList", { discussionId: discussionId });
    }, 500);
    setInputState({ ...inputState, message: "" });
    document.getElementById("message")!.innerText = "";
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
            id="message"
            // onClick={handleClick}
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
