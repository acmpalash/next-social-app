"use client";
import { FaParachuteBox } from "react-icons/fa";
import { RiHome4Fill } from "react-icons/ri";
import Link from "next/link";
import { SignedIn, SignedOut, SignInButton, SignOutButton } from "@clerk/nextjs";

export default function LeftSidebar() {
  return (
    <div className="flex flex-col p-3 justify-between h-screen items-center">
      <div className="flex flex-col gap-4 p-3">
        <Link
          href="/"
          className="w-46 h-46 cursor-pointer p-3 justify-center hover:bg-gray-100 rounded-full transition-all duration-200"
        >
          <FaParachuteBox className="text-red-900 text-6xl" />
        </Link>
        <Link
          href="/"
          className="flex items-center p-3  hover:bg-gray-100 rounded-full transition-all duration-200 gap-2 w-fit"
        >
          <RiHome4Fill className="w-10 h-10 gap-3 text-4xl text-orange-600" />
          <span className="font-bold xl:inline text-3xl">Home</span>
        </Link>
        <button className="bg-blue-500 text-white text-4xl rounded-full hover:brightness-95 transition-all duration-200 w-48 h-12 shadow-md xl:inline">
          <SignedIn>
            <SignOutButton />
          </SignedIn>
          <SignedOut>
            <SignInButton />
          </SignedOut>
        </button>
      </div>
    </div>
  );
}
