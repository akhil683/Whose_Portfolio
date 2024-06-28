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
    name: "How I switch from VSCode to Neovim?",
    description: "Coming soon...",
    date: "21 Jun,2023",
    link: "how-to-switch-from-vscode-to-neovim",
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
