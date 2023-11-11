import React from "react";
import Image from "next/image";
import abuja from "@/assets/abuja.png";
import egbeda from "@/assets/egbeda.png";
import festac from "@/assets/festac.png";
import gbagada from "@/assets/gbagada.png";
import Ikeja from "@/assets/Ikeja.png";
// import Ogodu from "@/assets/Ogodu.png";
import Lekki from "@/assets/Lekki.png";
import ojo from "@/assets/ojo.png";
import Yaba from "@/assets/Yaba.png";

const MapRestaurant = () => {
  const restaurants = [
    { name: "EniFruit and Veggie", link: "" },
    { name: "LaCuisine", link: "" },
    { name: "DeJacksparo Shawarma & Grills", link: "" },
    { name: "Smile Nama Suya", link: "" },
    { name: "Midnight-city Lagos", link: "" },
    { name: "Urban Eats Enterprise", link: "" },
    { name: "Jays Dinner", link: "" },
    { name: "Habib Yoghurt And Fura - Garki", link: "" },
    { name: "Taste Atlas-Gbabi", link: "" },
    { name: "Ashabi Licking Fingers", link: "" },
    { name: "EniFruit and Veggie", link: "" },
    { name: "LaCuisine", link: "" },
    { name: "DeJacksparo Shawarma & Grills", link: "" },
    { name: "Smile Nama Suya", link: "" },
    { name: "Midnight-city Lagos", link: "" },
    { name: "Urban Eats Enterprise", link: "" },
    { name: "Jays Dinner", link: "" },
    { name: "Habib Yoghurt And Fura - Garki", link: "" },
    { name: "Taste Atlas-Gbabi", link: "" },
    { name: "Ashabi Licking Fingers", link: "" },
  ];
  return (
    <section className="w-full px-4 overflow-y-hidden">
      <div className="w-full md:divide-x-4 h-[110vh] md:divide-y-0 divide-y-4 divide-black md:divide-black border-4 mt-[10rem] border-black rounded-2xl flex flex-col md:flex-row">
        <div className="w-full map-bg relative md:w-[60%] md:h-auto h-1/2">
          <div
            className="md:w-[30rem] w-full md:rounded-full absolute border-[4px] border-white bottom-0 text-center px-6 md:bottom-10 inset-x-0 mx-auto h-[4rem] 
          md:bg-white/40 bg-white flex items-center justify-center backdrop-blur-md"
          >
            Click on any live location to order from restaurants near you
          </div>
          <a href="/">
            <Image
              className="md:w-[6rem] w-[4rem] top-10 left-10 absolute h-[4rem] md:h-[6rem]"
              src={abuja}
              alt="abuja"
            />
          </a>
          <a href="/">
            <Image
              className="md:w-[6rem] w-[4rem] top-[10rem] left-[1rem] md:right-[20rem] absolute h-[4rem] md:h-[6rem]"
              src={gbagada}
              alt="gbagada"
            />
          </a>
          <a href="/">
            <Image
              className="md:w-[6rem] w-[4rem] top-[10rem] right-[8rem] md:right-[4rem] absolute h-[4rem] md:h-[6rem]"
              src={Lekki}
              alt="Lekki"
            />
          </a>
          <a href="/">
            <Image
              className="md:w-[6rem] w-[4rem] top-[16rem] left-[10rem] absolute h-[4rem] md:h-[6rem]"
              src={Ikeja}
              alt="Lekki"
            />
          </a>
          <a href="/">
            <Image
              className="md:w-[6rem] w-[4rem] top-[20rem] right-[4rem] absolute h-[4rem] md:h-[6rem]"
              src={egbeda}
              alt="Lekki"
            />
          </a>
          <a href="/">
            <Image
              className="md:w-[6rem] w-[4rem] top-[20rem] md:top-[30rem] left-[2rem] absolute h-[4rem] md:h-[6rem]"
              src={festac}
              alt="Lekki"
            />
          </a>
          <a href="/">
            <Image
              className="md:w-[6rem] w-[4rem] md:top-[25rem] top-[12rem] left-[19rem] absolute h-[4rem] md:h-[6rem]"
              src={ojo}
              alt="Lekki"
            />
          </a>
          <a href="/">
            <Image
              className="md:w-[6rem] w-[4rem] top-[4rem] md:top-[30rem] right-[5rem] absolute h-[4rem] md:h-[6rem]"
              src={Yaba}
              alt="Lekki"
            />
          </a>
        </div>
        <div className="w-full md:w-[40%] md:h-full h-1/2">
          <div className="bg-[#99c8ff]  text-3xl px-4 font-semibold py-4 border-b-4 border-black">
            Restaurant
          </div>
          <div className=" w-full p-4  h-full">
            <ul className="w-full pb-[5rem] pr-3 restaurant h-full space-y-4 overflow-y-scroll">
              {restaurants.map((item, i) => (
                <li
                  key={i}
                  className="border cursor-pointer hover:bg-slate-100 rounded-md border-black px-4 text-gray-400 text-xl py-5"
                >
                  {item.name}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MapRestaurant;
