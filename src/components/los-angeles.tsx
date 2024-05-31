import Image from "next/image";
import React from "react";
import { Card } from "./card";

function LosAngelesCards() {
  const cards = [
    {
      imageUrl: "/images/los-1.jpg",
      text: "Generative AI in Entertainment and Creativity",
      description:
        "​The purpose of this event is to bring together industry leaders, artists, and tech startup founders, especially those in the entertainment and creativity industries from LA, San Francisco, Seattle, and beyond.",
    },
    {
      imageUrl: "/images/los-2.png",
      text: "Generative AI in Entertainment and Creativity",
      description:
        "​The purpose of this event is to bring together industry leaders, artists, and tech startup founders, especially those in the entertainment and creativity industries from LA.",
    },
    {
      imageUrl: "/images/los-3.png",
      text: "LA GenAI Meetup",
      description:
        "This friendly get-together is the perfect opportunity for GenAI enthusiasts, hobbyists, experts, and newcomers alike to connect, share insights, and learn from each other in an informal setting.",
    },
  ];
  return (
    <div className="flex w-full justify-center">
      <div className=" mt-7 relative w-full grid  md:grid-cols-3 gap-10">
        {cards.map((card) => (
          <Card key={card.text} {...card} />
        ))}
      </div>
    </div>
  );
}

export default LosAngelesCards;
