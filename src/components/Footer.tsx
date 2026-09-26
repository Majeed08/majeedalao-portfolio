import { personalInfo, socialLinks } from "@/data";

const iconMap: Record<string, string> = {
  github: "GitHub",
  linkedin: "LinkedIn",
  twitter: "Twitter",
};

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer
      id="contact"
      className="px-6 md:px-12 lg:px-24 max-w-7xl mx-auto pb-16 pt-24"
    >
      {/* CTA Banner */}
      <div
        className="glass p-10 md:p-14 text-center rounded-2xl mb-16 relative overflow-hidden"
        style={{ borderColor: "rgba(99,102,241,0.25)" }}
      >
        {/* Glow */}
        <div
          className="absolute inset-0 -z-10 rounded-2xl opacity-20"
          style={{
            background:
              "radial-gradient(ellipse at center, rgba(99,102,241,0.6), transparent 70%)",
          }}
        />

        <div className="section-label justify-center flex mb-3">Let&apos;s Connect</div>
        <h2
          className="font-display font-bold mb-4"
          style={{ fontSize: "clamp(2rem, 5vw, 3.5rem)", color: "var(--text-primary)" }}
        >
          Have a project in mind?
        </h2>
        <p
          className="mb-8 max-w-lg mx-auto text-base"
          style={{ color: "var(--text-secondary)" }}
        >
          I&apos;m always open to discussing new opportunities, collaborations,
          or just having a chat. Drop me a line!
        </p>

        <a
          href={personalInfo.contact.email}
          id="footer-email-btn"
          className="btn-primary text-base px-8 py-3"
        >
          Say Hello →
        </a>
      </div>

      {/* Bottom bar */}
      <div
        className="flex flex-col md:flex-row items-center justify-between gap-6 pt-8"
        style={{ borderTop: "1px solid var(--border)" }}
      >
        <span className="font-display font-bold text-lg gradient-text">
          {personalInfo.name}
        </span>

        <div className="flex items-center gap-6">
          {socialLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              target="_blank"
              rel="noopener noreferrer"
              id={`footer-social-${link.icon}`}
              className="text-sm transition-colors duration-200 hover:text-white"
              style={{ color: "var(--text-muted)" }}
            >
              {iconMap[link.icon] ?? link.label}
            </a>
          ))}
        </div>

        <p className="text-xs" style={{ color: "var(--text-muted)" }}>
          © {year} {personalInfo.name}. Built with Next.js
        </p>
      </div>
    </footer>
  );
}
