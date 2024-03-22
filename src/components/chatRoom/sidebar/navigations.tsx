import { ModeToggle } from "@/components/theme/toggleTheme";

import {
  UserChatBtn,
  ChatBtn,
  UserChat,
  CallBtn,
  RecordBtn,
  BookMark,
  Settings,
  AddAccount,
} from "./btns";

import { UserAvatar } from "@/components/avatar";

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
            <UserAvatar />
          </div>
        </div>
      </div>
    </>
  );
}
