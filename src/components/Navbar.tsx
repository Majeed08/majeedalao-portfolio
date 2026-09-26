"use client";

import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { personalInfo } from "@/data";

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const pathname = usePathname();

  const navLinks = [
    { label: "About Me", href: "/#about" },
    { label: "Projects", href: "/#projects" },
    { label: "Contact Me", href: "/#contact" },
  ];

  function handleLinkClick() {
    setMenuOpen(false);
  }

  return (
    <nav className="sticky top-0 z-50 glass-nav">
      <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
        {/* Logo */}
        <Link href="/" className="font-bold text-xl text-zinc-900">
          OA.
        </Link>

        {/* Desktop links */}
        <div className="hidden md:flex gap-6 text-sm font-medium text-zinc-600">
          {navLinks.map((link) => (
            <Link key={link.label} href={link.href} className="hover:text-zinc-900 transition">
              {link.label}
            </Link>
          ))}
          <a
            href={personalInfo.cvLink}
            download
            className="hover:text-zinc-900 transition border-l border-zinc-300 pl-6"
          >
            CV
          </a>
        </div>

        {/* Hamburger button — mobile only */}
        <button
          type="button"
          onClick={() => setMenuOpen((prev) => !prev)}
          className="md:hidden relative w-8 h-8 flex items-center justify-center"
          aria-label="Toggle navigation menu"
          aria-expanded={menuOpen}
        >
          <div className="flex flex-col justify-center items-center gap-[5px]">
            <span
              className="block w-5 h-[2px] bg-zinc-800 rounded-full transition-transform duration-300 origin-center"
              style={{
                transform: menuOpen ? "translateY(7px) rotate(45deg)" : "none",
              }}
            />
            <span
              className="block w-5 h-[2px] bg-zinc-800 rounded-full transition-opacity duration-200"
              style={{ opacity: menuOpen ? 0 : 1 }}
            />
            <span
              className="block w-5 h-[2px] bg-zinc-800 rounded-full transition-transform duration-300 origin-center"
              style={{
                transform: menuOpen ? "translateY(-7px) rotate(-45deg)" : "none",
              }}
            />
          </div>
        </button>
      </div>

      {/* Mobile dropdown menu */}
      {menuOpen && (
        <div className="md:hidden border-t border-zinc-200 px-6 py-4 flex flex-col gap-3 text-sm font-medium text-zinc-600">
          {navLinks.map((link) => (
            <Link
              key={link.label}
              href={link.href}
              onClick={handleLinkClick}
              className="hover:text-zinc-900 transition py-2"
            >
              {link.label}
            </Link>
          ))}
          <a
            href={personalInfo.cvLink}
            download
            onClick={handleLinkClick}
            className="hover:text-zinc-900 transition py-2 border-t border-zinc-200 pt-3"
          >
            Download CV
          </a>
        </div>
      )}
    </nav>
  );
}
