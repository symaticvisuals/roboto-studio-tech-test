import { Button } from "@/components/ui/button";
import { ArrowLeft } from "lucide-react";
import Link from "next/link";
import React from "react";

function DowloadApp() {
  return (
    <div className=" flex justify-center items-center h-screen text-black container">
      <div className="flex flex-col gap-10 text-center  items-center">
        <h1 className="text-6xl font-polysans">Download the app</h1>
        <p className="container">
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Architecto
          pariatur porro perferendis doloribus est atque. Aut quos quae expedita
          atque repellendus esse vel similique ab tenetur? Aspernatur est nihil
          deserunt!
        </p>
        <Link href="/">
          <Button
            className="rounded-full px-8  text-base py-6 flex gap-2 items-center justify-center hover:bg-[#131c26] transition-all ease-out duration-300"
            variant={"default"}
          >
            <ArrowLeft className="w-5" /> Back to home
          </Button>
        </Link>
      </div>
    </div>
  );
}

export default DowloadApp;
