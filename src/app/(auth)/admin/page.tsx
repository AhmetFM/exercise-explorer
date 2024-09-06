import prisma from "@/lib/db";
import Link from "next/link";
import React from "react";

const AdminPage = () => {
  return (
    <div className="w-full min-h-[70vh] flex items-center justify-center flex-col gap-4">
      <Link
        className="px-4 py-3 border-2 border-black dark:border-white rounded-lg min-w-56 text-center hover:bg-zinc-400 dark:hover:bg-zinc-700 duration-300"
        href="/admin/login"
      >
        Go To Login Page
      </Link>
      <Link
        className="px-4 py-3 border-2 dark:border-white border-black rounded-lg min-w-56 text-center hover:bg-zinc-400 dark:hover:bg-zinc-700 duration-300 "
        href="/admin/dashboard"
      >
        Go To Dashboard Page
      </Link>
    </div>
  );
};

export default AdminPage;
