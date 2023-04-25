import Image from "next/image";
import React from "react";
import cover2 from "../../../assets/cover2.png";
import cover from "../../../assets/tomorrow.png";
import {
  MoreVerticalIcon,
  OutlineLikeIcon,
  OutlineWhiteLikeIcon,
  PlayIcon2,
} from "@/components/Icons";
const page = () => {
  return (
    <div className="relative px-3 md:px-6 w-full">
      {/* <div className="absolute -z-10 saturate-50 w-screen h-screen inset-0">
        <Image src={cover} className="w-full h-full object-cover" />
      </div> */}
      <div className="w-full flex flex-col md:flex-row items-end gap-x-7">
        <div className="md:w-[284px] w-full md:h-[284px] rounded-[35px]">
          <Image src={cover} className="w-full h-full" alt="cover photo" />
        </div>
        <div className="flex gap-y-2 flex-col">
          <h3 className="text-[35px] text-[#A4C7C6]">Tomorrow's tunes</h3>
          <p className="max-w-md">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam,
            purus sit amet luctus venenatis
          </p>
          <p>64 songs ~ 16 hrs+</p>
          <div className="flex gap-x-1 items-center">
            <button className="p-3 bg-[#34363a] flex gap-x-3 items-center rounded-full">
              <PlayIcon2 />
              <span>Play all</span>
            </button>
            <button className="p-3 bg-[#34363a] flex gap-x-3 items-center rounded-full">
              <PlayIcon2 />
              <span>Add to Collection</span>
            </button>
          </div>
        </div>
      </div>
      {/* Music list */}
      <div className="flex flex-col gap-y-4 w-full mt-14 mb-40">
        {/* first item */}
        <div className="w-full rounded-lg flex bg-[#26292d] justify-between items-center py-2 px-3">
          <div className="flex gap-x-2 md:gap-x-[10rem] items-center">
            <div className="flex gap-x-5 items-center">
              <Image alt="cover" width={40} height={40} src={cover2} />
              <div className="hidden md:block">
                <OutlineWhiteLikeIcon />
              </div>
            </div>
            <div className="flex flex-col sm:gap-x-[5rem] gap-x-[15rem] lg:flex-row">
              <div>Dead man walking - Jon Bellion</div>
              <div>traslation</div>
            </div>
          </div>

          <div className="flex items-center sm:gap-x-[5rem] gap-x-[15rem] flex-col-reverse lg:flex-row">
            <div>3:44</div>
            <div>
              <MoreVerticalIcon />
            </div>
          </div>
        </div>
        {/* second item */}
        <div className="w-full rounded-lg flex bg-[#26292d] justify-between items-center py-2 px-3">
          <div className="flex gap-x-2 md:gap-x-[10rem] items-center">
            <div className="flex gap-x-5 items-center">
              <Image alt="cover" width={40} height={40} src={cover2} />
              <div className="hidden md:block">
                <OutlineWhiteLikeIcon />
              </div>
            </div>
            <div className="flex flex-col sm:gap-x-[5rem] gap-x-[15rem] lg:flex-row">
              <div>Dead man walking - Jon Bellion</div>
              <div>traslation</div>
            </div>
          </div>

          <div className="flex items-center sm:gap-x-[5rem] gap-x-[15rem] flex-col-reverse lg:flex-row">
            <div>3:44</div>
            <div>
              <MoreVerticalIcon />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default page;
