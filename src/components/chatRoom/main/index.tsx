import { ChatHeader } from "./header";
import { UserMessage, ContactMessage } from "@/components/chat/chatMessage";
import { ChatInput } from "@/components/chat/chatInput";
import { ProfileDetail } from "@/components/account/ProfileDetail";

export function ChatSection() {
  return (
    <>
      <section className="grid grid-cols-[1fr_260px] w-full  h-screen">
        <div className="grid grid-rows-[75px_1fr] relative  w-full border-x border-slate-200  dark:border-slate-800">
          <ChatHeader />
          <div className="max-h-[600px] space-y-11 pt-3 pb-14 px-6 flex flex-col items-center flex-1 overflow-y-scroll overflow-x-hidden scrollbar scroll-ml-5 scrollbar-thumb-[#313235] scrollbar-w-[4px] scrollbar-h-full scrollbar-thumb-rounded-full">
            <UserMessage />
            <ContactMessage />
            <ContactMessage />
            <UserMessage />
            <ContactMessage />
            <UserMessage />
            <UserMessage />
            <UserMessage />
            <ContactMessage />
            <UserMessage />
            <ContactMessage />
          </div>
          <div className="absolute bottom-0 w-full">
            <ChatInput />
          </div>
        </div>
        <div>
          <ProfileDetail />
        </div>
      </section>
    </>
  );
}
