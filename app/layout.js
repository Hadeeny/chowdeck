import Header from "@/components/Header";
import "./globals.css";
// import Sidebar from "@/components/Sidebar";
// import NowPlaying from "@/components/InfiiniteMarquee";
// import QueryWrapper from "../utils/QueryWrapper";

export const metadata = {
  title: "Chowdeck remastered",
  description: "The next gen food app",
};

export default function RootLayout({ children, session }) {
  return (
    <html lang="en">
      <body className="">
        {/* <QueryWrapper> */}
        <Header />
        <div>{children}</div>
        {/* </QueryWrapper> */}
      </body>
    </html>
  );
}
