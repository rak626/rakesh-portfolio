"use client";

import {useRef, useEffect, useState} from "react";
import Image from "next/image";
import {motion, useMotionValue, useSpring} from "framer-motion";
import {Typewriter} from "react-simple-typewriter";
import {ArrowDown, Download, Mail} from "lucide-react";
import {resumeData, personalInfo} from "@/datas/data";

function MagneticButton({
                            children,
                            className = "",
                        }: {
    children: React.ReactNode;
    className?: string;
}) {
    const ref = useRef<HTMLButtonElement>(null);
    const x = useMotionValue(0);
    const y = useMotionValue(0);

    const springConfig = {stiffness: 150, damping: 15};
    const mouseX = useSpring(x, springConfig);
    const mouseY = useSpring(y, springConfig);

    const handleMouseMove = (e: React.MouseEvent) => {
        if (!ref.current) return;
        const rect = ref.current.getBoundingClientRect();
        const centerX = rect.left + rect.width / 2;
        const centerY = rect.top + rect.height / 2;
        x.set(e.clientX - centerX);
        y.set(e.clientY - centerY);
    };

    const handleMouseLeave = () => {
        x.set(0);
        y.set(0);
    };

    return (
        <motion.button
            ref={ref}
            style={{x: mouseX, y: mouseY}}
            onMouseMove={handleMouseMove}
            onMouseLeave={handleMouseLeave}
            whileHover={{scale: 1.05}}
            whileTap={{scale: 0.95}}
            className={className}
        >
            {children}
        </motion.button>
    );
}

function Particles() {
    const [particles, setParticles] = useState<
        { x: number; y: number; size: number; duration: number; delay: number }[]
    >([]);

    useEffect(() => {
        const newParticles = Array.from({length: 30}, () => ({
            x: Math.random() * 100,
            y: Math.random() * 100,
            size: Math.random() * 3 + 1,
            duration: Math.random() * 20 + 10,
            delay: Math.random() * 5,
        }));
        setParticles(newParticles);
    }, []);

    return (
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
            {particles.map((particle, i) => (
                <motion.div
                    key={i}
                    className="absolute rounded-full bg-gradient-to-r from-[var(--accent-primary)] to-[var(--accent-secondary)]"
                    style={{
                        left: `${particle.x}%`,
                        top: `${particle.y}%`,
                        width: particle.size,
                        height: particle.size,
                        opacity: 0.4,
                    }}
                    animate={{
                        y: [0, -20, 0],
                        opacity: [0.2, 0.4, 0.2],
                    }}
                    transition={{
                        duration: particle.duration,
                        delay: particle.delay,
                        repeat: Infinity,
                        ease: "easeInOut",
                    }}
                />
            ))}
        </div>
    );
}

