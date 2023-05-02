import { NextRequest, NextResponse } from "next/server";
// import { middleware } from "../../../middleware";

export async function POST(request) {
  const { title } = await request.json();
  const res = await fetch(
    `https://jsonplaceholder.typicode.com/todos/${title}`,
    {
      headers: {
        "Content-Type": "application/json",
      },
    }
  );
  const data = await res.json();

  return NextResponse.json(data);
}

// export async function POST() {
//   const res = await fetch(
//     `https://connect.deezer.com/oauth/access_token.php?app_id=598584&secret=30d768fefa3433b032ca7dc1c3408eba&code=fr04ec20e979b07668bb259d1fd4eaad`,
//     {
//       headers: {
//         "Content-Type": "application/json",
//       },
//     }
//   );
//   return NextResponse.json(res);
// }
