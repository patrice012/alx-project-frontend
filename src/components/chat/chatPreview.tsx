import { UserAvatar } from "../avatar";
import { MessageStatus, NewMessageBadge } from "./newMessageBadge";
import { socket } from "@/utils/socket";

interface ChatPreviewProps {
  sender: string;
  lastMessage: string;
  receiver: string;
  time: string;
  _id: string;
}

import { useProfile } from "@/hooks/useProfile";

export function ChatPreview({ discussion }: { discussion: ChatPreviewProps }) {
  const handleClick = () => {
    socket.emit("joinChat", { discussionId: discussion._id });
    socket.emit("discussionMessageList", { discussionId: discussion._id });
  };

  const { user } = useProfile();

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
            <p className="text-[13px] font-[300]">{discussion?.lastMessage}</p>
          </div>
        </div>

        <div className="flex flex-col items-center justify-center">
          {/* <MessageStatus /> */}
          <NewMessageBadge />
        </div>
      </div>
    </>
  );
}
