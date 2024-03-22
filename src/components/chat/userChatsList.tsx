import { Badge } from "../ui/badge";
import { ChatPreview } from "./chatPreview";

export function UserChatList() {
  return (
    <div className="flex flex-col justify-start gap-5 h-full w-full">
      <div className="flex items-center justify-start gap-2 text-[16px]">
        <h3>Messages</h3>
        <Badge className="dark:bg-teal-500 dark:text-white bg-teal-500 text-white">2</Badge>
      </div>
      <div>
        <div className="flex flex-col items-center gap-4 max-h-[450px] overflow-y-scroll overflow-x-hidden scrollbar scroll-ml-5 scrollbar-thumb-[#313235] scrollbar-w-[4px] scrollbar-h-full scrollbar-thumb-rounded-full">
          <ChatPreview />
          <ChatPreview />
          <ChatPreview />
          <ChatPreview />
          <ChatPreview />
          <ChatPreview />
          <ChatPreview />
          <ChatPreview />
          <ChatPreview />
          <ChatPreview />
        </div>
      </div>
    </div>
  );
}
