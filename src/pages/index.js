import ProjectCard from "@/components/projectCard";
import Link from "next/link";

const highlightedPprojects = [
    { title: "Casify", description: "ML-powered tools to help real estate investors find better opportunities faster", url: "https://casify.it" },
    { title: "Hylian", description: "Dashboard to monitor and evaluate LLMs in production", url: "https://gethylian.com/" },
    { title: "This website", description: "Personal website made using React, NextJS and Tailwind", url: "https://github.com/alessandro-ciffo/personal-website" },
];

export default function Home() {
  return (
    <div className="px-4 md:px-0">
      <section id="hero" className="flex py-20 text-white">
        <div className="flex flex-col text-left gap-2 max-w-[600px] text-pretty">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Hey, I&apos;m Alessandro</h1>
          <p className="text-xl text-neutral-400">I am a data scientist and software developer from Italy.</p>
          <p className="text-xl text-neutral-400">On this website you can find some information <Link href="/about" className="text-indigo-400 hover:underline hover:text-indigo-200">about me</Link> and a few <Link href="/about" className="text-indigo-400 hover:underline hover:text-indigo-200">projects</Link> I&apos;ve worked on in the last few years.</p>
        </div>
      </section>
      <section id="hero-projects" className="flex flex-col py-10 text-white gap-4">
        <h2 className="text-3xl md:text-4xl font-semibold mb-4">Projects</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {highlightedPprojects.map((project, index) => (
                <ProjectCard key={index} title={project.title} description={project.description} url={project.url} />
            ))}
        </div>
        <div className="w-full text-end"><Link href="/projects" className="text-indigo-400 hover:underline hover:text-indigo-200">More projects &#8594;</Link></div>
      </section>
    </div>
  );
}
