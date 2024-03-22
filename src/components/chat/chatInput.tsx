"use client";

import { Button } from "../ui/button";
import { Textarea } from "@/components/ui/textarea";

import {
  HiOutlineMicrophone,
  HiOutlinePaperClip,
  HiOutlineCamera,
} from "react-icons/hi";

import EmojiPicker from "@emoji-mart/react";

export function ChatInput() {
  const AddEmoji = () => {
    console.log("Add Emoji");
  };
  return (
    <>
      <div className="flex items-center justify-between gap-4 py-4 px-3 w-full dark:bg-[#1f1f1f] bg-white rounded-t border-t border-slate-200  dark:border-slate-800">
        <div className="flex items-center gap-4">
          {/* <Button onClick={AddEmoji} variant="circle" size="icon" className="w-[46px] h-[46px]">
            <HiOutlineEmojiHappy className="h-[1.3rem] w-[1.3rem] transition-all" />
          </Button> */}
          <EmojiPicker />
          <Button variant="circle" size="icon" className="w-[46px] h-[46px]">
            <HiOutlinePaperClip className="h-[1.3rem] w-[1.3rem] transition-all" />
          </Button>
          <Button variant="circle" size="icon" className="w-[46px] h-[46px]">
            <HiOutlineCamera className="h-[1.3rem] w-[1.3rem] transition-all" />
          </Button>
        </div>
        <div className="flex flex-1 items-center gap-2">
          <Textarea
            placeholder="Type your message here."
            className="dark:bg-[#2b2b2b] dark:text-[#fff] w-full p-3 rounded-lg focus:outline-none overflow-y-scroll overflow-x-hidden scrollbar scroll-ml-5 scrollbar-thumb-[#313235] dark:scrollbar-thumb-[#FFFFFF] scrollbar-w-[4px] scrollbar-h-full scrollbar-thumb-rounded-full"
          />{" "}
          <Button variant="circle" size="icon" className="w-[50px] h-[46px]">
            <HiOutlineMicrophone className="h-[1.3rem] w-[1.3rem] transition-all" />
          </Button>
        </div>
      </div>
    </>
  );
}
