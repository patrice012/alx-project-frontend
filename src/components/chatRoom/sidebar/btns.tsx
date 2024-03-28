import { PiWechatLogoThin } from "react-icons/pi";
import { IoCallOutline } from "react-icons/io5";
import { CiBookmark, CiSettings } from "react-icons/ci";
import { GoPlus } from "react-icons/go";
import { IoChatbubblesOutline } from "react-icons/io5";
import { PiUsersLight } from "react-icons/pi";
import { HiOutlineCamera } from "react-icons/hi2";
import { TooltipBtn } from "@/components/btn/tooltipBtn";

export const ChatBtn = () => {
  return (
    <>
      <TooltipBtn
        tooltiptext={"Start Chat"}
        variant="circle"
        size="icon"
        className="w-[46px] h-[46px]"
      >
        <IoChatbubblesOutline className="h-[1.3rem] w-[1.3rem] transition-all" />
      </TooltipBtn>
    </>
  );
};

export const UserChatBtn = () => {
  return (
    <>
      <TooltipBtn
        tooltiptext={"Active Chats"}
        variant="circle"
        size="icon"
        className="w-[46px] h-[46px]"
      >
        <PiWechatLogoThin className="h-[1.3rem] w-[1.3rem] transition-all" />
      </TooltipBtn>
    </>
  );
};

export const UserChat = () => {
  return (
    <>
      <TooltipBtn
        tooltiptext={"Users"}
        variant="circle"
        size="icon"
        className="w-[46px] h-[46px]"
      >
        <PiUsersLight className="h-[1.3rem] w-[1.3rem] transition-all" />
      </TooltipBtn>
    </>
  );
};

export const CallBtn = () => {
  return (
    <>
      <TooltipBtn
        tooltiptext={"Call"}
        variant="circle"
        size="icon"
        className="w-[46px] h-[46px]"
      >
        <IoCallOutline className="h-[1.3rem] w-[1.3rem] transition-all" />
      </TooltipBtn>
    </>
  );
};

export const RecordBtn = () => {
  return (
    <>
      <TooltipBtn
        tooltiptext={"Record video"}
        variant="circle"
        size="icon"
        className="w-[46px] h-[46px]"
      >
        <HiOutlineCamera className="h-[1.3rem] w-[1.3rem] transition-all" />
      </TooltipBtn>
    </>
  );
};

export const BookMark = () => {
  return (
    <>
      <TooltipBtn
        tooltiptext={"Bookmark messages"}
        variant="circle"
        size="icon"
        className="w-[46px] h-[46px]"
      >
        <CiBookmark className="h-[1.3rem] w-[1.3rem] transition-all" />
      </TooltipBtn>
    </>
  );
};

export const Settings = () => {
  return (
    <>
      <TooltipBtn
        tooltiptext={"Settings"}
        variant="circle"
        size="icon"
        className="w-[46px] h-[46px]"
      >
        <CiSettings className="h-[1.3rem] w-[1.3rem] transition-all" />
      </TooltipBtn>
    </>
  );
};

export const AddAccount = () => {
  return (
    <>
      <TooltipBtn
        tooltiptext={"Start new chat"}
        variant="circle"
        size="icon"
        className="w-[46px] h-[46px]"
      >
        <GoPlus className="h-[1.3rem] w-[1.3rem] transition-all" />
      </TooltipBtn>
    </>
  );
};
