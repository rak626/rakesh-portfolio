"use client";

import {useState, useEffect, useCallback} from "react";
import {motion, AnimatePresence} from "framer-motion";
import AsciiBanner from "@/components/ui/AsciiBanner";
import CommandInput from "@/components/ui/CommandInput";
import {TypewriterSequence} from "@/components/ui/TypingText";
import {resumeData, personalInfo} from "@/datas/data";

interface Command {
    name: string;
    aliases: string[];
    description: string;
    action: () => void;
}

const WELCOME_MESSAGES = [
    "Building scalable payment systems...",
    "Crafting distributed architectures...",
    "Optimizing database queries...",
    "Deploying microservices...",
    "Writing clean code..."
];

export default function Hero() {
    const [showCommand, setShowCommand] = useState(false);
    const [asciiComplete, setAsciiComplete] = useState(false);
    const [commandHistory, setCommandHistory] = useState<{cmd: string; output: string}[]>([]);

    const scrollToSection = (id: string) => {
        document.getElementById(id)?.scrollIntoView({behavior: "smooth"});
    };

    const downloadResume = () => {
        const link = document.createElement("a");
        link.href = `/files/${resumeData.name}`;
        link.download = resumeData.name;
        link.click();
    };

    const commands: Command[] = [
        {
            name: "about",
            aliases: ["ls", "whoami", "bio"],
            description: "View about me",
            action: () => scrollToSection("about")
        },
        {
            name: "skills",
            aliases: ["cat skills.json", "tech"],
            description: "View my skills",
            action: () => scrollToSection("skills")
        },
        {
            name: "projects",
            aliases: ["cd projects", "work"],
            description: "View projects",
            action: () => scrollToSection("projects")
        },
        {
            name: "experience",
            aliases: ["history", "jobs"],
            description: "View experience",
            action: () => scrollToSection("experience")
        },
        {
            name: "blog",
            aliases: ["posts", "articles"],
            description: "Read blog posts",
            action: () => scrollToSection("blog")
        },
        {
            name: "contact",
            aliases: ["mail", "email"],
            description: "Get in touch",
            action: () => scrollToSection("contact")
        },
        {
            name: "resume",
            aliases: ["download", "cv"],
            description: "Download resume",
            action: downloadResume
        },
        {
            name: "clear",
            aliases: ["cls"],
            description: "Clear terminal",
            action: () => setCommandHistory([])
        }
    ];

    const handleCommand = useCallback((cmd: string) => {
        const matched = commands.find(c =>
            c.name.toLowerCase() === cmd.toLowerCase() ||
            c.aliases.some(a => a.toLowerCase() === cmd.toLowerCase())
        );

        if (matched) {
            setCommandHistory(prev => [...prev, {
                cmd: `$ ${cmd}`,
                output: `> Executing ${matched.name}...`
            }]);
        }
    }, []);

    useEffect(() => {
        const timeout = setTimeout(() => {
            setShowCommand(true);
        }, 3000);
        return () => clearTimeout(timeout);
    }, []);

    return (
        <section id="home" className="relative min-h-screen flex flex-col">
            <div className="flex-1 flex items-center justify-center px-4 sm:px-6 lg:px-8">
                <div className="max-w-6xl w-full">
                    <motion.div
                        initial={{opacity: 0}}
                        animate={{opacity: 1}}
                        transition={{duration: 0.5}}
                        className="mb-8"
                    >
                        <AsciiBanner
                            onComplete={() => setAsciiComplete(true)}
                            showSubtext={true}
                        />
                    </motion.div>

                    <AnimatePresence>
                        {showCommand && asciiComplete && (
                            <motion.div
                                initial={{opacity: 0, y: 20}}
                                animate={{opacity: 1, y: 0}}
                                transition={{duration: 0.5}}
                                className="mt-8 space-y-6"
                            >
                                <div className="space-y-2">
                                    <div className="text-sm text-[var(--text-secondary)]">
                                        <span className="text-[var(--accent-primary)]">$</span> Welcome! Type commands to navigate
                                        <span className="mx-2">|</span>
                                        <span className="text-[var(--accent-secondary)]">Tab</span> for autocomplete
                                    </div>

                                    <div className="text-sm text-[var(--text-secondary)]">
                                        Available:
                                        <span className="mx-1 text-[var(--accent-primary)]">[about]</span>
                                        <span className="mx-1 text-[var(--accent-primary)]">[skills]</span>
                                        <span className="mx-1 text-[var(--accent-primary)]">[projects]</span>
                                        <span className="mx-1 text-[var(--accent-primary)]">[experience]</span>
                                        <span className="mx-1 text-[var(--accent-primary)]">[blog]</span>
                                        <span className="mx-1 text-[var(--accent-primary)]">[contact]</span>
                                        <span className="mx-1 text-[var(--accent-secondary)]">[resume]</span>
                                    </div>
                                </div>

                                <div className="space-y-2">
                                    <TypewriterSequence
                                        sequences={WELCOME_MESSAGES}
                                        loop={true}
                                        speed={60}
                                        pauseTime={1500}
                                        className="text-sm text-[var(--text-primary)]"
                                    />
                                </div>

                                <CommandInput
                                    commands={commands}
                                    placeholder="Type 'help' or click navigation..."
                                    onExecute={handleCommand}
                                />

                                <AnimatePresence>
                                    {commandHistory.map((entry, index) => (
                                        <motion.div
                                            key={index}
                                            initial={{opacity: 0, x: -20}}
                                            animate={{opacity: 1, x: 0}}
                                            className="text-sm text-[var(--text-secondary)]"
                                        >
                                            <span className="text-[var(--accent-primary)]">{entry.cmd}</span>
                                            <span className="ml-2">{entry.output}</span>
                                        </motion.div>
                                    ))}
                                </AnimatePresence>
                            </motion.div>
                        )}
                    </AnimatePresence>

                    <motion.div
                        initial={{opacity: 0}}
                        animate={{opacity: 1}}
                        transition={{delay: 0.5, duration: 0.5}}
                        className="mt-12 flex flex-wrap gap-4"
                    >
                        <div className="flex items-center gap-3 text-sm">
                            {[
                                {label: "GitHub", href: personalInfo.socials.github, icon: "⎇"},
                                {label: "LinkedIn", href: personalInfo.socials.linkedin, icon: "in"},
                                {label: "Twitter", href: personalInfo.socials.twitter, icon: "tw"}
                            ].map((social) => (
                                <a
                                    key={social.label}
                                    href={social.href}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="flex items-center gap-2 px-3 py-2 bg-[var(--bg-secondary)] border border-[var(--border)] rounded hover:border-[var(--accent-primary)] hover:text-[var(--accent-primary)] transition-colors"
                                >
                                    <span className="text-[var(--accent-primary)]">{social.icon}</span>
                                    <span>{social.label}</span>
                                </a>
                            ))}
                        </div>
                    </motion.div>
                </div>
            </div>

            <motion.div
                className="pb-8 text-center"
                animate={{opacity: [0.5, 1, 0.5]}}
                transition={{duration: 2, repeat: Infinity}}
            >
                <div className="text-xs text-[var(--text-secondary)]">
                    <span className="text-[var(--accent-primary)]">v</span> 1.0.0
                    <span className="mx-4">|</span>
                    <span>Scroll to explore</span>
                    <span className="mx-2 text-[var(--accent-secondary)]">↓</span>
                </div>
            </motion.div>
        </section>
    );
}