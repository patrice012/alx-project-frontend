"use client";

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
// import { loginProcess, registerProcess } from "@/app/actions";

export default function AuthPage() {
  const { setUser } = useProfile();

  const loginProcess = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    const rawFormData = {
      username: formData.get("loginUsername"),
      password: formData.get("loginPassword"),
    };

    try {
      const data = await postReq(rawFormData, "auth/login");
      // console.log(data);
    } catch (e) {
      console.error(e);
    }
  };

  const registerProcess = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    const rawFormData = {
      username: formData.get("username"),
      email: formData.get("email"),
      password: formData.get("password"),
    };

    try {
      const { user } = await postReq(rawFormData, "auth/register");
      const data = {
        id: user.id,
        username: user.username,
        email: user.email,
        avatar: user.avatar || "",
        role: user.role || "sender",
      };
      setUser(data);

      sessionStorage.setItem("user", JSON.stringify(data));
    } catch (e) {
      console.error(e);
    }
  };

  return (
    <section className="h-screen">
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
                  <SubmitBtn text="Register" />
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
                    <Input
                      id="loginUsername"
                      name="loginUsername"
                      type="text"
                    />
                  </div>
                  <div className="space-y-1">
                    <Label htmlFor="loginPassword">Password</Label>
                    <Input
                      id="loginPassword"
                      name="loginPassword"
                      type="password"
                    />
                  </div>
                </CardContent>
                <CardFooter>
                  <SubmitBtn text="Login" />
                </CardFooter>
              </form>
            </Card>
          </TabsContent>
        </Tabs>
      </div>
    </section>
  );
}
