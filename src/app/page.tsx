import Sidebar from "@/components/chatRoom/sidebar";
import { ChatSection } from "@/components/chatRoom/main";

export default function Home() {
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
