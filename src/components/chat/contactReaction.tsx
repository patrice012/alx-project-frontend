import data from "@emoji-mart/data";
import Picker from "@emoji-mart/react";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";

export function EmojisPickerReactions({
  AddEmoji,
  open,
  setOpen,
}: {
  AddEmoji: (emoji: string) => void;
  open: boolean;
  setOpen: (open: boolean) => void;
}) {
  return (
    <>
      {open ? (
        <Popover open={open} onOpenChange={setOpen}>
          <PopoverTrigger asChild>
            <span className="h-0 w-0 absolute"></span>
          </PopoverTrigger>
          <PopoverContent className="w-fit h-fit p-0 bg-[#171B1D] border-slate-800 dark:text-white text-black">
            <div className="">
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
      ) : null}
    </>
  );
}
