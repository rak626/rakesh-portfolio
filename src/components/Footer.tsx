"use client";

import { Terminal, Cpu } from "lucide-react";
import { FaGithub, FaLinkedin, FaTwitter } from "react-icons/fa";
import { personalInfo } from "@/datas/data";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="relative py-12 border-t-2 border-text-primary bg-bg-secondary/50 backdrop-blur-md overflow-hidden">
      <div className="absolute top-0 right-0 p-4 opacity-5 pointer-events-none">
        <Cpu size={200} />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row items-center justify-between gap-12">
          <div className="space-y-4 text-center md:text-left">
            <div className="flex items-center justify-center md:justify-start gap-3">
              <div className="w-8 h-8 bg-text-primary flex items-center justify-center rotate-45">
                <span className="text-bg-primary font-black -rotate-45">R</span>
              </div>
              <span className="text-xl font-black uppercase tracking-tighter text-text-primary">
                Rakesh Ghosh
              </span>
            </div>
            <p className="font-mono text-[10px] font-bold text-text-secondary uppercase tracking-[0.2em]">
              Architecting Digital Resilience // v2.6.0-stable
            </p>
          </div>

          <div className="flex flex-col items-center md:items-end gap-6">
            <div className="flex gap-4">
              {[
                { icon: <FaGithub size={20} />, href: personalInfo.socials.github },
                { icon: <FaLinkedin size={20} />, href: personalInfo.socials.linkedin },
                { icon: <FaTwitter size={20} />, href: personalInfo.socials.twitter }
              ].map((social, i) => (
                <a 
                  key={i} 
                  href={social.href} 
                  className="w-10 h-10 border border-border/50 flex items-center justify-center hover:bg-text-primary hover:text-bg-primary transition-all text-text-secondary hover:text-bg-primary"
                >
                  {social.icon}
                </a>
              ))}
            </div>
            
            <div className="flex items-center gap-4 text-accent-primary font-mono text-[10px] font-bold">
              <span className="flex items-center gap-2">
                <span className="w-2 h-2 bg-accent-primary rounded-full animate-pulse" />
                SYSTEM_ONLINE
              </span>
              <span className="text-text-secondary">|</span>
              <span className="text-text-secondary">© {currentYear} CORE_ALGO</span>
            </div>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-border/20 flex flex-col md:flex-row justify-between items-center gap-4">
          <div className="flex items-center gap-2 text-[10px] font-mono text-text-secondary">
            <Terminal size={12} className="text-accent-primary" />
            <span>Built with Next.js 15 // Framer Motion 12 // Tailwind 4</span>
          </div>
          <div className="text-[10px] font-mono text-text-secondary uppercase tracking-widest">
            Kolkata // 22.5726° N, 88.3639° E
          </div>
        </div>
      </div>
    </footer>
  );
}
