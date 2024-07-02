import Link from "next/link";
import React from "react";

const Blogs = () => {
  return (
    <main className="bg-gradient-radial from-black to-[#111] min-h-screen px-4 flex flex-col pt-16 items-center">
      <div className="max-w-[600px]">
        <h1 className="text-2xl mb-12 hover:no-underline underline underline-offset-8 decoration-[#999]">
          blogs
        </h1>
        <div className=" flex flex-col justify-center gap-2">
          <Link
            href="/how-i-switch-from-vscode-to-neovim"
            className="border border-transparent hover:border-[#333] rounded-xl p-4 duration-100"
          >
            <h2 className="text-lg font-semibold">
              How I switched from VSCode to Neovim ?
            </h2>
            <p className="text-[#999] my-1 leading-tight">
              alsdn flkan sdfkna kksdnfklan kasdj fklad akdf nlasdn fklan dkln
              flkand sdf nkalnsd fnl klna lksdnf{" "}
            </p>
            <p className="text-sm text-[#999] font-bold">
              Jun 21, 2024 | 1,023 views
            </p>
          </Link>
        </div>
      </div>
    </main>
  );
};

export default Blogs;
