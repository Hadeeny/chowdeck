"use client";
import { motion, useSpring, useInView, useMotionValue } from "framer-motion";
import Image from "next/image";
import React, { useState, useEffect, useRef } from "react";
import { CircularProgressbar, buildStyles } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";
import image1 from "@/assets/icons/african-meals.svg";
import image2 from "@/assets/icons/fastfoodxsnacks.svg";
import image3 from "@/assets/icons/drink.svg";
import image4 from "@/assets/icons/fitfam.svg";
import image5 from "@/assets/icons/pack.svg";
const data = [
  {
    id: 1,
    image: image1,
    title: "Get Started in 3",
    backgroundColor: "bg-green-800",
  },
  {
    id: 2,
    image: image2,
    title: "Download the app",
    backgroundColor: "bg-blue-300",
  },
  {
    id: 3,
    image: image3,
    title: "Explore categories",
    backgroundColor: "bg-yellow-300",
  },
  {
    id: 4,
    image: image4,
    title: "Place Order",
    backgroundColor: "bg-pink-400",
  },
  {
    id: 5,
    image: image5,
    title: "Enjoy your meal",
    backgroundColor: "bg-chow-primary",
  },
];
const GetStarted = () => {
  const [iterator, setIterator] = useState(0);
  const [value, setValue] = useState(0);

  useEffect(
    (params) => {
      const switchItem = () => {
        if (iterator < data.length - 1) {
          setIterator(iterator + 1);
        } else setIterator(0);
      };
      setTimeout(() => {
        switchItem();
      }, 5000);
    },
    [iterator]
  );

  return (
    <div className="px-4 space-y-8 relative z-10 md:px-8 my-9">
      <div
        className={`w-full py-4 ${data[iterator].backgroundColor} rounded-xl`}
      >
        <h2 className="text-white text-3xl md:text-6xl font-bold text-center">
          {data[iterator].title}
        </h2>
        <div className="mx-auto w-[12rem] h-[12rem] md:w-[40rem] md:h-[40rem] mt-8">
          <Image className="w-full h-full" src={data[iterator].image} />
        </div>
        {/* bottom nav */}
        <div className="flex  w-full justify-between items-center">
          <ul className="flex w-full md:w-auto -space-x-0 md:-space-x-10">
            {data.map((nav, i) => (
              <svg key={i} className="w-[110px] h-[110px]">
                <circle
                  className={`${i == iterator && "animate-circle"}`}
                  // width="50px"
                  // height="50px"
                  fill={i == iterator ? "transparent" : "white"}
                  strokeWidth="3px"
                  stroke={i == iterator ? "black" : "transparent"}
                  cx="50%"
                  cy="50%"
                  r={30}
                  strokeDasharray={188.6}
                  strokeDashoffset={188.6}
                />
                <text
                  x="50%"
                  y="50%"
                  dominantBaseline="middle"
                  textAnchor="middle"
                >
                  01
                </text>
              </svg>
            ))}
          </ul>

          <div className="hidden md:flex gap-x-4 px-8">
            <button
              className="bg-white cursor-pointer justify-center rounded-full w-[4rem] h-[4rem] flex items-center"
              onClick={() => {
                if (iterator == 0) {
                  setIterator(data.length - 1);
                  console.log(iterator);
                }
                setIterator(iterator - 1);
              }}
            >
              prev
            </button>
            <button
              className="bg-white justify-center rounded-full w-[4rem] h-[4rem] flex items-center"
              onClick={() => {
                if (iterator < data.length - 1) {
                  setIterator(iterator + 1);
                } else setIterator(0);
              }}
            >
              Next
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default GetStarted;
// absolute -translate-y-1/2 -translate-x-1/2 left-1/2 top-1/2
