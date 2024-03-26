import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { BadgeIndicator } from "./indicator";
import { socket } from "@/utils/socket";

import { useState } from "react";

export function UserAvatar() {
  const [isOnline, setIsOnline] = useState(false);
  socket.on("userOnline", (data) => {
    setIsOnline(data.isOnline);
  });
  
  return (
    <Avatar>
      {isOnline ? <BadgeIndicator /> : null}
      <AvatarImage src="/avatar.png" />
      <AvatarFallback>CN</AvatarFallback>
    </Avatar>
  );
}
