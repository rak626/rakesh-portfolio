"use client";

import React from "react";
import Image from "next/image";
import {motion} from "framer-motion";
import SkillIcon from "@/components/SkillIcon";
import {GetSkillIcon} from "@/utils/iconUtils";
import {FaExternalLinkAlt, FaGithub} from "react-icons/fa";

interface ProjectCardProps {
    project: {
        name: string;
        description: string;
        tech: string[];
        github?: string;
        live?: string;
        image?: string;
    };
}

const ProjectCard: React.FC<ProjectCardProps> = ({project}) => {
    return (
        <div className="flex flex-col lg:flex-row items-center gap-x-16">
            {/* Left side: Sticky Description */}
            <motion.div
                className="lg:w-3/4 w-full lg:sticky lg:top-24 p-6 rounded-xl"
                initial={{opacity: 0, x: -50}}
                whileInView={{opacity: 1, x: 0}}
                transition={{duration: 0.6}}
            >
                <h3 className="text-2xl font-bold mb-4">{project.name}</h3>
                <p className="text-gray-700 mb-4">{project.description}</p>

                {/* Tech Stack */}
                <div className="flex flex-wrap gap-2 mb-4">
                    {project.tech.map((tech, i) => {
                        const icon = GetSkillIcon[tech.toLowerCase()];
                        return icon ? (
                            <SkillIcon
                                key={i}
                                classProps="text-green-600 w-6 h-6"
                                title={tech}
                            >
                                {icon}
                            </SkillIcon>
                        ) : (
                            <span key={i} className="text-sm text-gray-500">
                {tech}
              </span>
                        );
                    })}
                </div>

                {/* Links */}
                <div className="flex gap-4 mt-2">
                    {project.github && (
                        <a
                            href={project.github}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-gray-700 hover:text-gray-900 transition-colors"
                        >
                            <FaGithub className="w-5 h-5"/>
                        </a>
                    )}
                    {project.live && (
                        <a
                            href={project.live}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-gray-700 hover:text-gray-900 transition-colors"
                        >
                            <FaExternalLinkAlt className="w-5 h-5"/>
                        </a>
                    )}
                </div>
            </motion.div>

            {/* Right side: Image */}
            <motion.div
                className="w-3/4 sm:w-2/3 md:w-1/2 lg:w-1/2"
                initial={{opacity: 0, x: 50}}
                whileInView={{opacity: 1, x: 0}}
                transition={{duration: 0.6}}
            >
                <div className="relative w-full aspect-[4/3] md:aspect-[16/9] lg:aspect-[16/9]">
                    <Image
                        src={project.image ?? "/placeholder.png"}
                        alt={project.name}
                        fill
                        className="object-cover shadow-lg rounded-xl border-2 border-green-600"
                        placeholder="blur"
                        blurDataURL="/placeholder.png"
                    />
                </div>
            </motion.div>
        </div>
    );
};

export default ProjectCard;
