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
    description: `<p>
          When I first started coding, Visual Studio Code (VSCode) was my editor
          of choice. It's widely regarded as the industry standard, and I was
          more than satisfied with its performance, especially on my new laptop.
          I didn’t feel it lacked anything crucial, and its speed was adequate
          for my needs. At that time, my focus was on improving my typing speed,
          aiming for over 150 words per minute (wpm), believing that faster
          typing equated to higher productivity. However, I often found myself
          relying heavily on the mouse for various tasks within VSCode, which I
          realized later was holding me back from reaching my full potential.
        </p>
        <h3 className="my-4 md:my-8 font-semibold md:text-2xl text-xl text-white">
          Discovering Neovim
        </h3>
        <p>
          One day, while browsing YouTube, I stumbled upon a channel called{" "}
          <a
            className="font-semibold underline underline-offset-4 decoration-gray-400"
            href="https://www.youtube.com/@ThePrimeTimeagen"
            target="_blank"
          >
            ThePrimeAgen{" "}
          </a>
          . I was mesmerized by the speed and efficiency with which he navigated
          his editor, which looked nothing like VSCode. I noticed he rarely used
          the mouse for tasks such as creating or switching files. Intrigued, I
          discovered that he was using Neovim. This revelation led me down a
          rabbit hole of Neovim tutorials and showcases, and I was thoroughly
          impressed. Motivated by what I saw, I decided to make the switch to
          Neovim.
        </p>
        <Image
          src={NeovimImg}
          className="w-full border border-slate-600 rounded-lg my-4"
          alt="Neovim"
        />
        <h3 className="my-4 md:my-8 font-semibold md:text-2xl text-xl text-white">
          First Attempt: Big Mistake
        </h3>
        <p>
          My initial attempt to install Neovim directly on my laptop was a
          disaster. There's a common saying, "I don't know how to exit Vim,"
          which rang true for me. Coming from a VSCode background, I struggled
          to even exit Neovim, let alone use it effectively. I encountered
          numerous errors, and there was a lack of coding suggestions, which led
          to frustration. Consequently, I uninstalled Neovim. Despite this
          setback, I continued to watch ThePrimeAgen's videos, drawn by his
          speed and efficiency.
        </p>
        <br />
        <h3 className="my-4 md:my-8 font-semibold md:text-2xl text-xl text-white">
          Vim Motion in VSCode
        </h3>
        <p>
          As a relatively new coder, I was not understanding him but still
          continueed to watch his video becaused I was always impressed by his
          speed and efficiency. Inspired by him, I decided to incorporate Vim
          motions into my VSCode setup. I installed a Vim extension in VSCode
          and forced myself to learn Vim motions by selling my mouse to a
          friend. For almost a year, this hybrid setup worked well for me.
          However, as I customized VSCode further and used Vim commands for
          almost everything, I noticed a decline in performance. The lag became
          unbearable, prompting me to reconsider switching to Neovim.
        </p>
        <h3 className="my-4 md:my-8 font-semibold md:text-2xl text-xl text-white">
          Successful Transition and Configuration
        </h3>
        <p>
          After so many unsuccessfull attempts, this time transition was
          smoother. After switching to Clang/LLVM as my C compiler, Neovim
          installed without any issues. I opted for {""}
          <a
            className="font-semibold underline underline-offset-4 decoration-gray-400"
            href="https://www.lazyvim.org/"
            target="_blank"
          >
            LazyVim
          </a>{" "}
          to avoid the time-consuming task of writing my configuration from
          scratch. Then, I customized it with keymaps to suit my needs. Within a
          few days, I experienced a level of speed and efficiency that I had
          never felt with VSCode. Tasks like creating or deleting files, which
          used to lag in VSCode, were now seamless in Neovim. I may not be as
          fast as ThePrimeAgen, but I'm blazing through my work at my own pace.
        </p>
        <h3 className="my-4 md:my-8 font-semibold md:text-2xl text-xl text-white">
          Enhancing Workflow with Harpoon and Telescope
        </h3>
        <p>
          To further enhance my workflow, I installed {""}
          <a
            className="font-semibold underline underline-offset-4 decoration-gray-400"
            href="https://github.com/ThePrimeagen/harpoon/tree/harpoon2"
            target="_blank"
          >
            Harpoon.
          </a>{" "}
          While {""}
          <a
            className="font-semibold underline underline-offset-4 decoration-gray-400"
            href="https://github.com/nvim-telescope/telescope.nvim"
            target="_blank"
          >
            Telescope
          </a>{" "}
          is a fantastic fuzzy finder, I found Harpoon invaluable for focusing
          on a few files at a time. Harpoon also support tmux out of the box
          which is a terminal multiplexer. But I use windows, so I can't use
          tmux. With Harpoon, I can mark files that I want to re-visit later and
          quickly switch between those frequently used files, boosting my
          productivity. The combination of tools has significantly streamlined
          my workflow.
        </p>
        <h3 className="my-4 md:my-8 font-semibold md:text-2xl text-xl text-white">
          Conclusion
        </h3>
        <p>
          Now, having used Neovim extensively, I can't imagine going back to
          VSCode. Neovim's performance is buttery smooth, and it has
          fundamentally changed how I interact with my laptop. I rely almost
          entirely on the keyboard, rarely touching the mouse. I've also
          customized Neovim with various extensions and Language Server
          Protocols (LSP) to fit my coding needs perfectly. I may not be as fast
          as ThePrimeAgen, but I'm blazing through my work at my own pace. You
          can check out my keymaps below -
        </p>
        <Image
          src={keymaps1}
          className="w-full border border-slate-600 rounded-lg my-4"
          alt="Neovim"
        />
        <Image
          src={keymaps2}
          className="w-full border border-slate-600 rounded-lg my-4"
          alt="Neovim"
        />
        <p className="mt-4">
          Thank you for reading and let me know if you enjoyed this post !
        </p>
`,
    date: "21 Jun,2023",
    link: "how-i-switch-from-vscode-to-neovim",
  },
  // {
  //   id: 2,
  //   name: "optimize data fetching with react query",
  //   description: "coming soon...",
  //   date: "21 jun,2023",
  //   link: "optimize-data-fetching-with-react-query",
  // },
  // {
  //   id: 3,
  //   name: "my experience of 6 days trip to lahaul spiti",
  //   description: "coming soon...",
  //   date: "21 jun,2023",
  //   link: "my-experience-of-6-days-trip-to-lahual-spiti",
  // },
];
export default Blogs;
