"use client";

import {useState, useEffect} from "react";
import {motion, AnimatePresence} from "framer-motion";

const NAME_LINES = [
    { text: "Rakesh", color: "accent-primary" },
    { text: "Ghosh", color: "accent-secondary" },
];

interface AsciiBannerProps {
    onComplete?: () => void;
    showSubtext?: boolean;
}

export default function AsciiBanner({
                                    onComplete,
                                    showSubtext = true
                                }: AsciiBannerProps) {
    const [visibleLines, setVisibleLines] = useState(0);
    const [isComplete, setIsComplete] = useState(false);

    useEffect(() => {
        if (visibleLines < NAME_LINES.length) {
            const timeout = setTimeout(() => {
                setVisibleLines(prev => prev + 1);
            }, 200);
            return () => clearTimeout(timeout);
        } else {
            setIsComplete(true);
            onComplete?.();
        }
    }, [visibleLines, onComplete]);

    return (
        <div className="font-mono">
            <div className="space-y-0 leading-tight">
                {NAME_LINES.slice(0, visibleLines).map((line, index) => (
                    <motion.div
                        key={index}
                        initial={{opacity: 0, x: -20}}
                        animate={{opacity: 1, x: 0}}
                        transition={{duration: 0.3}}
                        className={`text-4xl md:text-6xl font-bold text-[var(--${line.color})] neon-text`}
                    >
                        {line.text}
                    </motion.div>
                ))}
            </div>

            <AnimatePresence>
                {isComplete && showSubtext && (
                    <motion.div
                        initial={{opacity: 0, y: 10}}
                        animate={{opacity: 1, y: 0}}
                        transition={{delay: 0.3, duration: 0.5}}
                        className="mt-6 space-y-2"
                    >
                        <div className="text-sm text-[var(--text-secondary)]">
                            <span className="text-[var(--accent-primary)]">$</span> system info
                            <span className="mx-2">--</span>
                            <span className="text-[var(--text-primary)]">4+ years</span>
                            <span className="mx-2">|</span>
                            <span className="text-[var(--accent-secondary)]">Java</span>
                            <span className="mx-2">|</span>
                            <span className="text-[var(--neon-cyan)]">Spring Boot</span>
                        </div>

                        <div className="flex items-center gap-4 text-xs">
                            <span className="px-2 py-1 rounded bg-[var(--accent-primary)]/20 text-[var(--accent-primary)]">
                                Type <span className="text-white">&apos;help&apos;</span> for commands
                            </span>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </div>
    );
}