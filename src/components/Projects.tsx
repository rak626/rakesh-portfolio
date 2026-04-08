"use client";

import {useState} from "react";
import Image from "next/image";
import {motion, AnimatePresence} from "framer-motion";
import {X, ExternalLink, ArrowRight, Lightbulb, Target, Trophy} from "lucide-react";
import {FaGithub} from "react-icons/fa";
import {projects} from "@/datas/data";
import {GetSkillIcon} from "@/utils/iconUtils";
import {Project} from "@/utils/types/types";

function ProjectCard({project, onClick}: { project: Project; onClick: () => void }) {
    return (
        <motion.div
            layoutId={project.name}
            whileHover={{y: -5}}
            onClick={onClick}
            className="group cursor-pointer"
        >
            <div
                className="relative overflow-hidden rounded-2xl bg-[var(--bg-secondary)] border border-[var(--border)] hover:border-[var(--accent-primary)]/50 transition-all">
                <div className="relative aspect-[16/10] overflow-hidden">
                    <Image
                        src={project.image || "/placeholder.png"}
                        alt={project.name}
                        fill
                        className="object-cover transition-transform duration-500 group-hover:scale-110"
                    />
                    <div
                        className="absolute inset-0 bg-gradient-to-t from-[var(--bg-primary)] via-transparent to-transparent opacity-80"/>
                </div>

                <div className="p-6">
                    <div className="flex items-center gap-2 mb-2">
            <span
                className="px-3 py-1 rounded-full bg-[var(--accent-primary)]/10 text-[var(--accent-primary)] text-xs font-medium">
              {project.type}
            </span>
                    </div>
                    <h3 className="text-xl font-bold text-[var(--text-primary)] mb-2">
                        {project.name}
                    </h3>
                    <p className="text-[var(--text-secondary)] text-sm line-clamp-2 mb-4">
                        {project.description}
                    </p>

                    <div className="flex flex-wrap gap-2 mb-4">
                        {project.tech.slice(0, 4).map((tech) => {
                            const icon = GetSkillIcon[tech.toLowerCase()];
                            return (
                                <span
                                    key={tech}
                                    className="flex items-center gap-1.5 px-2 py-1 rounded-lg bg-[var(--bg-tertiary)] text-xs text-[var(--text-secondary)]"
                                >
                  {icon && (
                      <span className="w-3.5 h-3.5 text-[var(--accent-primary)]">
                      {icon}
                    </span>
                  )}
                                    {tech}
                </span>
                            );
                        })}
                        {project.tech.length > 4 && (
                            <span
                                className="px-2 py-1 rounded-lg bg-[var(--bg-tertiary)] text-xs text-[var(--text-secondary)]">
                +{project.tech.length - 4}
              </span>
                        )}
                    </div>

                    <div className="flex items-center gap-4 text-[var(--text-secondary)]">
                        {project.github && (
                            <a
                                href={project.github}
                                target="_blank"
                                rel="noopener noreferrer"
                                onClick={(e) => e.stopPropagation()}
                                className="hover:text-[var(--accent-primary)] transition-colors"
                            >
                                <FaGithub className="w-5 h-5"/>
                            </a>
                        )}
                        {project.live && project.live !== "#" && (
                            <a
                                href={project.live}
                                target="_blank"
                                rel="noopener noreferrer"
                                onClick={(e) => e.stopPropagation()}
                                className="hover:text-[var(--accent-primary)] transition-colors"
                            >
                                <ExternalLink className="w-5 h-5"/>
                            </a>
                        )}
                        <span
                            className="ml-auto text-sm font-medium text-[var(--accent-primary)] flex items-center gap-1 group-hover:gap-2 transition-all">
              View Details
              <ArrowRight className="w-4 h-4"/>
            </span>
                    </div>
                </div>
            </div>
        </motion.div>
    );
}

