"use client";

import {useState, useEffect} from "react";
import Link from "next/link";
import {motion, useScroll, useTransform} from "framer-motion";
import {ThemeToggle} from "@/components/ui/ThemeToggle";
import MobileNav from "./MobileNav";

const navItems = [
    {name: "Home", href: "#home"},
    {name: "About", href: "#about"},
    {name: "Skills", href: "#skills"},
    {name: "Projects", href: "#projects"},
    {name: "Experience", href: "#experience"},
    {name: "Contact", href: "#contact"},
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
                        ? "bg-[var(--bg-primary)]/80 backdrop-blur-xl border-b border-[var(--border)] shadow-lg"
                        : "bg-transparent"
                }`}
            >
                <motion.div
                    className="absolute bottom-0 left-0 h-[2px] bg-gradient-to-r from-[var(--accent-primary)] to-[var(--accent-secondary)] origin-left"
                    style={{scaleX}}
                />

                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="flex items-center justify-between h-16 md:h-20">
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
                <span
                    className="text-xl md:text-2xl font-bold bg-gradient-to-r from-[var(--accent-primary)] to-[var(--accent-secondary)] bg-clip-text text-transparent">
                  RG
                </span>
                                <span
                                    className="hidden sm:inline text-sm font-medium text-[var(--text-secondary)] group-hover:text-[var(--text-primary)] transition-colors">
                  Rakesh Ghosh
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
                                        className={`relative px-4 py-2 text-sm font-medium transition-colors ${
                                            isActive
                                                ? "text-[var(--accent-primary)]"
                                                : "text-[var(--text-secondary)] hover:text-[var(--text-primary)]"
                                        }`}
                                    >
                                        {item.name}
                                        {isActive && (
                                            <motion.div
                                                layoutId="navbar-active"
                                                className="absolute bottom-0 left-4 right-4 h-[2px] bg-gradient-to-r from-[var(--accent-primary)] to-[var(--accent-secondary)] rounded-full"
                                            />
                                        )}
                                    </motion.button>
                                );
                            })}
                            <div className="ml-4 pl-4 border-l border-[var(--border)]">
                                <ThemeToggle/>
                            </div>
                        </motion.div>

                        <div className="flex items-center gap-3 lg:hidden">
                            <ThemeToggle/>
                            <MobileNav items={navItems} onItemClick={scrollToSection}/>
                        </div>
                    </div>
                </div>
            </motion.nav>
        </>
    );
}
