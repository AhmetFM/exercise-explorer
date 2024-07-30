"use client";
import { IoMdArrowBack } from "react-icons/io";
import { useRouter } from "next/navigation";
import SingleWorkoutCard from "@/components/SingleWorkoutCard";
import { dummyData } from "@/lib/data";
import NotFound from "@/app/not-found";

const SingleWorkoutListPage = ({ params }: { params: { slug: string } }) => {
  const router = useRouter();

  const workout = dummyData.find((item) => item.pathname === params.slug);

  // Handle the click event on the button
  const handleClick = () => {
    router.back();
  };

  if (!workout) return <NotFound />;

  return (
    <div className="flex items-center relative p-8">
      {workout && (
        <>
          <button
            className="hidden lg:flex absolute w-10 h-10 rounded-full border-2 left-2 top-2 items-center justify-center"
            onClick={handleClick}
          >
            <IoMdArrowBack className="w-6 h-6" />
          </button>
          <div className="flex flex-col items-center w-full mt-8 mb-24 gap-12">
            <div className="flex flex-col items-center">
              <h1 className="text-4xl">{workout.title}</h1>
              <span>We prefer this workout programs for you</span>
            </div>
            <div className="flex flex-col lg:flex-row gap-8 items-center justify-center ">
              {workout.child?.map((child) => (
                <SingleWorkoutCard
                  key={child.id}
                  path={workout.pathname}
                  {...child}
                />
              ))}
            </div>
          </div>
        </>
      )}
    </div>
  );
};

export default SingleWorkoutListPage;
