"use client";
import { IoMdArrowBack } from "react-icons/io";
import { useRouter } from "next/navigation";
import { usePathname } from "next/navigation";
import WorkoutCard from "@/components/WorkoutCard";

const SingleWorkoutListPage = ({ params }: { params: { slug: string } }) => {
  const pathname = usePathname();

  const router = useRouter();

  // Handle the click event on the button
  const handleClick = () => {
    router.push("/workouts");
  };

  return (
    <div className="flex items-center relative p-8">
      <button
        className="hidden lg:flex absolute w-10 h-10 rounded-full border-2 left-2 top-2 items-center justify-center"
        onClick={handleClick}
      >
        <IoMdArrowBack className="w-6 h-6" />
      </button>
      <div className="flex flex-col items-center w-full mt-8 mb-24 gap-12">
        <div className="flex flex-col items-center">
          <h1 className="text-4xl">{params.slug}</h1>
          <span>We prefer this workout programs for you</span>
        </div>
        <div className="flex flex-col lg:flex-row gap-8 items-center justify-center">
          <WorkoutCard activePath={pathname} />
          <WorkoutCard activePath={pathname} />
          <WorkoutCard activePath={pathname} />
        </div>
      </div>
    </div>
  );
};

export default SingleWorkoutListPage;
