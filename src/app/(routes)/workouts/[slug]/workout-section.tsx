"use client";
import React, { useEffect, useState } from "react";

import { IoMdArrowBack } from "react-icons/io";
import SingleWorkoutCard from "@/components/workouts/SingleWorkoutCard";
import { useRouter } from "next/navigation";
import LoadingWorkoutSection from "@/components/loading/LoadingWorkoutSection";

const WorkoutSection = ({ workout }: any) => {
  const [loading, setLoading] = useState(true);
  const router = useRouter();
  // Handle the click event on the button
  const handleClick = () => {
    router.back();
  };

  useEffect(() => {
    setLoading(false);
  }, []);

  return (
    <>
      <button
        className="hidden lg:flex absolute w-10 h-10 rounded-full border-2 left-2 top-2 items-center justify-center"
        onClick={handleClick}
      >
        <IoMdArrowBack className="w-6 h-6" />
      </button>
      {loading ? (
        <LoadingWorkoutSection />
      ) : (
        <div className="flex flex-col items-center w-full mt-8 mb-24 gap-12">
          <div className="flex flex-col items-center">
            <h1 className="text-4xl">{workout.title}</h1>
            <span>We prefer this workout programs for you</span>
          </div>
          <div className="flex flex-col lg:flex-row gap-8 items-center justify-center ">
            {workout.workouts?.map((child: any) => (
              <SingleWorkoutCard
                key={child.id}
                path={workout.slug}
                {...child}
              />
            ))}
          </div>
        </div>
      )}
    </>
  );
};

export default WorkoutSection;
