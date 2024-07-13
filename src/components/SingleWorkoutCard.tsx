import Image from "next/image";
import Link from "next/link";
import React from "react";

const SingleWorkoutCard = () => {
  return (
    <div className="flex flex-col gap-6 w-full max-w-2xl">
      <div className="self-center">
        {/* Image using Nextjs */}
        <Image
          alt="workout"
          src="https://images.pexels.com/photos/1552106/pexels-photo-1552106.jpeg?auto=compress&cs=tinysrgb&w=600"
          width={400}
          height={200}
          className="object-cover w-[400px] h-[200px]"
        />
      </div>
      <div className="flex flex-col items-center gap-4">
        {/* Title and Desc */}
        <h1 className="text-2xl">Full Body Workout</h1>
        <p
          className="text-sm font-light text-justify
        "
        >
          Lorem ipsum dolor sit amet consectetur adipisicing elit.
          Exercitationem ut, excepturi illo nemo facere delectus, alias fuga
          voluptatibus distinctio illum quisquam! Saepe perferendis, veniam
          accusamus tenetur consectetur fuga aliquid voluptatem voluptatum
          voluptatibus ipsa commodi suscipit explicabo deserunt nam rerum
          placeat?
        </p>
      </div>
      <Link
        href="/workouts/man/1"
        className="px-3 py-4 bg-zinc-700 text-white self-center rounded-lg hover:scale-105 duration-200"
      >
        View Workout
      </Link>
    </div>
  );
};

export default SingleWorkoutCard;
