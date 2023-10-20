import Image from "next/image";
import Link from "next/link";
import React from "react";
import vec1 from "@/assets/vec1.webp";
import vec2 from "@/assets/vec2.webp";
import vec3 from "@/assets/vec4.webp";
import bigphone from "@/assets/bigphone.png";
import pastry from "@/assets/icons/Pastry.svg";

const joinsec = [{ image: vec1 }, { image: vec2 }, { image: vec3 }];

const TryTheApp = () => {
  return (
    <div className="overflow-hidden px-4 md:px-8">
      <ul className="bg-chow-primary text-lg rounded-full gap-x-2 p-1 flex items-center max-w-min mx-auto mt-12">
        <li className="px-4 bg-[#ffc501] rounded-full py-2">Customer</li>
        <li className="px-4 rounded-full py-2">Vendor</li>
        <li className="px-4 rounded-full py-2">Rider</li>
      </ul>
      <div className="text-center mt-8">
        <h2 className="text-3xl font-bold">Try the App</h2>
        <p className="max-w-md text-base my-8 mx-auto">
          Have meals delivered to you within minutes from a wide variety of
          restaurants ranging from African to Continental cuisines to satisfy
          your cravings.
        </p>

        <div className="flex my-8 gap-x-6 max-w-min mx-auto">
          <div className=" bg-chow-green w-12 h-12 rounded-full"></div>
          <div className=" bg-chow-green w-12 h-12 rounded-full"></div>
        </div>
        <div className="md:w-1/3 w-2/3 relative mx-auto">
          <Image className="w-full h-full" src={bigphone} />
          <Image
            className="w-1/3 h-full -top-[15rem] md:-top-[23rem] -right-9 absolute"
            src={pastry}
          />
        </div>
      </div>

      <div>
        <h2 className="md:text-7xl text-3xl  my-14 text-center text-slate-300 font-semibold">
          Join our growing network
        </h2>
        {/* CARDS */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 grid-cols-1 my-8 gap-4 items-center">
          {joinsec.map((item, i) => (
            <div key={i} className="border-[4px] rounded-3xl border-black">
              <div className="px-4 py-8 flex gap-y-8 items-start flex-col">
                <p className="font-bold text-3xl">Start Selling</p>
                <p className="text-lg text-left">
                  Are you a restaurant owner looking to grow your business?
                  Reach new customers when you join our network.
                </p>
                <Link href="/">See more</Link>
              </div>
              <div>
                <Image src={item.image} />
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default TryTheApp;
