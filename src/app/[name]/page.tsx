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
      <div className="flex justify-between text-gray-100 my-8">
        <h1 className="text-2xl font-semibold">{blog?.name}</h1>
        <p className="text-gray-400">{blog?.date}</p>
      </div>
      <hr className="" />
      <p className="my-8">{blog?.description}</p>
    </article>
  );
};

export default BlogPage;
