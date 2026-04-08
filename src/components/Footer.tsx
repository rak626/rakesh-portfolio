"use client";

import {motion} from "framer-motion";
import {FaGithub, FaLinkedin, FaTwitter} from "react-icons/fa";
import {personalInfo} from "@/datas/data";

const socialLinks = [
    {
        name: "GitHub",
        href: personalInfo.socials.github,
        icon: <FaGithub className="w-5 h-5"/>,
    },
    {
        name: "LinkedIn",
        href: personalInfo.socials.linkedin,
        icon: <FaLinkedin className="w-5 h-5"/>,
    },
    {
        name: "Twitter",
        href: personalInfo.socials.twitter,
        icon: <FaTwitter className="w-5 h-5"/>,
    },
];

export default function Footer() {
    const currentYear = new Date().getFullYear();

    return (
        <footer className="relative py-12 bg-[var(--bg-primary)] border-t border-[var(--border)]">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex flex-col md:flex-row items-center justify-between gap-8">
                    <motion.div
                        initial={{opacity: 0, y: 20}}
                        whileInView={{opacity: 1, y: 0}}
                        viewport={{once: true}}
                        className="text-center md:text-left"
                    >
            <span
                className="text-2xl font-bold bg-gradient-to-r from-[var(--accent-primary)] to-[var(--accent-secondary)] bg-clip-text text-transparent">
              RG
            </span>
                        <p className="mt-2 text-[var(--text-secondary)] text-sm">
                            {personalInfo.role} | {personalInfo.address}
                        </p>
                    </motion.div>

                    <motion.div
                        initial={{opacity: 0, y: 20}}
                        whileInView={{opacity: 1, y: 0}}
                        viewport={{once: true}}
                        transition={{delay: 0.1}}
                        className="flex items-center gap-4"
                    >
                        {socialLinks.map((link) => (
                            <motion.a
                                key={link.name}
                                href={link.href}
                                target="_blank"
                                rel="noopener noreferrer"
                                whileHover={{scale: 1.1, y: -2}}
                                whileTap={{scale: 0.95}}
                                className="p-3 rounded-xl bg-[var(--bg-secondary)] border border-[var(--border)] text-[var(--text-secondary)] hover:text-[var(--accent-primary)] hover:border-[var(--accent-primary)] transition-all"
                                aria-label={link.name}
                            >
                                {link.icon}
                            </motion.a>
                        ))}
                    </motion.div>
                </div>

                <motion.div
                    initial={{opacity: 0}}
                    whileInView={{opacity: 1}}
                    viewport={{once: true}}
                    transition={{delay: 0.2}}
                    className="mt-8 pt-8 border-t border-[var(--border)] text-center"
                >
                    <p className="text-[var(--text-secondary)] text-sm">
                        © {currentYear} {personalInfo.name}.
                    </p>
                </motion.div>
            </div>
        </footer>
    );
}
