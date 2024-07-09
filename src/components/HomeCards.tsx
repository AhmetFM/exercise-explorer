import React from "react";
import Card from "./Card";

type CardData = {
  title: string;
  desc: string;
  icon: string;
};

const cardData: CardData[] = [
  {
    title: "Personalized Workout Plans",
    desc: "Get workout plans tailored specifically to your fitness level, goals, and preferences. Our system analyzes your input to create a program that fits you perfectly, helping you achieve your fitness targets efficiently and safely.",
    icon: "calendar",
  },
  {
    title: "Progress Tracking",
    desc: "Monitor your progress with our comprehensive tracking tools. Log your workouts, track your improvements, and stay motivated as you see your fitness journey unfold. Visualize your achievements and adjust your plan as needed to stay on track",
    icon: "progress",
  },
  {
    title: "Expert Guidance",
    desc: "Benefit from expert advice and tips to enhance your workouts. Our platform provides access to a wealth of knowledge from fitness professionals, ensuring you have the support and information you need to succeed.",
    icon: "football",
  },
];

const HomeCards = () => {
  return (
    <section className="w-100% h-max bg-zinc-200 dark:bg-zinc-800 py-20 p-8 flex flex-col items-center">
      <div className="flex flex-col gap-4 mb-12 text-center">
        <h3 className="text-center text-2xl">Our Features</h3>
        <span className="text-3xl">
          CREATE A WORKOUT PLAN FOR YOUR WORKOUT BACKGROUND
        </span>
      </div>
      {/* Cards */}
      <div className="flex flex-wrap items-center justify-center gap-12">
        {cardData.map((card, index) => (
          <Card
            key={index}
            title={card.title}
            desc={card.desc}
            icon={card.icon}
          />
        ))}
      </div>
    </section>
  );
};

export default HomeCards;
