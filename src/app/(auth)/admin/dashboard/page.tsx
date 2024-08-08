"use client";
import { AdminContext } from "@/context/AdminContext";
import { redirect } from "next/navigation";
import React, { useContext, useEffect } from "react";

const DashboardPage = () => {
  const { user } = useContext(AdminContext);

  useEffect(() => {
    if (user === null) {
      redirect("/admin/login");
    }
  }, [user]);

  return <div>DashboardPage</div>;
};

export default DashboardPage;
