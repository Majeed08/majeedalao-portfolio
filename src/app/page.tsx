import Hero from "@/components/Hero";
import About from "@/components/About";
import FeaturedProjects from "@/components/FeaturedProjects";
import Contact from "@/components/Contact";

export default function Home() {
  return (
    <main className="min-h-screen pb-10">
      <Hero />
      <About />
      <FeaturedProjects />
      <Contact />

      <footer className="text-center py-8 text-sm text-zinc-500 mt-10 border-t border-zinc-200 mx-6 md:mx-20">
        <p>© {new Date().getFullYear()} ALAO OLABODE ABDUL-MAJEED. All rights reserved.</p>
      </footer>
    </main>
  );
}