export default function Hero() {
    const scrollToAbout = () => {
        document.getElementById("about")?.scrollIntoView({behavior: "smooth"});
    };

    return (
        <section
            id="home"
            className="relative min-h-screen flex items-center justify-center overflow-hidden"
        >
            <Particles/>

            <motion.div
                className="absolute w-[600px] h-[600px] bg-[var(--accent-primary)]/10 -top-40 -left-40 rounded-full blur-3xl"
                animate={{
                    scale: [1, 1.2, 1],
                    x: [0, 30, 0],
                    y: [0, -20, 0],
                }}
                transition={{
                    duration: 8,
                    repeat: Infinity,
                    ease: "easeInOut",
                }}
            />
            <motion.div
                className="absolute w-[500px] h-[500px] bg-[var(--accent-secondary)]/10 -bottom-40 -right-40 rounded-full blur-3xl"
                animate={{
                    scale: [1, 1.2, 1],
                    x: [0, -30, 0],
                    y: [0, 20, 0],
                }}
                transition={{
                    duration: 8,
                    delay: 2,
                    repeat: Infinity,
                    ease: "easeInOut",
                }}
            />

            <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
                <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-16">
                    <motion.div
                        className="flex-1 text-center lg:text-left"
                        initial={{opacity: 0, y: 30}}
                        animate={{opacity: 1, y: 0}}
                        transition={{duration: 0.8, ease: "easeOut"}}
                    >
                        <motion.div
                            initial={{opacity: 0, y: 20}}
                            animate={{opacity: 1, y: 0}}
                            transition={{delay: 0.2}}
                            className="mb-6"
                        >
              <span
                  className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[var(--accent-primary)]/10 border border-[var(--accent-primary)]/20 text-[var(--accent-primary)] text-sm font-medium backdrop-blur-sm">
                <span className="relative flex h-2 w-2">
                  <span
                      className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[var(--accent-primary)] opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-[var(--accent-primary)]"></span>
                </span>
                Available for opportunities
              </span>
                        </motion.div>

                        <motion.h1
                            initial={{opacity: 0, y: 20}}
                            animate={{opacity: 1, y: 0}}
                            transition={{delay: 0.3}}
                            className="text-4xl sm:text-5xl md:text-6xl lg:text-6xl font-bold text-[var(--text-primary)] leading-tight"
                        >
                            Hi, I&apos;m{" "}
                            <span
                                className="bg-gradient-to-r from-[var(--accent-primary)] to-[var(--accent-secondary)] bg-clip-text text-transparent">
                Rakesh
              </span>
                        </motion.h1>

                        <motion.div
                            initial={{opacity: 0, y: 20}}
                            animate={{opacity: 1, y: 0}}
                            transition={{delay: 0.4}}
                            className="mt-4 text-2xl sm:text-3xl md:text-4xl font-semibold text-[var(--text-secondary)]"
                        >
                            <Typewriter
                                words={[
                                    "Software Engineer",
                                    "Backend Developer",
                                    "Problem Solver",
                                    "Java Specialist",
                                ]}
                                loop={true}
                                cursor
                                cursorStyle="_"
                                typeSpeed={70}
                                deleteSpeed={50}
                                delaySpeed={2000}
                            />
                        </motion.div>

                        <motion.p
                            initial={{opacity: 0, y: 20}}
                            animate={{opacity: 1, y: 0}}
                            transition={{delay: 0.5}}
                            className="mt-6 text-lg text-[var(--text-secondary)] max-w-xl mx-auto lg:mx-0 leading-relaxed"
                        >
                            Building scalable payment systems and microservices with 4+ years
                            of experience. Passionate about clean code, distributed systems,
                            and impactful solutions.
                        </motion.p>

                        <motion.div
                            initial={{opacity: 0, y: 20}}
                            animate={{opacity: 1, y: 0}}
                            transition={{delay: 0.6}}
                            className="mt-8 flex flex-col sm:flex-row gap-4 justify-center lg:justify-start"
                        >
                            <MagneticButton
                                className={`px-8 py-4 rounded-xl bg-gradient-to-r from-[var(--accent-primary)] to-[var(--accent-secondary)] text-white font-semibold shadow-lg shadow-[var(--accent-primary)]/25 flex items-center justify-center gap-2`}
                            >
                                <Download className="w-5 h-5"/>
                                <a href={`/files/${resumeData.name}`} download>
                                    Download Resume
                                </a>
                            </MagneticButton>

                            <MagneticButton
                                className={`px-8 py-4 rounded-xl border-2 border-[var(--border)] text-[var(--text-primary)] font-semibold hover:border-[var(--accent-primary)] hover:text-[var(--accent-primary)] transition-all flex items-center justify-center gap-2`}
                            >
                                <Mail className="w-5 h-5"/>
                                <a href={`mailto:${personalInfo.email}`}>Get in Touch</a>
                            </MagneticButton>
                        </motion.div>

                        <motion.div
                            initial={{opacity: 0, y: 20}}
                            animate={{opacity: 1, y: 0}}
                            transition={{delay: 0.7}}
                            className="mt-10 flex items-center gap-6 justify-center lg:justify-start"
                        >
                            <a
                                href={personalInfo.socials.github}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="text-[var(--text-secondary)] hover:text-[var(--text-primary)] transition-colors p-2 rounded-lg hover:bg-[var(--bg-secondary)]"
                            >
                                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                                    <path
                                        d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                                </svg>
                            </a>
                            <a
                                href={personalInfo.socials.linkedin}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="text-[var(--text-secondary)] hover:text-[var(--text-primary)] transition-colors p-2 rounded-lg hover:bg-[var(--bg-secondary)]"
                            >
                                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                                    <path
                                        d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
                                </svg>
                            </a>
                            <a
                                href={personalInfo.socials.twitter}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="text-[var(--text-secondary)] hover:text-[var(--text-primary)] transition-colors p-2 rounded-lg hover:bg-[var(--bg-secondary)]"
                            >
                                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                                    <path
                                        d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
                                </svg>
                            </a>
                        </motion.div>
                    </motion.div>

                    <motion.div
                        initial={{opacity: 0, scale: 0.8}}
                        animate={{opacity: 1, scale: 1}}
                        transition={{duration: 0.8, delay: 0.3}}
                        className="flex-shrink-0"
                    >
                        <div className="relative">
                            <div
                                className="absolute inset-0 bg-gradient-to-br from-[var(--accent-primary)] to-[var(--accent-secondary)] rounded-3xl blur-xl opacity-20"/>

                            <div
                                className="relative p-3 bg-gradient-to-br from-[var(--accent-primary)] to-[var(--accent-secondary)] rounded-3xl group">
                                <div
                                    className="relative w-64 h-64 sm:w-72 sm:h-72 md:w-80 md:h-80 rounded-2xl overflow-hidden">
                                    <Image
                                        src="/photos/image.jpg"
                                        alt="Rakesh Ghosh"
                                        fill
                                        className="object-cover object-center grayscale group-hover:grayscale-0 transition-all duration-700 ease-in-out scale-105 group-hover:scale-100"
                                        priority
                                    />
                                </div>
                            </div>

                            <motion.div
                                className="absolute -bottom-3 -right-3 px-4 py-2 rounded-xl bg-gradient-to-r from-[var(--accent-primary)] to-[var(--accent-secondary)] shadow-lg"
                                initial={{opacity: 0, x: 20}}
                                animate={{opacity: 1, x: 0}}
                                transition={{delay: 0.8}}
                            >
                                <div className="flex items-center gap-2 text-white">
                                    <span className="w-2 h-2 rounded-full bg-white animate-pulse"/>
                                    <span className="text-sm font-semibold">
                    4+ Years Experience
                  </span>
                                </div>
                            </motion.div>

                            <div
                                className="absolute -top-2 -left-2 w-4 h-4 border-t-2 border-l-2 border-[var(--accent-primary)] rounded-tl-lg"/>
                            <div
                                className="absolute -bottom-2 -right-2 w-4 h-4 border-b-2 border-r-2 border-[var(--accent-secondary)] rounded-br-lg"/>
                        </div>
                    </motion.div>
                </div>

                <motion.button
                    onClick={scrollToAbout}
                    className="absolute bottom-8 left-1/2 -translate-x-1/2 text-[var(--text-secondary)] hover:text-[var(--accent-primary)] transition-colors"
                    animate={{y: [0, 10, 0]}}
                    transition={{duration: 2, repeat: Infinity}}
                    initial={{opacity: 0}}
                    whileInView={{opacity: 1}}
                >
                    <ArrowDown className="w-8 h-8"/>
                </motion.button>
            </div>
        </section>
    );
}
