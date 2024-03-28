import { TooltipBtn } from "../btn/tooltipBtn";
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

  const AddEmoji = (emoji: string) => {
    setInputState({ ...inputState, message: inputState.message + emoji });
  };

  const handleUserTyping = (value: string) => {
    dispatchTyping(true);
    setInputState({ ...inputState, message: value });
    checkTypingState().then((res) => {
      if (res) {
        dispatchTyping(false);
      }
    });
  };

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

    // Load discussion list and message list
    setTimeout(() => {
      socket.emit("discussionList", { userId: user?.id });
      socket.emit("discussionMessageList", { discussionId: discussionId });
    }, 500);
    setInputState({ ...inputState, message: "" });
  };

  return (
    <>
      <div className="flex items-center justify-between gap-4 py-4 px-3 w-full dark:bg-[#1f1f1f] bg-white rounded-t border-t border-slate-200  dark:border-slate-800">
        <div className="flex items-center gap-4">
          <EmojisPicker AddEmoji={AddEmoji} />
          <TooltipBtn
            tooltiptext={"Attach File"}
            variant="circle"
            size="icon"
            className="w-[46px] h-[46px]"
          >
            <HiOutlinePaperClip className="h-[1.3rem] w-[1.3rem] transition-all" />
          </TooltipBtn>

          <TooltipBtn
            tooltiptext={"Record Video"}
            variant="circle"
            size="icon"
            className="w-[46px] h-[46px]"
          >
            <HiOutlineCamera className="h-[1.3rem] w-[1.3rem] transition-all" />
          </TooltipBtn>
        </div>
        <div className="flex flex-1 items-center gap-2">
          <Textarea
            id="message"
            onChange={(e) => handleUserTyping(e.target.value)}
            value={inputState.message}
            placeholder="Type your message here."
            className="dark:bg-[#2b2b2b] dark:text-[#fff] w-full p-3 rounded-lg focus:outline-none overflow-y-scroll overflow-x-hidden scrollbar scroll-ml-5 scrollbar-thumb-[#313235] dark:scrollbar-thumb-[#FFFFFF] scrollbar-w-[4px] scrollbar-h-full scrollbar-thumb-rounded-full"
          />{" "}
          <TooltipBtn
            tooltiptext={"Send Message"}
            onClick={sendMessage}
            variant="circle"
            size="icon"
            className="w-[50px] h-[46px]"
          >
            <RiSendPlaneFill className="h-[1.3rem] w-[1.3rem] transition-all" />
          </TooltipBtn>
          <TooltipBtn
            tooltiptext={"Start Voice Message"}
            variant="circle"
            size="icon"
            className="w-[50px] h-[46px]"
          >
            <HiOutlineMicrophone className="h-[1.3rem] w-[1.3rem] transition-all" />
          </TooltipBtn>
        </div>
      </div>
    </>
  );
}
