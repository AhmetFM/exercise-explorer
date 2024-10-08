"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React, { useState } from "react";

const steps = [
  {
    title: "Step One",
    route: "step-one",
    link: "/step-one",
  },
  {
    title: "Step Two",
    route: "step-two",
    link: "/step-two",
  },
  {
    title: "Step Three",
    route: "step-three",
    link: "/step-three",
  },
];

const StepNavigation = () => {
  const pathname = usePathname();
  const currentPath = pathname.replace("/", "");
  // const [currentStep, setCurrentStep] = useState(1);

  return (
    <div className="flex items-center">
      <div className="relative justify-between flex flex-row w-full mx-[20%] lg:mx-0 lg:flex-col lg:justify-start lg:gap-8">
        {steps.map((step, idx) => {
          return (
            <Link
              key={step.title}
              href={step.link}
              className="group z-20 flex items-center gap-3 text-2xl"
            >
              <span
                className={`flex h-10 w-10 items-center justify-center rounded-full border  text-sm  transition-colors duration-200  lg:h-12 lg:w-12 lg:text-lg
                ${
                  currentPath === step.route
                    ? "border-white/75 bg-zinc-700 text-white/75 dark:bg-zinc-800 group-hover:border-zinc-800 group-hover:text-white"
                    : "border-none bg-gray-500 text-black dark:bg-zinc-700 dark:text-white group-hover:border-none dark:group-hover:text-white"
                }
                `}
              >
                {idx + 1}
              </span>
              <span
                className={`
                hidden text-black dark:text-white/75 transition-colors duration-200 group-hover:text-black dark:group-hover:text-white lg:block
                ${
                  currentPath !== step.route
                    ? "dark:font-light"
                    : "font-semibold dark:text-white"
                }`}
              >
                {step.title}
              </span>
            </Link>
          );
        })}

        {/* Mobile Screen background border */}
        <div className="absolute top-4 flex h-1 w-full border-b border-dashed lg:hidden" />
      </div>
    </div>
  );
};

export default StepNavigation;
