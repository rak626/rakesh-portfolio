"use client";

import {useState} from "react";
import {motion, AnimatePresence} from "framer-motion";
import {X, ExternalLink, Folder, FileCode, GitBranch} from "lucide-react";
import {FaGithub} from "react-icons/fa";
import {projects} from "@/datas/data";
import {GetSkillIcon} from "@/utils/iconUtils";
import {Project} from "@/utils/types/types";

function ProjectCard({
                        project,
                        onClick,
                    }: {
    project: Project;
    onClick: () => void;
}) {
    return (
        <motion.div
            layoutId={project.name}
            whileHover={{scale: 1.02, borderColor: "var(--accent-primary)"}}
            onClick={onClick}
            className="group cursor-pointer bg-[var(--bg-secondary)] border border-[var(--border)] rounded overflow-hidden transition-all"
        >
            <div className="flex items-center gap-3 p-4 border-b border-[var(--border)]">
                <Folder className="w-5 h-5 text-[var(--accent-primary)]" />
                <div className="flex-1 min-w-0">
                    <h3 className="text-[var(--text-primary)] font-bold truncate">
                        {project.name}
                    </h3>
                    <p className="text-xs text-[var(--text-secondary)] truncate">
                        {project.type}
                    </p>
                </div>
                <span className="text-xs text-[var(--text-secondary)]">
                    [view]
                </span>
            </div>

            <div className="p-4 space-y-3">
                <p className="text-sm text-[var(--text-secondary)] line-clamp-2">
                    {project.description}
                </p>

                <div className="flex flex-wrap gap-2">
                    {project.tech.slice(0, 4).map((tech) => {
                        const icon = GetSkillIcon[tech.toLowerCase()];
                        return (
                            <span
                                key={tech}
                                className="flex items-center gap-1 px-2 py-1 bg-[var(--bg-tertiary)] text-xs text-[var(--text-secondary)] rounded"
                            >
                                {icon && (
                                    <span className="text-[var(--accent-primary)]">
                                        <span className="[&>svg]:w-3 [&>svg]:h-3">{icon}</span>
                                    </span>
                                )}
                                {tech}
                            </span>
                        );
                    })}
                    {project.tech.length > 4 && (
                        <span className="px-2 py-1 bg-[var(--bg-tertiary)] text-xs text-[var(--text-secondary)] rounded">
                            +{project.tech.length - 4}
                        </span>
                    )}
                </div>

                <div className="flex items-center gap-4 pt-2 border-t border-[var(--border)] text-xs text-[var(--text-secondary)]">
                    {project.github && (
                        <span className="flex items-center gap-1">
                            <GitBranch className="w-3 h-3" />
                            git
                        </span>
                    )}
                    {project.live && project.live !== "#" && (
                        <span className="flex items-center gap-1">
                            <ExternalLink className="w-3 h-3" />
                            live
                        </span>
                    )}
                </div>
            </div>
        </motion.div>
    );
}

