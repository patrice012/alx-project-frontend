"use client";

import Sidebar from "@/components/chatRoom/sidebar";
import { ChatSection } from "@/components/chatRoom/main";
import { socket } from "@/utils/socket";
import { useEffect } from "react";
import { useProfile } from "@/hooks/useProfile";

export default function Home() {
  const { user } = useProfile();
  useEffect(() => {
    socket.emit("setup", { userId: user?.id });
    socket.emit("getOnlineUsers", { userId: user?.id });
    socket.emit("userOnline", { userId: user?.id });
    socket.emit("discussionList", { userId: user?.id });
  }, [user?.id]);
  return (
    <main className="min-h-screen overflow-y-hidden w-screen dark:bg-[#171B1D]">
      <div className="grid grid-cols-[450px_1fr]  h-screen border border-gray-700 overflow-hidden">
        <Sidebar />
        <div className="">
          <ChatSection />
        </div>
      </div>
    </main>
  );
}
