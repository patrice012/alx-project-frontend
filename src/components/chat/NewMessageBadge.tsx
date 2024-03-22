import { HiOutlineDotsHorizontal } from "react-icons/hi";

export function NewMessageBadge() {
  return (
    <>
      <div className="flex flex-col items-center gap-1">
        <p className="text-[10px] text-nowrap">10:32 AM</p>
        <span className="text-[10px] text-nowrap flex items-center justify-center w-[1.2rem] h-[1.2rem]  bg-teal-500 rounded-full">
          55
        </span>
      </div>
    </>
  );
}

export function MessageStatus() {
  return (
    <div className="flex items-center justify-center gap-1 mr-5">
      <HiOutlineDotsHorizontal className="w-5 h-5 text-gray-50" />
      <p className="text-[10px] text-nowrap">10:32 AM</p>
    </div>
  );
}
