"use client";
import { useStore } from "../../../store";
import Image from "next/image";
import React from "react";
import cover2 from "../../../assets/cover2.png";
import cover from "../../../assets/tomorrow.png";
import { useQuery } from "@tanstack/react-query";
import {
  MoreVerticalIcon,
  OutlineLikeIcon,
  OutlineWhiteLikeIcon,
  PlayIcon2,
} from "@/components/Icons";

const getAlbum = async (id) => {
  const res = await fetch(
    // "api/accesscode"
    `https://spotify23.p.rapidapi.com/album_tracks/?id=${id}&offset=0&limit=300`,
    {
      headers: {
        "X-RapidAPI-Key": "ea7fa97a79msh722bd57fbebf4aep13320bjsn7072c7fc2e6c",
        "X-RapidAPI-Host": "spotify23.p.rapidapi.com",
      },
    }
  );
  if (!res.ok) {
    // This will activate the closest `error.js` Error Boundary
    throw new Error("Failed to fetch data");
  }

  return res.json();
};

const page = ({ params }) => {
  const { metadata } = useStore();
  const { albumId } = params;
  const { data, error, isLoading } = useQuery({
    queryFn: () => getAlbum(albumId),
    queryKey: ["album", albumId],
  });
  if (isLoading) return <p>data is loading</p>;
  if (error) return <p>an error occured</p>;
  if (data) {
    const album = data.data.album;
    console.log(metadata);
    return (
      <div className="relative px-3 md:px-6 w-full">
        {/* <div className="absolute -z-10 saturate-50 w-screen h-screen inset-0">
          <Image src={cover} className="w-full h-full object-cover" />
        </div> */}
        <div className="w-full flex flex-col md:flex-row items-end gap-x-7">
          <div className="md:w-[284px] w-full md:h-[284px] rounded-[35px]">
            <Image
              width={284}
              height={284}
              src={metadata.coverArt.sources[0].url}
              className="w-full h-full"
              alt="cover photo"
            />
          </div>
          <div className="flex gap-y-2 flex-col">
            <h3 className="text-[35px] text-[#A4C7C6]">{album.name}</h3>
            <p className="max-w-md">{metadata.copyright.items[0].text}</p>
            <p>{album.tracks.items.length} songs ~ 16 hrs+</p>
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
          {album.tracks.items.map((track, i) => (
            <div className="w-full rounded-lg flex bg-[#26292d] justify-between items-center py-2 px-3">
              <div className="flex gap-x-2 md:gap-x-[10rem] items-center">
                <div className="flex gap-x-5 items-center">
                  <Image
                    alt="cover"
                    width={40}
                    height={40}
                    src={
                      metadata.artists.items[0].visuals.avatarImage.sources[2]
                        .url
                    }
                  />
                  <div className="hidden md:block">
                    <OutlineWhiteLikeIcon />
                  </div>
                </div>
                <div className="flex flex-col sm:gap-x-[5rem] gap-x-[15rem] lg:flex-row">
                  <div>
                    {track.track.name} -{" "}
                    {track.track.artists.items[0].profile.name}
                  </div>
                  <div>{album.name}</div>
                </div>
              </div>

              <div className="flex items-center sm:gap-x-[5rem] gap-x-[15rem] flex-col-reverse lg:flex-row">
                <div>
                  {new Date(track.track.duration.totalMilliseconds)
                    .toISOString()
                    .slice(11, 19)}
                </div>
                <div>
                  <MoreVerticalIcon />
                </div>
              </div>
            </div>
          ))}
          {/* second item */}
        </div>
      </div>
    );
  }
};

export default page;
