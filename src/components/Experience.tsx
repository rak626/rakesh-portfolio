"use client";

import {useState, useRef, useEffect} from "react";
import {motion, AnimatePresence, useInView} from "framer-motion";
import {experiences} from "@/datas/data";
import {GetSkillIcon} from "@/utils/iconUtils";

function AnimatedTimeline() {
    const ref = useRef(null);
    const isInView = useInView(ref, {once: true, margin: "-50px"});

    return (
        <div ref={ref} className="relative">
            <div className="absolute left-6 top-0 bottom-0 w-[2px] bg-gradient-to-b from-[var(--accent-primary)] via-[var(--accent-secondary)] to-transparent">
                <motion.div
                    initial={{height: 0}}
                    animate={isInView ? {height: "100%"} : {}}
                    transition={{duration: 1.5, ease: "easeOut"}}
                    className="w-full bg-gradient-to-b from-[var(--accent-primary)] to-[var(--accent-secondary)]"
                />
            </div>
        </div>
    );
}

function ExperienceEntry({
                            experience,
                            index,
                        }: {
    experience: (typeof experiences)[0];
    index: number;
}) {
    const [expanded, setExpanded] = useState(false);
    const ref = useRef(null);
    const isInView = useInView(ref, {once: true, margin: "-50px"});

    return (
        <motion.div
            ref={ref}
            initial={{opacity: 0, x: -30}}
            animate={isInView ? {opacity: 1, x: 0} : {}}
            transition={{delay: index * 0.2, duration: 0.5}}
            className="relative pl-16"
        >
            <div className="absolute left-4 top-0 w-4 h-4 rounded-full bg-[var(--bg-primary)] border-2 border-[var(--accent-primary)] z-10">
                <motion.div
                    initial={{scale: 0}}
                    animate={isInView ? {scale: 1} : {}}
                    transition={{delay: index * 0.2 + 0.3, type: "spring", stiffness: 200}}
                    className="w-full h-full rounded-full bg-[var(--accent-primary)]"
                />
            </div>

            <motion.div
                onClick={() => setExpanded(!expanded)}
                whileHover={{borderColor: "var(--accent-primary)"}}
                className="p-5 bg-[var(--bg-secondary)] border border-[var(--border)] rounded cursor-pointer transition-all"
            >
                <div className="flex items-start justify-between gap-4 mb-3">
                    <div className="flex-1">
                        <div className="flex items-center gap-2 mb-1">
                            <span className="text-xs text-[var(--accent-secondary)]">#</span>
                            <span className="text-[var(--text-primary)] font-bold">
                                {experience.role}
                            </span>
                        </div>
                        <div className="flex items-center gap-2 text-sm">
                            <span className="text-[var(--accent-primary)]">at</span>
                            <span className="text-[var(--text-secondary)]">
                                {experience.company}
                            </span>
                        </div>
                    </div>

                    <div className="text-right">
                        <span className="px-2 py-1 bg-[var(--bg-tertiary)] text-[var(--text-secondary)] text-xs rounded font-mono">
                            {experience.date}
                        </span>
                    </div>
                </div>

                <AnimatePresence>
                    {expanded && (
                        <motion.div
                            initial={{height: 0, opacity: 0}}
                            animate={{height: "auto", opacity: 1}}
                            exit={{height: 0, opacity: 0}}
                            transition={{duration: 0.3}}
                            className="overflow-hidden"
                        >
                            <div className="pt-4 space-y-4">
                                <div className="space-y-2">
                                    <div className="text-xs text-[var(--accent-secondary)] mb-2">
                                        <span className="text-[var(--accent-primary)]">$</span> cat responsibilities.md
                                    </div>
                                    <ul className="space-y-2">
                                        {experience.description.map((desc, i) => (
                                            <li
                                                key={i}
                                                className="flex items-start gap-2 text-sm text-[var(--text-secondary)]"
                                            >
                                                <span className="text-[var(--accent-primary)] mt-1">
                                                    <span className="text-[var(--accent-secondary)]">-</span>
                                                </span>
                                                {desc}
                                            </li>
                                        ))}
                                    </ul>
                                </div>

                                {experience.skills && experience.skills.length > 0 && (
                                    <div className="space-y-2 pt-4 border-t border-[var(--border)]">
                                        <div className="text-xs text-[var(--accent-secondary)]">
                                            <span className="text-[var(--accent-primary)]">$</span> cat tech_stack.json
                                        </div>
                                        <div className="flex flex-wrap gap-2">
                                            {experience.skills.map((skill) => {
                                                const icon = GetSkillIcon[skill.toLowerCase()];
                                                return (
                                                    <span
                                                        key={skill}
                                                        className="flex items-center gap-1.5 px-2 py-1 bg-[var(--bg-tertiary)] text-xs text-[var(--text-secondary)] rounded"
                                                    >
                                                        <span className="text-[var(--accent-primary)]">
                                                            {icon && <span className="[&>svg]:w-3 [&>svg]:h-3">{icon}</span>}
                                                        </span>
                                                        {skill}
                                                    </span>
                                                );
                                            })}
                                        </div>
                                    </div>
                                )}
                            </div>
                        </motion.div>
                    )}
                </AnimatePresence>

                <div className="mt-3 pt-3 border-t border-[var(--border)] flex items-center justify-between">
                    <span className="text-xs text-[var(--text-secondary)]">
                        {expanded ? "[-] collapse" : "[+] expand"}
                    </span>
                    <span className="text-xs text-[var(--accent-primary)]">
                        {experience.description.length} responsibilities
                    </span>
                </div>
            </motion.div>
        </motion.div>
    );
}

