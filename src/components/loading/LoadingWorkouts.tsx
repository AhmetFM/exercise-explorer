import React from "react";
import LoadingCard from "./LoadingCard";

const LoadingWorkouts = () => {
  const array = new Array(8).fill(null);
  return (
    <div className="flex flex-wrap gap-6 mt-8 justify-center md:mx-4 xl:mx-0">
      {array.map((_, i) => (
        <LoadingCard key={i} />
      ))}
    </div>
  );
};

export default LoadingWorkouts;
