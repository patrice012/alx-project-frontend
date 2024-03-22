import { Button } from "../ui/button";
import {
  HiOutlineMicrophone,
  HiOutlineEmojiHappy,
  HiOutlinePaperClip,
  HiOutlineCamera,
} from "react-icons/hi";

export function ChatInput() {
  return (
    <>
      <div className="flex items-center justify-between gap-4 w-full bg-[#1f1f1f] rounded-t p-3">
        <div className="flex items-center gap-4">
          <Button variant="circle" size="icon" className="w-[46px] h-[46px]">
            <HiOutlineEmojiHappy className="h-[1.3rem] w-[1.3rem] transition-all" />
          </Button>
          <Button variant="circle" size="icon" className="w-[46px] h-[46px]">
            <HiOutlinePaperClip className="h-[1.3rem] w-[1.3rem] transition-all" />
          </Button>
          <Button variant="circle" size="icon" className="w-[46px] h-[46px]">
            <HiOutlineCamera className="h-[1.3rem] w-[1.3rem] transition-all" />
          </Button>
        </div>
        <div className="flex flex-1 items-center gap-2">
          <input
            type="text"
            placeholder="Type a message"
            className="bg-[#2b2b2b] text-[#fff] w-full p-3 rounded-lg focus:outline-none"
          />
          <Button variant="circle" size="icon" className="w-[46px] h-[46px]">
            <HiOutlineMicrophone className="h-[1.3rem] w-[1.3rem] transition-all" />
          </Button>
        </div>
      </div>
    </>
  );
}
