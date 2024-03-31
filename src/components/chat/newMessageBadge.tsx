import { HiOutlineDotsHorizontal } from "react-icons/hi";
import { formatDate } from "@/utils/formatDate";

export function NewMessageBadge({ data }: { data: string }) {
  const displayDate = formatDate(data);
  return (
    <>
      <div className="flex flex-col items-center gap-1 truncate">
        <p className="text-[10px] text-nowrap truncate">{displayDate}</p>
        <span className="text-[10px] text-nowrap flex items-center justify-center w-[1.2rem] h-[1.2rem]  bg-teal-500 rounded-full">
          55
        </span>
      </div>
    </>
  );
}

export function MessageStatus({ data }: { data: string }) {
  const displayDate = formatDate(data);
  return (
    <div className="flex items-center justify-center gap-1 ">
      <HiOutlineDotsHorizontal className="w-5 h-5 text-gray-50" />
      <p className="text-[10px] text-nowrap">{displayDate}</p>
    </div>
  );
}
