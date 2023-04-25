import user1 from "../assets/user1.png";
import user2 from "../assets/user2.png";
import Image from "next/image";
import { Inter } from "next/font/google";
import { OutlineLikeIcon, VectorIcon, WhiteLikeIcon } from "@/components/Icons";
import rema from "../assets/album1.png";
import cover1 from "../assets/cover1.png";
import MobileTopCharts from "@/components/MobileTopCharts";
import Hero from "@/components/Hero";
import TopCharts from "@/components/TopCharts";
import NewReleases from "@/components/NewReleases";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <main className="px-4">
      <div className="flex w-full mx-auto gap-x-6">
        {/* Hero */}
        <Hero />
        {/* Top charts */}
        <TopCharts />
      </div>
      <MobileTopCharts />
      <NewReleases />
    </main>
  );
}
