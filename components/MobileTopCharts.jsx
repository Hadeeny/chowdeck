"use client";
import React from "react";
import cover1 from "../assets/cover1.png";
import Image from "next/image";
import { OutlineLikeIcon } from "./Icons";
import useChartQueries from "@/hooks/useChartQueries";
import { getTotalDuration } from "./Chart";
import { useRouter } from "next/navigation";
import { useStore } from "@/store";
const Chart = ({ key, album }) => {
  const router = useRouter();
  const { updateMetadata } = useStore();
  return (
    <li
      onClick={() => {
        updateMetadata(album);
        router.push(`/album/${album.uri.split(":")[2]}`);
      }}
      key={key}
      className="w-[323px] p-4 flex justify-between rounded-[20px] h-[233px] bg-gray-900 "
    >
      <div className="flex flex-col justify-between">
        <div className="w-[108px] h-[99px] rounded-lg">
          <Image
            className="w-full h-full object-contain"
            width={60}
            height={60}
            src={album.artists.items[0].visuals.avatarImage.sources[2].url}
            alt="album"
          />
        </div>
        <p>{album.name}</p>
        <p> {album.artists.items[0].profile.name} </p>
        <p>{getTotalDuration(album.tracks.items)}</p>
      </div>
      <div className="w-[37px] cursor-pointer h-[37px] flex justify-center items-center rounded-full border border-red-300 ">
        <OutlineLikeIcon />
      </div>
    </li>
  );
};

const MobileTopCharts = () => {
  const [queryResults] = useChartQueries();
  return (
    <div className="overflow-x-hidden md:hidden block w-[90vw] mt-10">
      <ul className="grid w-full grid-flow-col px-4 scroll-auto gap-4 overflow-y-auto overflow-x-scroll overscroll-x-contain">
        {queryResults.map((res, i) => (
          <>
            {res.isLoading ? (
              <p>data is loading</p>
            ) : res.error ? (
              <p>an error as occured</p>
            ) : (
              <Chart key={i} album={res.data.data.data.album} />
            )}
          </>
        ))}
      </ul>
    </div>
  );
};

export default MobileTopCharts;
