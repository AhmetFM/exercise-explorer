import Link from "next/link";
import React from "react";

const HomeHeader = () => {
  return (
    <section className="flex items-center justify-center h-[calc(100vh-96px)] flex-col gap-8 backgroundPhoto text-white ">
      <div className="flex flex-col items-center justify-center gap-3">
        <h1 className="text-4xl font-bold">Exercise Explorer</h1>
        <p className="text-xl">Transform Your Workout Routine Today</p>
      </div>
      <div className="flex gap-2">
        <button className="hover:bg-zinc-700 bg-zinc-950 text-white font-medium py-2 px-4 rounded">
          <Link href="/login">Get Started</Link>
        </button>
        <button className="bg-white text-zinc-950 hover:bg-zinc-700 hover:text-white font-medium py-2 px-4 rounded">
          <Link href="/login">Learn More</Link>
        </button>
      </div>
    </section>
  );
};

export default HomeHeader;
