interface blogType {
  id: number;
  name: string;
  description: string;
  date: string;
  link: string;
}

const Blogs: blogType[] = [
  {
    id: 1,
    name: "How I Switch from VSCode to Neovim ?",
    description:
      "In the ever-evolving landscape of code editors, developers often seek tools that enhance productivity and streamline their workflow. Recently, I made the transition form VSCode to Neovim. Neovim, a fork of the classic Vim editor. <br/>In this blog post, I will delve into the reasons behind my switch, the initial challenges I faced, and the benefits I've experienced with Neovim. Join me as I share my journey towards learning about this powerful editor and how it has transformed my coding experience. <br>",
    date: "21 Jun,2023",
    link: "how-i-switch-from-vscode-to-neovim",
  },
  {
    id: 2,
    name: "Optimize data fetching with React Query",
    description: "Coming soon...",
    date: "21 Jun,2023",
    link: "optimize-data-fetching-with-react-query",
  },
  {
    id: 3,
    name: "My experience of 6 Days trip to Lahaul Spiti",
    description: "Coming soon...",
    date: "21 Jun,2023",
    link: "my-experience-of-6-days-trip-to-lahual-spiti",
  },
];
export default Blogs;
