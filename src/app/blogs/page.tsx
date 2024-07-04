import { getSortedPostsData } from "@/lib/posts";
import Link from "next/link";
import React from "react";

const Blogs = () => {
  const posts = getSortedPostsData();
  return (
    <main className="bg-gradient-radial from-black to-[#111] min-h-screen px-4 flex flex-col pt-16 items-center">
      <div className="max-w-[600px]">
        <h1 className="text-2xl mb-12 hover:no-underline underline underline-offset-8 decoration-[#999]">
          blogs
        </h1>
        <div className=" flex flex-col justify-center gap-2">
          {posts.map((post) => {
            return (
              <Link
                href={`/blogs/${post.link}`}
                className="border border-transparent hover:border-[#333] rounded-xl p-4 duration-100"
                key={post.id}
              >
                <h2 className="text-lg font-semibold">{post.title}</h2>
                <p className="text-[#999] my-1 leading-tight">
                  {post.description}
                </p>
                <p className="text-sm text-[#999] font-bold">{post.date}</p>
              </Link>
            );
          })}
        </div>
      </div>
    </main>
  );
};

export default Blogs;
