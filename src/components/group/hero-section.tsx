"use client";

import { cn } from "@/lib/utils";
import React from "react";
import { Button } from "../ui/button";
import { ArrowRight } from "lucide-react";
import Link from "next/link";
import { inter } from "@/lib/fonts";

function HeroSection() {
  return (
    <div className="h-[50vh] w-screen bg-black">
      <div
        className={`h-full w-full bg-[url('/images/hero-image.png')] bg-opacity-70 bg-cover bg-center bg-no-repeat  flex justify-center items-center`}
      >
        <div className=" grid md:grid-cols-2 container">
          <div className="">
            <h1 className=" font-polysansbold text-6xl font-bold text-white">
              Top insights <br />
              from AI talks{" "}
            </h1>
            <p
              className={cn(
                inter.className,
                "text-white font-light mt-8 text-xl"
              )}
            >
              Get informed about the latest talks in artificial intelligence,
              all from the comfort of your front room
            </p>
            <div className="flex gap-3">
              <Link href="/app">
                <Button
                  className="mt-8 rounded-full px-8  text-base py-6 flex gap-2 items-center justify-center hover:bg-[#131c26] transition-all ease-out duration-300"
                  variant={"default"}
                >
                  Get the app <ArrowRight className="w-5" />
                </Button>
              </Link>

              <Button
                className="mt-8 rounded-full px-8  text-base py-6 flex gap-2 items-center justify-center bg-transparent text-white hover:bg-[#131c26] hover:text-white transition-all ease-out duration-300 hover:border-transparent"
                variant={"outline"}
                onClick={() => {
                  document
                    .getElementById("talk")
                    ?.scrollIntoView({ behavior: "smooth" });
                }}
              >
                Join a talk <ArrowRight className="w-5" />
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default HeroSection;
