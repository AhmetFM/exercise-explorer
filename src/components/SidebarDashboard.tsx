"use client";
import { cn } from "@/lib/utils";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React from "react";
import { buttonVariants } from "./ui/button";
import { Separator } from "./ui/separator";

interface SidebarDashboardProps extends React.HTMLAttributes<HTMLElement> {
  items: {
    title: string;
    icon: string;
    href: string;
  }[];
}

const SidebarDashboard = ({ items }: SidebarDashboardProps) => {
  const pathname = usePathname();

  return (
    <nav className="flex flex-col lg:space-x lg:space-y-2">
      {items.map((item) => (
        <Link
          href={item.href}
          key={item.href}
          className={cn(
            buttonVariants({ variant: "ghost" }),
            pathname === item.href
              ? "bg-zinc-700 hover:bg-zinc-700"
              : "hover:bg-transparent",
            "justify-start text-wrap w-full"
          )}
        >
          {item.title}
        </Link>
      ))}
      <div className="flex mx-4 lg:hidden">
        <Separator className="mt-8" />
      </div>
    </nav>
  );
};

export default SidebarDashboard;
