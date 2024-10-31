import Image from "next/image";
import Link from "next/link";
import React from "react";

type WorkoutProps = {
  id: string;
  slug: string;
  title: string;
  desc: string;
  img: string | null;
};

const WorkoutCard = (workout: WorkoutProps) => {
  return (
    //Responsive card
    <Link
      href={`/workouts/${workout.slug}/`}
      className="w-72 h-56 relative rounded-lg"
    >
      <Image
        className="-z-40 opacity-100 dark:opacity-85 object-cover rounded-lg"
        alt=""
        src={`${workout.img}`}
        fill
        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
      />
      <span className="z-40 flex text-white items-center justify-center text-center w-full h-full font-medium text-3xl hover:bg-zinc-900 hover:bg-opacity-60 rounded-lg">
        {workout.title}
      </span>
    </Link>
  );
};

export default WorkoutCard;
