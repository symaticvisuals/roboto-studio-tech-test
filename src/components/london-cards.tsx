import Image from "next/image";
import React from "react";
import { Card } from "./card";

function LondonCards() {
  const cards = [
    {
      imageUrl: "/images/london-1.png",
      text: "AI Revolution: Shaping the Future Together",
      description:
        "Join us for a talk on the future of AI and how it will shape the world we live in",
    },
    {
      imageUrl: "/images/london-2.png",
      text: "AI Revolution: Shaping Tomorrow's World",
      description:
        "Discover how AI is shaping the world of tomorrow and what you can do to be a part of it",
    },
    {
      imageUrl: "/images/london-3.png",
      text: "AI Transformation: Building a Future of Innovation",
      description:
        "Learn how AI is transforming the world of innovation and what you can do to be a part of it",
    },
  ];
  return (
    <div className="flex w-full justify-center">
      <div className=" mt-7 relative w-full grid  md:grid-cols-3 gap-10 ">
        {cards.map((card) => (
          <Card key={card.text} {...card} />
        ))}
      </div>
    </div>
  );
}

export default LondonCards;
