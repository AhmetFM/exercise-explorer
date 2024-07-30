import NotFound from "@/app/not-found";
import DownloadButton from "@/components/DownloadButton";
import { dummyData } from "@/lib/data";
import Image from "next/image";
import React, { useEffect } from "react";

const SingleWorkoutPage = ({ params }: { params: { id: number } }) => {
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
                  src="https://images.pexels.com/photos/1229356/pexels-photo-1229356.jpeg?auto=compress&cs=tinysrgb&w=600"
                  alt=""
                  width={400}
                  height={400}
                  className="object-contain"
                />
              </div>
            </div>
            {/* Description */}
            <div className="flex flex-col flex-1 gap-12 justify-center">
              <h1 className="text-3xl font-bold text-center md:text-start">
                Workout Title
              </h1>
              <p className="text-lg">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Quo
                omnis amet minima culpa aperiam, blanditiis eveniet aliquam,
                soluta veniam aspernatur tempora consequuntur nihil cumque
                consectetur, facilis odit velit? Sed, ullam.
              </p>
            </div>
          </div>
          {/* Table */}
          <div className="border rounded-md px-2 lg:px-8 mb-10">
            <table className="w-full text-[14px]">
              <tbody>
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
                  <td>
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
