import { HiOutlineDotsHorizontal } from "react-icons/hi";
import { formatDate } from "@/utils/formatDate";
import { socket } from "@/utils/socket";
import { useState } from "react";
import { useProfile } from "@/hooks/useProfile";

export function NewMessageBadge({
  data,
  discId,
}: {
  data: string;
  discId: string;
}) {
  const displayDate = formatDate(data);
  // const [msgCount, setMsgCount] = useState(0);
  // const { user } = useProfile();

  // socket.emit("unReadMessage", { discussionId: discId, userId: user?.id });
  // // useEffect(() => {

  // // });

  // socket.on("unReadMessage", (data) => {
  //   console.log("unReadMessage receive");
  //   const { unReadMessage } = data;
  //   if (unReadMessage) {
  //     setMsgCount(+unReadMessage);
  //   }
  // });

  return (
    <>
      <div className="flex flex-col items-center gap-1 truncate">
        <p className="text-[10px] text-nowrap truncate">{displayDate}</p>
        <span className="text-[10px] text-nowrap flex items-center justify-center w-[1.2rem] h-[1.2rem]  bg-teal-500 rounded-full">
          {0}
        </span>
      </div>
    </>
  );
}

export function MessageStatus({
  data,
  isTyping,
}: {
  data: string;
  isTyping: boolean;
}) {
  const displayDate = formatDate(data);
  return (
    <div className="flex items-center justify-center gap-1 ">
      <HiOutlineDotsHorizontal
        className={
          `w-5 h-5 ` + " " + isTyping ? "text-teal-500" : "text-gray-50"
        }
      />
      <p className="text-[10px] text-nowrap">{displayDate}</p>
    </div>
  );
}
