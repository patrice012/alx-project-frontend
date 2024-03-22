import { UserStatus } from "./userStatus";
import { ChatActions } from "../../chat/chatAction";

export function ChatHeader() {
  return (
    <>
      <div className="flex items-center justify-between px-6 border-b border-slate-200  dark:border-slate-800">
        <UserStatus />
        <ChatActions />
      </div>
    </>
  );
}
