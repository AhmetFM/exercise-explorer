"use client";
import { createContext, useState } from "react";

type AdminContextType = {
  user: {
    username: string;
    password: string;
    isAdmin: boolean;
  } | null;
  setUser: React.Dispatch<React.SetStateAction<any>>;
};

const initialValue: AdminContextType = {
  user: {
    username: "",
    password: "",
    isAdmin: false,
  },
  setUser: () => {},
};

export const AdminContext = createContext(initialValue);

const AdminProvider = ({ children }: { children: React.ReactNode }) => {
  const [user, setUser] = useState(null);

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
