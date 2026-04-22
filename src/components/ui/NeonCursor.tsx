"use client";

import {useEffect, useState, useRef} from "react";
import {motion} from "framer-motion";

export default function NeonCursor() {
    const [position, setPosition] = useState({x: 0, y: 0});
    const [isClicking, setIsClicking] = useState(false);
    const [isVisible, setIsVisible] = useState(false);
    const [mounted, setMounted] = useState(false);
    const cursorRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        setMounted(true);
    }, []);

    useEffect(() => {
        if (!mounted) return;

        const updatePosition = (e: MouseEvent) => {
            setPosition({x: e.clientX, y: e.clientY});
            if (!isVisible) setIsVisible(true);
        };

        const handleMouseDown = () => setIsClicking(true);
        const handleMouseUp = () => setIsClicking(false);

        window.addEventListener("mousemove", updatePosition);
        window.addEventListener("mousedown", handleMouseDown);
        window.addEventListener("mouseup", handleMouseUp);

        return () => {
            window.removeEventListener("mousemove", updatePosition);
            window.removeEventListener("mousedown", handleMouseDown);
            window.removeEventListener("mouseup", handleMouseUp);
        };
    }, [mounted, isVisible]);

    if (!mounted) return null;

    return (
        <motion.div
            ref={cursorRef}
            className="fixed top-0 left-0 pointer-events-none z-[9999] mix-blend-difference"
            animate={{
                x: position.x - 12,
                y: position.y - 12,
                scale: isClicking ? 0.8 : 1,
            }}
            transition={{
                type: "spring",
                stiffness: 500,
                damping: 28,
                mass: 0.5
            }}
        >
            <svg
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                className="drop-shadow-[0_0_8px_var(--accent-primary)] drop-shadow-[0_0_16px_var(--accent-secondary)]"
            >
                <path
                    d="M4 4L8 20L12 12L20 8L4 4Z"
                    fill="var(--accent-primary)"
                    stroke="var(--accent-secondary)"
                    strokeWidth="1.5"
                />
            </svg>
        </motion.div>
    );
}