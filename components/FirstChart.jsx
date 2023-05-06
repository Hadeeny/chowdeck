"use client";
import Image from "next/image";
// import { useStore } from "../store";
import { OutlineLikeIcon, VectorIcon, WhiteLikeIcon } from "@/components/Icons";
import { useQuery } from "@tanstack/react-query";
import Link from "next/link";
import { useStore } from "../store";
import { useRouter } from "next/navigation";

const getFirstChart = async (API_KEY) => {
  const res = await fetch(
    "api/accesscode"
    // "https://spotify23.p.rapidapi.com/album_metadata/?id=6lI21W76LD0S3vC55GrfSS&offset=0&limit=300",
    // {
    //   headers: {
    //     "X-RapidAPI-Key": "ea7fa97a79msh722bd57fbebf4aep13320bjsn7072c7fc2e6c",
    //     "X-RapidAPI-Host": "spotify23.p.rapidapi.com",
    //   },
    // }
  );
  if (!res.ok) {
    // This will activate the closest `error.js` Error Boundary
    throw new Error("Failed to fetch data");
  }

  return res.json();
};

const FirstChart = ({ API_KEY }) => {
  //   const { addToAlbum } = useStore();
  const router = useRouter();
  const { updateMetadata, addFirstChart, addToCharts } = useStore();
  const { data, error, isLoading } = useQuery({
    queryFn: getFirstChart,
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

  return (
    <>
      <div className="w-[417px] flex justify-between p-4 items-center h-[96px] rounded-[20px] bg-gray-800 ">
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
    </>
  );
};

export default FirstChart;
