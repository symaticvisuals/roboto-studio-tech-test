import Image from "next/image";
import React from "react";
import { Card } from "./card";

function SingaporeCards() {
  const cards = [
    {
      imageUrl: "/images/singapore-1.jpg",
      text: "The key to unlock future of decentralized AI",
      description:
        "EdgeAI pioneers the convergence of artificial intelligence and edge computing, forging a secure, scalable, and efficient Layer 1 solution. ",
    },
    {
      imageUrl: "/images/singapore-2.jpg",
      text: "Singapore | Build Together: AI Hackathon",
      description:
        "​Come build and network with top AI hackers and Engineers from around the World",
    },
    {
      imageUrl: "/images/singapore-3.jpg",
      text: "InnovAI: Shaping the Future with AI Innovation",
      description:
        "Let's shape the future together with groundbreaking AI innovations and collaborations.",
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

export default SingaporeCards;
