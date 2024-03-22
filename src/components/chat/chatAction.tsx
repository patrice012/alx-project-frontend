import { Button } from "@/components/ui/button";
import { TbDotsVertical } from "react-icons/tb";
import { IoCallOutline } from "react-icons/io5";
import { HiOutlineCamera } from "react-icons/hi2";

const CallActionBtn = () => {
  return (
    <>
      <Button variant="circle" size="icon" className="w-[46px] h-[46px]">
        <IoCallOutline className="h-[1.3rem] w-[1.3rem] transition-all" />
      </Button>
    </>
  );
};

const RecordActionBtn = () => {
  return (
    <>
      <Button variant="circle" size="icon" className="w-[46px] h-[46px]">
        <HiOutlineCamera className="h-[1.3rem] w-[1.3rem] transition-all" />
      </Button>
    </>
  );
};

const ChatSettings = () => {
  return (
    <>
      <Button variant="circle" size="icon" className="w-[46px] h-[46px]">
        <TbDotsVertical className="h-[1.3rem] w-[1.3rem] transition-all" />
      </Button>
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
