import { UserAvatar } from "@/components/avatar";
import { Button } from "@/components/ui/button";
import { TbDotsVertical } from "react-icons/tb";
import { useProfile } from "@/hooks/useProfile";
import { IoClose } from "react-icons/io5";
import { UserCardPreviewLoader } from "../skeleton/userCardSkeleton";

export function UserCard() {
  const { user } = useProfile();
  
  return (
    <>
      <div className="w-full grid lg:grid-cols-[1fr_44px] grid-cols-[1fr_100px] items-center justify-between">
        {!user ? (
          <UserCardPreviewLoader />
        ) : (
          <div className="flex items-center justify-start gap-4">
            <UserAvatar />
            <div className="flex flex-col items-start justify-center truncate max-w-[225px]">
              <h3 className="text-[16px] truncate w-full">{user?.username}</h3>
              <p className="text-[13px] font-[300] truncate">my account</p>
            </div>
          </div>
        )}

        <div className="flex items-center justify-center gap-3">
          <Button variant="circle" size="icon" className="w-[46px] h-[46px]">
            <TbDotsVertical className="h-[1.3rem] w-[1.3rem] transition-all" />
          </Button>
          <Button
            onClick={() => {
              document.getElementById("sidebar")?.classList.toggle("hidden");
            }}
            variant="circle"
            size="icon"
            className="w-[46px] h-[46px] lg:hidden"
          >
            <IoClose className="h-[1.3rem] w-[1.3rem] transition-all" />
          </Button>
        </div>
      </div>
    </>
  );
}
