"use client";
import Image from "next/image";
import { OutlineLikeIcon, VectorIcon, WhiteLikeIcon } from "@/components/Icons";
import { useStore } from "../store";
import { useRouter } from "next/navigation";

// This component is being used in @components/Charts
const Chart = ({ album, i }) => {
  const router = useRouter();
  const { updateMetadata } = useStore();
  return (
    <div
      key={i}
      className="w-[417px] flex justify-between p-4 items-center h-[96px] rounded-[20px] bg-gray-800 "
    >
      <div
        onClick={() => {
          updateMetadata(album);
          router.push(`/album/${album.uri.split(":")[2]}`);
        }}
        className="flex items-center gap-x-4 cursor-pointer"
      >
        <div>
          <Image
            width={60}
            height={60}
            src={album.artists.items[0].visuals.avatarImage.sources[2].url}
            alt="cover"
            className="rounded-lg"
          />
        </div>
        <div>
          <p className="font-normal text-sm">{album.name}</p>
          <p className="text-[12px]">
            {album.artists.items[0].profile.name}
            {/* waiting */}
          </p>
          <p className="text-[12px]">
            {/* {new Date(chart.track.duration.totalMilliseconds)
                      .toISOString()
                      .slice(11, 19)} */}
            oky
          </p>
        </div>
      </div>
      <div className="w-[37px] cursor-pointer h-[37px] flex justify-center items-center rounded-full border border-red-300 ">
        <OutlineLikeIcon />
      </div>
    </div>
  );
};

export default Chart;
