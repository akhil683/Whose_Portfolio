import React, { ReactNode } from "react";

const BlogLayout = ({ children }: { children: ReactNode }) => {
  return (
    <main className="bg-gradient-radial from-black to-[#111] text-gray-300 min-h-screen flex flex-col items-center">
      {children}
    </main>
  );
};

export default BlogLayout;
