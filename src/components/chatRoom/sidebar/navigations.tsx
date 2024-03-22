import { ModeToggle } from "@/components/theme/toggleTheme";

import {
  UserChatBtn,
  ChatBtn,
  UserChat,
  CallChat,
  RecordChat,
  BookMark,
  Setting,
  AddAccount,
} from "./btns";

import { UserAvatar } from "@/components/avatar";

export function Navigation() {
  return (
    <>
      <div className="h-[92vh]">
        <div className="h-full flex flex-col justify-between">
          <div className="space-y-3">
            <ChatBtn />
          </div>
          <div className="space-y-3">
            <UserChatBtn />
            <UserChat />
            <CallChat />
            <RecordChat />
            <BookMark />
            <Setting />
          </div>
          <div className="space-y-3">
            <ModeToggle />
            <AddAccount />
            <UserAvatar />
          </div>
        </div>
      </div>
    </>
  );
}
