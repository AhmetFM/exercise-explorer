import Image from "next/image";
import Link from "next/link";
import React from "react";

type WorkoutCardProps = {
  imageUrl: string;
  title: string;
  type: "category" | "single";
};

const WorkoutCard = () => {
  return (
    // I need image url and title as a prop
    //Responsive card
    <Link href={`/workouts/man/`} className="w-72 h-56 relative">
      <Image
        className="-z-40 opacity-100 dark:opacity-85 object-cover"
        alt=""
        src="/workoutpic.jpg"
        fill
        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
      />
      <span className="z-40 flex text-white items-center justify-center w-full h-full font-medium text-3xl hover:bg-zinc-900 hover:bg-opacity-60">
        Workout For Men
      </span>
    </Link>
  );
};

export default WorkoutCard;
