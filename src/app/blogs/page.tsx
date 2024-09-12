import { getPostsMeta } from "@/lib/posts";
import Link from "next/link";
import React, { Suspense } from "react";
import { Metadata } from "next";

// export const revalidate = 1000;

export const metadata: Metadata = {
  title: "Akhil's Blogs",
  description: "In these blog posts, I share my experiences !",
};

const Blogs = async () => {
  const posts = await getPostsMeta();

  return (
    <main className="bg-gradient-radial from-black to-[#111] min-h-screen px-4 flex flex-col pt-16 md:items-center">
      <div className="max-w-[600px]">
        <h1 className="text-2xl mb-12 hover:no-underline underline underline-offset-8 decoration-[#999]">
          blogs
        </h1>
        <Suspense fallback={<h1 className="text-gray-300">Loading...</h1>}>
          <div className=" flex flex-col justify-center gap-2">
            {posts?.map((post) => {
              return (
                <Link
                  href={`/blogs/${post.link}`}
                  className="border border-[#333] hover:border-[#444] rounded-xl p-4 duration-100"
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
        </Suspense>
      </div>
    </main>
  );
};

export default Blogs;
