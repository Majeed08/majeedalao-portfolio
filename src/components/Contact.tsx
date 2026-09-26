import { personalInfo } from "@/data";

export default function Contact() {
  const { contact } = personalInfo;

  return (
    <section id="contact" className="py-20 px-6 md:px-20 max-w-7xl mx-auto scroll-mt-20">
      <div className="glass-dark p-10 rounded-2xl text-center">
        <h2 className="text-3xl font-bold mb-4 text-white">Let&apos;s Connect</h2>
        <p className="text-zinc-400 mb-8 max-w-md mx-auto">
          Whether you have a question, a project idea, or just want to say hi, feel free to drop a message.
        </p>
        <div className="flex justify-center flex-wrap gap-4">
          <a href={contact.email} className="px-6 py-3 glass-pill text-zinc-200 rounded-lg font-medium">Mail</a>
          <a href={contact.linkedin} target="_blank" rel="noreferrer" className="px-6 py-3 glass-pill text-zinc-200 rounded-lg font-medium">LinkedIn</a>
          <a href={contact.whatsapp} target="_blank" rel="noreferrer" className="px-6 py-3 glass-pill text-zinc-200 rounded-lg font-medium">WhatsApp</a>
          <a href={contact.instagram} target="_blank" rel="noreferrer" className="px-6 py-3 glass-pill text-zinc-200 rounded-lg font-medium">Instagram</a>
        </div>
      </div>
    </section >
  );
}
