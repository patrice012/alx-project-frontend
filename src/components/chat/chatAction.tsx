import { TbDotsVertical } from "react-icons/tb";
import { IoCallOutline } from "react-icons/io5";
import { HiOutlineCamera } from "react-icons/hi2";

import { TooltipBtn } from "../btn/tooltipBtn";

const CallActionBtn = () => {
  return (
    <>
      <TooltipBtn
        tooltiptext={"Start Call"}
        variant="circle"
        size="icon"
        className="w-[46px] h-[46px]"
      >
        <IoCallOutline className="h-[1.3rem] w-[1.3rem] transition-all" />
      </TooltipBtn>
    </>
  );
};

const RecordActionBtn = () => {
  return (
    <>
      <TooltipBtn
        tooltiptext={"Start video call"}
        variant="circle"
        size="icon"
        className="w-[46px] h-[46px]"
      >
        <HiOutlineCamera className="h-[1.3rem] w-[1.3rem] transition-all" />
      </TooltipBtn>
    </>
  );
};

const ChatSettings = () => {
  return (
    <>
      <TooltipBtn
        tooltiptext={"Chat Settings"}
        variant="circle"
        size="icon"
        className="w-[46px] h-[46px]"
      >
        <TbDotsVertical className="h-[1.3rem] w-[1.3rem] transition-all" />
      </TooltipBtn>
    </>
  );
};

export function ChatActions() {
  return (
    <>
      <div className="flex items-center gap-2 justify-evenly">
        <CallActionBtn />
        <RecordActionBtn />
        <ChatSettings />
      </div>
    </>
  );
}
