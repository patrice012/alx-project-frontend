"use client";

import { useState, createContext } from "react";

type User = {
  id: string;
  username: string;
  email: string;
  avatar: string;
  role: string;
};

const defaultUser: User = {
  id: "",
  username: "",
  email: "",
  avatar: "",
  role: "",
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
