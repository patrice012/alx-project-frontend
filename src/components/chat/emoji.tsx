import data from "@emoji-mart/data";
import Picker from "@emoji-mart/react";
import { Button } from "@/components/ui/button";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";

import { HiOutlineEmojiHappy } from "react-icons/hi";

export function EmojisPicker({ AddEmoji }: { AddEmoji: (emoji: any) => void }) {
  return (
    <Popover>
      <PopoverTrigger asChild>
        <Button variant="circle" size="icon" className="w-[46px] h-[46px]">
          <HiOutlineEmojiHappy className="h-[1.3rem] w-[1.3rem] transition-all" />
        </Button>
      </PopoverTrigger>
      <PopoverContent className="w-80">
        <div className="absolute bottom-0 left-0">
          <Picker
            data={data}
            onEmojiSelect={(emoji: any) => {
              AddEmoji(emoji.native);
            }}
            previewPosition={"none"}
          />
        </div>
      </PopoverContent>
    </Popover>
  );
}