function LogOutput() {
    const [logs, setLogs] = useState<string[]>([]);
    const ref = useRef(null);
    const isInView = useInView(ref, {once: true});

    const initialLogs = [
        "[INFO] Initializing experience log...",
        "[INFO] Loading work history...",
        `[INFO] Found ${experiences.length} entries`,
        "[INFO] Processing timeline...",
        "[DONE] Ready."
    ];

    useEffect(() => {
        if (isInView) {
            initialLogs.forEach((log, i) => {
                setTimeout(() => {
                    setLogs(prev => [...prev, log]);
                }, i * 300);
            });
        }
    }, [isInView]);

    return (
        <motion.div
            ref={ref}
            initial={{opacity: 0}}
            animate={isInView ? {opacity: 1} : {}}
            className="p-4 bg-[var(--bg-primary)] border border-[var(--border)] rounded font-mono"
        >
            <div className="flex items-center justify-between mb-2 text-xs">
                <span className="text-[var(--text-secondary)]">history.log</span>
                <span className="text-[var(--accent-primary)]">tail -f</span>
            </div>
            <div className="space-y-1">
                {logs.map((log, i) => (
                    <motion.div
                        key={i}
                        initial={{opacity: 0, x: -10}}
                        animate={{opacity: 1, x: 0}}
                        className={`text-xs ${
                            log.includes("[INFO]")
                                ? "text-[var(--text-secondary)]"
                                : "text-[var(--accent-primary)]"
                        }`}
                    >
                        {log}
                    </motion.div>
                ))}
                {logs.length < initialLogs.length && (
                    <motion.span
                        animate={{opacity: [1, 0]}}
                        transition={{duration: 0.5, repeat: Infinity}}
                        className="text-[var(--accent-primary)]"
                    >
                        _
                    </motion.span>
                )}
            </div>
        </motion.div>
    );
}

export default function Experience() {
    return (
        <section id="experience" className="relative py-24 lg:py-32 bg-[var(--bg-primary)]">
            <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
                <motion.div
                    initial={{opacity: 0, y: 20}}
                    whileInView={{opacity: 1, y: 0}}
                    viewport={{once: true}}
                    className="mb-12"
                >
                    <div className="flex items-center gap-2 mb-4">
                        <span className="text-[var(--accent-primary)]">$</span>
                        <span className="text-[var(--text-secondary)]">history --format=terminal</span>
                    </div>
                    <h2 className="text-3xl md:text-4xl font-bold text-[var(--text-primary)] neon-text">
                        Work Experience
                    </h2>
                </motion.div>

                <LogOutput />

                <div className="relative mt-12 pl-8">
                    <AnimatedTimeline />

                    <div className="space-y-6">
                        {experiences.map((experience, index) => (
                            <ExperienceEntry
                                key={index}
                                experience={experience}
                                index={index}
                            />
                        ))}
                    </div>
                </div>

                <motion.div
                    initial={{opacity: 0, y: 20}}
                    whileInView={{opacity: 1, y: 0}}
                    viewport={{once: true}}
                    className="mt-12 p-4 bg-[var(--accent-primary)]/10 border border-[var(--accent-primary)]/30 rounded"
                >
                    <div className="text-xs text-[var(--accent-primary)] mb-2">
                        <span className="text-[var(--accent-secondary)]">$</span> resume --download
                    </div>
                    <div className="flex flex-wrap items-center gap-4">
                        <span className="text-sm text-[var(--text-secondary)]">
                            Want to see full details?
                        </span>
                        <motion.a
                            href="/files/Rakesh_Ghosh_Resume_4YoE.pdf"
                            download
                            whileHover={{scale: 1.02}}
                            whileTap={{scale: 0.98}}
                            className="px-4 py-2 bg-[var(--accent-primary)] text-[var(--bg-primary)] text-sm font-medium rounded"
                        >
                            curl -O resume.pdf
                        </motion.a>
                    </div>
                </motion.div>
            </div>
        </section>
    );
}