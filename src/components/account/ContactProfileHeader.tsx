import { TooltipBtn } from "../btn/tooltipBtn";
import { IoClose } from "react-icons/io5";

export function ContactProfileHeader() {
  return (
    <>
      <div className="flex items-center justify-between px-5">
        <p>Contact detail</p>

        <TooltipBtn
          tooltiptext={"close"}
          variant="circle"
          size="icon"
          className="w-[46px] h-[46px]"
        >
          <IoClose className="h-[1.3rem] w-[1.3rem] transition-all" />
        </TooltipBtn>
      </div>
    </>
  );
}
