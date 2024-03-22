import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

export function UserAvatar() {
  return (
    <Avatar>
      <AvatarImage src="/avatar.png" />
      <AvatarFallback>CN</AvatarFallback>
    </Avatar>
  );
}
