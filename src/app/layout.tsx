import type { Metadata } from "next";
import { Inter } from "next/font/google";
import Navbar from "@/components/Navbar";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "ALAO OLABODE ABDUL-MAJEED | Portfolio",
  description: "Cybersecurity Enthusiast | SOC Analyst | Network Security Analyst",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={`${inter.className} bg-zinc-100 text-zinc-900 antialiased`}>
        <Navbar />
        {children}
      </body>
    </html>
  );
}
