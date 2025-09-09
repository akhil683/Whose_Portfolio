"use client";
import Link from "next/link";
import React, { useState } from "react";
import { CgMenuRight } from "react-icons/cg";

const Navbar = () => {
  const [showMenu, setShowMenu] = useState(false);
  const MenuPosition = showMenu ? "left-0" : "-left-[100%]";
  return (
    <nav className="fixed right-0 top-0 p-4 md:px-8 z-[9999] text-gray-400">
      <div className="flex gap-4 max-md:hidden">
        <Link href="/">
          <button className="underline-offset-4 p-2 hover:text-white duration-200">
            Home
          </button>
        </Link>
        <Link href="/blogs">
          <button className="underline-offset-4 p-2 hover:text-white duration-200">
            blogs
          </button>
        </Link>
        <Link href="/music">
          <button className="underline-offset-4 p-2 hover:text-white duration-200">
            Music
          </button>
        </Link>
      </div>

      {/* Mobile Menu */}
      <div className="md:hidden">
        <div className="w-full flex justify-end">
          <button
            onClick={() => setShowMenu(true)}
            className="text-3xl text-[#777]"
          >
            <CgMenuRight />
          </button>
        </div>
        <div
          className={`${!showMenu ? "hidden" : "block"} fixed top-0 left-0 w-screen h-screen bg-[#111]/40`}
          onClick={() => setShowMenu(false)}
        ></div>
        <div
          className={`${MenuPosition} ease-out duration-300 fixed top-0 z-50 h-screen bg-[#111]`}
        >
          <div
            onClick={() => setShowMenu(false)}
            className="flex flex-col gap-4 text-xl font-semibold px-24 py-24"
          >
            <Link href="/" className="py-2">
              Home
            </Link>
            <Link href="/blogs" className="py-2">
              Blogs
            </Link>
            <Link href="/music" className="py-2">
              Music
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
