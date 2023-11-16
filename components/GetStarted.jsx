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
    backgroundColor: "rgb(22 101 52)",
    alt: "rgb(220 252 231)",
    number: "00",
  },
  {
    id: 2,
    image: image2,
    title: "Download the app",
    backgroundColor: "rgb(147 197 253)",
    alt: "rgb(168 85 247)",
    number: "01",
  },
  {
    id: 3,
    image: image3,
    title: "Explore categories",
    backgroundColor: "rgb(253 224 71)",
    alt: "#000000",
    number: "02",
  },
  {
    id: 4,
    image: image4,
    title: "Place Order",
    backgroundColor: "rgb(244 114 182)",
    alt: "rgb(5 46 22)",
    number: "03",
  },
  {
    id: 5,
    image: image5,
    title: "Enjoy your meal",
    backgroundColor: "#fff4d4",
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
    <div className="px-4 space-y-8  relative z-10 md:px-8 my-9">
      <div
        style={{ background: data[iterator].backgroundColor }}
        className={`w-full py-4 rounded-xl`}
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
                className="relative "
              >
                {nav.number == "00" ? (
                  <div
                    // src={blackstar}
                    // alt="black star"
                    className="w-10 top-[23px] left-[23px] md:top-[43px] md:left-[2.68rem] absolute h-10"
                  >
                    <svg
                      width="21"
                      height="24"
                      fill={
                        iterator == i ? data[iterator].backgroundColor : "#000"
                      }
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 142 170"
                      color={
                        iterator == i ? nav.alt : data[iterator].backgroundColor
                      }
                    >
                      <path
                        d="M147.088 74.442a55.722 55.722 0 0 1-2.791 17.472 73.102 73.102 0 0 1-26.43 39.198h-.015L73.823 168l-48.089-40.248C12.806 114.703 1.991 97.022 1 76.475a72.934 72.934 0 0 1 144.595-16.647c.078.427.04.868-.111 1.275a55.929 55.929 0 0 1 1.605 13.34Z"
                        fill="currentColor"
                      />
                      <path
                        d="M74.248 89.583c15.853 0 28.703-12.85 28.703-28.703 0-15.852-12.85-28.703-28.703-28.703-15.852 0-28.703 12.85-28.703 28.703 0 15.852 12.85 28.703 28.703 28.703Z"
                        fill="color"
                      />
                    </svg>
                  </div>
                ) : nav.number == "04" ? (
                  <div
                    // src={blackstar}
                    // alt="black star"
                    className="w-10 top-[15.5px] left-[15.5px] md:top-[35px] md:left-[2.20rem] absolute h-10"
                  >
                    <svg
                      width="40"
                      height="40"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                      // class="text-pastels-yellow"
                      color={
                        iterator == i ? nav.alt : data[iterator].backgroundColor
                      }
                    >
                      <path
                        d="M20 0s-.834 17.324-20 20c0 0 16.453.315 20 20 0 0 1.13-17.018 20-20 0 0-17.93-2.523-20-20Z"
                        fill="currentColor"
                      />
                    </svg>
                  </div>
                ) : (
                  ""
                )}
                <svg className="w-[70px] md:w-[110px] cursor-pointer h-[70px] md:h-[110px]">
                  <circle
                    className={`${i == iterator && "animate-circle"}`}
                    // width="50px"
                    // height="50px"
                    fill={i == iterator ? "transparent" : data[iterator].alt}
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
                    fill={
                      i == iterator ? nav.alt : data[iterator].backgroundColor
                    }
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
              style={{ background: data[iterator].alt }}
              className="cursor-pointer justify-center rounded-full w-[4rem] h-[4rem] flex items-center"
              onClick={handleDecrement}
            >
              <svg
                stroke="currentColor"
                fill="currentColor"
                stroke-width="0"
                viewBox="0 0 448 512"
                color={data[iterator].backgroundColor}
                // style="color:#038B5C"
                height="1em"
                width="1em"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M257.5 445.1l-22.2 22.2c-9.4 9.4-24.6 9.4-33.9 0L7 273c-9.4-9.4-9.4-24.6 0-33.9L201.4 44.7c9.4-9.4 24.6-9.4 33.9 0l22.2 22.2c9.5 9.5 9.3 25-.4 34.3L136.6 216H424c13.3 0 24 10.7 24 24v32c0 13.3-10.7 24-24 24H136.6l120.5 114.8c9.8 9.3 10 24.8.4 34.3z" />
              </svg>
            </button>
            <button
              style={{ background: data[iterator].alt }}
              className="justify-center rounded-full w-[4rem] h-[4rem] flex items-center"
              onClick={handleIncrement}
            >
              <svg
                stroke="currentColor"
                fill="currentColor"
                stroke-width="0"
                viewBox="0 0 448 512"
                style={{ rotate: "180deg" }}
                color={data[iterator].backgroundColor}
                // style="color:#038B5C"
                height="1em"
                width="1em"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M257.5 445.1l-22.2 22.2c-9.4 9.4-24.6 9.4-33.9 0L7 273c-9.4-9.4-9.4-24.6 0-33.9L201.4 44.7c9.4-9.4 24.6-9.4 33.9 0l22.2 22.2c9.5 9.5 9.3 25-.4 34.3L136.6 216H424c13.3 0 24 10.7 24 24v32c0 13.3-10.7 24-24 24H136.6l120.5 114.8c9.8 9.3 10 24.8.4 34.3z" />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default GetStarted;
// absolute -translate-y-1/2 -translate-x-1/2 left-1/2 top-1/2
