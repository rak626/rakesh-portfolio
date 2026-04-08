"use client";

import {motion} from "framer-motion";
import {ExternalLink, Briefcase} from "lucide-react";
import {FaGithub} from "react-icons/fa";
import {projects} from "@/datas/data";

function FreelanceCard({
                           project,
                           index,
                       }: {
    project: (typeof projects)[0];
    index: number;
}) {
    return (
        <motion.div
            initial={{opacity: 0, y: 30}}
            whileInView={{opacity: 1, y: 0}}
            viewport={{once: true}}
            transition={{delay: index * 0.1}}
            whileHover={{y: -5}}
            className="group"
        >
            <div
                className="relative p-6 md:p-8 rounded-2xl bg-[var(--bg-secondary)] border border-[var(--border)] hover:border-[var(--accent-primary)] transition-all h-full">
                <div className="absolute top-4 right-4">
          <span
              className="px-3 py-1 rounded-full bg-[var(--accent-primary)]/10 text-[var(--accent-primary)] text-xs font-medium">
            Freelance
          </span>
                </div>

                <div className="mb-4">
                    <div className="flex items-center gap-2 mb-2">
                        <Briefcase className="w-5 h-5 text-[var(--accent-primary)]"/>
                        <span className="text-sm text-[var(--text-secondary)]">Client Project</span>
                    </div>
                    <h3 className="text-xl font-bold text-[var(--text-primary)] group-hover:text-[var(--accent-primary)] transition-colors">
                        {project.name}
                    </h3>
                </div>

                <p className="text-[var(--text-secondary)] mb-6 leading-relaxed">
                    {project.description}
                </p>

                {project.impact && project.impact.length > 0 && (
                    <div className="mb-6 space-y-2">
                        <h4 className="text-sm font-semibold text-[var(--text-primary)]">Key Outcomes:</h4>
                        <ul className="space-y-1">
                            {project.impact.slice(0, 3).map((item, i) => (
                                <li key={i} className="flex items-start gap-2 text-sm text-[var(--text-secondary)]">
                                    <span
                                        className="w-1.5 h-1.5 rounded-full bg-[var(--accent-primary)] mt-1.5 flex-shrink-0"/>
                                    {item}
                                </li>
                            ))}
                        </ul>
                    </div>
                )}

                <div className="flex flex-wrap gap-2 mb-6">
                    {project.tech.slice(0, 4).map((tech) => (
                        <span
                            key={tech}
                            className="px-2 py-1 rounded-md bg-[var(--bg-tertiary)] text-xs text-[var(--text-secondary)]"
                        >
              {tech}
            </span>
                    ))}
                </div>

                <div className="flex items-center gap-4 pt-4 border-t border-[var(--border)]">
                    {project.github && (
                        <a
                            href={project.github}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex items-center gap-2 text-sm text-[var(--text-secondary)] hover:text-[var(--text-primary)] transition-colors"
                        >
                            <FaGithub className="w-4 h-4"/>
                            Source
                        </a>
                    )}
                    {project.live && project.live !== "#" && (
                        <a
                            href={project.live}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex items-center gap-2 text-sm text-[var(--accent-primary)] hover:text-[var(--accent-secondary)] transition-colors"
                        >
                            <ExternalLink className="w-4 h-4"/>
                            View Live
                        </a>
                    )}
                </div>
            </div>
        </motion.div>
    );
}

export default function Freelance() {
    const freelanceProjects = projects.filter((p) => p.type === "Freelance Project");

    if (freelanceProjects.length === 0) return null;

    return (
        <section
            id="freelance"
            className="relative py-24 lg:py-32 bg-[var(--bg-primary)]"
        >
            <div
                className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-[var(--border)] to-transparent"/>

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <motion.div
                    initial={{opacity: 0, y: 20}}
                    whileInView={{opacity: 1, y: 0}}
                    viewport={{once: true}}
                    className="text-center mb-12"
                >
          <span className="text-[var(--accent-primary)] font-medium mb-2 block">
            Client Work
          </span>
                    <h2 className="text-4xl md:text-5xl font-bold text-[var(--text-primary)]">
                        Freelance Projects
                    </h2>
                    <div
                        className="mt-4 w-20 h-1 bg-gradient-to-r from-[var(--accent-primary)] to-[var(--accent-secondary)] mx-auto rounded-full"/>
                    <p className="mt-6 text-[var(--text-secondary)] max-w-2xl mx-auto">
                        Delivering solutions for clients outside of full-time work. Each project
                        showcases my ability to understand requirements and ship production-ready
                        applications.
                    </p>
                </motion.div>

                <div className="grid md:grid-cols-2 gap-8">
                    {freelanceProjects.map((project, index) => (
                        <FreelanceCard key={project.name} project={project} index={index}/>
                    ))}
                </div>

                <motion.div
                    initial={{opacity: 0, y: 20}}
                    whileInView={{opacity: 1, y: 0}}
                    viewport={{once: true}}
                    className="mt-12 p-6 rounded-2xl bg-gradient-to-br from-[var(--accent-primary)]/10 to-[var(--accent-secondary)]/10 border border-[var(--accent-primary)]/20 text-center"
                >
                    <p className="text-[var(--text-secondary)]">
                        Interested in working together?{" "}
                        <a
                            href="#contact"
                            className="text-[var(--accent-primary)] font-medium hover:underline"
                        >
                            Let&apos;s discuss your project
                        </a>
                    </p>
                </motion.div>
            </div>
        </section>
    );
}
