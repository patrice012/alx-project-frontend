import { UserCard } from "../../user/userCard";
import { Navigation } from "./navigations";
import { SearchBox } from "./searchBox";
import { OnlineUsers } from "@/components/user/OnlineUser";
import { UserChatList } from "@/components/chat/userChatsList";

export default function Sidebar() {
  return (
    <>
      <div
        id="sidebar"
        className="grid xl:grid-cols-[80px_1fr] lg:relative lg:grid  fixed lg:h-auto h-screen lg:z-0 z-40 lg:dark:bg-inherit dark:bg-[#171B1D] lg:bg-inherit dark:text-white lg:dark:text-inherit border-r lg:border-none border-slate-200  dark:border-slate-800"
      >
        <div className="xl:flex hidden items-center justify-center py-6 px-3 border border-slate-200  dark:border-slate-800">
          <Navigation />
        </div>
        <div className="grid grid-rows-[75px_1fr]">
          <div className="flex h-full items-center justify-center p-6 border border-slate-200  dark:border-slate-800">
            <UserCard />
          </div>
          <div className="flex flex-col items-center justify-start gap-8 h-full p-6 pt-5">
            <SearchBox />
            <OnlineUsers />
            <UserChatList />
          </div>
        </div>
      </div>
    </>
  );
}
