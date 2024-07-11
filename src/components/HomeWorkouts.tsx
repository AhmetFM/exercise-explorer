import React from "react";
import WorkoutCard from "./WorkoutCard";
import Link from "next/link";

const HomeWorkouts = () => {
  return (
    <section
      className="flex flex-col items-center gap-4 w-full my-8"
      id="WorkoutPlans"
    >
      <h1 className="text-2xl font-bold text-center">Workout Plans</h1>
      <div className="flex flex-wrap gap-12 items-center justify-center">
        <WorkoutCard />
        <div
          className="px-4 py-2 border-2 font-medium border-zinc-950 dark:border-white dark:bg-zinc-900 dark:text-white rounded-lg
        hover:bg-zinc-300 hover:border-zinc-300 dark:hover:bg-zinc-800 dark:hover:border-zinc-800 box-border duration-300 cursor-pointer
        "
        >
          <Link href="/workouts">View All</Link>
        </div>
      </div>
    </section>
  );
};

export default HomeWorkouts;
