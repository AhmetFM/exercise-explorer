"use client";
import { createContext, useState } from "react";

type AdminContextType = {
  user: {
    username: string;
    isAdmin: boolean;
  } | null;
  setUser: React.Dispatch<React.SetStateAction<any>>;
};

const initialValue: AdminContextType = {
  user: {
    username: "",
    isAdmin: false,
  },
  setUser: () => {},
};

export const AdminContext = createContext(initialValue);

const AdminProvider = ({ children }: { children: React.ReactNode }) => {
  const [user, setUser] = useState(initialValue.user);

  return (
    <AdminContext.Provider
      value={{
        user,
        setUser,
      }}
    >
      {children}
    </AdminContext.Provider>
  );
};

export default AdminProvider;
