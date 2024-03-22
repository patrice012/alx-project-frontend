import { UserAvatar } from "@/components/avatar";
import { Button } from "@/components/ui/button";
import { TbDotsVertical } from "react-icons/tb";

export function UserCard() {
  return (
    <>
      <div className="w-full grid grid-cols-[1fr_44px] items-center justify-between">
        <div className="flex items-center justify-start gap-4">
          <UserAvatar />
          <div className="flex flex-col items-start justify-center">
            <h3 className="text-[16px]">Name</h3>
            <p className="text-[13px] font-[300]  ">my account</p>
          </div>
        </div>

        <Button variant="circle" size="icon" className="w-[46px] h-[46px]">
          <TbDotsVertical className="h-[1.3rem] w-[1.3rem] transition-all" />
        </Button>
      </div>
    </>
  );
}
