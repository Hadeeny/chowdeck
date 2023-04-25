import React from "react";
import thumb from "../assets/cover1.png";
import Image from "next/image";

const Thumbnail = () => {
  return (
    <div className="flex items-center gap-x-3">
      <div className="w-12 h-12">
        <Image
          src={thumb}
          className="w-full h-full object-contain"
          alt="thumbnai"
        />
      </div>
      <div className="flex flex-col">
        <p>Seasons in</p>
        <p>James</p>
      </div>
    </div>
  );
};

export default Thumbnail;
