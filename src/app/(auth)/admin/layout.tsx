import AdminProvider from "@/context/AdminContext";
import React from "react";

const AdminLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div>
      <AdminProvider>{children}</AdminProvider>
    </div>
  );
};

export default AdminLayout;
