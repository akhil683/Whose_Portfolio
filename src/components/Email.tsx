import React from "react";

const Email = () => {
  return (
    <div className="w-screen flex justify-center text-xl items-center gap-0 my-24">
      <p className="px-4 py-2 border border-[#5D3FD3] text-gray-400 rounded-l-lg">
        akhilpalsra@gmail.com
      </p>
      <a
        href="mailto:akhilpalsra@gmail.com"
        className="px-4 py-2 text-white border border-[#5D3FD3] bg-[#5D3FD3] rounded-r-lg"
      >
        Connect
      </a>
    </div>
  );
};

export default Email;
