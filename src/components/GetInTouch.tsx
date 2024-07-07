import React from "react";

export const GetInTouch = () => {
  return (
    <section
      id="getintouch"
      className="flex flex-col justify-center items-center gap-8 pt-32"
    >
      <p className="px-4 py-1 bg-[#5D3FD3] rounded-lg">{`<Contact />`}</p>
      <h4 className="text-5xl font-semibold">Get In Touch</h4>
      <p className="max-w-[600px] text-center text-xl text-gray-400 px-6">
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
