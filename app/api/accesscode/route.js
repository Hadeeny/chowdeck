import { NextRequest, NextResponse } from "next/server";
// import { middleware } from "../../../middleware";
export async function GET() {
  const res = await fetch(
    "https://spotify23.p.rapidapi.com/album_metadata/?id=2jJReDZqTuAxr4R0ItimZc&offset=0&limit=300",
    {
      headers: {
        "X-RapidAPI-Key": "ea7fa97a79msh722bd57fbebf4aep13320bjsn7072c7fc2e6c",
        "X-RapidAPI-Host": "spotify23.p.rapidapi.com",
      },
      // params: {
      //   id: "3IBcauSj5M2A6lTeffJzdv",
      //   offset: "0",
      //   limit: "300",
      // },
    }
  );
  const data = await res.json();

  return NextResponse.json({ data });
}

// use this id for jon bellion album
// 2jJReDZqTuAxr4R0ItimZc
// 3IBcauSj5M2A6lTeffJzdv
