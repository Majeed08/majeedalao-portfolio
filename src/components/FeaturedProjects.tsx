import Link from "next/link";
import { allProjects, personalInfo } from "@/data";

export default function FeaturedProjects() {
  const featuredTitles = [
    "Automated Threat Triage Engine",
    "Phishing Analyzer",
    "Log Hunter",
    "QPILL Programming Language & IDE",
  ];
  const featured = featuredTitles
    .map((title) => allProjects.find((p) => p.title === title)!)
    .filter(Boolean);

  return (
    <section id="projects" className="py-20 px-6 md:px-20 max-w-7xl mx-auto scroll-mt-20">
      <h2 className="text-3xl font-bold mb-10 border-b border-zinc-200 pb-4">Featured Projects</h2>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
        {featured.map((project, index) => (
          <div key={index} className="glass-card p-8 rounded-xl">
            <h3 className="text-2xl font-semibold mb-3">{project.title}</h3>
            <p className="text-zinc-600 mb-6 leading-relaxed">{project.description}</p>
            <div className="flex flex-wrap gap-2">
              {project.tech.map((item, i) => (
                <span key={i} className="px-3 py-1 tech-tag text-zinc-700 text-sm rounded-full">
                  {item}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>

      <div className="flex flex-col items-start gap-4 border-t border-zinc-200 pt-10">
        <Link href="/projects" className="px-8 py-4 bg-zinc-900 text-zinc-50 font-medium rounded-lg hover:bg-zinc-800 transition shadow-sm w-full md:w-auto text-center">
          See More Projects
        </Link>
        <a href={personalInfo.cvLink} download className="px-8 py-4 glass-card text-zinc-900 font-medium rounded-lg w-full md:w-auto text-center">
          Download CV
        </a>
      </div>
    </section>
  );
}
