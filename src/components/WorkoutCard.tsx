import Image from "next/image";
import React from "react";

const WorkoutCard = () => {
  return (
    // I need image url and title as a prop
    <div className="w-[320px] h-[250px] relative cursor-pointer">
      <Image
        className="-z-40 opacity-100 dark:opacity-85"
        alt=""
        src="/workoutpic.jpg"
        objectFit="cover"
        fill
      />
      <span className="z-40 flex text-white items-center justify-center w-full h-full font-medium text-3xl hover:bg-zinc-900 hover:bg-opacity-60">
        Workout For Men
      </span>
    </div>
  );
};

export default WorkoutCard;
