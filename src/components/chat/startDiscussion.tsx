import { Button } from "@/components/ui/button";
import { TooltipBtn } from "../btn/tooltipBtn";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

import { GoPlus } from "react-icons/go";
import { useState } from "react";
import { socket } from "@/utils/socket";
import { useProfile } from "@/hooks/useProfile";
import { notificationAlert } from "@/utils/notif";

export function AddAccount() {
  const { user } = useProfile();
  const [open, setOpen] = useState(false);

  const findingProcess = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    const rawFormData = {
      username: formData.get("username"),
      email: formData.get("email"),
      senderId: user.id,
    };

    try {
      socket.emit("findUserAndStartDiscussion", { data: rawFormData });
      socket.on("startNewDiscussion", (data) => {
        setOpen(false);
        const { newDiscussion, message, error } = data;
        if (!error) {
          notificationAlert().then((toast) => {
            toast(`${message || "New discussion created"}`, {
              description: `Start chatting now! with ${
                newDiscussion?.receiver || "the new user"
              }.`,
              action: {
                label: "Mark as read",
                onClick: () => console.log("Read"),
              },
            });
          });
        } else {
          notificationAlert().then((toast) => {
            toast(`${message || "Something went wrong!"}`, {
              description: `${error || "Please try again later"}`,
              action: {
                label: "Retry",
                onClick: () => setOpen(true),
              },
            });
          });
        }
      });
    } catch (e) {
      console.error(e);
    }
  };
  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger asChild>
        <TooltipBtn
          tooltiptext={"Start new chat"}
          variant="circle"
          size="icon"
          className="w-[46px] h-[46px]"
        >
          <GoPlus className="h-[1.3rem] w-[1.3rem] transition-all" />
        </TooltipBtn>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[425px] dark:text-white">
        <DialogHeader>
          <DialogTitle className="text-center">Find user</DialogTitle>
          <DialogDescription className="text-center max-w-[80%] mx-auto">
            Fill username or email to start communication
          </DialogDescription>
        </DialogHeader>
        <form onSubmit={findingProcess}>
          <div className="grid gap-4 py-4">
            <div className="grid grid-cols-4 items-center gap-4">
              <Label htmlFor="username" className="text-right">
                Username
              </Label>
              <Input
                id="username"
                name="username"
                type="text"
                className="col-span-3"
              />
            </div>
            <div className="grid grid-cols-4 items-center gap-4">
              <Label htmlFor="email" className="text-right">
                Email
              </Label>
              <Input id="email" name="email" className="col-span-3" />
            </div>
          </div>
          <DialogFooter className="mx-auto">
            <Button type="submit">Find</Button>
          </DialogFooter>
        </form>
      </DialogContent>
    </Dialog>
  );
}
