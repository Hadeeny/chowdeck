"use client";
import { motion, useSpring, useInView, useMotionValue } from "framer-motion";
import Image from "next/image";
import React, { useState, useEffect, useRef } from "react";
import { CircularProgressbar, buildStyles } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";
import image1 from "@/assets/icons/african-meals.svg";
import image2 from "@/assets/icons/Fastfoodxsnacks.svg";
import image3 from "@/assets/icons/drink.svg";
import image4 from "@/assets/icons/Fitfam.svg";
import image5 from "@/assets/icons/Pack.svg";
import blackstar from "@/assets/icons/blackstar.svg";
const data = [
  {
    id: 1,
    image: image1,
    title: "Get Started in 3",
    backgroundColor: "bg-green-800",
    alt: "#0c513fff",
    number: "00",
  },
  {
    id: 2,
    image: image2,
    title: "Download the app",
    backgroundColor: "bg-blue-300",
    alt: "#ffedb3ff",
    number: "01",
  },
  {
    id: 3,
    image: image3,
    title: "Explore categories",
    backgroundColor: "bg-yellow-300",
    alt: "#000000",
    number: "02",
  },
  {
    id: 4,
    image: image4,
    title: "Place Order",
    backgroundColor: "bg-pink-400",
    alt: "#93c5fdff",
    number: "03",
  },
  {
    id: 5,
    image: image5,
    title: "Enjoy your meal",
    backgroundColor: "bg-chow-primary",
    alt: "#000000",
    number: "04",
  },
];
const GetStarted = () => {
  const [iterator, setIterator] = useState(0);
  const [value, setValue] = useState(0);
  const [countdown, setCountDown] = useState(5000);

  // useEffect(() => {
  //   const switchItem = () => {
  //     if (iterator < data.length - 1) {
  //       setIterator(iterator + 1);
  //     } else setIterator(0);
  //   };
  //   setTimeout(() => {
  //     switchItem();
  //   }, countdown);
  // }, [iterator]);
  const handleDecrement = () => {
    setIterator((prevIterator) => {
      // Check if iterator is less than array length
      if (prevIterator > 0) {
        return prevIterator - 1; // Increment if less than array length
      } else {
        return data.length - 1; // Reset to zero if equal or greater than array length
      }
    });
  };

  const handleIncrement = () => {
    if (iterator < 4) {
      setIterator(iterator + 1);
    } else setIterator(0);
  };
  useEffect(() => {
    const intervalId = setInterval(() => {
      setIterator((prevIterator) => {
        // Check if iterator is less than array length
        if (prevIterator < data.length - 1) {
          return prevIterator + 1; // Increment if less than array length
        } else {
          return 0; // Reset to zero if equal or greater than array length
        }
      });
    }, 5000);

    return () => clearInterval(intervalId);
  }, [data.length, handleDecrement, handleIncrement]); // Include array length in the dependency array

  return (
    <div className="px-4 space-y-8 relative z-10 md:px-8 my-9">
      <div
        className={`w-full py-4 ${data[iterator].backgroundColor} rounded-xl`}
      >
        <h2 className="text-white text-3xl md:text-6xl font-bold text-center">
          {data[iterator].title}
        </h2>
        <div className="mx-auto w-[12rem] h-[12rem] md:w-[40rem] md:h-[40rem] mt-8">
          <Image
            className="w-full h-full"
            alt="image"
            src={data[iterator].image}
          />
        </div>
        {/* bottom nav */}
        <div className="flex  w-full justify-between items-center">
          <ul className="flex w-full md:w-auto -space-x-0 md:-space-x-10">
            {data.map((nav, i) => (
              <div
                key={i}
                onClick={() => {
                  // setCountDown(0);
                  setIterator(i);
                  // setCountDown(5000);
                }}
                className="relative"
              >
                {nav.number == "00" ? (
                  <Image
                    src={blackstar}
                    alt="black star"
                    className="w-10 top-9 left-[2.22rem] absolute h-10"
                  />
                ) : nav.number == "04" ? (
                  <Image
                    src={blackstar}
                    alt="black star"
                    className="w-10 top-9 left-[2.22rem] absolute h-10"
                  />
                ) : (
                  ""
                )}
                <svg className="w-[110px] cursor-pointer h-[110px]">
                  <circle
                    className={`${i == iterator && "animate-circle"}`}
                    // width="50px"
                    // height="50px"
                    fill={i == iterator ? "transparent" : "white"}
                    strokeWidth="3px"
                    stroke={i == iterator ? `${nav.alt}` : "transparent"}
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
                    className="text-transparent"
                  >
                    {nav.number === "00" || nav.number == "04"
                      ? ""
                      : nav.number}
                  </text>
                </svg>
              </div>
            ))}
          </ul>

          <div className="hidden md:flex gap-x-4 px-8">
            <button
              className="bg-white cursor-pointer justify-center rounded-full w-[4rem] h-[4rem] flex items-center"
              onClick={handleDecrement}
            >
              prev
            </button>
            <button
              className="bg-white justify-center rounded-full w-[4rem] h-[4rem] flex items-center"
              onClick={handleIncrement}
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
