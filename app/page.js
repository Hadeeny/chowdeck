import { Inter } from "next/font/google";
import { OutlineLikeIcon, VectorIcon, WhiteLikeIcon } from "@/components/Icons";
import MobileTopCharts from "@/components/MobileTopCharts";
import Hero from "@/components/Hero";
import TopCharts from "@/components/TopCharts";
import NewReleases from "@/components/NewReleases";
import { useSearchParams } from "next/navigation";

// async function getData() {
//   const res = await fetch("https://api.example.com/...");
//   if (!res.ok) {
//     throw new Error("Failed to fetch data");
//   }
//   return res.json();
// }

const Home = async () => {
  // const data = await getData();
  // console.log(data);
  return (
    <main className="px-4">
      <div className="flex w-full mx-auto gap-x-6">
        <Hero />
        <TopCharts />
      </div>
      <MobileTopCharts />
      <NewReleases />
    </main>
  );
};
export default Home;
