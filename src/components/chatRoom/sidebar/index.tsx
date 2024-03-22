"use client";

import {
  ResizableHandle,
  ResizablePanel,
  ResizablePanelGroup,
} from "@/components/ui/resizable";

import { UserCard } from "./userCard";
import { Navigation } from "./navigations";

export default function Sidebar() {
  return (
    <>
      <ResizablePanelGroup direction="horizontal" className="">
        <ResizablePanel minSize={17} defaultSize={20}>
          <div className="flex items-center justify-center py-6 px-3">
            <Navigation />
          </div>
        </ResizablePanel>
        <ResizableHandle />
        <ResizablePanel defaultSize={80}>
          <ResizablePanelGroup direction="vertical">
            <ResizablePanel defaultSize={10}>
              <div className="flex h-full items-center justify-center p-6">
                <UserCard />
              </div>
            </ResizablePanel>
            <ResizableHandle />
            <ResizablePanel defaultSize={90}>
              <div className="flex h-full items-center justify-center p-6">
                <span className="font-semibold">Three</span>
              </div>
            </ResizablePanel>
          </ResizablePanelGroup>
        </ResizablePanel>
      </ResizablePanelGroup>
    </>
  );
}
