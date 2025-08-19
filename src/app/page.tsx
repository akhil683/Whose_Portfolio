import BlogPreview from "@/components/BlogPreview";
import { GetInTouch } from "@/components/GetInTouch";
import Projects from "@/data/projects";
import {
  ArrowRight,
  ExternalLink,
  Github,
  Mail,
  MapPin,
  Twitter,
} from "lucide-react";
import Link from "next/link";

export default async function Home() {
  return (
    <div className="max-w-3xl mx-auto px-6 my-16 space-y-16">
      <div className="space-y-16">
        <div>
          <div>
            <h1 className="text-2xl md:text-4xl text-white font-semibold">
              Akhil Palsra
            </h1>
            <p className="text-gray-400 flex items-center gap-2 mt-3">
              <MapPin className="w-4 h-4" />
              Himachal, India
            </p>
          </div>
          <p className="text-gray-300 mt-6 max-md:text-sm">
            Hi, I’m a software developer. I have experience working with two
            startups to build their platforms from scratch. When I’m not coding,
            I’m probably traveling or trying to hit 150wpm (close enough) 😅.
            Terminal and Neovim are my happy places. 💻
            <br />
            Know more about me{" "}
            <a
              href="https://chat.akkhil.dev"
              className="text-blue-400 hover:underline"
            >
              here
            </a>
          </p>
        </div>

        <section className="text-white flex flex-col gap-8">
          <h2 className="text-2xl font-bold">Projects</h2>
          {Projects.slice(0, 5).map((project) => (
            <div key={project.id}>
              <div className="flex justify-between items-center">
                <h3 className="font-semibold">{project.name}</h3>
                <div className="flex items-center gap-4">
                  <a href={project.github} target="_blank">
                    <Github className="text-gray-300 hover:text-white w-4 h-4" />
                  </a>
                  {project.live !== "" && (
                    <a href={project.live} target="_blank">
                      <ExternalLink className="text-gray-300 hover:text-white w-4 h-4" />
                    </a>
                  )}
                </div>
              </div>
              <p className="text-gray-400 mt-1 max-md:text-sm">
                {project.description}
              </p>
            </div>
          ))}
          <div className="w-full flex justify-end text-sm text-gray-300">
            <Link
              href={"/projects"}
              className="flex gap-2 border-b-2 border-transparent hover:border-gray-500 "
            >
              Small Projects <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </section>
        {/* Experience */}
        <section className="text-white">
          <h3 className="text-2xl font-bold mb-8">Work Experience</h3>
          <div className="space-y-8">
            <div className="relative pl-8 border-l">
              <div className="absolute w-3 h-3 bg-white rounded-full -left-[7px]" />
              <h4 className="font-bold">
                Software Developer Intern at ZeroEqualOne
              </h4>
              <p className="text-gray-400">Jan 2025 - Feb 2025</p>
              <p className="mt-2 text-gray-300">
                Building a quiz platform where student can prepare for exams and
                track their progress.
              </p>
            </div>
            <div className="relative pl-8 border-l">
              <div className="absolute w-3 h-3 bg-white rounded-full -left-[7px]" />
              <h4 className="font-bold">
                Software Developer Intern at Stakeazy
              </h4>
              <p className="text-gray-400">Sept 2024 - Nov 2024</p>
              <p className="mt-2 text-gray-300">
                Developer real-estate platform from scratch, where people can
                invest in lands.
              </p>
            </div>
            <div className="relative pl-8 border-l">
              <div className="absolute w-3 h-3 bg-white rounded-full -left-[7px]" />
              <h4 className="font-bold">
                Web Development Lead at Team Hermetica
              </h4>
              <p className="text-gray-400">Dec 2023 - Dec 2025</p>
              <p className="mt-2 text-gray-300">
                Build college club's site to showcase their work.
              </p>
            </div>
          </div>
        </section>

        <section className="text-white">
          <h3 className="text-2xl font-bold mb-8">Blogs</h3>
          <BlogPreview />
        </section>
      </div>
      <div className="h-[1px] bg-gray-500" />
      <GetInTouch />
      <div className="flex gap-6 justify-center items-center">
        <a href="https://github.com/akhil683">
          <Github className="text-gray-300 hover:text-gray-100" />
        </a>
        <a href="https://x.com/akkhil_dev">
          <Twitter className="text-gray-300 hover:text-gray-100" />
        </a>
        <a href="mailto:hello@akkhil.dev">
          <Mail className="text-gray-300 hover:text-gray-100" />
        </a>
      </div>
      <p className="text-sm text-gray-400 mb-16 text-center">
        @ Akhil Palsra. All Rights Reserved.
      </p>
    </div>
  );
}
