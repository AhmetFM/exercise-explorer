"use client";
import { deleteSession } from "@/lib/session";
import React from "react";

const DashboardPage = () => {
  // useEffect(() => {
  //   if (user === null) {
  //     redirect("/admin/login");
  //   }
  // }, [user]);
  const handleClick = async () => {
    await deleteSession();
  };

  return (
    <div>
      DashboardPage
      <button
        className="bg-zinc-800 px-3 py-2 border rounded-md"
        onClick={handleClick}
      >
        Log out
      </button>
    </div>
  );
};

export default DashboardPage;
