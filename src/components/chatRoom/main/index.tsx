import { ChatHeader } from "./header";
import { ChatMessage } from "@/components/chat/chatMessage";
import { ChatInput } from "@/components/chat/chatInput";
import { ProfileDetail } from "@/components/account/ProfileDetail";

export function ChatSection() {
  return (
    <>
      <section className="grid grid-cols-[1fr_260px] w-full  h-screen">
        <div className="grid grid-rows-[75px_1fr] relative  w-full border-x border-slate-200  dark:border-slate-800">
          <ChatHeader />
          <div className="max-h-[600px] pt-3 pb-10 px-6 flex flex-col items-center gap-4 flex-1 overflow-y-scroll overflow-x-hidden scrollbar scroll-ml-5 scrollbar-thumb-[#313235] scrollbar-w-[4px] scrollbar-h-full scrollbar-thumb-rounded-full">
            <ChatMessage />
            <ChatMessage />
            <ChatMessage />
            <ChatMessage />
            <ChatMessage />
            <ChatMessage />
            <ChatMessage />
            <ChatMessage />
            <ChatMessage />
            <ChatMessage />
            <ChatMessage />
            <ChatMessage />
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
