import React from "react";
import vec1 from "@/assets/vec1.webp";
import vec2 from "@/assets/vec2.webp";
import vec3 from "@/assets/vec4.webp";
import Link from "next/link";
import Image from "next/image";
import noodles from "@/assets/icons/noodles.svg";
import read2 from "@/assets/icons/read2.svg";
import blog1 from "@/assets/blog1.png";
import blog2 from "@/assets/blog2.png";
import blog3 from "@/assets/blog3.png";
import fitfam from "@/assets/icons/Pack.svg";

const Stories = () => {
  const joinsec = [
    {
      image: blog1,
      text: "Chowdeck welcomes Shoprite, Nigeria’s Largest Supermarket Chain, onboard in an exciting partnership!",
      title:
        "CHOWDECK PARTNERS WITH SHOPRITE, NIGERIA’S LARGEST SUPERMARKET CHAIN, TO TRANSFORM GROCERY LOGISTICS ACROSS THE COUNTRY",
    },
    {
      image: blog2,
      text: "We've expanded our stellar operations to a few new cities! Are we in your neighbourhood? Come find out!",
      title:
        "NEW CITIES, SAME US: WE'RE NOW IN ASABA, BENIN CITY AND A FEW OTHERS!",
    },
    {
      image: blog3,
      text: "Femi Aluko, Co-Founder and Chief Executive Officer at Chowdeck welcomes Eat'N'Go's Coldstone Creamery and Pinkberry Yogu..",
      title:
        "CHOWDECK WELCOMES EAT'N'GO'S COLDSTONE CREAMERY AND PINKBERRY YOGURT!",
    },
  ];
  return (
    <div className="px-4">
      <div className="text-[4rem] flex gap-x-2 font-bold">
        Stories
        <Image src={noodles} />
      </div>
      {/* CARDS */}
      <div className="grid md:grid-cols-2 lg:grid-cols-3 grid-cols-1 my-8 gap-4 items-center">
        {joinsec.map((item, i) => (
          <div
            key={i}
            className="border-[4px] w-full pb-2 rounded-xl border-black"
          >
            <div className="w-full h-[15rem] border-b-[4px] border-black">
              <Image
                className="rounded-t-lg object-cover w-full h-full"
                src={item.image}
              />
            </div>
            <div className="px-4 py-8 h-[10rem] w-full overflow-hidden flex gap-y-4 items-start flex-col">
              <p className="font-semibold text-center">{item.title}</p>
              <p className="text-center">{item.text}</p>
            </div>
            <Link
              href={"/"}
              className="w-11/12 font-normal text-lg mx-auto flex justify-center items-center rounded-md h-[3rem] bg-[#f2f6f5ff]"
            >
              Read More
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Stories;
