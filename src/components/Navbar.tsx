"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { motion, useScroll, useTransform, AnimatePresence } from "framer-motion";
import { ThemeToggle } from "@/components/ui/ThemeToggle";
import MobileNav from "./MobileNav";

const navItems = [
  { name: "Home", href: "#home" },
  { name: "About", href: "#about" },
  { name: "Skills", href: "#skills" },
  { name: "Projects", href: "#projects" },
  { name: "Experience", href: "#experience" },
  { name: "Contact", href: "#contact" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState("home");
  const { scrollYProgress } = useScroll();
  const scaleX = useTransform(scrollYProgress, [0, 1], [0, 1]);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);

      const sections = navItems.map((item) => item.href.slice(1));
      const scrollPosition = window.scrollY + 200;

      for (let i = sections.length - 1; i >= 0; i--) {
        const section = document.getElementById(sections[i]);
        if (section && section.offsetTop <= scrollPosition) {
          setActiveSection(sections[i]);
          break;
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (href: string) => {
    const element = document.getElementById(href.slice(1));
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <>
      <motion.nav
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        className={`fixed top-0 left-0 right-0 z-[100] transition-all duration-500 ${
          scrolled
            ? "bg-bg-primary/90 backdrop-blur-xl border-b-2 border-accent-primary shadow-2xl py-2"
            : "bg-transparent py-6"
        }`}
      >
        <motion.div
          className="absolute bottom-0 left-0 h-[3px] bg-accent-primary shadow-[0_0_15px_var(--accent-primary)] origin-left"
          style={{ scaleX }}
        />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between">
            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
              <Link
                href="#home"
                onClick={(e) => {
                  e.preventDefault();
                  scrollToSection("#home");
                }}
                className="group flex items-center gap-4"
              >
                <div className="relative w-10 h-10 bg-text-primary flex items-center justify-center rotate-45 group-hover:rotate-90 transition-transform duration-500">
                  <span className="text-bg-primary font-black text-xl -rotate-45 group-hover:-rotate-90 transition-transform duration-500">
                    R
                  </span>
                </div>
                <div className="flex flex-col">
                  <span className="text-lg font-black tracking-tighter text-text-primary uppercase leading-none">
                    Rakesh Ghosh
                  </span>
                  <span className="text-[10px] font-bold tracking-[0.3em] text-accent-primary uppercase">
                    Architect // v2.6
                  </span>
                </div>
              </Link>
            </motion.div>

            <div className="hidden lg:flex items-center gap-1">
              {navItems.map((item, index) => {
                const isActive = activeSection === item.href.slice(1);
                return (
                  <motion.button
                    key={item.name}
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.3, delay: index * 0.05 }}
                    onClick={() => scrollToSection(item.href)}
                    className={`relative px-5 py-2 font-mono text-[11px] font-bold uppercase tracking-widest transition-all ${
                      isActive
                        ? "text-accent-primary"
                        : "text-text-secondary hover:text-text-primary"
                    }`}
                  >
                    <span className="relative z-10">{item.name}</span>
                    <AnimatePresence>
                      {isActive && (
                        <motion.div
                          layoutId="navbar-glow"
                          className="absolute inset-0 bg-accent-primary/5 border-b-2 border-accent-primary"
                          initial={{ opacity: 0 }}
                          animate={{ opacity: 1 }}
                          exit={{ opacity: 0 }}
                        />
                      )}
                    </AnimatePresence>
                  </motion.button>
                );
              })}
              <div className="ml-6 pl-6 border-l border-border/50">
                <ThemeToggle />
              </div>
            </div>

            <div className="flex items-center gap-4 lg:hidden">
              <ThemeToggle />
              <MobileNav items={navItems} onItemClick={scrollToSection} />
            </div>
          </div>
        </div>
      </motion.nav>
    </>
  );
}
