import prisma from "@/lib/db";
import React from "react";
import WorkoutCard from "./WorkoutCard";
import { unstable_noStore } from "next/cache";

const WorkoutCardsList = async () => {
  unstable_noStore();
  const workouts = await prisma.plan.findMany({
    include: {
      workouts: true,
    },
  });

  return (
    <div className="flex flex-wrap gap-6 mt-8 justify-center md:mx-4 xl:mx-0">
      {workouts.map((workout) => (
        <WorkoutCard key={workout.id} {...workout} />
      ))}
    </div>
  );
};

export default WorkoutCardsList;
