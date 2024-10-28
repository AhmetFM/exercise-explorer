"use client";
import LoadingWorkouts from "@/components/LoadingWorkouts";
import { usePathname } from "next/navigation";
import React, { Suspense, use } from "react";

const WorkoutsLayout = ({ children }: { children: React.ReactNode }) => {
  const pathname = usePathname();

  if (pathname !== "/workouts") {
    return <>{children}</>;
  }

  return <Suspense fallback={<LoadingWorkouts />}>{children}</Suspense>;
};

export default WorkoutsLayout;
