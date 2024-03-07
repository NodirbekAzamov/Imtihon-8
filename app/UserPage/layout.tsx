import type { Metadata } from "next";
import { Inter } from "next/font/google";
// import "./global.css"
import "bootstrap/dist/css/bootstrap.min.css";
import Sidebar from "../Sidebar/page";
import UserSidebar from "./UserSidebar/page";
const inter = Inter({ subsets: ["latin"] });
export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className=" flex">
      <div className=" flex-[1]">
        <UserSidebar/>
      </div>
      <div className="flex-[4]">
        {children}
      </div>
    </div>
  );
}
