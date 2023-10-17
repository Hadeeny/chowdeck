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
  return (
    <section className="w-full px-4 overflow-y-hidden">
      <div className="w-full md:divide-x-4 h-[110vh] md:divide-y-0 divide-y-4 divide-black md:divide-black border-4 mt-[10rem] border-black rounded-2xl flex flex-col md:flex-row">
        <div className="w-full map-bg relative md:w-[60%] md:h-auto h-1/2">
          <a href="/">
            <Image
              className="w-[6rem] top-10 left-10 absolute h-[6rem]"
              src={abuja}
              alt="abuja"
            />
          </a>
          <a href="/">
            <Image
              className="w-[6rem] top-[10rem] left-[20rem] absolute h-[6rem]"
              src={gbagada}
              alt="gbagada"
            />
          </a>
          <a href="/">
            <Image
              className="w-[6rem] top-[6rem] right-[4rem] absolute h-[6rem]"
              src={Lekki}
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
              <li className="border rounded-md border-black px-4 text-gray-400 text-xl py-5">
                lore
              </li>
              <li className="border rounded-md border-black px-4 text-gray-400 text-xl py-5">
                lore
              </li>
              <li className="border rounded-md border-black px-4 text-gray-400 text-xl py-5">
                lore
              </li>
              <li className="border rounded-md border-black px-4 text-gray-400 text-xl py-5">
                lore
              </li>
              <li className="border rounded-md border-black px-4 text-gray-400 text-xl py-5">
                lore
              </li>
              <li className="border rounded-md border-black px-4 text-gray-400 text-xl py-5">
                lore
              </li>
              <li className="border rounded-md border-black px-4 text-gray-400 text-xl py-5">
                lore
              </li>
              <li className="border rounded-md border-black px-4 text-gray-400 text-xl py-5">
                lore
              </li>
              <li className="border rounded-md border-black px-4 text-gray-400 text-xl py-5">
                lore
              </li>
              <li className="border rounded-md border-black px-4 text-gray-400 text-xl py-5">
                lore
              </li>
              <li className="border rounded-md border-black px-4 text-gray-400 text-xl py-5">
                lore
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MapRestaurant;
