import React from "react";

const LoadingWorkouts = () => {
  const array = new Array(8).fill(null);
  const LoadingCard = () => {
    return (
      <div className="w-72 h-56 bg-gray-300 dark:bg-gray-700 animate-pulse rounded-lg"></div>
    );
  };
  return (
    <div className="flex flex-col items-center p-8">
      <span className="text-3xl mb-4 border-b">WORKOUT CATEGORIES</span>
      <p className="text-center max-w-2xl font-light text-sm">
        Choose a category that best suits the workout you&apos;re searching for.
        Once in the category, use the sort and filter options to find the right
        workout for your experience and goals.
      </p>
      {/* className="grid gap-6 mt-8 grid-cols-1 md:grid-cols-2 lg:grid-cols-3" */}
      <div className="flex flex-wrap gap-6 mt-8 justify-center md:mx-4 xl:mx-0">
        {array.map((_, i) => (
          <LoadingCard key={i} />
        ))}
      </div>
    </div>
  );
};

export default LoadingWorkouts;
