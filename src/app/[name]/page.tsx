"use client";

import { useParams } from "next/navigation";
import React from "react";
import Blogs from "@/data/blogs";
import Link from "next/link";

const BlogPage = () => {
  const { name } = useParams();
  console.log(name);
  const blog = Blogs?.find((blog) => blog.link == name);
  console.log(blog);
  return (
    <article className="lg:w-[800px] max-lg:w-full p-4">
      <Link href="/">Back</Link>
      <div className="flex max-md:flex-col justify-between text-gray-100 my-4 md:my-8">
        <h1 className="text-lg md:text-2xl font-semibold">{blog?.name}</h1>
        <p className="text-gray-400 max-md:text-sm">{blog?.date}</p>
      </div>
      <hr className="bg-gray-600 h-[2px] border-none" />
      <div>
        <p className="my-4 md:my-8 max-md:text-sm">{blog?.description}</p>
      </div>
    </article>
  );
};

export default BlogPage;
