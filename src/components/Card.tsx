import React from "react";
import { FaCalendarAlt } from "react-icons/fa";
import { GiProgression } from "react-icons/gi";
import { MdSportsFootball } from "react-icons/md";

type CardProps = {
  step: string;
  title: string;
  desc: string;
  icon: "calendar" | "progress" | "football" | string;
};

const Card = ({ title, desc, icon, step }: CardProps) => {
  return (
    <div className="w-[280px] h-[340px] bg-white dark:bg-zinc-800 rounded-lg shadow-md dark:shadow-zinc-600 p-4 flex flex-col items-center pt-12 gap-3 text-center">
      {icon === "calendar" && (
        <FaCalendarAlt width={40} height={40} className="w-[40px] h-[40px]" />
      )}
      {icon === "progress" && (
        <GiProgression width={40} height={40} className="w-[40px] h-[40px]" />
      )}
      {icon === "football" && (
        <MdSportsFootball
          width={40}
          height={40}
          className="w-[40px] h-[40px]"
        />
      )}
      <span className="italic font-light dark:text-gray-400">{step}</span>
      <h4 className="text-lg font-semibold">{title}</h4>
      <p className="text-sm">{desc}</p>
    </div>
  );
};

export default Card;
