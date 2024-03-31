import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

import SubmitBtn from "@/components/btn/submitBtn";
import postReq from "@/utils/postReq";
import { useProfile } from "@/hooks/useProfile";
import { notificationAlert } from "@/utils/notif";

import { useState } from "react";

export default function AuthPage() {
  const { setUser } = useProfile();
  const [isSubmitting, setIsSubmitting] = useState(false);

  const loginProcess = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);
    const formData = new FormData(e.currentTarget);
    const rawFormData = {
      username: formData.get("username"),
      password: formData.get("password"),
    };

    try {
      const { accessToken, refreshToken, user } = await postReq(
        rawFormData,
        "auth/login"
      );

      sessionStorage.setItem("token", JSON.stringify(accessToken));
      sessionStorage.setItem("id", JSON.stringify(user.id));
      sessionStorage.setItem("user", JSON.stringify(user));

      notificationAlert().then((toast) => {
        toast("Login successful", {
          description: "Welcome back!",
          action: {
            label: "Go to home",
            onClick: () => (window.location.href = "/"),
          },
        });
      });
      setTimeout(() => {
        window.location.href = "/";
      }, 500);
    } catch (e) {
      console.error(e);
    } finally {
      setIsSubmitting(false);
    }
  };

  const registerProcess = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);
    const formData = new FormData(e.currentTarget);
    const rawFormData = {
      username: formData.get("username"),
      email: formData.get("email"),
      password: formData.get("password"),
    };

    try {
      const { user, accessToken } = await postReq(rawFormData, "auth/register");
      const data = {
        id: user.id,
        username: user.username,
        email: user.email,
        avatar: user.avatar || "",
        role: user.role || "sender",
      };
      setUser(data);

      sessionStorage.setItem("token", JSON.stringify(accessToken));
      sessionStorage.setItem("user", JSON.stringify(user));
      sessionStorage.setItem("id", JSON.stringify(user.id));

      notificationAlert().then((toast) => {
        toast("Registration successful", {
          description: "Welcome to our platform!",
        });
      });
      setTimeout(() => {
        window.location.href = "/";
      }, 500);
    } catch (e) {
      console.error(e);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section className="h-screen dark:bg-[#171B1D] dark:text-white">
      <div className="mx-auto flex items-center justify-center h-full">
        <Tabs defaultValue="login" className="w-[400px]">
          <TabsList className="grid w-full grid-cols-2">
            <TabsTrigger value="register">Register</TabsTrigger>
            <TabsTrigger value="login">Login</TabsTrigger>
          </TabsList>
          <TabsContent value="register">
            <Card>
              <CardHeader>
                <CardTitle>Register</CardTitle>
                <CardDescription>
                  You don't have an account yet. Please sign up to enjoy our
                  services.
                </CardDescription>
              </CardHeader>
              <form onSubmit={registerProcess}>
                <CardContent className="space-y-2">
                  <div className="space-y-1">
                    <Label htmlFor="username">Username</Label>
                    <Input id="username" name="username" defaultValue="" />
                  </div>
                  <div className="space-y-1">
                    <Label htmlFor="email">Email</Label>
                    <Input
                      type="email"
                      name="email"
                      id="email"
                      defaultValue=""
                    />
                  </div>
                  <div className="space-y-1">
                    <Label htmlFor="password">Password</Label>
                    <Input id="password" name="password" type="password" />
                  </div>
                </CardContent>
                <CardFooter>
                  <SubmitBtn
                    text={isSubmitting ? "Processing..." : "Register"}
                  />
                </CardFooter>
              </form>
            </Card>
          </TabsContent>
          <TabsContent value="login">
            <Card>
              <CardHeader>
                <CardTitle>Login</CardTitle>
                <CardDescription>
                  If you already have an account, please log in to continue.
                </CardDescription>
              </CardHeader>
              <form onSubmit={loginProcess}>
                <CardContent className="space-y-2">
                  <div className="space-y-1">
                    <Label htmlFor="loginUsername">Username</Label>
                    <Input id="loginUsername" name="username" type="text" />
                  </div>
                  <div className="space-y-1">
                    <Label htmlFor="loginPassword">Password</Label>
                    <Input id="loginPassword" name="password" type="password" />
                  </div>
                </CardContent>
                <CardFooter>
                  <SubmitBtn text={isSubmitting ? "Processing..." : "Login"} />
                </CardFooter>
              </form>
            </Card>
          </TabsContent>
        </Tabs>
      </div>
    </section>
  );
}
