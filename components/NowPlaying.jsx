import React from "react";
import Thumbnail from "./Thumbnail";
import Controls from "./Controls";
import Volume from "./Volume";

const NowPlaying = () => {
  return (
    <div
      className="text-white h-[125px] w-full fixed inset-x-0 
    bottom-0 bg-black/50 px-7 md:px-24 backdrop-blur-lg"
    >
      <div className="flex w-full justify-between items-center h-full">
        <>
          <Thumbnail />
        </>
        <>
          <Controls />
        </>
        <>
          <Volume />
        </>
      </div>
    </div>
  );
};

export default NowPlaying;
