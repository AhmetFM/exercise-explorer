import Link from "next/link";
import React from "react";

const HomeHeader = () => {
  return (
    <section
      className="flex items-center justify-center min-h-[750px] flex-col gap-8 backgroundPhoto text-white scroll-mt-20
      "
      id="home"
    >
      <div className="flex flex-col items-center justify-center gap-3">
        <h1 className="text-4xl font-bold">Exercise Explorer</h1>
        <p className="text-xl">Transform Your Workout Routine Today</p>
      </div>
      <div className="flex gap-2 font-medium">
        <button className="text-white border-2 hover:bg-zinc-950 hover:bg-opacity-60 py-2 px-4 rounded duration-300">
          <Link href="/create-workout">Create a workout plan</Link>
        </button>
        <button className="border-2 hover:bg-zinc-950 hover:bg-opacity-60 py-2 px-4 rounded duration-300">
          <Link href="/login">Explore workouts</Link>
        </button>
      </div>
    </section>
  );
};

export default HomeHeader;
