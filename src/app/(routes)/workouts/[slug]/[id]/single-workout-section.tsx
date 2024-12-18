"use client";
import Image from "next/image";
import React from "react";

type SingleWorkoutType = {
  img: string;
  title: string;
  description: string;
  shortTitle: string;
  days: {
    id: string;
    title: string;
    headers: string[];
    exercises: string[];
    workoutId: string | null;
  }[];
  slug: string;
  goal: string;
  type: string;
  duration: string;
  daysPerWeek: string;
};

const SingleWorkoutSection = ({
  singleWorkout,
}: {
  singleWorkout: SingleWorkoutType;
}) => {
  return (
    <div className="container px-3 lg:px-8 mt-8">
      <div className="flex flex-col gap-12">
        {/* Image And Description */}
        <div className="flex flex-col justify-center md:flex-row gap-4">
          {/* Image */}
          <div className="flex flex-col flex-1 items-center gap-8">
            <div className="max-w-[600px] max-h-[600px]">
              <Image
                src={`${singleWorkout.img}`}
                alt=""
                width={400}
                height={400}
                className="object-contain w-full h-auto"
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
        <div className="border rounded-md mb-10 px-4 lg:px-8 py-3">
          <table className="w-full text-[14px] ">
            <tbody>
              <tr>
                <th colSpan={2} className="text-center">
                  WORKOUT SUMMARY
                </th>
              </tr>
              <tr className="border-b border-black dark:border-white border-opacity-10 dark:border-opacity-10">
                <td className="italic text-gray-600 dark:text-gray-200">
                  Main Goal
                </td>
                <td>{singleWorkout.goal}</td>
              </tr>
              <tr className="border-b border-black dark:border-white border-opacity-10 dark:border-opacity-10">
                <td className="italic text-gray-600 dark:text-gray-200">
                  Workout Type
                </td>
                <td>{singleWorkout.type}</td>
              </tr>
              <tr className="border-b border-black dark:border-white border-opacity-10 dark:border-opacity-10">
                <td className="italic text-gray-600 dark:text-gray-200">
                  Program Duration
                </td>
                <td>{singleWorkout.duration}</td>
              </tr>
              <tr className="border-b border-black dark:border-white border-opacity-10 dark:border-opacity-10">
                <td className="italic text-gray-600 dark:text-gray-200">
                  Days Per Week
                </td>
                <td>{singleWorkout.daysPerWeek}</td>
              </tr>
            </tbody>
          </table>
        </div>
        {/* Workout Program */}
        <div className="flex flex-col gap-8 mb-20">
          <span className="font-bold text-2xl text-center">
            {singleWorkout.shortTitle}
          </span>
          {singleWorkout.days?.map((item: any, index: any) => (
            <div key={index}>
              <h2 className="text-2xl font-bold">{item.title}</h2>
              <table className="w-full text-[14px] md:text-[16px]">
                <tbody>
                  <tr className="border-b border-black dark:border-white border-opacity-10 dark:border-opacity-10">
                    {item.headers.map((header: any, index: any) => (
                      <th
                        key={index}
                        scope="col"
                        className="text-start text-lg py-1"
                      >
                        {header}
                      </th>
                    ))}
                  </tr>
                  {item.exercises.map((exercise: any, index: any) => {
                    const newExercise = exercise
                      .replace(/[\[\]"]/g, "")
                      .replace(/,\s*/g, ",")
                      .split(",");
                    return (
                      <tr
                        key={index}
                        className={`border-b border-black dark:border-white border-opacity-10 dark:border-opacity-10 ${
                          index % 2 == 0 ? "bg-zinc-100 dark:bg-zinc-900" : ""
                        }`}
                      >
                        <td className="flex-1 py-2 max-w-36">
                          {newExercise[0]}
                        </td>
                        <td className="flex-auto w-16 md:w-32 py-2">
                          {newExercise[1]}
                        </td>
                        <td className="flex-auto w-16 md:w-32 py-2">
                          {newExercise[2]}
                        </td>
                        <td className="flex-auto w-16 md:w-32 py-2">
                          {newExercise[3]}
                        </td>
                      </tr>
                    );
                  })}
                </tbody>
              </table>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default SingleWorkoutSection;
