import Link from "next/link";
import { personalInfo, skills, experience, education } from "@/data";

export default function About() {
  return (
    <section id="about" className="py-20 px-6 md:px-20 max-w-7xl mx-auto scroll-mt-20">
      <h2 className="text-3xl font-bold mb-8 border-b border-zinc-200 pb-4">About Me</h2>

      {/* Extended bio */}
      <p className="text-zinc-600 leading-relaxed mb-12 max-w-3xl">
        {personalInfo.extendedBio}
      </p>

      {/* ── Education ── */}
      <div className="mb-12">
        <h3 className="text-xl font-semibold mb-4 text-zinc-800">Education</h3>
        {education.map((edu, i) => (
          <div key={i} className="mb-4 glass-card p-6 rounded-xl">
            <h4 className="text-lg font-bold">{edu.institution}</h4>
            <p className="text-zinc-700 mt-1 font-medium">{edu.degree}</p>
            <p className="text-zinc-600 mt-2 leading-relaxed">{edu.details}</p>
          </div>
        ))}
      </div>

      {/* ── Professional Experience ── */}
      <div className="mb-12">
        <h3 className="text-xl font-semibold mb-4 text-zinc-800">Professional Experience</h3>
        {experience.map((exp, i) => (
          <div key={i} className="glass-card p-6 rounded-xl mb-4">
            <h4 className="text-lg font-bold">{exp.role}</h4>
            <p className="text-zinc-500 text-sm font-medium mt-0.5">{exp.company}</p>
            <ul className="mt-3 space-y-2">
              {exp.details.map((detail, j) => (
                <li key={j} className="text-zinc-600 leading-relaxed text-sm flex gap-2">
                  <span className="text-zinc-400 mt-0.5 shrink-0">•</span>
                  {detail}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>

      {/* ── Technical Skills ── */}
      <div className="mb-12">
        <h3 className="text-xl font-semibold mb-4 text-zinc-800">Technical Skills</h3>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {skills.map((group, i) => (
            <div key={i} className="glass-card p-5 rounded-xl">
              <h4 className="text-sm font-bold text-zinc-800 mb-3">{group.category}</h4>
              <div className="flex flex-wrap gap-1.5">
                {group.items.map((item, j) => (
                  <span key={j} className="px-2.5 py-1 tech-tag text-zinc-600 text-xs rounded-full">
                    {item}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* View Credentials link */}
      <Link
        href="/certificates"
        className="inline-block px-6 py-3 glass-card text-zinc-900 font-medium rounded-lg"
      >
        View Credentials &amp; Certifications &rarr;
      </Link>
    </section>
  );
}
