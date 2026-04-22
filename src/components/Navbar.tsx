"use client";

import {useState, useEffect} from "react";
import Link from "next/link";
import {motion, useScroll, useTransform} from "framer-motion";
import {ThemeToggle} from "@/components/ui/ThemeToggle";
import MobileNav from "./MobileNav";

const navItems = [
    {name: "home", href: "#home", cmd: "ls"},
    {name: "about", href: "#about", cmd: "cat"},
    {name: "skills", href: "#skills", cmd: "npm"},
    {name: "projects", href: "#projects", cmd: "cd"},
    {name: "experience", href: "#experience", cmd: "history"},
    {name: "contact", href: "#contact", cmd: "curl"},
];

export default function Navbar() {
    const [scrolled, setScrolled] = useState(false);
    const [activeSection, setActiveSection] = useState("home");
    const {scrollYProgress} = useScroll();
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
            element.scrollIntoView({behavior: "smooth"});
        }
    };

    return (
        <>
            <motion.nav
                className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
                    scrolled
                        ? "bg-[var(--bg-primary)]/90 backdrop-blur-xl"
                        : "bg-transparent"
                }`}
            >
                {scrolled && (
                    <motion.div
                        className="absolute bottom-0 left-0 h-[2px] bg-gradient-to-r from-[var(--accent-primary)] to-[var(--accent-secondary)] origin-left"
                        style={{scaleX}}
                    />
                )}

                <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="flex items-center justify-between h-14">
                        <motion.div
                            initial={{opacity: 0, x: -20}}
                            animate={{opacity: 1, x: 0}}
                            transition={{duration: 0.5}}
                        >
                            <Link
                                href="#home"
                                onClick={(e) => {
                                    e.preventDefault();
                                    scrollToSection("#home");
                                }}
                                className="group flex items-center gap-2"
                            >
                                <span className="text-[var(--accent-primary)] neon-text font-bold text-lg">
                                    ~$
                                </span>
                                <span className="hidden sm:inline text-xs text-[var(--text-secondary)]">
                                    ./portfolio
                                </span>
                            </Link>
                        </motion.div>

                        <motion.div
                            initial={{opacity: 0, x: 20}}
                            animate={{opacity: 1, x: 0}}
                            transition={{duration: 0.5}}
                            className="hidden lg:flex items-center gap-1"
                        >
                            {navItems.map((item, index) => {
                                const isActive = activeSection === item.href.slice(1);
                                return (
                                    <motion.button
                                        key={item.name}
                                        initial={{opacity: 0, y: -10}}
                                        animate={{opacity: 1, y: 0}}
                                        transition={{duration: 0.3, delay: index * 0.05}}
                                        onClick={() => scrollToSection(item.href)}
                                        className={`relative px-3 py-1.5 text-sm font-medium transition-colors rounded ${
                                            isActive
                                                ? "text-[var(--bg-primary)] bg-[var(--accent-primary)]"
                                                : "text-[var(--text-secondary)] hover:text-[var(--text-primary)]"
                                        }`}
                                    >
                                        <span className="text-xs opacity-60 mr-1">
                                            {isActive ? "" : item.cmd}
                                        </span>
                                        {item.name}
                                    </motion.button>
                                );
                            })}
                            <div className="ml-3 pl-3 border-l border-[var(--border)]">
                                <ThemeToggle/>
                            </div>
                        </motion.div>

                        <div className="flex items-center gap-2 lg:hidden">
                            <ThemeToggle/>
                            <MobileNav items={navItems} onItemClick={scrollToSection}/>
                        </div>
                    </div>
                </div>
            </motion.nav>
        </>
    );
}