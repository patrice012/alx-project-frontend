import { GoChevronRight } from "react-icons/go";
import { UserAvatar } from "@/components/avatar";

export function OnlineUsers() {
  return (
    <>
      <div className="space-y-5 w-full h-auto max-w-[315px]">
        <div className="flex items-center justify-between text-[16px]">
          <h3>Online now</h3>
          <button className="flex items-center justify-between text-[13px] font-[300] ">
            <span>more</span>{" "}
            <GoChevronRight className="hover:fill-teal-500 ml-1" />
          </button>
        </div>
        <div className="overflow-x-scroll overflow-y-hidden scrollbar scrollbar-thumb-[#313235] scrollbar-w-full scrollbar-h-1 scrollbar-thumb-rounded-full">
          <div className="flex items-center gap-4 mb-2">
            <UserAvatar />
            <UserAvatar />
            <UserAvatar />
            <UserAvatar />
            <UserAvatar />
            <UserAvatar />
          </div>
        </div>
      </div>
    </>
  );
}
