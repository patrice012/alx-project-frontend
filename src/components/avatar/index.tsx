import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { BadgeIndicator } from "./indicator";

export function UserAvatar({ online = false }) {
  return (
    <Avatar>
      {online ? <BadgeIndicator /> : null}
      <AvatarImage src="/avatar.png" />
      <AvatarFallback>CN</AvatarFallback>
    </Avatar>
  );
}
