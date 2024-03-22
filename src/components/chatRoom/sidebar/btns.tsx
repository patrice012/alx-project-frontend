import { Button } from "@/components/ui/button";
import { PiWechatLogoThin } from "react-icons/pi";
import { IoCallOutline } from "react-icons/io5";
import { CiBookmark, CiSettings } from "react-icons/ci";
import { GoPlus } from "react-icons/go";
import { IoChatbubblesOutline } from "react-icons/io5";
import { PiUsersLight } from "react-icons/pi";
import { HiOutlineCamera } from "react-icons/hi2";

export const ChatBtn = () => {
  return (
    <>
      <Button variant="circle" size="icon" className="w-[46px] h-[46px]">
        <IoChatbubblesOutline className="h-[1.3rem] w-[1.3rem] transition-all" />
      </Button>
    </>
  );
};

export const UserChatBtn = () => {
  return (
    <>
      <Button variant="circle" size="icon" className="w-[46px] h-[46px]">
        <PiWechatLogoThin className="h-[1.3rem] w-[1.3rem] transition-all" />
      </Button>
    </>
  );
};

export const UserChat = () => {
  return (
    <>
      <Button variant="circle" size="icon" className="w-[46px] h-[46px]">
        <PiUsersLight className="h-[1.3rem] w-[1.3rem] transition-all" />
      </Button>
    </>
  );
};

export const CallBtn = () => {
  return (
    <>
      <Button variant="circle" size="icon" className="w-[46px] h-[46px]">
        <IoCallOutline className="h-[1.3rem] w-[1.3rem] transition-all" />
      </Button>
    </>
  );
};

export const RecordBtn = () => {
  return (
    <>
      <Button variant="circle" size="icon" className="w-[46px] h-[46px]">
        <HiOutlineCamera className="h-[1.3rem] w-[1.3rem] transition-all" />
      </Button>
    </>
  );
};

export const BookMark = () => {
  return (
    <>
      <Button variant="circle" size="icon" className="w-[46px] h-[46px]">
        <CiBookmark className="h-[1.3rem] w-[1.3rem] transition-all" />
      </Button>
    </>
  );
};

export const Settings = () => {
  return (
    <>
      <Button variant="circle" size="icon" className="w-[46px] h-[46px]">
        <CiSettings className="h-[1.3rem] w-[1.3rem] transition-all" />
      </Button>
    </>
  );
};

export const AddAccount = () => {
  return (
    <>
      <Button variant="circle" size="icon" className="w-[46px] h-[46px]">
        <GoPlus className="h-[1.3rem] w-[1.3rem] transition-all" />
      </Button>
    </>
  );
};
