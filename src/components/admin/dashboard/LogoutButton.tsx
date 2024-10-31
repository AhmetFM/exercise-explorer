"use client";
import { deleteSession } from "@/lib/session";
import React from "react";

const LogoutButton = () => {
  const handleClick = async () => {
    await deleteSession();
  };
  return (
    <button
      className="border px-2 py-1 rounded-md hover:bg-zinc-300 dark:hover:bg-zinc-800 duration-300"
      onClick={handleClick}
    >
      Logout
    </button>
  );
};

export default LogoutButton;