function CaseStudyModal({
                            project,
                            onClose,
                        }: {
    project: Project;
    onClose: () => void;
}) {
    return (
        <AnimatePresence>
            <motion.div
                initial={{opacity: 0}}
                animate={{opacity: 1}}
                exit={{opacity: 0}}
                className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm"
                onClick={onClose}
            >
                <motion.div
                    layoutId={project.name}
                    onClick={(e) => e.stopPropagation()}
                    className="relative w-full max-w-4xl max-h-[90vh] overflow-y-auto bg-[var(--bg-primary)] rounded-2xl border border-[var(--border)]"
                >
                    <div className="relative aspect-video">
                        <Image
                            src={project.image || "/placeholder.png"}
                            alt={project.name}
                            fill
                            className="object-cover"
                        />
                        <div
                            className="absolute inset-0 bg-gradient-to-t from-[var(--bg-primary)] via-transparent to-transparent"/>
                    </div>

                    <button
                        onClick={onClose}
                        className="absolute top-4 right-4 p-2 rounded-full bg-[var(--bg-primary)]/80 backdrop-blur-sm hover:bg-[var(--bg-secondary)] transition-colors"
                    >
                        <X className="w-5 h-5 text-[var(--text-primary)]"/>
                    </button>

                    <div className="p-8 -mt-20 relative z-10">
            <span
                className="inline-block px-3 py-1 rounded-full bg-[var(--accent-primary)] text-white text-sm font-medium mb-4">
              {project.type}
            </span>
                        <h2 className="text-3xl md:text-4xl font-bold text-[var(--text-primary)] mb-4">
                            {project.name}
                        </h2>

                        <div className="flex flex-wrap gap-3 mb-8">
                            {project.tech.map((tech) => {
                                const icon = GetSkillIcon[tech.toLowerCase()];
                                return (
                                    <span
                                        key={tech}
                                        className="flex items-center gap-2 px-3 py-1.5 rounded-lg bg-[var(--bg-secondary)] border border-[var(--border)] text-sm text-[var(--text-secondary)]"
                                    >
                    {icon && (
                        <span className="w-4 h-4 text-[var(--accent-primary)]">
                        {icon}
                      </span>
                    )}
                                        {tech}
                  </span>
                                );
                            })}
                        </div>

                        {project.problem && (
                            <div className="mb-8">
                                <div className="flex items-center gap-2 mb-3">
                                    <Lightbulb className="w-5 h-5 text-[var(--accent-primary)]"/>
                                    <h3 className="text-lg font-semibold text-[var(--text-primary)]">
                                        The Problem
                                    </h3>
                                </div>
                                <p className="text-[var(--text-secondary)]">{project.problem}</p>
                            </div>
                        )}

                        {project.solution && (
                            <div className="mb-8">
                                <div className="flex items-center gap-2 mb-3">
                                    <Target className="w-5 h-5 text-[var(--accent-primary)]"/>
                                    <h3 className="text-lg font-semibold text-[var(--text-primary)]">
                                        The Solution
                                    </h3>
                                </div>
                                <p className="text-[var(--text-secondary)]">{project.solution}</p>
                            </div>
                        )}

                        {project.impact && project.impact.length > 0 && (
                            <div className="mb-8">
                                <div className="flex items-center gap-2 mb-3">
                                    <Trophy className="w-5 h-5 text-[var(--accent-primary)]"/>
                                    <h3 className="text-lg font-semibold text-[var(--text-primary)]">
                                        Impact & Learnings
                                    </h3>
                                </div>
                                <ul className="space-y-2">
                                    {project.impact.map((item, i) => (
                                        <li key={i} className="flex items-start gap-3 text-[var(--text-secondary)]">
                                            <span className="w-1.5 h-1.5 rounded-full bg-[var(--accent-primary)] mt-2"/>
                                            {item}
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        )}

                        {project.features && project.features.length > 0 && (
                            <div className="mb-8">
                                <h3 className="text-lg font-semibold text-[var(--text-primary)] mb-3">
                                    Key Features
                                </h3>
                                <ul className="grid md:grid-cols-2 gap-2">
                                    {project.features.map((feature, i) => (
                                        <li
                                            key={i}
                                            className="flex items-center gap-2 text-[var(--text-secondary)]"
                                        >
                                            <span className="w-1.5 h-1.5 rounded-full bg-green-500"/>
                                            {feature}
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        )}

                        <div className="flex gap-4 pt-4 border-t border-[var(--border)]">
                            {project.github && (
                                <a
                                    href={project.github}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="flex items-center gap-2 px-6 py-3 rounded-xl bg-[var(--bg-secondary)] border border-[var(--border)] hover:border-[var(--accent-primary)] transition-colors"
                                >
                                    <FaGithub className="w-5 h-5"/>
                                    View Source
                                </a>
                            )}
                            {project.live && project.live !== "#" && (
                                <a
                                    href={project.live}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="flex items-center gap-2 px-6 py-3 rounded-xl bg-gradient-to-r from-[var(--accent-primary)] to-[var(--accent-secondary)] text-white"
                                >
                                    <ExternalLink className="w-5 h-5"/>
                                    Live Demo
                                </a>
                            )}
                        </div>
                    </div>
                </motion.div>
            </motion.div>
        </AnimatePresence>
    );
}

export default function Projects() {
    const [selectedProject, setSelectedProject] = useState<Project | null>(null);

    return (
        <section id="projects" className="relative py-24 lg:py-32 bg-[var(--bg-primary)]">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <motion.div
                    initial={{opacity: 0, y: 20}}
                    whileInView={{opacity: 1, y: 0}}
                    viewport={{once: true}}
                    className="text-center mb-16"
                >
          <span className="text-[var(--accent-primary)] font-medium mb-2 block">
            Featured Work
          </span>
                    <h2 className="text-4xl md:text-5xl font-bold text-[var(--text-primary)]">
                        Projects
                    </h2>
                    <div
                        className="mt-4 w-20 h-1 bg-gradient-to-r from-[var(--accent-primary)] to-[var(--accent-secondary)] mx-auto rounded-full"/>
                    <p className="mt-6 text-[var(--text-secondary)] max-w-2xl mx-auto">
                        A selection of projects that showcase my skills in backend development,
                        system design, and full-stack applications.
                    </p>
                </motion.div>

                <div className="grid md:grid-cols-2 gap-8">
                    {projects.map((project, index) => (
                        <motion.div
                            key={project.name}
                            initial={{opacity: 0, y: 30}}
                            whileInView={{opacity: 1, y: 0}}
                            viewport={{once: true}}
                            transition={{delay: index * 0.1}}
                        >
                            <ProjectCard
                                project={project}
                                onClick={() => setSelectedProject(project)}
                            />
                        </motion.div>
                    ))}
                </div>

                <AnimatePresence>
                    {selectedProject && (
                        <CaseStudyModal
                            project={selectedProject}
                            onClose={() => setSelectedProject(null)}
                        />
                    )}
                </AnimatePresence>
            </div>
        </section>
    );
}
