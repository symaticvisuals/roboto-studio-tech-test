import React from "react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import LondonCards from "../london-cards";
import SingaporeCards from "../singapore";
import LosAngelesCards from "../los-angeles";
import { Button } from "../ui/button";
import { ArrowRight } from "lucide-react";
import { inter } from "@/lib/fonts";
import Link from "next/link";


function FindMoreTalks() {
  return (
    <div className="container">
      <div className="my-20">
        <h2 className="font-polysansbold text-4xl md:text-left text-center">Find more talks</h2>
        <div className={inter.className}>
          <Tabs defaultValue="London" className="w-full bg-transparent mt-6">
            <TabsList className="flex gap-2.5 text-lg">
              <TabsTrigger className="text-lg" value="London">
                London
              </TabsTrigger>
              <TabsTrigger className="text-lg" value="Singapore">
                Singapore
              </TabsTrigger>
              <TabsTrigger className="text-lg" value="Los Angeles">
                Los Angeles
              </TabsTrigger>
            </TabsList>
            <TabsContent value="London" className="w-full">
              <LondonCards />
            </TabsContent>
            <TabsContent value="Singapore">
              <SingaporeCards />
            </TabsContent>
            <TabsContent value="Los Angeles">
              <LosAngelesCards />
            </TabsContent>
          </Tabs>
        </div>
        <div className="mt-6">
        <Link href="/app">
          <Button
            className="mt-8 rounded-full px-9 py-6  text-base  flex gap-2 items-center justify-center  border-black border-2 bg-transparent text-black font-bold hover:bg-[#131c26] hover:text-white transition-all ease-out duration-300 hover:border-transparent"
            variant={"outline"}
          >
            Listen to more <ArrowRight className="w-5" />
          </Button>
        </Link>
        </div>
      </div>
    </div>
  );
}

export default FindMoreTalks;
