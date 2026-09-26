import Link from "next/link";
import { education, credentials, community, events } from "@/data";

export default function CertificatesPage() {
  return (
    <main className="min-h-screen py-20 px-6 md:px-20 max-w-7xl mx-auto">
      <Link href="/#about" className="text-zinc-500 hover:text-zinc-900 mb-8 inline-block">
        &larr; Back to Home
      </Link>
      <h1 className="text-4xl font-bold mb-10 border-b border-zinc-200 pb-4">
        Education &amp; Credentials
      </h1>

      {/* ── Education ── */}
      <div className="mb-14">
        <h2 className="text-2xl font-bold text-zinc-800 mb-6">Education</h2>
        {education.map((edu, i) => (
          <div key={i} className="glass-card p-6 rounded-xl mb-4">
            <h3 className="text-lg font-bold">{edu.institution}</h3>
            <p className="text-zinc-700 mt-1 font-medium">{edu.degree}</p>
            <p className="text-zinc-600 mt-2 leading-relaxed">{edu.details}</p>
          </div>
        ))}
      </div>

      {/* ── Certifications ── */}
      <div className="mb-14">
        <h2 className="text-2xl font-bold text-zinc-800 mb-6">
          Certifications ({credentials.length})
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {credentials.map((cred, i) => (
            <div key={i} className="glass-card rounded-xl overflow-hidden flex flex-col">
              <div className="h-44 bg-zinc-200/30 w-full border-b border-white/50">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src={cred.image}
                  alt={cred.title}
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="p-5 flex flex-col gap-1.5 flex-1">
                <h3 className="font-bold text-zinc-900 text-sm leading-snug">{cred.title}</h3>
                <p className="text-zinc-500 text-xs">{cred.issuer}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* ── Community Involvement ── */}
      <div className="mb-14">
        <h2 className="text-2xl font-bold text-zinc-800 mb-6">Community Involvement</h2>
        <div className="space-y-3">
          {community.map((item, i) => (
            <div key={i} className="glass-card p-5 rounded-xl">
              <p className="text-zinc-700 text-sm leading-relaxed">{item}</p>
            </div>
          ))}
        </div>
      </div>

      {/* ── Events & Competitions ── */}
      <div className="mb-14">
        <h2 className="text-2xl font-bold text-zinc-800 mb-6">Events &amp; Competitions</h2>
        <div className="space-y-3">
          {events.map((item, i) => (
            <div key={i} className="glass-card p-5 rounded-xl">
              <p className="text-zinc-700 text-sm leading-relaxed">{item}</p>
            </div>
          ))}
        </div>
      </div>
    </main>
  );
}
