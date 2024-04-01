import { UserAvatar } from "../avatar";
import { MessageStatus, NewMessageBadge } from "./newMessageBadge";
import { socket } from "@/utils/socket";

interface ChatPreviewProps {
  sender: string;
  lastMessage: string;
  receiver: string;
  receiverId: string;
  time: string;
  _id: string;
  updated_at: string;
}

import { useProfile } from "@/hooks/useProfile";
import { useState } from "react";

export function ChatPreview({ discussion }: { discussion: ChatPreviewProps }) {
  const [isTyping, setIsTyping] = useState(false);

  const handleClick = () => {
    socket.emit("joinChat", { discussionId: discussion._id });
    socket.emit("discussionMessageList", { discussionId: discussion._id });
    document.getElementById("sidebar")?.classList.add("hidden");
  };

  const { user } = useProfile();

  let lastMessage = discussion?.lastMessage;
  const lastMsg = `${user.username} react with`;

  if (lastMessage?.includes(lastMsg)) {
    lastMessage = lastMessage.replace(user.username, "You");
  }

  socket.on("typing", (data) => {
    const { error, message } = data;
    if (!error && message.length > 0) {
      setIsTyping(true);
    } else {
      setTimeout(() => {
        setIsTyping(false);
      }, 1000);
    }
  });

  return (
    <>
      <div
        onClick={handleClick}
        className="w-full grid grid-cols-[1fr_60px] items-center justify-between hover:bg-slate-800"
      >
        <div className="flex items-center justify-start gap-4">
          <UserAvatar />
          <div className="flex flex-col items-start justify-center">
            <h3 className="text-[16px]">
              {discussion?.receiverId == user.id
                ? discussion?.sender
                : discussion?.receiver}
            </h3>
            <p className="text-[13px] font-[300]">{lastMessage}</p>
          </div>
        </div>

        <div className="flex flex-col items-center justify-center">
          <MessageStatus data={discussion?.updated_at} isTyping={isTyping} />
          {/* {isTyping ? (
            <MessageStatus data={discussion?.updated_at} isTyping={isTyping} />
          ) : (
            <NewMessageBadge
              discId={discussion?._id}
              data={discussion?.updated_at}
            />
          )} */}
        </div>
      </div>
    </>
  );
}
