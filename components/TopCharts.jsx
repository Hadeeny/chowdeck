"use client";
import Image from "next/image";
import { OutlineLikeIcon, VectorIcon, WhiteLikeIcon } from "@/components/Icons";
import cover1 from "../assets/cover1.png";
import { useQuery } from "@tanstack/react-query";

const getAlbums = async () => {
  const res = await fetch("/api/accesscode");
  if (!res.ok) {
    // This will activate the closest `error.js` Error Boundary
    throw new Error("Failed to fetch data");
  }

  return res.json();
};

const TopCharts = () => {
  const { data, error, isLoading } = useQuery({
    queryFn: getAlbums,
    queryKey: ["albums"],
  });
  if (error)
    return (
      <>
        <p>An error occured</p>
      </>
    );
  if (isLoading) return <p>Data is loading</p>;
  if (data);
  const album = data.data.data.album;
  // const topCharts = charts.slice(0, 3);
  console.log(album);
  return (
    <>
      <div className="hidden md:flex gap-y-4 flex-col">
        <h3 className="text-[24px]">Top Charts</h3>
        <div className="flex flex-col gap-y-3">
          {/* first chart */}
          {/* {topCharts.map((chart, i) => ( */}
          <div className="w-[417px] flex justify-between p-4 items-center h-[96px] rounded-[20px] bg-gray-800 ">
            <div className="flex items-center gap-x-4">
              <div>
                <Image
                  width={60}
                  height={60}
                  src={
                    album.artists.items[0].visuals.avatarImage.sources[1].url
                  }
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
          {/* ))} */}
        </div>
      </div>
    </>
  );
};

export default TopCharts;
