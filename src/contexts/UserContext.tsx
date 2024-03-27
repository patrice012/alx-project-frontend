import React, { useState, createContext } from "react";

type User = {
  id: string;
  username: string;
  email: string;
  avatar: string;
  role: string;
};

const id = sessionStorage.getItem("userId");

const defaultUser: User = {
  id: id ? JSON.parse(id) : "",
  username: "",
  email: "",
  avatar: "",
  role: "sender",
};

export const UserContext = createContext<{
  user: User;
  setUser: React.Dispatch<React.SetStateAction<User>>;
}>({
  user: defaultUser,
  setUser: () => {},
});

export const UserProvider: React.FC = ({ children }) => {
  const [user, setUser] = useState<User>(defaultUser);

  return (
    <UserContext.Provider value={{ user, setUser }}>
      {children}
    </UserContext.Provider>
  );
};
