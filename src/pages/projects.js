import ProjectCard from "@/components/projectCard";
import Link from "next/link";

const projects = [
    { title: "Casify", description: "ML-powered tools to help real estate investors find better opportunities faster", url: "https://casify.it" },
    { title: "Hylian", description: "Dashboard to monitor and evaluate LLMs in production", url: "https://gethylian.com/" },
    { title: "This website", description: "Personal website made using React, NextJS and Tailwind", url: "https://github.com/alessandro-ciffo/personal-website" },
    { title: "LinearProgramming.jl", description: "A package to solve linear programming problems in Julia", url: "https://github.com/alessandro-ciffo/LinearProgramming.jl" },
    { title: "Decentralized Betting Marketplace", description: "Experimental blockchain smart contract to buy and sell football bets", url: "https://github.com/alessandro-ciffo/Decentralized-Betting-Marketplace" },
    { title: "Wordle Bot", description: "Automatically solve Wordle in the least number of steps using Python and Selenium", url: "/todo" },
];

export default function Projects() {
    return (
        <>
            <section id="about-main" className="flex flex-col pt-20 pb-10 text-white gap-20">
                <div className="flex flex-col text-left gap-2">
                    <h1 className="text-5xl font-bold mb-4">Projects</h1>
                    <p className="text-xl text-neutral-400 max-w-[600px]">
                        Some of the projects I&apos;m currently working on or have worked on in the past. You can find more on my <Link href="https://github.com/alessandro-ciffo" target="_blank" rel="noopener noreferrer" className="text-indigo-400 hover:text-indigo-200 hover:underline">GitHub profile</Link>.
                    </p>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {projects.map((project, index) => (
                        <ProjectCard key={index} title={project.title} description={project.description} url={project.url} />
                    ))}
                </div>
            </section>
        </>
    );
}