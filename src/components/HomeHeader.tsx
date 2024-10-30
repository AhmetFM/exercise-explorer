import Link from "next/link";
import React from "react";

const HomeHeader = () => {
  return (
    <section
      className="flex items-center justify-center text-[12px] md:text-[14px] lg:text-[16px] min-h-[605px] md:min-h-[650px] lg:min-h-[750px] flex-col gap-8 bg-background-light dark:bg-background-dark bg-center object-cover bg-no-repeat text-white scroll-mt-20"
      id="home"
    >
      <div className="flex flex-col items-center justify-center gap-3">
        <h1 className="text-2xl md:text-3xl lg:text-4xl font-bold">
          Exercise Explorer
        </h1>
        <p className="text-lg md:text-xl lg:text-2xl">
          Transform Your Workout Routine Today
        </p>
      </div>
      <div className="flex gap-2 font-medium">
        <Link href="/step-one">
          <button className="text-white border-2 hover:bg-zinc-950 hover:bg-opacity-60 py-2 px-4 rounded duration-300">
            Create a workout plan
          </button>
        </Link>
        <Link href="/workouts">
          <button className="border-2 hover:bg-zinc-950 hover:bg-opacity-60 py-2 px-4 rounded duration-300">
            Explore workouts
          </button>
        </Link>
      </div>
    </section>
  );
};

export default HomeHeader;
