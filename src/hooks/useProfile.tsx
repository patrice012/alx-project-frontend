import { useContext } from "react";
import { UserContext } from "@/contexts/UserContext";

export const useProfile = () => {
  const { user } = useContext(UserContext);
  return user;
};