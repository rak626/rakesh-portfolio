"use client";

import React from "react";
import {motion, Variants} from "framer-motion";
import {AiFillStar, AiOutlineStar} from "react-icons/ai";
import {FaCode, FaCogs, FaDatabase} from "react-icons/fa";
import SkillIcon from "@/components/SkillIcon";
import {skillsData} from "@/datas/data";
import {GetSkillIcon} from "@/utils/iconUtils";

// Framer Motion variants
const containerVariants: Variants = {
    hidden: {opacity: 0},
    visible: {opacity: 1, transition: {staggerChildren: 0.1}},
};

const skillCardVariants: Variants = {
    hidden: {opacity: 0, scale: 0.8},
    visible: {opacity: 1, scale: 1, transition: {type: "spring", stiffness: 100}},
};

export default function SkillsSection() {
    return (
        <section className="w-full gradient-animate py-20">
            <div className="max-w-7xl mx-auto px-6">
                {/* Section Title */}
                <motion.div
                    className="text-4xl font-extrabold text-gray-900 text-center mb-12"
                    initial={{y: -50, opacity: 0}}
                    animate={{y: 0, opacity: 1}}
                    transition={{duration: 0.5}}
                >
                    Skills
                </motion.div>

                {Object.entries(skillsData).map(([category, skills]) => (
                    <div key={category} className="mb-12">
                        {/* Category Title */}
                        <motion.div
                            className="text-2xl font-semibold text-gray-800 mb-6 flex items-center gap-2"
                            initial={{x: -50, opacity: 0}}
                            animate={{x: 0, opacity: 1}}
                            transition={{delay: 0.2, duration: 0.5}}
                        >
                            {category === "Programming Languages" && <FaCode className="text-green-600 w-6 h-6"/>}
                            {category === "Frameworks & Tools" && <FaCogs className="text-green-600 w-6 h-6"/>}
                            {category === "Databases" && <FaDatabase className="text-green-600 w-6 h-6"/>}
                            {category}
                        </motion.div>

                        {/* Skills Grid */}
                        <motion.div
                            className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-6 gap-8"
                            variants={containerVariants}
                            initial="hidden"
                            whileInView="visible"
                            viewport={{once: true}}
                        >
                            {skills.map((skill, idx) => {
                                const icon = GetSkillIcon[skill.name.toLowerCase()];
                                if (!icon) return null;

                                return (
                                    <motion.div
                                        key={idx}
                                        className="flex flex-col items-center p-6 bg-green-50 rounded-xl shadow-lg cursor-pointer"
                                        variants={skillCardVariants}
                                        whileHover={{scale: 1.1, rotate: 2}}
                                        whileTap={{scale: 0.95}}
                                    >
                                        {/* Skill Icon with tooltip and hover scale */}
                                        <SkillIcon
                                            title={skill.name}
                                            classProps="transition-transform duration-200 transform hover:scale-110"
                                        >
                                            {icon}
                                        </SkillIcon>

                                        {/* Skill Name */}
                                        <p className="text-gray-800 font-medium mb-2">{skill.name}</p>

                                        {/* Star Rating */}
                                        <div className="flex">
                                            {Array.from({length: 5}).map((_, i) =>
                                                i < skill.rating ? (
                                                    <AiFillStar key={i} className="text-yellow-400 w-5 h-5"/>
                                                ) : (
                                                    <AiOutlineStar key={i} className="text-gray-300 w-5 h-5"/>
                                                )
                                            )}
                                        </div>
                                    </motion.div>
                                );
                            })}
                        </motion.div>
                    </div>
                ))}
            </div>
        </section>
    );
}
