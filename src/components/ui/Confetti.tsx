"use client";

import {useEffect, useRef} from "react";
import confetti from "canvas-confetti";

interface ConfettiProps {
    trigger?: boolean;
    duration?: number;
    intensity?: number;
}

export default function Confetti({
                          trigger,
                          duration = 3000,
                          intensity = 1
                      }: ConfettiProps) {
    const hasTriggered = useRef(false);

    useEffect(() => {
        if (trigger && !hasTriggered.current) {
            hasTriggered.current = true;

            const colors = ["#00fff5", "#ff00ff", "#00ff00", "#ffff00", "#ff6600"];

            const fireConfetti = () => {
                confetti({
                    particleCount: 100 * intensity,
                    spread: 70,
                    origin: {y: 0.6},
                    colors,
                    disableForReducedMotion: true,
                });
            };

            const fireFromBothSides = () => {
                const end = Date.now() + duration;

                const frame = () => {
                    confetti({
                        particleCount: 3,
                        angle: 60,
                        spread: 55,
                        origin: {x: 0, y: 0.65},
                        colors,
                        disableForReducedMotion: true,
                    });

                    confetti({
                        particleCount: 3,
                        angle: 120,
                        spread: 55,
                        origin: {x: 1, y: 0.65},
                        colors,
                        disableForReducedMotion: true,
                    });

                    if (Date.now() < end) {
                        requestAnimationFrame(frame);
                    }
                };

                frame();
            };

            fireConfetti();

            setTimeout(() => {
                fireFromBothSides();
            }, 250);

            setTimeout(() => {
                confetti({
                    particleCount: 50 * intensity,
                    spread: 100,
                    origin: {y: 0.7},
                    colors,
                    disableForReducedMotion: true,
                });
            }, 1000);

        }

        return () => {
            hasTriggered.current = false;
        };
    }, [trigger, duration, intensity]);

    return null;
}

export function useConfetti() {
    const hasTriggered = useRef(false);

    const celebrate = () => {
        if (hasTriggered.current) return;
        hasTriggered.current = true;

        const colors = ["#00fff5", "#ff00ff", "#00ff00", "#ffff00", "#ff6600"];

        confetti({
            particleCount: 100,
            spread: 70,
            origin: {y: 0.6},
            colors,
            disableForReducedMotion: true,
        });

        setTimeout(() => {
            confetti({
                particleCount: 50,
                angle: 60,
                spread: 55,
                origin: {x: 0},
                colors,
                disableForReducedMotion: true,
            });

            confetti({
                particleCount: 50,
                angle: 120,
                spread: 55,
                origin: {x: 1},
                colors,
                disableForReducedMotion: true,
            });
        }, 250);

        setTimeout(() => {
            hasTriggered.current = false;
        }, 3000);
    };

    return celebrate;
}