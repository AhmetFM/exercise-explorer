"use client";
import StepNavigation from "@/components/StepNavigation";
import WorkoutProvider from "@/context/createWorkoutContext";
import React from "react";

const StepsLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="flex flex-col lg:flex-row min-h-[70vh]">
      <StepNavigation />
      <WorkoutProvider>{children}</WorkoutProvider>
    </div>
  );
};

export default StepsLayout;
