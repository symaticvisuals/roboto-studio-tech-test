"use client"
import React from "react";
import { Button } from "../ui/button";
import { ArrowRight } from "lucide-react";
import Link from "next/link";

function TalkAtEvent() {
    const ref = React.useRef<HTMLDivElement | null>(null);

  return (
    <div className="bg-[#190E26] py-10 h-[480px] mt-20" id="talk" ref={ref}>
      <div className=" bg-[url('/images/Vector.png')] w-full sm:bg-contain bg-cover h-full bg-center bg-no-repeat">
        <div className="flex justify-center items-center h-full">
          <div className="container text-center text-white flex flex-col justify-center items-center gap-10 ">
            <h1 className="sm:text-6xl text-5xl  font-polysansbold">
              Want to talk at <br className="sm:block hidden" /> our event?
            </h1>
            <p className="text-xl font-normal">
              Excited to have you speak at our event! Share your{" "}
              <br className="sm:block hidden" /> expertise and insights on `
              {"AI's"}` role in shaping the future.{" "}
              <br className="sm:block hidden" />`{"Let's"}` make an impact
              together!
            </p>
            <div className=" flex justify-center">
            <Link href="https://peerlist.io/deepanshuweb" passHref target="_blank">
                
              <Button className="rounded-full px-9 py-6 ss text-base font-bold  flex gap-2 items-center justify-center bg-white text-[#131c26]   hover:bg-[#131c26] hover:text-white transition-all ease-out duration-30">
                Speak at our event <ArrowRight className="w-5" />
              </Button>
            </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default TalkAtEvent;
