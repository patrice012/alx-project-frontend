import { ChatHeader } from "./header";
import {
  UserMessage,
  ContactMessage,
  DefaultChatMessage,
} from "@/components/chat/chatMessage";
import { ChatInput } from "@/components/chat/chatInput";
import { ProfileDetail } from "@/components/account/ProfileDetail";
import { socket } from "@/utils/socket";
import { useEffect, useState } from "react";

export function ChatSection() {
  const [discussionList, setDiscussionList] = useState([] as any);
  const [chatId, setChatId] = useState("" as string);

  socket.on("discussionMessageList", (data) => {
    setDiscussionList(data.discussionMessageList);
  });

  useEffect(() => {
    if (discussionList.length > 0) {
      setChatId(discussionList[0].discussionId);
    }
  }, [discussionList]);

  return (
    <>
      <section className="grid grid-cols-[1fr_260px] w-full  h-screen">
        <div className="grid grid-rows-[75px_1fr] relative  w-full border-x border-slate-200  dark:border-slate-800">
          <ChatHeader />
          <div className="max-h-[600px] space-y-11 pt-3 pb-14 px-6 flex flex-col items-center flex-1 overflow-y-scroll overflow-x-hidden scrollbar scroll-ml-5 scrollbar-thumb-[#313235] scrollbar-w-[4px] scrollbar-h-full scrollbar-thumb-rounded-full">
            {discussionList?.length === 0 && <DefaultChatMessage />}
            {discussionList?.map((message: any, index: number) => {
              if (message.senderId === "6601b1aff3c1ffaef1ac9bed") {
                return <UserMessage key={index} data={message} />;
              } else {
                return <ContactMessage key={index} data={message} />;
              }
            })}
          </div>
          <div className="absolute bottom-0 w-full">
            <ChatInput discussionId={chatId} />
          </div>
        </div>
        <div>
          <ProfileDetail />
        </div>
      </section>
    </>
  );
}
