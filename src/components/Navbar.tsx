import Link from "next/link";
import React from "react";

const Navbar = () => {
  return (
    <nav className="absolute right-0 top-0 p-4 md:px-8 flex gap-4 z-50 text-gray-400">
      <Link href="/blogs">
        <button className="underline-offset-4 p-2 hover:text-white duration-200">
          blogs
        </button>
      </Link>
      <button className="underline-offset-4 p-2 hover:text-white duration-200">
        resume
      </button>
    </nav>
  );
};

export default Navbar;
