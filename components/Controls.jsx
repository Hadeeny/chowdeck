import React from "react";
import {
  NextIcon,
  PlayIcon,
  PreviousIcon,
  RepeatOneIcon,
  ShuffleIcon,
  VolumeIcon,
} from "./Icons";

const Controls = () => {
  return (
    <div className="flex flex-col items-center gap-y-9">
      {/* controls */}
      <div className="flex gap-x-11">
        <div className="hidden md:block">
          <ShuffleIcon />
        </div>
        <div className="hidden md:block">
          <PreviousIcon />
        </div>
        <div
          className="rounded-full w-6 h-6 flex items-center justify-center bg-[#FACD66]
"
        >
          <PlayIcon />
        </div>
        <NextIcon className={`rotate-180`} />
        <div className="hidden md:block">
          <RepeatOneIcon />
        </div>
        {/* <VolumeIcon /> */}
      </div>
      <div className="hidden md:block">
        <div className="w-[749px] h-[4px] bg-white"></div>
      </div>
    </div>
  );
};

export default Controls;
