"use client";

import {useEffect, useState} from "react";
import {motion, useMotionValue, useSpring} from "framer-motion";

export default function CustomCursor() {
    const [isVisible, setIsVisible] = useState(false);
    const [isClicking, setIsClicking] = useState(false);
    const [isHovering, setIsHovering] = useState(false);
    const [isMounted, setIsMounted] = useState(false);

    const cursorX = useMotionValue(-100);
    const cursorY = useMotionValue(-100);

    const springConfig = {damping: 25, stiffness: 300};
    const cursorXSpring = useSpring(cursorX, springConfig);
    const cursorYSpring = useSpring(cursorY, springConfig);

    useEffect(() => {
        setIsMounted(true);

        const updateCursorPosition = (e: MouseEvent) => {
            cursorX.set(e.clientX);
            cursorY.set(e.clientY);
            if (!isVisible) setIsVisible(true);
        };

        const handleMouseDown = () => setIsClicking(true);
        const handleMouseUp = () => setIsClicking(false);

        const handleMouseEnter = (e: MouseEvent) => {
            const target = e.target as HTMLElement;
            if (
                target.tagName === "A" ||
                target.tagName === "BUTTON" ||
                target.closest("a") ||
                target.closest("button")
            ) {
                setIsHovering(true);
            }
        };

        const handleMouseLeave = () => setIsHovering(false);

        window.addEventListener("mousemove", updateCursorPosition);
        window.addEventListener("mousedown", handleMouseDown);
        window.addEventListener("mouseup", handleMouseUp);
        document.addEventListener("mouseover", handleMouseEnter);
        document.addEventListener("mouseout", handleMouseLeave);

        return () => {
            window.removeEventListener("mousemove", updateCursorPosition);
            window.removeEventListener("mousedown", handleMouseDown);
            window.removeEventListener("mouseup", handleMouseUp);
            document.removeEventListener("mouseover", handleMouseEnter);
            document.removeEventListener("mouseout", handleMouseLeave);
        };
    }, [cursorX, cursorY, isVisible]);

    if (!isMounted) return null;

    return (
        <>
            <motion.div
                className="fixed top-0 left-0 w-3 h-3 rounded-full bg-[var(--accent-primary)] pointer-events-none z-[9999] mix-blend-difference hidden md:block"
                style={{
                    x: cursorXSpring,
                    y: cursorYSpring,
                    translateX: "-50%",
                    translateY: "-50%",
                }}
                animate={{
                    scale: isClicking ? 0.8 : isHovering ? 1.5 : 1,
                    opacity: isVisible ? 1 : 0,
                }}
                transition={{duration: 0.1}}
            />
            <motion.div
                className="fixed top-0 left-0 w-10 h-10 rounded-full border border-[var(--accent-primary)]/50 pointer-events-none z-[9998] hidden md:block"
                style={{
                    x: cursorXSpring,
                    y: cursorYSpring,
                    translateX: "-50%",
                    translateY: "-50%",
                }}
                animate={{
                    scale: isClicking ? 0.8 : isHovering ? 1.5 : 1,
                    opacity: isVisible ? 1 : 0,
                }}
                transition={{duration: 0.15}}
            />
        </>
    );
}
