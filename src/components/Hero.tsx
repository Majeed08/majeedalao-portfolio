import { personalInfo } from "@/data";

export default function Hero() {
  return (
    <section className="min-h-[70vh] flex flex-col justify-center px-6 md:px-20 max-w-7xl mx-auto pt-20">
      <div className="max-w-4xl">
        <h1 className="text-4xl md:text-6xl font-bold tracking-tight text-zinc-900">
          {personalInfo.name}
        </h1>
        <p className="mt-4 text-xl md:text-2xl text-zinc-600 font-medium">
          {personalInfo.title}
        </p>
        <p className="mt-6 text-base md:text-lg text-zinc-600 max-w-2xl leading-relaxed">
          {personalInfo.bio}
        </p>

        <div className="mt-10 flex gap-4 flex-wrap">
          <a
            href={personalInfo.contact.github}
            target="_blank"
            rel="noreferrer"
            className="px-6 py-3 bg-zinc-900 text-zinc-50 rounded-lg hover:bg-zinc-800 transition shadow-sm"
          >
            GitHub
          </a>
          <a
            href={personalInfo.contact.linkedin}
            target="_blank"
            rel="noreferrer"
            className="px-6 py-3 glass-card text-zinc-900 rounded-lg font-medium"
          >
            LinkedIn
          </a>
        </div>
      </div>
    </section>
  );
}
