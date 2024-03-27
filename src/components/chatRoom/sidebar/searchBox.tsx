import { Input } from "@/components/ui/input";
import { IoIosSearch } from "react-icons/io";

export function SearchBox() {
  return (
    <div className="flex w-full max-w-sm items-center relative">
      <IoIosSearch className="absolute left-[18px] top-[13px]" />
      <Input
        type="text"
        placeholder="Search or start new chat..."
        className="mx-0  w-full pl-11 py-5 dark:bg-[#202426] border rounded-[20px] "
      />
    </div>
  );
}
