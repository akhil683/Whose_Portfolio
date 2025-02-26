import { GetInTouch } from "@/components/GetInTouch";
import { ExternalLink, Github, Linkedin, Mail, MapPin, Twitter } from "lucide-react"

export default async function Home() {
  return (
    <div className="max-w-3xl mx-auto px-6 my-16 space-y-16">

      <div className="space-y-16">
        <div>
          <div>
            <h1 className="text-2xl md:text-4xl text-white font-semibold">Akhil Palsra</h1>
            <p className="text-gray-400 flex items-center gap-2 mt-3">
              <MapPin className="w-4 h-4" />
              Himachal, India
            </p>
          </div>
          <p className="text-gray-300 mt-6">Hi, I’m a software developer. I have experience working with two startups to build their platforms from scratch.. When I’m not coding, I’m probably traveling or trying to hit 150wpm (stuck at 130-140, but hey, close enough) 😅. Terminal and Neovim are my happy places 💻. Let’s build something cool—or at least make it run without crashing!</p>
        </div>

        <section className="text-white flex flex-col gap-8">
          <h2 className="text-2xl font-bold">Projects</h2>
          <div>
            <div className="flex justify-between items-center">
              <h3 className="font-semibold ">Page Craft (building)</h3>
              <div className="flex items-center gap-4">
                <a href="https://github.com/akhil683/Page-Craft" target="_blank">
                  <Github className="text-gray-300 hover:text-white w-4 h-4" />
                </a>
                <a href="https://pagecraft.akkhil.dev" target="_blank">
                  <ExternalLink className="text-gray-300 hover:text-white w-4 h-4" />
                </a>
              </div>
            </div>
            <p className="text-gray-400 mt-1 max-md:text-sm">
              A web-based platform that empowers users to create, publish, and review books. Authors can get AI-powered assistance, publish their work, and engage with readers!
            </p>
          </div>
          <div>
            <div className="flex justify-between items-center">
              <h3 className="font-semibold">Commit Hub</h3>
              <div className="flex items-center gap-4">
                <a href="https://github.com/akhil683/Commit-Hub" target="_blank">
                  <Github className="text-gray-300 hover:text-white w-4 h-4" />
                </a>
                <a href="https://commithub.akkhil.dev" target="_blank">
                  <ExternalLink className="text-gray-300 hover:text-white w-4 h-4" />
                </a>
              </div>
            </div>
            <p className="text-gray-400 mt-1 max-md:text-sm">
              A web application that helps developers keep their GitHub contribution graph updated, even for work done on branches other than main.
            </p>
          </div>
          <div>
            <div className="flex justify-between items-center">
              <h3 className="font-semibold">Cloud Sync</h3>
              <a href="https://github.com/akhil683/Cloud-Sync" target="_blank">
                <ExternalLink className="text-gray-300 hover:text-white w-4 h-4" />
              </a>
            </div>
            <p className="text-gray-400 mt-1 max-md:text-sm">
              Gallery app built with React Native and Expo that syncs your photos between your device and the cloud.
            </p>
          </div>
        </section>
        {/* Experience */}
        <section className="text-white">
          <h3 className="text-2xl font-bold mb-8">Work Experience</h3>
          <div className="space-y-8">
            <div className="relative pl-8 border-l">
              <div className="absolute w-3 h-3 bg-white rounded-full -left-[7px]" />
              <h4 className="font-bold">Software Developer Inter at ZeroEqualOne</h4>
              <p className="text-gray-400">Jan 2025 - present</p>
              <p className="mt-2 text-gray-300">Building a quiz platform where student can prepare for exams and track their progress.</p>
            </div>
            <div className="relative pl-8 border-l">
              <div className="absolute w-3 h-3 bg-white rounded-full -left-[7px]" />
              <h4 className="font-bold">Software Developer Inter at Stakeazy</h4>
              <p className="text-gray-400">Jan 2025 - present</p>
              <p className="mt-2 text-gray-300">Developer real-estate platform from scratch, where people can invest in lands.</p>
            </div>
            <div className="relative pl-8 border-l">
              <div className="absolute w-3 h-3 bg-white rounded-full -left-[7px]" />
              <h4 className="font-bold">Web Development Lead at Team Hermetica</h4>
              <p className="text-gray-400">Dec 2023 - Dec 2025</p>
              <p className="mt-2 text-gray-300">Build college club's site to showcase their work.</p>
            </div>
          </div>
        </section>
      </div>
      <div className="h-[1px] bg-gray-500" />
      <GetInTouch />
      <div className="flex gap-6 justify-center items-center">
        <a href="">
          <Github className="text-gray-300 hover:text-gray-100" />
        </a>
        <a href="">
          <Twitter className="text-gray-300 hover:text-gray-100" />
        </a>
        <a href="">
          <Linkedin className="text-gray-300 hover:text-gray-100" />
        </a>
        <a href="">
          <Mail className="text-gray-300 hover:text-gray-100" />
        </a>
      </div>
      <p className="text-sm text-gray-400 mb-16 text-center">
        @ Akhil Palsra. All Rights Reserved.
      </p>
    </div>
  );
}
