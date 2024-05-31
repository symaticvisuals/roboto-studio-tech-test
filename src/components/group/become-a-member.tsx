import React from "react";
import { OrbitingCirclesDemo } from "../orbiting-icons";
import { Button } from "../ui/button";
import { ArrowRight } from "lucide-react";
import Link from "next/link";

function BecomeAMember() {
  return (
    <div className="my-10 container grid lg:grid-cols-2 gap-20">
      <OrbitingCirclesDemo />
      <div className="lg:ml-12 ml-0 flex items-center">
        <div className="flex flex-col gap-10">
          <h3 className="text-5xl font-polysansbold">Become a member</h3>
          <p className="text-xl">
            Join our AI Talk platform for exclusive insights on `{"AI's"}`
            impact. Unlock membership for a deeper dive into the world of
            artificial intelligence.{" "}
          </p>
          <div className="">
          <Link href="/app">
            <Button
              className="rounded-full px-9 py-6 ss text-base  flex gap-2 items-center justify-center bg-transparent border-black border-2  hover:bg-[#131c26] font-bold hover:text-white transition-all ease-out duration-300 hover:border-transparent"
              variant={"outline"}
            >
              Join now <ArrowRight className="w-5" />
            </Button>
          </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default BecomeAMember;
