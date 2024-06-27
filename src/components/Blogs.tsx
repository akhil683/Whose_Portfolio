import { HoverEffect } from "./magicUI/BlogHover";
import Blogs from "@/data/blogs";

export function BlogContainer() {
  return (
    <div className="max-w-5xl mx-auto px-8 flex flex-col justify-center items-center gap-8">
      <p className="px-4 py-1 bg-[#5D3FD3] rounded-lg">Blogs</p>
      <h4 className="text-5xl font-semibold text-center bg-clip-text text-transparent bg-gradient-to-b from-white to-gray-400">
        Checkout my Latest Blogs !
      </h4>
      <HoverEffect items={Blogs} />
    </div>
  );
}
