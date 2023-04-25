import user1 from "../assets/user1.png";
import user2 from "../assets/user2.png";
import Image from "next/image";
import { OutlineLikeIcon, VectorIcon, WhiteLikeIcon } from "@/components/Icons";
import rema from "../assets/album1.png";

const Hero = () => {
  return (
    <div className="w-full h-[503px] md:w-[686px] md:h-[373px] relative flex px-12 bg-[#609EAF]  rounded-[40px]">
      <div className="py-9 w-full md:w-1/2 h-full flex flex-col items-start justify-between">
        <p>Curated Playlists</p>
        <div>
          <h3 className="text-[35px]">R&B Hits</h3>
          <p>
            All mine, Lie again, Petty call me everyday, Out of time, No love,
            Bad habit, and so much more
          </p>
        </div>
        <div className="flex items-center gap-x-4">
          <div className="flex -space-x-3">
            <Image src={user1} alt="user" />
            <Image src={user2} alt="user" />
            <Image src={user1} alt="user" />
            <Image src={user2} alt="user" />
            <Image src={user1} alt="user" />
            <Image src={user2} alt="user" />
          </div>
          <div className="flex gap-x-3 items-center">
            <div>
              <WhiteLikeIcon />
            </div>
            <div>31K likes</div>
          </div>
        </div>
      </div>
      <div className="w-1/2 hidden md:block">
        <div className="w-full h-full">
          <Image
            className="w-full relative z-10 object-cover h-full"
            src={rema}
          />
        </div>
      </div>
      <div className="absolute hidden md:block md:right-5">
        {/* <VectorIcon className={""} /> */}
      </div>
    </div>
  );
};

export default Hero;
