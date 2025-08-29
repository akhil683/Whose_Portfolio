import Link from "next/link";
import { getPostsMeta } from "@/lib/posts";

const BlogPreview = async () => {
  const posts = await getPostsMeta();
  console.log("posts", posts);
  return (
    <div className=" flex flex-col justify-center gap-2">
      {posts?.map((post) => {
        return (
          <Link href={`/blogs/${post.link}`} key={post.id}>
            <h2 className="text-lg font-semibold text-white">{post.title}</h2>
            <p className="text-gray-400 my-1 leading-tight">
              {post.description}
            </p>
            <p className="text-sm text-gray-400 font-bold">{post.date}</p>
          </Link>
        );
      })}
    </div>
  );
};
export default BlogPreview;
