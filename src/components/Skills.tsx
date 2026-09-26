"use client";

import { useEffect, useRef } from "react";
import { skills } from "@/data";

const categoryIcons: Record<string, string> = {
  "Cybersecurity & SOC": "🛡️",
  "Security Tools": "🔧",
  "Networking": "🌐",
  "Programming & OS": "💻",
  "Web Development": "🎨",
  "Data & Analytics": "📊",
  "Databases & Cloud": "☁️",
  "Tools & Platforms": "🚀",
};

export default function Skills() {
  const sectionRef = useRef<HTMLElement>(null);

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

  return (
    <section
      id="skills"
      ref={sectionRef}
      className="reveal section px-6 md:px-12 lg:px-24 max-w-7xl mx-auto"
    >
      <div className="section-label">What I Know</div>
      <h2 className="section-title">Skills &amp; Technologies</h2>
      <div className="divider" />
      <p className="section-subtitle mb-14">
        From threat analysis and network security to full-stack development —
        the tools and skills I bring to the table.
      </p>

      <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {skills.map((group, i) => (
          <div
            key={group.category}
            className="glass p-6"
            style={{
              transitionDelay: `${i * 80}ms`,
            }}
          >
            {/* Header */}
            <div className="flex items-center gap-3 mb-5">
              <div
                className="text-2xl w-10 h-10 flex items-center justify-center rounded-xl"
                style={{ background: "var(--surface-2)" }}
              >
                {categoryIcons[group.category] ?? "🔧"}
              </div>
              <h3
                className="font-display font-semibold text-sm"
                style={{ color: "var(--text-primary)" }}
              >
                {group.category}
              </h3>
            </div>

            {/* Skills list */}
            <ul className="flex flex-col gap-2">
              {group.items.map((skill) => (
                <li
                  key={skill}
                  className="flex items-center gap-2.5 text-sm"
                  style={{ color: "var(--text-secondary)" }}
                >
                  <span
                    className="w-1.5 h-1.5 rounded-full flex-shrink-0"
                    style={{ background: "var(--accent-primary)" }}
                  />
                  {skill}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>

      {/* Marquee row */}
      <div
        className="mt-16 overflow-hidden"
        style={{ maskImage: "linear-gradient(90deg, transparent, black 10%, black 90%, transparent)" }}
      >
        <div
          className="flex gap-4 whitespace-nowrap"
          style={{ animation: "marquee 30s linear infinite" }}
        >
          {[...skills.flatMap((g) => g.items), ...skills.flatMap((g) => g.items)].map(
            (skill, i) => (
              <span key={i} className="tag text-nowrap shrink-0">
                {skill}
              </span>
            )
          )}
        </div>
      </div>

      <style>{`
        @keyframes marquee {
          0%   { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
      `}</style>
    </section>
  );
}
