import Link from "next/link"
import { getPostsMeta } from "@/lib/posts";

const BlogPreview = async () => {
  const posts = await getPostsMeta();
  return (
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
  )
}
export default BlogPreview
