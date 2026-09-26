"use client";

import { useEffect, useRef, useState } from "react";
import { projects } from "@/data";

const ExternalLinkIcon = () => (
  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" />
    <polyline points="15 3 21 3 21 9" />
    <line x1="10" y1="14" x2="21" y2="3" />
  </svg>
);

const GitHubIcon = () => (
  <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor">
    <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0 0 24 12c0-6.63-5.37-12-12-12z" />
  </svg>
);

export default function Projects() {
  const sectionRef = useRef<HTMLElement>(null);
  const [filter, setFilter] = useState<"all" | "featured">("all");

  useEffect(() => {
    const el = sectionRef.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          el.classList.add("visible");
          observer.disconnect();
        }
      },
      { threshold: 0.1 }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  const displayed =
    filter === "featured" ? projects.filter((p) => p.featured) : projects;

  return (
    <section
      id="projects"
      ref={sectionRef}
      className="reveal section px-6 md:px-12 lg:px-24 max-w-7xl mx-auto"
    >
      <div className="section-label">Portfolio</div>
      <h2 className="section-title">Projects</h2>
      <div className="divider" />

      <div className="flex items-center justify-between flex-wrap gap-4 mb-10 mt-2">
        <p className="section-subtitle">
          Things I&apos;ve built — from solo experiments to production systems.
        </p>

        {/* Filter tabs */}
        <div
          className="flex gap-1 p-1 rounded-full"
          style={{ background: "var(--surface-1)", border: "1px solid var(--border)" }}
        >
          {(["all", "featured"] as const).map((f) => (
            <button
              key={f}
              id={`projects-filter-${f}`}
              onClick={() => setFilter(f)}
              className="px-4 py-1.5 rounded-full text-sm font-medium transition-all duration-200 capitalize"
              style={
                filter === f
                  ? {
                      background: "linear-gradient(135deg, #6366f1, #8b5cf6)",
                      color: "#fff",
                    }
                  : { color: "var(--text-secondary)" }
              }
            >
              {f}
            </button>
          ))}
        </div>
      </div>

      <div className="grid md:grid-cols-2 gap-6">
        {displayed.map((project, i) => (
          <div
            key={project.title}
            className="glass p-6 flex flex-col gap-4 group"
            style={{ transitionDelay: `${i * 60}ms` }}
          >
            {/* Top row */}
            <div className="flex items-start justify-between gap-4">
              <div>
                {project.featured && (
                  <span
                    className="text-xs font-semibold mb-2 inline-block"
                    style={{ color: "var(--accent-cyan)" }}
                  >
                    ★ Featured
                  </span>
                )}
                <h3
                  className="font-display font-bold text-lg leading-snug"
                  style={{ color: "var(--text-primary)" }}
                >
                  {project.title}
                </h3>
              </div>

              {/* Link icons */}
              <div className="flex gap-2 shrink-0">
                {project.githubUrl && (
                  <a
                    href={project.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    id={`project-github-${i}`}
                    aria-label="GitHub repository"
                    className="w-8 h-8 flex items-center justify-center rounded-lg transition-all duration-200 hover:scale-110"
                    style={{
                      background: "var(--surface-2)",
                      color: "var(--text-secondary)",
                      border: "1px solid var(--border)",
                    }}
                  >
                    <GitHubIcon />
                  </a>
                )}
                {project.liveUrl && (
                  <a
                    href={project.liveUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    id={`project-live-${i}`}
                    aria-label="Live demo"
                    className="w-8 h-8 flex items-center justify-center rounded-lg transition-all duration-200 hover:scale-110"
                    style={{
                      background: "var(--surface-2)",
                      color: "var(--text-secondary)",
                      border: "1px solid var(--border)",
                    }}
                  >
                    <ExternalLinkIcon />
                  </a>
                )}
              </div>
            </div>

            {/* Description */}
            <p className="text-sm leading-relaxed flex-1" style={{ color: "var(--text-secondary)" }}>
              {project.description}
            </p>

            {/* Tags */}
            <div className="flex flex-wrap gap-2">
              {project.tags.map((tag) => (
                <span key={tag} className="tag">
                  {tag}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
