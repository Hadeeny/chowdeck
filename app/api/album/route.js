import { NextResponse } from "next/server";

export async function GET(request) {
  const { searchParams } = new URL(request.url);
  const id = searchParams.get("albumId");
  //   const id = searchParams.get('id');
  //   const res = await fetch(`https://data.mongodb-api.com/product/${id}`, {
  //     headers: {
  //       'Content-Type': 'application/json',
  //       'API-Key': process.env.DATA_API_KEY,
  //     },
  //   });
  //   const product = await res.json();

  return NextResponse.json({ message: `your id is ${id}` });
}
