import Sidebar from "@/components/chatRoom/sidebar";
import { ChatSection } from "@/components/chatRoom/main";
import { socket } from "@/utils/socket";
import { useEffect } from "react";
import { useProfile } from "@/hooks/useProfile";
import { notificationAlert } from "@/utils/notif";

export default function Home() {
  const { user, setUser } = useProfile();
  useEffect(() => {
    socket.emit("getOnlineUsers", { userId: user?.id });
    socket.emit("userOnline", { userId: user?.id });
    socket.emit("discussionList", { userId: user?.id });
  }, [user?.id]);

  socket.on("logged", (data) => {
    setUser(data.user);
    notificationAlert().then((toast) => {
      toast("Welcome back!", {
        description: "You are now logged in",
      });
    });
  });

  socket.on("login", (data) => {
    const { error, message } = data;
    if (error) {
      notificationAlert().then((toast) => {
        toast(`${message || "Something went wrong!"}`, {
          description: `${error || "Please try again later"}`,
        });
      });
    } else {
      window.location.href = "/auth";
    }
  });

  socket.on("joinChat", (data) => {
    const { error, message } = data;
    if (error) {
      notificationAlert().then((toast) => {
        toast(`${message || "Something went wrong!"}`, {
          description: `${error || "Please try again later"}`,
        });
      });
    }
  });

  socket.on("leaveChat", (data) => {
    const { error, message } = data;
    if (error) {
      notificationAlert().then((toast) => {
        toast(`${message || "Something went wrong!"}`, {
          description: `${error || "Please try again later"}`,
        });
      });
    }
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
