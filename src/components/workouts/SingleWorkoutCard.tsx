import Image from "next/image";
import Link from "next/link";
import React from "react";

type SingleWorkoutCardProps = {
  slug: string;
  title: string;
  img: string;
  description: string;
  path: string;
};

const SingleWorkoutCard = ({
  slug,
  title,
  img,
  description,
  path,
}: SingleWorkoutCardProps) => {
  return (
    <div className="flex flex-col gap-6 w-full max-w-md">
      <div className="self-center">
        {/* Image using Nextjs */}
        <Image
          alt="workout"
          src={img}
          width={400}
          height={200}
          className="object-cover w-[400px] h-[200px]"
        />
      </div>
      <div className="flex flex-col items-center gap-4">
        {/* Title and Desc */}
        <h1 className="text-2xl max-w-[400px]">{title}</h1>
        <p
          className="text-sm font-light text-justify max-w-[400px]
        "
        >
          {description}
        </p>
      </div>
      <Link
        href={`/workouts/${path}/${slug}`}
        className="px-3 py-4 bg-zinc-500 dark:bg-zinc-700 text-white self-center rounded-lg hover:scale-105 duration-200"
      >
        View Workout
      </Link>
    </div>
  );
};

export default SingleWorkoutCard;
