import { useRouter } from "next/router";
import React from "react";

export const GetInTouch = () => {
  return (
    <div className="flex flex-col justify-center items-center gap-8 mt-32">
      <p className="px-4 py-1 text-black bg-white rounded-lg">Contact</p>
      <h4 className="text-5xl font-semibold">Get In Touch</h4>
      <p className="max-w-[600px] text-center text-xl text-gray-400 px-6">
        {""}
        Want to chat? Just shoot me a dm{" "}
        <span className="text-blue-500 cursor-pointer hover:underline">
          with a direct question on twitter
        </span>{" "}
        and I'll respond whenever I can.
      </p>
    </div>
  );
};
