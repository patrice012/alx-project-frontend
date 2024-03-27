import { useContext } from "react";
import { UserContext } from "@/contexts/UserContext";

export const useProfile = () => {
  return useContext(UserContext);
};