import LogoutButton from "@/components/admin/dashboard/LogoutButton";
import SidebarDashboard from "@/components/admin/dashboard/SidebarDashboard";
import SidebarHamburgerMenu from "@/components/admin/dashboard/SidebarHamburgerMenu";
import { Separator } from "@/components/ui/separator";
import { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Dashboard",
  description: "Dashboard page for gym app",
  // other metadata
};

const sidebarNavItems = [
  {
    title: "Create a new Workout Plan",
    icon: "create-plan",
    href: "/admin/dashboard/create-plan",
  },
  {
    title: "Create a new Workout",
    icon: "create-workout",
    href: "/admin/dashboard/create-workout",
  },
  {
    title: "Create a Program for Workout",
    icon: "create-program",
    href: "/admin/dashboard/create-program",
  },
  {
    title: "Delete a Workout Program",
    icon: "delete-program",
    href: "/admin/dashboard/delete-program",
  },
  {
    title: "Update Content",
    icon: "update-content",
    href: "/admin/dashboard/update-content",
  },
];

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="space-y-6 p-10 pb-16">
      <div className="space-y-0.5 flex items-center justify-between">
        <div>
          <Link
            className="text-2xl font-bold tracking-tight"
            href="/admin/dashboard"
          >
            Dashboard
          </Link>
          <p className="text-gray-400 mb-2">Welcome to your dashboard</p>
          <SidebarHamburgerMenu items={sidebarNavItems} />
        </div>
        <LogoutButton />
      </div>
      <Separator className="my-6" />
      <div className="flex flex-col space-y-8 lg:flex-row lg:space-x-12 lg:space-y-0">
        <aside className="-mx-4 lg:w-1/4">
          <SidebarDashboard items={sidebarNavItems} />
        </aside>
        <div className="flex-1 lg:max-w-2xl">{children}</div>
      </div>
    </div>
  );
}
