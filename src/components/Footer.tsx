"use client";

import {motion} from "framer-motion";
import {FaGithub, FaLinkedin, FaTwitter} from "react-icons/fa";
import {personalInfo} from "@/datas/data";

export default function Footer() {
    const currentYear = new Date().getFullYear();

    return (
        <footer className="relative py-12 bg-[var(--bg-primary)] border-t border-[var(--border)]">
            <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex flex-col md:flex-row items-center justify-between gap-6">
                    <motion.div
                        initial={{opacity: 0, y: 20}}
                        whileInView={{opacity: 1, y: 0}}
                        viewport={{once: true}}
                        className="text-center md:text-left"
                    >
                        <div className="text-xs text-[var(--text-secondary)] mb-2">
                            <span className="text-[var(--accent-secondary)]">$</span> cat footer.sh
                        </div>
                        <div className="flex items-center gap-2">
                            <span className="text-[var(--accent-primary)] neon-text font-bold">
                                {personalInfo.name}
                            </span>
                            <span className="text-[var(--text-secondary)]">|</span>
                            <span className="text-[var(--text-secondary)]">
                                {personalInfo.role}
                            </span>
                        </div>
                        <p className="mt-1 text-xs text-[var(--text-secondary)]">
                            Made with <span className="text-[var(--accent-secondary)]">&lt;3</span> |{" "}
                            <span className="text-[var(--accent-primary)]">zsh</span> terminal
                        </p>
                    </motion.div>

                    <motion.div
                        initial={{opacity: 0, y: 20}}
                        whileInView={{opacity: 1, y: 0}}
                        viewport={{once: true}}
                        transition={{delay: 0.1}}
                        className="flex items-center gap-3"
                    >
                        {[
                            {name: "GitHub", href: personalInfo.socials.github, icon: FaGithub},
                            {name: "LinkedIn", href: personalInfo.socials.linkedin, icon: FaLinkedin},
                            {name: "Twitter", href: personalInfo.socials.twitter, icon: FaTwitter},
                        ].map((social) => (
                            <a
                                key={social.name}
                                href={social.href}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="p-2 bg-[var(--bg-secondary)] border border-[var(--border)] text-[var(--text-secondary)] hover:text-[var(--accent-primary)] hover:border-[var(--accent-primary)] text-sm transition-colors"
                                aria-label={social.name}
                            >
                                <social.icon className="w-4 h-4" />
                            </a>
                        ))}
                    </motion.div>
                </div>

                <motion.div
                    initial={{opacity: 0}}
                    whileInView={{opacity: 1}}
                    viewport={{once: true}}
                    transition={{delay: 0.2}}
                    className="mt-6 pt-4 border-t border-[var(--border)] text-center"
                >
                    <p className="text-xs text-[var(--text-secondary)] font-mono">
                        <span className="text-[var(--accent-secondary)]">&copy;</span> {currentYear}{" "}
                        <span className="text-[var(--accent-primary)]">{personalInfo.name}</span>
                        <span className="mx-2">|</span>
                        <span className="text-[var(--accent-secondary)]">~</span> All rights reserved
                    </p>
                </motion.div>

                <motion.div
                    initial={{opacity: 0}}
                    whileInView={{opacity: 1}}
                    viewport={{once: true}}
                    transition={{delay: 0.3}}
                    className="mt-4 text-center text-xs text-[var(--text-secondary)]"
                >
                    <span className="px-2 py-1 bg-[var(--bg-secondary)] rounded">
                        exit code: <span className="text-[var(--accent-primary)]">0</span>
                    </span>
                </motion.div>
            </div>
        </footer>
    );
}