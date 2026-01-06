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
            <h2 className="font-semibold text-white">{post.title}</h2>
            <p className="text-gray-400 max-md:text-sm my-1 leading-tight">
              {post.description}
            </p>
            <p className="text-sm text-gray-400 font-semibold max-md:text-xs">
              {post.date}
            </p>
          </Link>
        );
      })}
    </div>
  );
};
export default BlogPreview;
