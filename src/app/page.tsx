import Image from "next/image";
import { Button } from "@/components/ui/button";
import {
  ResizableHandle,
  ResizablePanel,
  ResizablePanelGroupFullHeight,
} from "@/components/ui/resizable";

import Sidebar from "@/components/chatRoom/sidebar";

export default function Home() {
  return (
    <main className="min-h-screen w-screen">
      <ResizablePanelGroupFullHeight
        direction="horizontal"
        className="h-screen border border-gray-800 overflow-hidden"
      >
        <ResizablePanel
          id="sidebar"
          order={1}
          minSize={10}
          defaultSize={25}
          maxSize={30}
          className="overflow-hidden"
        >
          <Sidebar />
        </ResizablePanel>
        <ResizableHandle withHandle />
        <ResizablePanel
          id="chat"
          order={2}
          defaultSize={75}
          className="overflow-hidden"
        >
          <div className="flex items-center justify-center p-6">
            <span className="font-semibold">Content</span>
          </div>
        </ResizablePanel>
      </ResizablePanelGroupFullHeight>
    </main>
  );
}
