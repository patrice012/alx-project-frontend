import { Button } from "../ui/button";

import { MdReply } from "react-icons/md";
import { GrEmoji } from "react-icons/gr";
import { TbDotsVertical } from "react-icons/tb";
import { PiShareFatLight } from "react-icons/pi";

export function ContactMessage() {
  return (
    <>
      <div className="w-full relative grid grid-cols-2 gap-5 items-start justify-start">
        <div className="space-y-3">
          <div className="bg-gray-700 p-3 rounded-[16px] rounded-tl-[0px]">
            <p>
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Dicta
              enim, aliquam corporis omnis odio voluptates mollitia soluta
              consequatur iure porro blanditiis eum!
            </p>
          </div>
          <div className="relative">
            <p className="text-[10px] text-nowrap absolute top-0 right-0">
              10:32
            </p>
          </div>
        </div>

        <div className="flex items-center gap-3">
          <Button variant="circle" size="icon" className="w-[30px] h-[30px]">
            <MdReply className="h-[.9rem] w-[.9rem] transition-all" />
          </Button>
          <Button variant="circle" size="icon" className="w-[30px] h-[30px]">
            <GrEmoji className="h-[.9rem] w-[.9rem] transition-all" />
          </Button>
          <Button variant="circle" size="icon" className="w-[30px] h-[30px]">
            <TbDotsVertical className="h-[.9rem] w-[.9rem] transition-all" />
          </Button>
        </div>
      </div>
    </>
  );
}

export function UserMessage() {
  return (
    <>
      <div className="w-full relative grid grid-cols-2 gap-5 items-start justify-start">
        <div className="flex items-center gap-3 justify-end">
          <Button variant="circle" size="icon" className="w-[30px] h-[30px]">
            <PiShareFatLight className="h-[.9rem] w-[.9rem] transition-all" />
          </Button>
          <Button variant="circle" size="icon" className="w-[30px] h-[30px]">
            <TbDotsVertical className="h-[.9rem] w-[.9rem] transition-all" />
          </Button>
        </div>
        <div className="space-y-3">
          <div className=" bg-teal-500 p-3 rounded-[16px] rounded-tr-[0px]">
            <p>
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Dicta
              enim, aliquam corporis omnis odio voluptates mollitia soluta
              consequatur iure porro blanditiis eum!
            </p>
          </div>
          <div className="relative">
            <p className="text-[10px] text-nowrap absolute top-0 left-0">
              10:32
            </p>
          </div>
        </div>
      </div>
    </>
  );
}

// export function ChatMessage() {
//   return (
//     <>
//       <div className="space-y-6">
//         <UserMessage />
//         <ContactMessage />
//       </div>
//     </>
//   );
// }
