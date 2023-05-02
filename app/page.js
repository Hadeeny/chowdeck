"use client";
// import axios from "axios";
// import { handler } from "../pages/api/accesscode/route";
// import user1 from "../assets/user1.png";
// import user2 from "../assets/user2.png";
// import Image from "next/image";
import { Inter } from "next/font/google";
import { OutlineLikeIcon, VectorIcon, WhiteLikeIcon } from "@/components/Icons";
// import rema from "../assets/album1.png";
// import cover1 from "../assets/cover1.png";
import MobileTopCharts from "@/components/MobileTopCharts";
import Hero from "@/components/Hero";
import TopCharts from "@/components/TopCharts";
import NewReleases from "@/components/NewReleases";
import { useSearchParams } from "next/navigation";
// import { useEffect } from "react";

function postAccessCode() {
  fetch("/api/accesscode", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      accessCode: "code",
    }),
  })
    .then((response) => response.json())
    .then((data) => console.log(data))
    .catch((error) => console.error(error));
}

// async function getData(code) {
//   const res = await fetch(
//     `https://connect.deezer.com/oauth/access_token.php?app_id=598584&secret=30d768fefa3433b032ca7dc1c3408eba&code=frc1989f45322d4aae5dfc46b691a781`,
//     {
//       method: "GET",
//       mode: "no-cors",
//       headers: {
//         "Content-Type": "application/json",
//       },
//     }
//   );

//   if (!res.ok) {
//     throw new Error("Failed to fetch data");
//   }

//   return await res.json();
// }
const Home = () => {
  // postAccessCode();
  const searchParams = useSearchParams();
  const accessCode = searchParams.get("code");
  // const accessCode = "I don tire";
  // postAccessCode(accessCode);
  return (
    <main className="px-4">
      <div className="flex w-full mx-auto gap-x-6">
        <Hero />
        <TopCharts />
      </div>
      <MobileTopCharts />
      <NewReleases accessCode={accessCode} />
    </main>
  );
};
export default Home;
