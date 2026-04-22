"use client";

import {useState, useEffect} from "react";
import {motion, AnimatePresence} from "framer-motion";

interface TypingTextProps {
    text: string;
    delay?: number;
    speed?: number;
    showCursor?: boolean;
    className?: string;
    onComplete?: () => void;
}

export default function TypingText({
                                      text,
                                      delay = 0,
                                      speed = 50,
                                      showCursor = true,
                                      className = "",
                                      onComplete
                                  }: TypingTextProps) {
    const [displayedText, setDisplayedText] = useState("");

    useEffect(() => {
        setDisplayedText("");

        const timeout = setTimeout(() => {
            let currentIndex = 0;
            const interval = setInterval(() => {
                if (currentIndex < text.length) {
                    setDisplayedText(text.slice(0, currentIndex + 1));
                    currentIndex++;
                } else {
                    clearInterval(interval);
                    onComplete?.();
                }
            }, speed);

            return () => clearInterval(interval);
        }, delay);

        return () => clearTimeout(timeout);
    }, [text, delay, speed, onComplete]);

    return (
        <span className={`inline ${className}`}>
            <AnimatePresence mode="wait">
                <motion.span
                    key={displayedText}
                    initial={{opacity: 1}}
                    className="relative"
                >
                    {displayedText}
                </motion.span>
            </AnimatePresence>
            {showCursor && (
                <motion.span
                    animate={{opacity: [1, 0]}}
                    transition={{duration: 0.5, repeat: Infinity, repeatType: "reverse"}}
                    className="inline-block w-0.5 h-[1em] ml-0.5 bg-[var(--accent-primary)] align-middle"
                />
            )}
        </span>
    );
}

interface TypewriterSequenceProps {
    sequences: string[];
    loop?: boolean;
    speed?: number;
    deleteSpeed?: number;
    pauseTime?: number;
    className?: string;
}

export function TypewriterSequence({
                                        sequences,
                                        loop = true,
                                        speed = 50,
                                        deleteSpeed = 30,
                                        pauseTime = 2000,
                                        className = ""
                                    }: TypewriterSequenceProps) {
    const [displayedText, setDisplayedText] = useState("");
    const [currentIndex, setCurrentIndex] = useState(0);
    const [isDeleting, setIsDeleting] = useState(false);
    const [isPaused, setIsPaused] = useState(false);

    useEffect(() => {
        const currentSequence = sequences[currentIndex];

        if (isPaused) {
            const timeout = setTimeout(() => {
                setIsPaused(false);
                setIsDeleting(true);
            }, pauseTime);
            return () => clearTimeout(timeout);
        }

        if (isDeleting) {
            if (displayedText.length > 0) {
                const timeout = setTimeout(() => {
                    setDisplayedText(displayedText.slice(0, -1));
                }, deleteSpeed);
                return () => clearTimeout(timeout);
            } else {
                setIsDeleting(false);
                setCurrentIndex((prev) => (prev + 1) % sequences.length);
            }
        } else {
            if (displayedText.length < currentSequence.length) {
                const timeout = setTimeout(() => {
                    setDisplayedText(currentSequence.slice(0, displayedText.length + 1));
                }, speed);
                return () => clearTimeout(timeout);
            } else {
                if (loop) {
                    setIsPaused(true);
                }
            }
        }
    }, [displayedText, isDeleting, isPaused, currentIndex, sequences, loop, speed, deleteSpeed, pauseTime]);

    return (
        <span className={className}>
            {displayedText}
            <motion.span
                animate={{opacity: [1, 0]}}
                transition={{duration: 0.5, repeat: Infinity, repeatType: "reverse"}}
                className="inline-block w-0.5 h-[1em] ml-0.5 bg-[var(--accent-primary)] align-middle"
            />
        </span>
    );
}