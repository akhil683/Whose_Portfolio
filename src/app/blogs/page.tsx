import React, { Suspense } from "react";
import { Metadata } from "next";
import BlogPreview from "@/components/BlogPreview";


export const metadata: Metadata = {
  title: "Akhil's Blogs",
  description: "In these blog posts, I share my experiences !",
};

const Blogs = () => {

  return (
    <main className="bg-gradient-radial from-black to-[#111] min-h-screen px-4 flex flex-col pt-16 md:items-center">
      <div className="max-w-[600px]">
        <h1 className="text-2xl mb-12 hover:no-underline underline underline-offset-8 decoration-[#999]">
          blogs
        </h1>
        <Suspense fallback={<h1 className="text-gray-300">Loading...</h1>}>
          <BlogPreview />
        </Suspense>
      </div>
    </main>
  );
};

export default Blogs;
