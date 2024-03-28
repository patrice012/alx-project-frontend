import { useState } from "react";
import { UserAvatar } from "@/components/avatar";
import { socket } from "@/utils/socket";

export function UserStatus() {
  const [typingUser, setTypingUser] = useState("");
  const [contactDetail, setContactDetail] = useState({} as any);

  socket.on("typing", (data) => {
    setTypingUser(data.message);
  });

  socket.on("loadContactDetail", (data) => {
    console.log(data, "data")
    setContactDetail(data.contactDetail);
  });

  return (
    <>
      <div className="flex items-center justify-start gap-4">
        <UserAvatar />
        <div className="flex flex-col items-sfrowmwmtart justify-center truncate max-w-[225px]">
          <h3 className="text-[16px] truncate w-full">
            {contactDetail?.username || contactDetail?.email}
          </h3>

          <p
            id="typingUser"
            className="h-[1.2rem]  text-[13px] font-[300] truncate text-teal-500"
          >
            {typingUser}
          </p>
        </div>
      </div>
    </>
  );
}
