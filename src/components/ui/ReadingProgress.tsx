"use client";

import {useState, useEffect} from "react";
import {motion} from "framer-motion";

export default function ReadingProgress() {
    const [progress, setProgress] = useState(0);
    const [showIndicator, setShowIndicator] = useState(false);
    const [mounted, setMounted] = useState(false);

    useEffect(() => {
        setMounted(true);
    }, []);

    useEffect(() => {
        if (!mounted) return;

        const handleScroll = () => {
            const scrollTop = window.scrollY;
            const docHeight = document.documentElement.scrollHeight - window.innerHeight;
            const scrollProgress = docHeight > 0 ? (scrollTop / docHeight) * 100 : 0;
            setProgress(Math.min(scrollProgress, 100));

            if (scrollTop > 300) {
                setShowIndicator(true);
            } else {
                setShowIndicator(false);
            }
        };

        window.addEventListener("scroll", handleScroll);
        handleScroll();
        return () => window.removeEventListener("scroll", handleScroll);
    }, [mounted]);

    if (!mounted) return null;

    return (
        <>
            <div className="fixed top-0 left-0 right-0 z-[100] h-1 bg-transparent">
                <motion.div
                    className="h-full bg-gradient-to-r from-[var(--accent-primary)] to-[var(--accent-secondary)]"
                    style={{width: `${progress}%`}}
                    transition={{duration: 0.1}}
                />
            </div>

            <motion.div
                initial={{opacity: 0, x: 20}}
                animate={{opacity: showIndicator ? 1 : 0, x: showIndicator ? 0 : 20}}
                className="fixed right-4 top-1/2 -translate-y-1/2 z-50 hidden lg:block"
            >
                <div className="relative w-16 h-16">
                    <svg className="w-full h-full -rotate-90" viewBox="0 0 36 36">
                        <circle
                            cx="18"
                            cy="18"
                            r="16"
                            fill="none"
                            stroke="var(--bg-secondary)"
                            strokeWidth="2"
                        />
                        <motion.circle
                            cx="18"
                            cy="18"
                            r="16"
                            fill="none"
                            stroke="url(#progressGradient)"
                            strokeWidth="2"
                            strokeLinecap="round"
                            strokeDasharray={`${(progress / 100) * 100.53} 100.53`}
                            transition={{duration: 0.2}}
                        />
                        <defs>
                            <linearGradient id="progressGradient">
                                <stop offset="0%" stopColor="var(--accent-primary)" />
                                <stop offset="100%" stopColor="var(--accent-secondary)" />
                            </linearGradient>
                        </defs>
                    </svg>
                    <div className="absolute inset-0 flex items-center justify-center">
                        <span className="text-xs font-bold text-[var(--accent-primary)]">
                            {Math.round(progress)}%
                        </span>
                    </div>
                </div>
            </motion.div>
        </>
    );
}