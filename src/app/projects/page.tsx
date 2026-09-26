import Link from "next/link";
import { allProjects, projectCategories } from "@/data";

export default function ProjectsPage() {
  return (
    <main className="min-h-screen py-20 px-6 md:px-20 max-w-7xl mx-auto">
      <Link href="/#projects" className="text-zinc-500 hover:text-zinc-900 mb-8 inline-block">
        &larr; Back to Home
      </Link>
      <h1 className="text-4xl font-bold mb-4 border-b border-zinc-200 pb-4">All Projects</h1>
      <p className="text-zinc-500 mb-12">{allProjects.length} projects across {projectCategories.length} categories.</p>

      {projectCategories.map((category, catIdx) => (
        <div key={catIdx} className="mb-16">
          <h2 className="text-2xl font-bold text-zinc-800 mb-6">{category.name}</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {category.projects.map((project, projIdx) => (
              <div
                key={projIdx}
                className="glass-card rounded-xl overflow-hidden flex flex-col"
              >
                <div className="h-48 bg-zinc-200/50 w-full">
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="p-6 flex flex-col flex-grow">
                  <h3 className="text-xl font-semibold mb-2">{project.title}</h3>
                  <p className="text-zinc-600 mb-4 flex-grow text-sm leading-relaxed">
                    {project.description}
                  </p>
                  <div className="flex flex-wrap gap-1.5 mb-4">
                    {project.tech.map((item, i) => (
                      <span
                        key={i}
                        className="px-2.5 py-0.5 tech-tag text-zinc-600 text-xs rounded-full"
                      >
                        {item}
                      </span>
                    ))}
                  </div>
                  <div className="flex gap-4 mt-auto pt-4 border-t border-zinc-100/50">
                    {project.github && (
                      <a
                        href={project.github}
                        target="_blank"
                        rel="noreferrer"
                        className="text-sm font-medium text-zinc-800 hover:underline"
                      >
                        GitHub
                      </a>
                    )}
                    {project.liveUrl && project.liveUrl !== "" && project.liveUrl !== "#" && (
                      <a
                        href={project.liveUrl}
                        target="_blank"
                        rel="noreferrer"
                        className="text-sm font-medium text-blue-600 hover:underline"
                      >
                        Live Link
                      </a>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      ))}
    </main>
  );
}
