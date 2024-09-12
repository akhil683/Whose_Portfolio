import { BlogPost, Meta } from "../../type"
import { compileMDX } from "next-mdx-remote/rsc"
import rehypeHighlight from "rehype-highlight"
import rehypeSlug from "rehype-slug"
import rehypeAutolinkHeadings from "rehype-autolink-headings"

type Filetree = {
  'tree': [
    {
      'path': string,
    }
  ]
}

export async function getPostByName(fileName: string): Promise<BlogPost | undefined> {
  console.log("hello")
  const res = await fetch(`https://raw.githubusercontent.com/akhil683/Portfolio_Blogs/main/${fileName}`, {
    headers: {
      Accept: 'application/vnd.github+json',
      Authorization: `Bearer ${process.env.GITHUB_TOKEN}`,
      'X-GitHub-Api-Version': '2022-11-28',
    }
  })
  console.log('res  -->', res)
  if (!res.ok) return undefined

  const rawMDX = await res.text()
  if (rawMDX === "404: Not Found") return undefined

  const { frontmatter, content } = await compileMDX<{
    title: string,
    date: string,
    tag: string,
    description: string,
    link: string
  }>({
    source: rawMDX,
    options: {
      parseFrontmatter: true,
      mdxOptions: {
        rehypePlugins: [
          rehypeHighlight,
          rehypeSlug,
          [rehypeAutolinkHeadings, {
            behavior: 'wrap',
          }]
        ]
      }
    }
  })

  const id = fileName.replace(/\.mdx$/, "")
  const blogPostObj: BlogPost = { meta: { id, title: frontmatter.title, date: frontmatter.date, tag: frontmatter.tag, link: frontmatter.link, description: frontmatter.description }, content }
  return blogPostObj
}

export async function getPostsMeta(): Promise<Meta[] | undefined> {
  const res = await fetch('https://api.github.com/repos/akhil683/Portfolio_Blogs/git/trees/main?recursive=1', {
    headers: {
      Accept: 'application/vnd.github+json',
      Authorization: `Bearer ${process.env.GITHUB_TOKEN}`,
      'X-GitHub-Api-Version': '2022-11-28',
    }
  })
  if (!res.ok) return undefined
  const repoFiletree: Filetree = await res.json()
  const filesArray = repoFiletree.tree.map(obj => obj.path).filter(path => path.endsWith('.mdx'))
  const posts: Meta[] = []

  for (const file of filesArray) {
    const post = await getPostByName(file)
    if (post) {
      const { meta } = post
      posts.push(meta)
    }
  }
  return posts.sort((a, b) => a.date < b.date ? 1 : -1)
}
