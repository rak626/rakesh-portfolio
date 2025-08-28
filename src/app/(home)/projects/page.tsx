"use client";

import React from "react";
import {motion} from "framer-motion";
import {projects} from "@/datas/data";
import ProjectCard from "@/components/ProjectCard";

export default function ProjectsStickyReveal() {
    return (
        <section className="relative section-header-style gradient-animate">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-8 lg:pt-12">
                {/* Section Title */}
                <motion.h2
                    className="text-4xl font-extrabold text-gray-900 text-center mb-12"
                    initial={{y: -50, opacity: 0}}
                    animate={{y: 0, opacity: 1}}
                    transition={{duration: 0.5}}
                >
                    Projects
                </motion.h2>
            </div>
            <div className="max-w-7xl mx-auto px-6 space-y-32">
                {projects.map((project, idx) => (
                    <ProjectCard key={idx} project={project}/>
                ))}
            </div>
        </section>
    );
}
