"use client";
import React, { useEffect, useState } from "react";
import { RiMenuUnfold3Line } from "react-icons/ri";
import { SidebarDashboardProps } from "./SidebarDashboard";
import { usePathname } from "next/navigation";

const SidebarHamburgerMenu = ({ items }: SidebarDashboardProps) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const pathname = usePathname();

  //When click outside the sidebar, close the sidebar
  useEffect(() => {
    const handleOutsideClick = (event: MouseEvent) => {
      const target = event.target as HTMLElement;
      if (!target.closest(".absolute")) {
        setIsMenuOpen(false);
      }
    };

    if (isMenuOpen) {
      document.addEventListener("click", handleOutsideClick);
    }

    return () => {
      document.removeEventListener("click", handleOutsideClick);
    };
  }, [isMenuOpen]);

  return (
    <div className="block lg:hidden">
      {isMenuOpen ? (
        <div className="absolute top-0 left-0 h-screen backdrop-blur-xl bg-zinc-300/25 dark:bg-zinc-900/25 w-1/2 z-20 pt-20 duration-500 ease-linear transition-all overflow-y-auto flex flex-col gap-2 rounded-md">
          {items.map((item) => (
            <a
              href={item.href}
              key={item.href}
              className={`${
                pathname === item.href
                  ? "bg-zinc-300 hover:bg-zinc-300 dark:bg-zinc-700 dark:hover:bg-zinc-700"
                  : "hover:bg-zinc-100 dark:hover:bg-zinc-800"
              } block opacity-100 p-4 text-black dark:text-white text-sm border-b mx-3 rounded-t-md border-black dark:border-white/25 `}
            >
              {item.title}
            </a>
          ))}
        </div>
      ) : (
        <div className="absolute top-0 -left-full h-screen w-1/2 z-20 pt-20 duration-500 ease-linear transition-all">
          {items.map((item) => (
            <a
              href={item.href}
              key={item.href}
              className="opacity-0 block p-4 text-black dark:text-white text-sm border-b border-white/25 hover:bg-zinc-800"
            >
              {item.title}
            </a>
          ))}
        </div>
      )}
      <button
        onClick={() => setIsMenuOpen((prev) => !prev)}
        title="Sections"
        className="border-l rounded-r-md p-2 border-zinc-900 dark:border-white flex items-center justify-center gap-2 hover:bg-zinc-200 dark:hover:bg-zinc-700 text-sm"
      >
        <RiMenuUnfold3Line size={20} />
      </button>
    </div>
  );
};

export default SidebarHamburgerMenu;
