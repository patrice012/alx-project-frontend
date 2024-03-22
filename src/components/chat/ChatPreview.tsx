import { UserAvatar } from "../avatar";
import { Badge } from "../ui/badge";
import { MessageStatus, NewMessageBadge } from "./NewMessageBadge";

export function ChatPreview() {
  return (
    <>
      <div className="w-full grid grid-cols-[1fr_60px] items-center justify-between">
        <div className="flex items-center justify-start gap-4">
          <UserAvatar />
          <div className="flex flex-col items-start justify-center">
            <h3 className="text-[16px]">Name</h3>
            <p className="text-[13px] font-[300]">message preview</p>
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
