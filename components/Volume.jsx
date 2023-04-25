import React from "react";
import { VolumeIcon } from "./Icons";

const Volume = () => {
  return (
    <div className="hidden md:flex gap-x-3 items-center">
      <VolumeIcon />
      <div className="w-[100px] h-[3px] bg-white"></div>
    </div>
  );
};

export default Volume;
