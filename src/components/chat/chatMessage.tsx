import { TooltipBtn } from "../btn/tooltipBtn";
import { socket } from "@/utils/socket";

import { MdReply } from "react-icons/md";
import { TbDotsVertical } from "react-icons/tb";
import { PiShareFatLight } from "react-icons/pi";
import { EmojisPickerReactions } from "./contactReaction";
import { useState } from "react";
import { GrEmoji } from "react-icons/gr";

export function DefaultChatMessage() {
  return (
    <>
      <div className="max-w-[60%] h-full">
        <div className="flex items-center justify-center mx-auto h-full">
          <div className="space-y-3">
            <span>
              {" "}
              Send and receive messages without keeping your phone online.No
              price
            </span>{" "}
            <span> Only your email is require, login and start chat.</span>
          </div>
        </div>
      </div>
    </>
  );
}

export function ContactMessage({ data }: any) {
  const [open, setOpen] = useState(false);


  function AddEmoji(emoji: string) {
    socket.emit("messageReaction", {
      msgId: data._id,
      reaction: emoji,
      discId: data.discussionId,
      senderId: data.senderId,
      receiverId: data.receiverId,
    });
  }

  return (
    <>
      <div className="w-full relative grid grid-cols-2 gap-5 items-start justify-start">
        <div className="space-y-3">
          <div className="bg-gray-700 p-3 rounded-[16px] rounded-tl-[0px] text-white">
            <p>{data.message}</p>
          </div>
          <div className="relative">
            <div className="flex gap-1">
              {data.reactions.map((r, i) => {
                return <span key={i}>{r}</span>;
              })}
            </div>
            <p className="text-[10px] text-nowrap absolute top-0 right-0">
              {data.created_at}
            </p>
          </div>
        </div>

        <div className="flex items-center gap-3">
          <TooltipBtn
            tooltiptext={"Reply"}
            variant="circle"
            size="icon"
            className="w-[30px] h-[30px]"
          >
            <MdReply className="h-[.9rem] w-[.9rem] transition-all" />
          </TooltipBtn>
          <TooltipBtn
            tooltiptext={"Add Reaction"}
            onClick={(e) => {
              e.stopPropagation();
              e.preventDefault();
              setOpen(true);
            }}
            variant="circle"
            size="icon"
            className="w-[30px] h-[30px]"
          >
            <GrEmoji className="h-[.9rem] w-[.9rem] transition-all" />
          </TooltipBtn>
          <EmojisPickerReactions
            AddEmoji={AddEmoji}
            open={open}
            setOpen={setOpen}
          />
          <TooltipBtn
            tooltiptext={"Settings"}
            variant="circle"
            size="icon"
            className="w-[30px] h-[30px]"
          >
            <TbDotsVertical className="h-[.9rem] w-[.9rem] transition-all" />
          </TooltipBtn>
        </div>
      </div>
    </>
  );
}

export function UserMessage({ data }: any) {
  return (
    <>
      <div className="w-full relative grid grid-cols-2 gap-5 items-start justify-start">
        <div className="flex items-center gap-3 justify-end">
          <TooltipBtn
            tooltiptext={"Share the message"}
            variant="circle"
            size="icon"
            className="w-[30px] h-[30px]"
          >
            <PiShareFatLight className="h-[.9rem] w-[.9rem] transition-all" />
          </TooltipBtn>
          <TooltipBtn
            tooltiptext={"Settings"}
            variant="circle"
            size="icon"
            className="w-[30px] h-[30px]"
          >
            <TbDotsVertical className="h-[.9rem] w-[.9rem] transition-all" />
          </TooltipBtn>
        </div>
        <div className="space-y-3">
          <div className=" bg-teal-500 p-3 rounded-[16px] rounded-tr-[0px] ">
            <p>{data.message}</p>
          </div>
          <div className="relative">
            <p className="text-[10px] text-nowrap relative top-0 left-0">
              {data.created_at}
            </p>
            <div className="flex gap-1">
              {data.reactions.map((r, i) => {
                return <span key={i}>{r}</span>;
              })}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
