import Sidebar from "@/components/chatRoom/sidebar";
import { ChatSection } from "@/components/chatRoom/main";
import { socket } from "@/utils/socket";
import { useEffect } from "react";
import { useProfile } from "@/hooks/useProfile";
import { redirect } from "react-router-dom";

export default function Home() {
  const { user, setUser } = useProfile();
  useEffect(() => {
    socket.emit("getOnlineUsers", { userId: user?.id });
    socket.emit("userOnline", { userId: user?.id });
    socket.emit("discussionList", { userId: user?.id });
  }, [user?.id]);

  socket.on("logged", (data) => {
    setUser(data.user);
  });

  socket.on("login", (data) => {
    // console.log(data);
    return redirect("/auth");
  });

  return (
    <main className="min-h-screen overflow-y-hidden w-screen dark:bg-[#171B1D] dark:text-white">
      <div className="grid grid-cols-[450px_1fr]  h-screen border border-gray-700 overflow-hidden">
        <Sidebar />
        <div className="">
          <ChatSection />
        </div>
      </div>
    </main>
  );
}
