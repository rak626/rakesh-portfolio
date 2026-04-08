"use client";

import {motion, useInView} from "framer-motion";
import React, {useRef, useState, useEffect} from "react";
import Image from "next/image";
import {MapPin, Briefcase, GraduationCap, Heart, Code, Zap, Coffee} from "lucide-react";
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
        <span ref={ref}>
      {count}
            {suffix}
    </span>
    );
}

function StatCard({
                      icon: Icon,
                      value,
                      suffix,
                      label,
                      delay,
                  }: {
    icon: React.ElementType;
    value: number;
    suffix?: string;
    label: string;
    delay: number;
}) {
    const ref = useRef(null);
    const isInView = useInView(ref, {once: true});

    return (
        <motion.div
            ref={ref}
            initial={{opacity: 0, y: 20}}
            animate={isInView ? {opacity: 1, y: 0} : {}}
            transition={{delay, duration: 0.5}}
            className="p-5 rounded-2xl bg-[var(--bg-secondary)] border border-[var(--border)] hover:border-[var(--accent-primary)]/50 transition-all group"
        >
            <div className="flex items-center gap-4">
                <div
                    className="p-2.5 rounded-xl bg-[var(--accent-primary)]/10 group-hover:bg-[var(--accent-primary)]/20 transition-colors">
                    <Icon className="w-5 h-5 text-[var(--accent-primary)]"/>
                </div>
                <div>
                    <div className="text-xl font-bold text-[var(--text-primary)]">
                        <AnimatedCounter end={value} suffix={suffix}/>
                    </div>
                    <div className="text-xs text-[var(--text-secondary)]">{label}</div>
                </div>
            </div>
        </motion.div>
    );
}

function InterestTag({icon: Icon, label}: { icon: React.ElementType; label: string }) {
    return (
        <motion.div
            whileHover={{scale: 1.05}}
            className="flex items-center gap-2 px-4 py-2 rounded-full bg-[var(--bg-secondary)] border border-[var(--border)] text-[var(--text-secondary)] text-sm hover:border-[var(--accent-primary)] hover:text-[var(--accent-primary)] transition-all"
        >
            <Icon className="w-4 h-4"/>
            {label}
        </motion.div>
    );
}

