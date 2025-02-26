import React from "react";

export const GetInTouch = () => {
  return (
    <section
      id="getintouch"
      className="flex flex-col justify-center items-center"
    >
      <p className="max-w-[600px] text-center text-gray-400 px-6">
        {""}
        Want to chat? Just shoot me a dm{" "}
        <span className="text-[#5D3FD3] cursor-pointer hover:underline">
          <a href="https://www.x.com/akhil_web" target="_blank">
            with a direct question on twitter
          </a>
        </span>{" "}
        and I'll respond whenever I can.
      </p>
    </section>
  );
};
