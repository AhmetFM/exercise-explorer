"use client";
import { cn } from "@/lib/utils";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React from "react";
import { buttonVariants } from "../../ui/button";

export interface SidebarDashboardProps
  extends React.HTMLAttributes<HTMLElement> {
  items: {
    title: string;
    icon: string;
    href: string;
  }[];
}

const SidebarDashboard = ({ items }: SidebarDashboardProps) => {
  const pathname = usePathname();

  return (
    <nav className="flex flex-col lg:space-x-0 lg:space-y-2">
      <div className="hidden lg:flex flex-col">
        {items.map((item) => (
          <Link
            href={item.href}
            key={item.href}
            className={cn(
              buttonVariants({ variant: "ghost" }),
              pathname === item.href
                ? "bg-zinc-300 hover:bg-zinc-300 dark:bg-zinc-700 dark:hover:bg-zinc-700"
                : "hover:bg-zinc-100 dark:hover:bg-zinc-800",
              "justify-start text-wrap w-full "
            )}
          >
            {item.title}
          </Link>
        ))}
      </div>
      {/* <div className="flex flex-col mx-4 lg:hidden">
        <SidebarHamburgerMenu items={items} />
        <Separator className="mt-8" />
      </div> */}
    </nav>
  );
};

export default SidebarDashboard;
