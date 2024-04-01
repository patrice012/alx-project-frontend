import Sidebar from "@/components/chatRoom/sidebar";
import { ChatSection } from "@/components/chatRoom/main";
import { socket } from "@/utils/socket";
import { useEffect } from "react";
import { useProfile } from "@/hooks/useProfile";
import { notificationAlert } from "@/utils/notif";
import { checkAuth } from "@/components/user/checkAuth";

export function Home() {
  const { user, setUser } = useProfile();

  useEffect(() => {
    (async () => {
      try {
        const data = await checkAuth();
        console.log(data, "from check");
        if (data.error || !data) window.location.href = "/auth";
        else {
          setUser(user);
        }
      } catch (error) {
        window.location.href = "/auth";
      }
    })();
  }, [user]);

  useEffect(() => {
    socket.emit("getOnlineUsers", { userId: user?.id });
    socket.emit("userOnline", { userId: user?.id });
    socket.emit("discussionList", { userId: user?.id });

    if (navigator.onLine) {
      socket.emit("userOnline", { userId: user?.id });
    } else {
      socket.emit("userOffline", { userId: user?.id });
    }
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

  window.addEventListener("online", () => {
    socket.emit("userOnline", { userId: user?.id });
  });
  window.addEventListener("offline", () => {
    socket.emit("userOffline", { userId: user?.id });
  });

  return (
    <main className="min-h-screen overflow-y-hidden w-screen dark:bg-[#171B1D] dark:text-white">
      <div className="lg:grid block xl:grid-cols-[450px_1fr]  lg:grid-cols-[400px_1fr] sm:grid-cols-[350px_1fr]   h-screen border border-gray-700 overflow-hidden">
        <Sidebar />
        <div className="">
          <ChatSection />
        </div>
      </div>
    </main>
  );
}
