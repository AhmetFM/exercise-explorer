"use client";

import Link from "next/link";
import React, { useState } from "react";

const HamburgerMenu = () => {
  const [isOpen, setIsOpen] = useState<boolean>(false);

  return (
    <div>
      <div
        className="flex flex-col gap-[4.5px] cursor-pointer"
        onClick={() => setIsOpen((prev) => !prev)}
      >
        <div
          className={`w-6 h-1 bg-zinc-950 dark:bg-white rounded-sm ${
            isOpen ? "rotate-45 " : ""
          } origin-left ease-in-out duration-500 `}
        />
        <div
          className={`w-6 h-1 bg-zinc-950 dark:bg-white rounded-sm ${
            isOpen ? "opacity-0" : ""
          } ease-in-out duration-500`}
        />
        <div
          className={`w-6 h-1 bg-zinc-950 rounded-sm dark:bg-white ${
            isOpen ? "-rotate-45 " : ""
          } origin-left ease-in-out duration-500`}
        />
      </div>

      {isOpen && (
        <div className="absolute dark:bg-zinc-900 bg-zinc-100 left-0 top-24 flex flex-col items-center justify-center w-full h-[calc(100vh-96px)] gap-8 font-medium z-30 text-2xl">
          <Link href="/about">About</Link>
          <Link href="/about">Services</Link>
          <Link href="/about">Workout Plans</Link>
          <Link href="/about">Contact</Link>
          <Link href="/about">Login</Link>
        </div>
      )}
    </div>
  );
};

export default HamburgerMenu;
