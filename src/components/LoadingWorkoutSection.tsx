import React from "react";

const LoadingWorkoutSection = () => {
  const array = new Array(3).fill(null);

  return (
    <div className="flex flex-col items-center w-full mt-8 mb-24 gap-12">
      <div className="flex flex-col items-center">
        <h1 className="text-4xl w-60 h-6 bg-gray-300 dark:bg-gray-700 rounded-lg animate-pulse mb-4"></h1>
        <span className="w-80 h-6 bg-gray-300 dark:bg-gray-700 rounded-lg animate-pulse" />
      </div>
      <div className="flex flex-col lg:flex-row gap-8 items-center justify-center ">
        {array.map((_, i) => (
          <LoadingSingleWorkoutCard key={i} />
        ))}
      </div>
    </div>
  );
};

const LoadingSingleWorkoutCard = () => {
  return (
    <div className="flex flex-col gap-6 w-full max-w-2xl animate-pulse">
      <div className="self-center">
        {/* Image using Nextjs */}
        <div className="object-cover w-[400px] h-[200px] bg-gray-300 dark:bg-gray-700 rounded-lg" />
      </div>
      <div className="flex flex-col items-center gap-4">
        {/* Title and Desc */}
        <span className="text-2xl w-80 h-6 bg-gray-300 dark:bg-gray-700 rounded-lg" />
        <span className="text-2xl w-80 h-6 bg-gray-300 dark:bg-gray-700 rounded-lg" />
        <p className="text-sm font-light text-justify w-[90%] h-3 bg-gray-300 dark:bg-gray-700 rounded-lg" />
        <p className="text-sm font-light text-justify w-[90%] h-3 bg-gray-300 dark:bg-gray-700 rounded-lg" />
        <p className="text-sm font-light text-justify w-[90%] h-3 bg-gray-300 dark:bg-gray-700 rounded-lg" />
      </div>
      <span className="px-3 py-4 h-14 bg-gray-300 dark:bg-zinc-700 text-white self-center rounded-lg hover:scale-105 duration-200 w-32" />
    </div>
  );
};

export default LoadingWorkoutSection;
