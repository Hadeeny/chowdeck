// "use client";
// import { useQuery } from "@tanstack/react-query";
// import axios from "axios";
import Image from "next/image";
// import React, { useEffect } from "react";
import cover2 from "../assets/cover2.png";
import cover3 from "../assets/cover3.png";
import Link from "next/link";

const NewReleases = async () => {
  // const data = await getData(accessCode);
  // console.log(data);
  // console.log("show");
  // console.log(accessCode);
  return (
    <div className="mt-11">
      <h2 className="my-3 text-[24px]">New Release</h2>
      {/* release */}
      <div className="w-full flex gap-x-8 items-center">
        <Link href={`/album/${2}`}>
          <div className="w-[153px] h-[153px] rounded-[25px]">
            <Image src={cover2} alt="cover" />
          </div>
          <p>Life in a bubble</p>
        </Link>
        <div>
          <div className="w-[153px] h-[153px] rounded-[25px]">
            <Image src={cover2} alt="cover" />
          </div>
          <p>Life in a bubble</p>
        </div>
      </div>
    </div>
  );
};

export default NewReleases;
