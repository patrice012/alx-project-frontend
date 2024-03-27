"use client";

import { useState, createContext } from "react";

type User = {
  id: string;
  username: string;
  email: string;
  avatar: string;
  role: string;
};

// const savedCredentials = sessionStorage.getItem("user");

// const defaultUser: User = {
//   id: savedCredentials ? JSON.parse(savedCredentials).id : "",
//   username: savedCredentials ? JSON.parse(savedCredentials).username : "",
//   email: savedCredentials ? JSON.parse(savedCredentials).email : "",
//   avatar: savedCredentials ? JSON.parse(savedCredentials).avatar : "",
//   role: savedCredentials ? JSON.parse(savedCredentials).role : "sender",
// };

const defaultUser: User = {
  id: "",
  username: "",
  email: "",
  avatar: "",
  role: "sender",
};

export const UserContext = createContext<User>(defaultUser);

export const UserProvider = ({ children }: any) => {
  const [user, setUser] = useState<User>(defaultUser);

  return (
    <UserContext.Provider value={{ user, setUser }}>
      {children}
    </UserContext.Provider>
  );
};
