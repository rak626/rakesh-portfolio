"use client";

import React from "react";
import {motion} from "framer-motion";
import {skillsData} from "@/datas/data";
import SkillCategory from "@/components/SkillCategory";


// -------------------- Main SkillsSection --------------------
export default function SkillsSection() {
    return (
        <section className="section-header-style gradient-animate">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
                <motion.h2
                    className="text-4xl font-extrabold text-gray-900 text-center mb-12"
                    initial={{y: -50, opacity: 0}}
                    animate={{y: 0, opacity: 1}}
                    transition={{duration: 0.5}}
                >
                    Skills
                </motion.h2>

                {Object.entries(skillsData).map(([category, skills]) => (
                    <SkillCategory key={category} category={category} skills={skills}/>
                ))}
            </div>
        </section>
    );
}
