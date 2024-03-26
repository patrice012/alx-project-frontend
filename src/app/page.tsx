"use client";

import Sidebar from "@/components/chatRoom/sidebar";
import { ChatSection } from "@/components/chatRoom/main";
import { socket } from "@/utils/socket";
import { useEffect } from "react";

export default function Home() {
  useEffect(() => {
    socket.emit("setup", { userId: "6601b1aff3c1ffaef1ac9bed" });
    socket.emit("getOnlineUsers", { userId: "6601b1aff3c1ffaef1ac9bed" });
    socket.emit("userOnline", { userId: "6601b1aff3c1ffaef1ac9bed" });
    socket.emit("discussionList", { userId: "6601b1aff3c1ffaef1ac9bed" });
  }, []);
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
