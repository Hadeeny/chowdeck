import React from "react";
import vec1 from "@/assets/vec1.webp";
import vec2 from "@/assets/vec2.webp";
import vec3 from "@/assets/vec4.webp";
import Link from "next/link";
import Image from "next/image";
import noodles from "@/assets/icons/noodles.svg";
import blog1 from "@/assets/blogg1.png";
import fitfam from "@/assets/icons/Pack.svg";

const Stories = () => {
  const joinsec = [{ image: blog1 }, { image: blog1 }, { image: blog1 }];
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
            <div className="w-full border-b-[4px] border-black">
              <Image
                className="rounded-t-lg object-contain w-full h-full"
                src={item.image}
              />
            </div>
            <div className="px-4 py-8 h-[10rem] w-full overflow-hidden flex gap-y-4 items-start flex-col">
              <p className="font-semibold text-center">
                CHOWDECK ANNOUNCES CHICKEN REPUBLIC’S INTEGRATION INTO ITS
                ECOSYSTEM AS A NEW RESTAURANT PARTNER
              </p>
              <p className="text-center">
                Femi Aluko, Co-Founder and Chief Executive Officer at Chowdeck
                announced today that Chicken Republic
              </p>
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
