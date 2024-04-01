import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from "@/components/ui/alert-dialog";
import { Button } from "@/components/ui/button";
import getReq from "@/utils/getReq";
import { useProfile } from "@/hooks/useProfile";
import { IoLogOutOutline } from "react-icons/io5";


function deleteCookie(cookieName) {
  document.cookie = `${cookieName}=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;`;
}


export function AlertLogout() {
  const { user, setUser } = useProfile();

  const logoutProcess = async () => {
    try {
      const id = user?.id;
      const resp = await getReq(`/${id}/logout`);

      if (resp) {
        

        // Remove refreshToken cookie
        deleteCookie("refreshToken");

        // Remove accessToken cookie
        deleteCookie("accessToken");
        
        sessionStorage.clear();
        setUser({
          id: "",
          username: "",
          email: "",
          avatar: "",
          role: "sender",
        });
        window.location.href = "/auth";
      }
    } catch (e) {
      console.log(e);
    }
  };
  return (
    <AlertDialog>
      <AlertDialogTrigger asChild>
        <Button variant="circle" className="h-[45px] w-[45px] p-0">
          <IoLogOutOutline className="w-[20px] h-[20px]" />
        </Button>
      </AlertDialogTrigger>
      <AlertDialogContent className=" dark:text-[#fff]">
        <AlertDialogHeader>
          <AlertDialogTitle className="">
            Are you absolutely sure?
          </AlertDialogTitle>
          <AlertDialogDescription className="">
            Are you sure you want to log out? Logging out will end your current
            session.
          </AlertDialogDescription>
        </AlertDialogHeader>
        <AlertDialogFooter>
          <AlertDialogCancel className="">Cancel</AlertDialogCancel>
          <AlertDialogAction onClick={logoutProcess} className="">
            Continue
          </AlertDialogAction>
        </AlertDialogFooter>
      </AlertDialogContent>
    </AlertDialog>
  );
}
