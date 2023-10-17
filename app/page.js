import GetStarted from "@/components/GetStarted";
import HasYouCovered from "@/components/HasYouCovered";
import Hero from "@/components/Hero";
import MapRestaurant from "@/components/MapRestaurant";
import TryTheApp from "@/components/TryTheApp";
import path from "@/assets/icons/svgpath.svg";
import Image from "next/image";
import Link from "next/link";

const Home = () => {
  return (
    <main className="bg-white pb-[4rem]">
      <Hero />
      <TryTheApp />
      <div className="-space-y-[20rem] relative md:-space-y-[50rem]">
        <GetStarted />
        <HasYouCovered />
        {/* <div className="w-full bg-white h-[20rem]"></div> */}
        <Image
          alt="path"
          className="absolute z-[200000] -bottom-10 inset-x-0"
          src={path}
        />
      </div>
      <MapRestaurant />
      {/* <div className="overflow-y-scroll w-[10rem] mt-[2rem] h-[14rem]">
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Possimus ut
        voluptatum neque minus architecto est hic, dicta repudiandae, natus
        tempora reiciendis velit officiis consequatur assumenda. Modi voluptatem
        dolore reiciendis? Recusandae.
      </div> */}
      <div
        className="my-10 text-center font-bold text-[2rem] flex justify-center items-center rounded-lg bg-chow-primary border-[3.5px] border-black 
      mx-auto w-[14rem] gap-x-2 tracking-tighter h-[4.1rem]"
      >
        <span className="w-4 h-4 bg-red-300 border-[3.5px] rounded-full border-black "></span>
        <span>Street Cred</span>
      </div>
      <Link
        href={"/"}
        className="my-10 text-white text-center font-semibold text-xl flex justify-center items-center rounded-lg bg-blue-400  
      mx-auto w-[16rem] gap-x-2 tracking-tighter h-[3rem]"
      >
        <span>Join our community</span>
      </Link>
    </main>
  );
};
export default Home;