export default function About() {
    const stats = [
        {icon: Briefcase, value: personalInfo.totalYoE, suffix: "+", label: "Years Experience", delay: 0},
        {icon: Code, value: 5, suffix: "+", label: "Major Projects", delay: 0.1},
        {icon: Zap, value: 10, suffix: "+", label: "Technologies", delay: 0.2},
        {icon: Coffee, value: 3, label: "Companies", delay: 0.3},
    ];

    const interests = [
        {icon: Code, label: "Open Source"},
        {icon: Zap, label: "System Design"},
        {icon: Coffee, label: "Tech Blogging"},
        {icon: Heart, label: "Mentoring"},
    ];

    return (
        <section
            id="about"
            className="relative py-24 lg:py-32 bg-[var(--bg-primary)]"
        >
            <div
                className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-[var(--border)] to-transparent"/>

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <motion.div
                    initial={{opacity: 0, y: 20}}
                    whileInView={{opacity: 1, y: 0}}
                    viewport={{once: true}}
                    className="text-center mb-16"
                >
          <span className="text-[var(--accent-primary)] font-medium mb-2 block">
            Get to know me
          </span>
                    <h2 className="text-4xl md:text-5xl font-bold text-[var(--text-primary)]">
                        About Me
                    </h2>
                    <div
                        className="mt-4 w-20 h-1 bg-gradient-to-r from-[var(--accent-primary)] to-[var(--accent-secondary)] mx-auto rounded-full"/>
                </motion.div>

                <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
                    <motion.div
                        initial={{opacity: 0, x: -50}}
                        whileInView={{opacity: 1, x: 0}}
                        viewport={{once: true}}
                        transition={{duration: 0.6}}
                        className="relative"
                    >
                        <div className="relative w-full max-w-md mx-auto">
                            <div
                                className="absolute inset-0 bg-gradient-to-br from-[var(--accent-primary)]/20 to-[var(--accent-secondary)]/20 rounded-3xl blur-2xl"/>

                            <div
                                className="relative p-3 bg-gradient-to-br from-[var(--accent-primary)] to-[var(--accent-secondary)] rounded-3xl group">
                                <div className="relative aspect-square rounded-2xl overflow-hidden">
                                    <Image
                                        src="/photos/image.jpg"
                                        alt="Rakesh Ghosh"
                                        fill
                                        className="object-cover object-center grayscale group-hover:grayscale-0 transition-all duration-700 ease-in-out scale-105 group-hover:scale-100"
                                    />
                                </div>
                            </div>

                            <motion.div
                                className="absolute -bottom-4 -right-4 p-4 rounded-2xl bg-[var(--bg-secondary)] border border-[var(--border)] shadow-xl backdrop-blur-sm"
                                initial={{opacity: 0, scale: 0.8}}
                                whileInView={{opacity: 1, scale: 1}}
                                viewport={{once: true}}
                                transition={{delay: 0.3}}
                            >
                                <div className="flex items-center gap-3">
                                    <MapPin className="w-5 h-5 text-[var(--accent-primary)]"/>
                                    <span className="text-[var(--text-primary)] font-medium text-sm">
                    {personalInfo.address}
                  </span>
                                </div>
                            </motion.div>

                            <motion.div
                                className="absolute -top-3 -left-3 px-4 py-2 rounded-xl bg-gradient-to-r from-[var(--accent-primary)] to-[var(--accent-secondary)] shadow-lg"
                                initial={{opacity: 0, x: -20}}
                                whileInView={{opacity: 1, x: 0}}
                                viewport={{once: true}}
                                transition={{delay: 0.4}}
                            >
                                <span className="text-white text-sm font-semibold">Software Engineer</span>
                            </motion.div>

                            <div
                                className="absolute -top-2 -right-2 w-6 h-6 border-t-2 border-r-2 border-[var(--accent-primary)] rounded-tr-lg"/>
                            <div
                                className="absolute -bottom-2 -left-2 w-6 h-6 border-b-2 border-l-2 border-[var(--accent-secondary)] rounded-bl-lg"/>
                        </div>
                    </motion.div>

                    <motion.div
                        initial={{opacity: 0, x: 50}}
                        whileInView={{opacity: 1, x: 0}}
                        viewport={{once: true}}
                        transition={{duration: 0.6}}
                        className="space-y-6"
                    >
                        <div className="space-y-4">
                            <h3 className="text-2xl font-bold text-[var(--text-primary)]">
                                Software Engineer @ RS Software
                            </h3>
                            <p className="text-[var(--text-secondary)] leading-relaxed">
                                I&apos;m a passionate software engineer with over 4 years of experience
                                building scalable backend systems and payment solutions. Currently,
                                I&apos;m working at RS Software, where I architect and develop
                                high-performance payment processing systems that handle thousands
                                of transactions per second.
                            </p>
                            <p className="text-[var(--text-secondary)] leading-relaxed">
                                My expertise lies in Java, Spring Boot, microservices architecture,
                                and distributed systems. I thrive on solving complex problems and
                                building solutions that make a real impact. When I&apos;m not coding,
                                you&apos;ll find me exploring new technologies, contributing to open
                                source, or sharing my knowledge through tech blogs.
                            </p>
                        </div>

                        <div className="flex flex-wrap gap-3">
                            {interests.map((interest, index) => (
                                <motion.div
                                    key={interest.label}
                                    initial={{opacity: 0, scale: 0.8}}
                                    whileInView={{opacity: 1, scale: 1}}
                                    viewport={{once: true}}
                                    transition={{delay: index * 0.1}}
                                >
                                    <InterestTag icon={interest.icon} label={interest.label}/>
                                </motion.div>
                            ))}
                        </div>

                        <div className="grid grid-cols-2 gap-4 pt-4">
                            <div
                                className="flex items-center gap-3 p-3 rounded-xl bg-[var(--bg-secondary)] border border-[var(--border)]">
                                <GraduationCap className="w-5 h-5 text-[var(--accent-primary)]"/>
                                <span className="text-[var(--text-secondary)] text-sm">
                  B.Tech in CSE
                </span>
                            </div>
                            <div
                                className="flex items-center gap-3 p-3 rounded-xl bg-[var(--bg-secondary)] border border-[var(--border)]">
                                <MapPin className="w-5 h-5 text-[var(--accent-primary)]"/>
                                <span className="text-[var(--text-secondary)] text-sm">
                  {personalInfo.address}
                </span>
                            </div>
                        </div>
                    </motion.div>
                </div>

                <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 mt-16">
                    {stats.map((stat) => (
                        <StatCard key={stat.label} {...stat} />
                    ))}
                </div>
            </div>
        </section>
    );
}
