"use client";

import {motion, useInView} from "framer-motion";
import React, {useRef, useState, useEffect} from "react";
import {personalInfo} from "@/datas/data";

function AnimatedCounter({
                             end,
                             suffix = "",
                             duration = 2000,
                         }: {
    end: number;
    suffix?: string;
    duration?: number;
}) {
    const [count, setCount] = useState(0);
    const ref = useRef(null);
    const isInView = useInView(ref, {once: true});

    useEffect(() => {
        if (!isInView) return;

        let startTime: number;
        const animate = (timestamp: number) => {
            if (!startTime) startTime = timestamp;
            const progress = Math.min((timestamp - startTime) / duration, 1);
            setCount(Math.floor(progress * end));
            if (progress < 1) {
                requestAnimationFrame(animate);
            }
        };
        requestAnimationFrame(animate);
    }, [isInView, end, duration]);

    return (
        <span ref={ref} className="text-[var(--accent-primary)] neon-text">
            {count}{suffix}
        </span>
    );
}

function StatItem({
                    label,
                    value,
                    suffix,
                    delay,
                }: {
    label: string;
    value: number;
    suffix?: string;
    delay: number;
}) {
    const ref = useRef(null);
    const isInView = useInView(ref, {once: true, margin: "-50px"});

    return (
        <motion.div
            ref={ref}
            initial={{opacity: 0, x: -20}}
            animate={isInView ? {opacity: 1, x: 0} : {}}
            transition={{delay, duration: 0.5}}
            className="flex items-center justify-between px-4 py-3 bg-[var(--bg-secondary)] border border-[var(--border)] rounded"
        >
            <span className="text-[var(--text-secondary)] text-sm">{label}</span>
            <span className="font-bold">
                <AnimatedCounter end={value} suffix={suffix} />
            </span>
        </motion.div>
    );
}

function JsonBlock({data, label}: { data: Record<string, string | number>; label: string }) {
    const ref = useRef(null);
    const isInView = useInView(ref, {once: true});

    return (
        <motion.div
            ref={ref}
            initial={{opacity: 0, y: 20}}
            animate={isInView ? {opacity: 1, y: 0} : {}}
            className="p-4 bg-[var(--bg-secondary)] border border-[var(--border)] rounded overflow-x-auto"
        >
            <div className="text-xs text-[var(--text-secondary)] mb-2">
                <span className="text-[var(--accent-secondary)]">cat</span> {label}.json
            </div>
            <pre className="text-sm">
                <span className="text-[var(--accent-secondary)]">{"{"}</span>
                {"\n"}
                {Object.entries(data).map(([key, value], index) => (
                    <React.Fragment key={key}>
                        <span className="text-[var(--neon-cyan)]">&quot;{key}&quot;</span>
                        <span className="text-[var(--text-secondary)]">: </span>
                        <span className="text-[var(--neon-green)]">&quot;{value}&quot;</span>
                        {index < Object.entries(data).length - 1 && (
                            <>
                                <span className="text-[var(--text-secondary)]">,</span>
                                {"\n"}
                            </>
                        )}
                    </React.Fragment>
                ))}
                {"\n"}
                <span className="text-[var(--accent-secondary)]">{"}"}</span>
            </pre>
        </motion.div>
    );
}

