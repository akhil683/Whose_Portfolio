import React from "react";

const Email = () => {
  return (
    <div className="flex justify-center items-center gap-0 mx-auto">
      <p className="px-4 py-2 border border-white text-gray-400 rounded-l-lg">
        akhilpalsra@gmail.com
      </p>
      <a
        href="mailto:akhilpalsra@gmail.com"
        className="px-4 py-2 text-black border-white border bg-white rounded-r-lg"
      >
        Connect
      </a>
    </div>
  );
};

export default Email;
