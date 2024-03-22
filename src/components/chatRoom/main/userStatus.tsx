import { UserAvatar } from "@/components/avatar";

export function UserStatus() {
  return (
    <>
      <div className="flex items-center justify-start gap-4">
        <UserAvatar online={true} />
        <div className="flex flex-col items-start justify-center truncate max-w-[225px]">
          <h3 className="text-[16px] truncate w-full">Name</h3>
          <p className="text-[13px] font-[300] truncate text-teal-500">
            Typing...
          </p>
        </div>
      </div>
    </>
  );
}
