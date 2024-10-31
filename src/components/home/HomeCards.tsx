import React from "react";
import Card from "../Card";

type CardData = {
  step: string;
  title: string;
  desc: string;
  icon: string;
};

const cardData: CardData[] = [
  {
    step: "Step 1",
    title: "Provide Your Fitness History",
    desc: "Share your fitness background to help us create a tailored plan for you.",
    icon: "calendar",
  },
  {
    step: "Step 2",
    title: "Choose Your Workout Preferences",
    desc: "Select your workout type (e.g., full-body, crossfit) and how many days per week you'll train.",
    icon: "progress",
  },
  {
    step: "Step 3",
    title: "Get Your Workout Plan",
    desc: "Receive a customized workout plan based on your inputs. Let's get moving!",
    icon: "football",
  },
];

const HomeCards = () => {
  return (
    <section
      className="w-100% h-max py-20 px-8 flex flex-col items-center"
      id="features"
    >
      <div className="flex flex-col gap-4 mb-12 text-center">
        <h2 className="text-center text-lg md:text-xl lg:text-2xl">
          Our Features
        </h2>
        <span className="text-xl md:text-2xl lg:text-3xl">
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
            step={card.step}
          />
        ))}
      </div>
    </section>
  );
};

export default HomeCards;
