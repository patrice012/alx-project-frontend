import { ModeToggle } from "@/components/theme/mode-toggle";

import {
  UserChatBtn,
  ChatBtn,
  UserChat,
  CallBtn,
  RecordBtn,
  BookMark,
  Settings,
  // AddAccount,
} from "./btns";

import { AlertLogout } from "@/components/user/userLogout";
import { AddAccount } from "@/components/chat/startDiscussion";

import { UserAvatar } from "@/components/avatar";
import { Avatar } from "@/components/ui/avatar";

export function Navigation() {
  return (
    <>
      <div className="h-[92vh]">
        <div className="h-full flex flex-col items-center justify-between">
          <div className="space-y-3">
            <ChatBtn />
          </div>
          <div className="space-y-3 flex flex-col items-center">
            <UserChatBtn />
            <UserChat />
            <CallBtn />
            <RecordBtn />
            <BookMark />
            <Settings />
          </div>
          <div className="space-y-3 flex flex-col items-center">
            <ModeToggle />
            <AddAccount />
            <AlertLogout />
          </div>
        </div>
      </div>
    </>
  );
}
