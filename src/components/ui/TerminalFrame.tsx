"use client";

import {useEffect, useState, Suspense, lazy} from "react";
import {motion, AnimatePresence} from "framer-motion";

interface TerminalFrameProps {
    children: React.ReactNode;
    title?: string;
    showTime?: boolean;
}

function SystemInfo() {
    const [time, setTime] = useState("");
    const [date, setDate] = useState("");
    const [mounted, setMounted] = useState(false);

    useEffect(() => {
        setMounted(true);
        const updateTime = () => {
            const now = new Date();
            setTime(now.toLocaleTimeString("en-US", {
                hour: "2-digit",
                minute: "2-digit",
                second: "2-digit",
                hour12: false
            }));
            setDate(now.toLocaleDateString("en-US", {
                month: "short",
                day: "numeric",
                year: "numeric"
            }));
        };

        updateTime();
        const interval = setInterval(updateTime, 1000);
        return () => clearInterval(interval);
    }, []);

    if (!mounted) {
        return (
            <div className="hidden lg:flex items-center gap-4 text-xs text-[var(--text-secondary)]">
                <span>--- --- ----</span>
                <span className="text-[var(--accent-primary)]">--:--:--</span>
            </div>
        );
    }

    return (
        <div className="hidden lg:flex items-center gap-4 text-xs text-[var(--text-secondary)]">
            <span>{date}</span>
            <span className="text-[var(--accent-primary)]">{time}</span>
        </div>
    );
}

export default function TerminalFrame({
                                          children,
                                          title = "rakesh@portfolio ~ zsh",
                                          showTime = true
                                      }: TerminalFrameProps) {
    const [isLoaded, setIsLoaded] = useState(false);
    const [mounted, setMounted] = useState(false);

    useEffect(() => {
        setMounted(true);
        setIsLoaded(true);
    }, []);

    return (
        <div className="min-h-screen bg-[var(--bg-primary)]">
            <div className="fixed top-0 left-0 right-0 z-50 bg-[var(--bg-secondary)]">
                <div className="flex items-center justify-between px-4 py-2">
                    <div className="flex items-center gap-3">
                        <div className="flex items-center gap-2">
                            <div className="w-3 h-3 rounded-full bg-red-500" />
                            <div className="w-3 h-3 rounded-full bg-yellow-500" />
                            <div className="w-3 h-3 rounded-full bg-green-500" />
                        </div>
                        <div className="h-4 w-px bg-[var(--border)]" />
                        <span className="text-sm text-[var(--text-secondary)] font-medium">{title}</span>
                    </div>

                    {showTime && <SystemInfo />}
                </div>

                <AnimatePresence>
                    {isLoaded && (
                        <motion.div
                            initial={{width: "0%"}}
                            animate={{width: "100%"}}
                            transition={{duration: 0.8, ease: "easeOut"}}
                            className="h-0.5 bg-gradient-to-r from-[var(--accent-primary)] via-[var(--accent-secondary)] to-[var(--accent-primary)]"
                        />
                    )}
                </AnimatePresence>
            </div>

            <div className="pt-10">
                {children}
            </div>

            <div className="fixed bottom-0 left-0 right-0 bg-[var(--bg-secondary)] border-t border-[var(--border)] px-4 py-1.5 text-xs text-[var(--text-secondary)]">
                <span className="text-[var(--accent-secondary)]">⌘</span> Space
                <span className="mx-3">|</span>
                <span className="text-[var(--accent-secondary)]">⌥</span> Opt
                <span className="mx-3">|</span>
                <span className="text-[var(--accent-secondary)]">^</span> Ctrl
            </div>
        </div>
    );
}