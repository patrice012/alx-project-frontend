import { ChatHeader } from "./header";
import {
  UserMessage,
  ContactMessage,
  DefaultChatMessage,
} from "@/components/chat/chatMessage";
import { ChatInput } from "@/components/chat/chatInput";
import { ProfileDetail } from "@/components/account/ProfileDetail";
import { socket } from "@/utils/socket";
import { useState } from "react";
import { useProfile } from "@/hooks/useProfile";

export function ChatSection() {
  const [discussionList, setDiscussionList] = useState([] as any);
  const [viewChat, setViewChat] = useState(false as boolean);
  const { user } = useProfile();

  socket.on("discussionMessageList", (data) => {
    setViewChat(true);
    setDiscussionList(data.discussionMessageList);
  });

  socket.on("newChatMessage", (data) => {
    setDiscussionList(data.discussionMessageList);
  });

  return (
    <>
      <section className="grid lg:grid-cols-[1fr_260px] grid-cols-1 w-full  h-screen">
        <div className="grid grid-rows-[75px_1fr] relative  w-full border-x border-slate-200  dark:border-slate-800">
          {viewChat ? <ChatHeader /> : null}
          {/* <ChatHeader /> */}
          <div className="max-h-[600px] space-y-11 pt-3 pb-14 px-6 flex flex-col items-center flex-1 overflow-y-scroll overflow-x-hidden scrollbar scroll-ml-5 scrollbar-thumb-[#313235] scrollbar-w-[4px] scrollbar-h-full scrollbar-thumb-rounded-full">
            <div className="flex items-center justify-center h-full">
              {!viewChat && <DefaultChatMessage />}
            </div>
            {discussionList?.map((message: any, index: number) => {
              if (message.senderId === user.id) {
                return <UserMessage key={index} data={message} />;
              } else {
                return <ContactMessage key={index} data={message} />;
              }
            })}
          </div>
          <div className="absolute bottom-0 w-full">
            {viewChat ? <ChatInput /> : null}
          </div>
        </div>
        <div className="hidden lg:block">
          <ProfileDetail />
        </div>
      </section>
    </>
  );
}
