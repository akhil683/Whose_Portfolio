import { getPostData, getSortedPostsData } from "@/lib/posts";
import { notFound } from "next/navigation";
import Link from "next/link";

export function generateStaticParams() {
  const posts = getSortedPostsData();
  return posts.map((post) => ({
    postId: post.id,
  }));
}

export const generateMetadata = ({
  params,
}: {
  params: { postId: string };
}) => {
  const posts = getSortedPostsData();
  const { postId } = params;

  const post = posts.find((post) => post.link === postId);
  if (!post) {
    return {
      title: "Post Not Found",
    };
  }
  return {
    title: post?.title,
  };
};

const Post = async ({ params }: { params: { postId: string } }) => {
  const posts = getSortedPostsData();
  const { postId } = params;

  if (!posts.find((post) => post.link === postId)) {
    return notFound();
  }

  const { title, date, contentHtml } = await getPostData(postId);

  return (
    <main className="px-6 bg-gradient-radial from-black to-[#111]  pt-12">
      <div className="max-w-[700px] mx-auto">
        <Link
          href="/"
          className="px-4 py-1 rounded-full no-underline hover:px-6 duration-200 text-black bg-gray-400 hover:bg-gray-200"
        >
          Back
        </Link>
        <div className="text-gray-100 my-4 md:my-8">
          <h1 className="text-2xl md:text-3xl font-semibold">{title}</h1>
          <p className="text-gray-400 max-md:text-sm mt-2">{date}</p>
        </div>
        <hr className="bg-gray-600 h-[2px] border-none" />
        <article id="blogContent" className="prose prose-invert max-w-[700px]">
          <section dangerouslySetInnerHTML={{ __html: contentHtml }} />
        </article>
      </div>
    </main>
  );
};

export default Post;
