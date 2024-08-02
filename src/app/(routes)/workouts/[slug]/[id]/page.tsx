"use client";
import NotFound from "@/app/not-found";
import DownloadButton from "@/components/DownloadButton";
import { dummyData } from "@/lib/data";
import Image from "next/image";
import { usePathname } from "next/navigation";
import React from "react";

const SingleWorkoutPage = ({ params }: { params: { id: number } }) => {
  const pathname = usePathname();
  const parent = pathname.split("/")[2];

  const workouts = dummyData.find((item) => item.pathname === parent);
  const singleWorkout = workouts?.child.find(
    (item) => item.id === Number(params.id)
  );

  if (!singleWorkout) return <NotFound />;

  return (
    <div className="flex flex-col items-center min-h-[50vh]">
      <div className="container mt-8">
        <div className="flex flex-col gap-12">
          {/* Image And Description */}
          <div className="flex flex-col justify-center md:flex-row gap-4">
            {/* Image */}
            <div className="flex flex-col flex-1 items-center gap-8">
              <div>
                <Image
                  src={singleWorkout.img}
                  alt=""
                  width={400}
                  height={400}
                  className="object-contain max-w-[600px] max-h-[400px]"
                />
              </div>
            </div>
            {/* Description */}
            <div className="flex flex-col flex-1 gap-12 justify-center">
              <h1 className="text-3xl font-bold text-center md:text-start">
                {singleWorkout.title}
              </h1>
              <p className="text-lg">{singleWorkout.description}</p>
            </div>
          </div>
          {/* Table */}
          <div className="border rounded-md px-2 lg:px-8 mb-10">
            <table className="w-full text-[14px]">
              <tbody>
                {/* THIS TABLE IS HARDCODED BECAUSE THIS WEBSITE IS EDUCATIONAL ONLY. NOT ANYTHING ELSE */}
                <tr>
                  <th className="text-center">WORKOUT SUMMARY</th>
                </tr>
                <tr className="border-b border-black dark:border-white border-opacity-10 dark:border-opacity-10">
                  <td className="italic text-gray-600 dark:text-gray-200">
                    Main Goal
                  </td>
                  <td>Build Muscle</td>
                </tr>
                <tr className="border-b border-black dark:border-white border-opacity-10 dark:border-opacity-10">
                  <td className="italic text-gray-600 dark:text-gray-200">
                    Workout Type
                  </td>
                  <td>Split</td>
                </tr>
                <tr className="border-b border-black dark:border-white border-opacity-10 dark:border-opacity-10">
                  <td className="italic text-gray-600 dark:text-gray-200">
                    Program Duration
                  </td>
                  <td>12 Weeks</td>
                </tr>
                <tr className="border-b border-black dark:border-white border-opacity-10 dark:border-opacity-10">
                  <td className="italic text-gray-600 dark:text-gray-200">
                    Days Per Week
                  </td>
                  <td>5</td>
                </tr>
                <tr className="border-b h-20 border-black dark:border-white border-opacity-10 dark:border-opacity-10">
                  <td className="italic text-gray-600 dark:text-gray-200">
                    Download PDF
                  </td>
                  <td className="min-w-[150px]">
                    <DownloadButton />
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SingleWorkoutPage;
