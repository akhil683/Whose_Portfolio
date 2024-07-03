import fs from "fs";
import path from "path";
import matter from "gray-matter";
import remarkHtml from "remark-html";
import { remark } from "remark";

const postsDirectory = path.join(process.cwd(), "src/blogposts");

export function getSortedPostsData() {
  //Get file names under /posts
  const fileNames = fs.readdirSync(postsDirectory);
  const allPostsData = fileNames.map((fileName) => {
    //Remove '.md' from file name to get id
    const id = fileName.replace(/\.md$/, "");

    //Read markdown file as string
    const fullPath = path.join(postsDirectory, fileName);
    const fileContents = fs.readFileSync(fullPath, "utf8");

    //User gray-matter to parse the post metadata section
    const matterResult = matter(fileContents);
    const blogPost: BlogPost = {
      id,
      title: matterResult.data.title,
      description: matterResult.data.description,
      link: matterResult.data.link,
      date: matterResult.data.date,
    };
    return blogPost;
  });
  return allPostsData.sort((a, b) => (a.date < b.date ? 1 : -1));
}

export async function getPostData(id: string) {
  const fullPath = path.join(postsDirectory, `${id}.md`);
  const fileContents = fs.readFileSync(fullPath, "utf8");

  // Use gray-matter to parse the post metadata section
  const matterResult = matter(fileContents);

  const processedContent = await remark()
    .use(remarkHtml)
    .process(matterResult.content);

  const contentHtml = processedContent.toString();

  const blogPostWithHTML: BlogPost & { contentHtml: string } = {
    id,
    title: matterResult.data.title,
    description: matterResult.data.description,
    link: matterResult.data.link,
    date: matterResult.data.date,
    contentHtml,
  };

  // Combine the data with the id
  return blogPostWithHTML;
}