function ProjectModal({
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
                    className="relative w-full max-w-3xl max-h-[90vh] overflow-y-auto bg-[var(--bg-primary)] border border-[var(--border)] rounded"
                >
                    <div className="sticky top-0 flex items-center justify-between p-4 bg-[var(--bg-secondary)] border-b border-[var(--border)] z-10">
                        <div className="flex items-center gap-3">
                            <FileCode className="w-5 h-5 text-[var(--accent-primary)]" />
                            <span className="text-[var(--text-primary)] font-bold">{project.name}</span>
                            <span className="text-xs text-[var(--text-secondary)]">
                                {project.type}
                            </span>
                        </div>
                        <button
                            onClick={onClose}
                            className="p-2 hover:bg-[var(--bg-tertiary)] rounded transition-colors"
                        >
                            <X className="w-4 h-4 text-[var(--text-secondary)]" />
                        </button>
                    </div>

                    <div className="p-6 space-y-6">
                        <div className="p-4 bg-[var(--bg-secondary)] border border-[var(--border)] rounded">
                            <div className="text-xs text-[var(--text-secondary)] mb-3">
                                <span className="text-[var(--accent-secondary)]">#</span> description
                            </div>
                            <p className="text-[var(--text-secondary)]">{project.description}</p>
                        </div>

                        {project.problem && (
                            <div className="p-4 bg-[var(--bg-secondary)] border border-[var(--border)] rounded">
                                <div className="text-xs text-[var(--accent-secondary)] mb-2">
                                    <span className="text-[var(--accent-primary)]">!</span> problem
                                </div>
                                <p className="text-[var(--text-secondary)] text-sm">{project.problem}</p>
                            </div>
                        )}

                        {project.solution && (
                            <div className="p-4 bg-[var(--bg-secondary)] border border-[var(--border)] rounded">
                                <div className="text-xs text-[var(--accent-secondary)] mb-2">
                                    <span className="text-[var(--accent-primary)]">*</span> solution
                                </div>
                                <p className="text-[var(--text-secondary)] text-sm">{project.solution}</p>
                            </div>
                        )}

                        <div className="space-y-3">
                            <div className="text-xs text-[var(--text-secondary)]">
                                <span className="text-[var(--accent-secondary)]">$</span> tech_stack = [
                            </div>
                            <div className="flex flex-wrap gap-2 pl-6">
                                {project.tech.map((tech) => (
                                    <span
                                        key={tech}
                                        className="px-3 py-1.5 bg-[var(--bg-tertiary)] text-xs text-[var(--text-secondary)] rounded"
                                    >
                                        &quot;{tech}&quot;,
                                    </span>
                                ))}
                            </div>
                            <div className="text-xs text-[var(--text-secondary)]">
                                ]
                            </div>
                        </div>

                        {project.features && project.features.length > 0 && (
                            <div className="p-4 bg-[var(--bg-secondary)] border border-[var(--border)] rounded">
                                <div className="text-xs text-[var(--text-secondary)] mb-3">
                                    <span className="text-[var(--accent-secondary)]">*</span> features
                                </div>
                                <ul className="space-y-2">
                                    {project.features.map((feature, i) => (
                                        <li
                                            key={i}
                                            className="flex items-start gap-2 text-sm text-[var(--text-secondary)]"
                                        >
                                            <span className="text-[var(--accent-primary)]">
                                                <span className="text-[var(--accent-secondary)]">-</span>
                                            </span>
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
                                    className="flex items-center gap-2 px-4 py-2 bg-[var(--bg-secondary)] border border-[var(--border)] hover:border-[var(--accent-primary)] text-sm text-[var(--text-secondary)] rounded transition-colors"
                                >
                                    <FaGithub className="w-4 h-4" />
                                    git clone
                                </a>
                            )}
                            {project.live && project.live !== "#" && (
                                <a
                                    href={project.live}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="flex items-center gap-2 px-4 py-2 bg-[var(--accent-primary)] text-[var(--bg-primary)] text-sm font-medium rounded"
                                >
                                    <ExternalLink className="w-4 h-4" />
                                    npm run start
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
        <section id="projects" className="relative py-24 lg:py-32 bg-[var(--bg-secondary)]">
            <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
                <motion.div
                    initial={{opacity: 0, y: 20}}
                    whileInView={{opacity: 1, y: 0}}
                    viewport={{once: true}}
                    className="mb-12"
                >
                    <div className="flex items-center gap-2 mb-4">
                        <span className="text-[var(--accent-primary)]">$</span>
                        <span className="text-[var(--text-secondary)]">ls ./projects</span>
                    </div>
                    <h2 className="text-3xl md:text-4xl font-bold text-[var(--text-primary)] neon-text">
                        Projects
                    </h2>
                    <div className="mt-2 text-xs text-[var(--text-secondary)]">
                        {projects.length} directories
                    </div>
                </motion.div>

                <div className="grid md:grid-cols-2 gap-6">
                    {projects.map((project, index) => (
                        <motion.div
                            key={project.name}
                            initial={{opacity: 0, y: 20}}
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
                        <ProjectModal
                            project={selectedProject}
                            onClose={() => setSelectedProject(null)}
                        />
                    )}
                </AnimatePresence>
            </div>
        </section>
    );
}