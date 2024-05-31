
import BecomeAMember from "@/components/group/become-a-member";
import FindMoreTalks from "@/components/group/find-more-talks";
import HeroSection from "@/components/group/hero-section";
import TalkAtEvent from "@/components/group/talk-at-event";
import Image from "next/image";

export default function Home() {
  return (
    <main className="">
      <div className=" w-full scroll-smooth">
        <HeroSection />
        <FindMoreTalks />
        <BecomeAMember />
        <TalkAtEvent />
      </div>
    </main>
  );
}