export default function About() {
    const stats = [
        {label: "Years Experience", value: personalInfo.totalYoE, suffix: "+"},
        {label: "Major Projects", value: 5, suffix: "+"},
        {label: "Technologies", value: 10, suffix: "+"},
        {label: "Companies", value: 3},
    ];

    const interests = ["Open Source", "System Design", "Tech Blogging", "Mentoring"];

    return (
        <section id="about" className="relative py-24 lg:py-32 bg-[var(--bg-primary)]">
            <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
                <motion.div
                    initial={{opacity: 0, y: 20}}
                    whileInView={{opacity: 1, y: 0}}
                    viewport={{once: true}}
                    className="mb-12"
                >
                    <div className="flex items-center gap-2 mb-4">
                        <span className="text-[var(--accent-primary)]">$</span>
                        <span className="text-[var(--text-secondary)]">cd about</span>
                    </div>
                    <div className="text-xs text-[var(--text-secondary)] mb-2">
                        <span className="text-[var(--accent-secondary)]">{">"}</span>{" "}
                        viewing: <span className="text-[var(--accent-primary)]">about.md</span>
                    </div>
                    <h2 className="text-3xl md:text-4xl font-bold text-[var(--text-primary)] neon-text">
                        About Me
                    </h2>
                </motion.div>

                <div className="space-y-8">
                    <JsonBlock
                        data={{
                            name: personalInfo.name,
                            role: personalInfo.role,
                            location: personalInfo.address,
                            experience: `${personalInfo.totalYoE}+ years`,
                        }}
                        label="profile"
                    />

                    <motion.div
                        initial={{opacity: 0, y: 20}}
                        whileInView={{opacity: 1, y: 0}}
                        viewport={{once: true}}
                        className="space-y-4"
                    >
                        <div className="text-xs text-[var(--text-secondary)]">
                            <span className="text-[var(--accent-secondary)]">#</span> bio.md
                        </div>
                        <div className="p-4 bg-[var(--bg-secondary)] border border-[var(--border)] rounded space-y-4">
                            <p className="text-[var(--text-secondary)] leading-relaxed">
                                <span className="text-[var(--accent-secondary)]">&gt;</span>{" "}
                                I&apos;m a passionate software engineer with over 4 years of experience building
                                scalable backend systems and payment solutions. Currently, I&apos;m working at{" "}
                                <span className="text-[var(--accent-primary)]">RS Software</span>,
                                where I architect and develop high-performance payment processing systems
                                that handle thousands of transactions per second.
                            </p>
                            <p className="text-[var(--text-secondary)] leading-relaxed">
                                <span className="text-[var(--accent-secondary)]">&gt;</span>{" "}
                                My expertise lies in{" "}
                                <span className="text-[var(--accent-primary)]">Java</span>,{" "}
                                <span className="text-[var(--accent-primary)]">Spring Boot</span>,
                                microservices architecture, and distributed systems. I thrive on solving
                                complex problems and building solutions that make a real impact.
                            </p>
                        </div>
                    </motion.div>

                    <motion.div
                        initial={{opacity: 0, y: 20}}
                        whileInView={{opacity: 1, y: 0}}
                        viewport={{once: true}}
                        className="space-y-4"
                    >
                        <div className="text-xs text-[var(--text-secondary)]">
                            <span className="text-[var(--accent-secondary)]">#</span> interests
                        </div>
                        <div className="flex flex-wrap gap-2">
                            {interests.map((interest) => (
                                <span
                                    key={interest}
                                    className="px-3 py-1.5 bg-[var(--bg-secondary)] border border-[var(--border)] rounded text-sm text-[var(--text-secondary)]"
                                >
                                    <span className="text-[var(--accent-secondary)]">[</span>
                                    <span className="text-[var(--accent-primary)]">{interest}</span>
                                    <span className="text-[var(--accent-secondary)]">]</span>
                                </span>
                            ))}
                        </div>
                    </motion.div>

                    <motion.div
                        initial={{opacity: 0, y: 20}}
                        whileInView={{opacity: 1, y: 0}}
                        viewport={{once: true}}
                        className="space-y-4"
                    >
                        <div className="text-xs text-[var(--text-secondary)]">
                            <span className="text-[var(--accent-secondary)]">#</span> stats
                        </div>
                        <div className="grid grid-cols-2 gap-3">
                            {stats.map((stat) => (
                                <StatItem key={stat.label} {...stat} delay={0} />
                            ))}
                        </div>
                    </motion.div>

                    <motion.div
                        initial={{opacity: 0, y: 20}}
                        whileInView={{opacity: 1, y: 0}}
                        viewport={{once: true}}
                        className="p-4 bg-[var(--accent-primary)]/10 border border-[var(--accent-primary)]/30 rounded"
                    >
                        <div className="text-xs text-[var(--accent-primary)] mb-2">
                            <span className="text-[var(--accent-secondary)]">$</span> education
                        </div>
                        <div className="space-y-2 text-sm">
                            <div className="flex items-center gap-2">
                                <span className="text-[var(--accent-secondary)]">-</span>
                                <span className="text-[var(--text-primary)]">
                                    B.Tech in Computer Science
                                </span>
                                <span className="text-[var(--text-secondary)]">|</span>
                                <span className="text-[var(--accent-primary)]">
                                    BP Poddar Institute
                                </span>
                            </div>
                            <div className="flex items-center gap-2">
                                <span className="text-[var(--accent-secondary)]">-</span>
                                <span className="text-[var(--text-primary)]">
                                    CGPA: 8.47/10
                                </span>
                            </div>
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
}