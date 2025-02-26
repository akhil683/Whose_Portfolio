import { getPostsMeta, getPostByName } from "@/lib/posts";
import { notFound } from "next/navigation";
import Link from "next/link";
import "highlight.js/styles/github-dark.css"
import { UnderlineIcon } from "lucide-react";

export const revalidate = 3000

type Props = {
  params: {
    postId: string,
  }
}
export async function generateStaticParams() {
  const posts = await getPostsMeta();
  if (!posts) return []

  return posts.map((post) => ({
    postId: post.id,
  }));
}

export const generateMetadata = async ({
  params: { postId },
}: Props) => {
  const post = await getPostByName(`${postId}.mdx`);
  if (!post) {
    return {
      title: "Post Not Found",
    };
  }
  return {
    title: post.meta.title,
    description: post.meta.description,
  };
};

const Post = async ({ params: { postId } }: Props) => {
  const post = await getPostByName(`${postId}.mdx`)

  // if (!post) notFound()

  const { meta, content } = post!

  return (
    <main className="px-6 bg-[#111] py-12">
      <div className="max-w-[700px] mx-auto">
        <Link
          href="/"
          className="px-4 py-1 rounded-full no-underline hover:px-6 duration-200 text-black bg-gray-300 hover:bg-gray-100"
        >
          Back
        </Link>
        <div className="text-gray-100 my-4 md:my-8">
          <h1 className="text-2xl md:text-3xl font-semibold">{meta.title}</h1>
          <p className="text-gray-400 max-md:text-sm mt-2">{meta.date}</p>
        </div>
        <p>{meta.tag}</p>
        <hr className="bg-gray-600 h-[2px] border-none" />
        <article
          id="blogContent"
          className="prose prose-invert max-w-[700px]"
        >
          {content}
        </article>
        <hr className="bg-gray-600 h-[2px] my-6 border-none" />
        <span>By Akhil Palsra</span>
      </div>
    </main>
  );
};

export default Post;
