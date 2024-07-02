import Link from "next/link";
import React from "react";

const NotFound = () => {
  return (
    <main className="flex flex-col justify-center items-center min-h-screen bg-gradient-radial from-black to-[#111]">
      <div className="flex flex-col justify-center items-center gap-4">
        <h1 className="text-5xl font-semibold">Are you drunk ?</h1>
        <p className="text-lg text-[#999]">404 | Page Not Found !</p>
        <Link
          href="/"
          className="py-2 px-4 bg-white hover:bg-gray-300 duration-100 rounded-xl text-black font-semibold"
        >
          Back to Home
        </Link>
      </div>
    </main>
  );
};

export default NotFound;
