"use client";

import {
  ResizableHandle,
  ResizablePanel,
  ResizablePanelGroup,
} from "@/components/ui/resizable";

import { UserCard } from "../../user/userCard";
import { Navigation } from "./navigations";
import { SearchBox } from "./searchBox";
import { OnlineUsers } from "@/components/user/OnlineUser";
import { UserChatList } from "@/components/chat/userChatsList";

export default function Sidebar() {
  return (
    <>
      <ResizablePanelGroup direction="horizontal" className="border-gray-400">
        <ResizablePanel minSize={17} defaultSize={20}>
          <div className="flex items-center justify-center py-6 px-3">
            <Navigation />
          </div>
        </ResizablePanel>
        <ResizableHandle />
        <ResizablePanel defaultSize={80}>
          <ResizablePanelGroup direction="vertical">
            <ResizablePanel minSize={3} defaultSize={10} maxSize={10}>
              <div className="flex h-full items-center justify-center p-6">
                <UserCard />
              </div>
            </ResizablePanel>
            <ResizableHandle />
            <ResizablePanel defaultSize={90}>
              <div className="flex flex-col items-center justify-start gap-8 h-full p-6 pt-5">
                <SearchBox />
                <OnlineUsers />
                <UserChatList />
              </div>
            </ResizablePanel>
          </ResizablePanelGroup>
        </ResizablePanel>
      </ResizablePanelGroup>
    </>
  );
}
