import LogoutButton from "@/components/LogoutButton";
import SidebarDashboard from "@/components/SidebarDashboard";
import { Separator } from "@/components/ui/separator";
import { Metadata } from "next";

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
          <h2 className="text-2xl font-bold tracking-tight">Dashboard</h2>
          <p className="text-gray-400">Welcome to your dashboard</p>
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
