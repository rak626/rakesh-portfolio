"use client";

import { useState, useRef, useEffect } from "react";
import Image from "next/image";
import { motion, AnimatePresence, useScroll, useTransform } from "framer-motion";
import { X, ExternalLink, ArrowRight, Lightbulb, Target, Trophy } from "lucide-react";
import { FaGithub } from "react-icons/fa";
import { projects } from "@/datas/data";
import { GetSkillIcon } from "@/utils/iconUtils";
import { Project } from "@/utils/types/types";

function ProjectCard({ project, onClick, index }: { project: Project; onClick: () => void; index: number }) {
  const cardRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: cardRef,
    offset: ["start end", "end start"],
  });

  const y = useTransform(scrollYProgress, [0, 1], [0, -50]);

  return (
    <motion.div
      ref={cardRef}
      style={{ y }}
      layoutId={project.name}
      onClick={onClick}
      className="group relative cursor-pointer overflow-hidden border border-border/50 bg-bg-secondary/30 backdrop-blur-md"
    >
      <div className="absolute top-0 left-0 w-16 h-16 border-t-2 border-l-2 border-accent-primary z-20 opacity-0 group-hover:opacity-100 transition-opacity" />
      <div className="absolute bottom-0 right-0 w-16 h-16 border-b-2 border-r-2 border-accent-secondary z-20 opacity-0 group-hover:opacity-100 transition-opacity" />
      
      <div className="relative aspect-[16/9] overflow-hidden">
        <Image
          src={project.image || "/placeholder.png"}
          alt={project.name}
          fill
          className="object-cover transition-transform duration-700 group-hover:scale-110 grayscale group-hover:grayscale-0"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-bg-primary via-bg-primary/20 to-transparent opacity-90 group-hover:opacity-40 transition-opacity" />
        
        <div className="absolute top-4 right-4 flex gap-2 z-10">
          {project.tech.slice(0, 3).map((tech) => (
            <div key={tech} className="w-8 h-8 rounded-full bg-bg-primary/80 backdrop-blur-sm flex items-center justify-center p-1.5 border border-border">
              {GetSkillIcon[tech.toLowerCase()]}
            </div>
          ))}
        </div>
      </div>

      <div className="p-8 relative">
        <div className="flex items-center gap-4 mb-4">
          <span className="font-mono text-[10px] font-bold uppercase tracking-widest text-accent-primary">
            Project // 0{index + 1}
          </span>
          <div className="h-px flex-1 bg-border/50" />
        </div>

        <h3 className="text-2xl font-black text-text-primary mb-3 uppercase tracking-tighter group-hover:text-accent-primary transition-colors">
          {project.name}
        </h3>
        
        <p className="text-text-secondary text-sm line-clamp-2 mb-6 font-medium leading-relaxed">
          {project.description}
        </p>

        <div className="flex items-center justify-between pt-4 border-t border-border/50">
          <div className="flex gap-4">
            {project.github && <FaGithub className="w-5 h-5 text-text-secondary hover:text-accent-primary transition-colors" />}
            {project.live && project.live !== "#" && <ExternalLink className="w-5 h-5 text-text-secondary hover:text-accent-primary transition-colors" />}
          </div>
          <div className="flex items-center gap-2 font-mono text-[10px] font-bold uppercase tracking-widest text-accent-primary group-hover:translate-x-2 transition-transform">
            Execute Detail <ArrowRight className="w-4 h-4" />
          </div>
        </div>
      </div>
    </motion.div>
  );
}

function CaseStudyModal({ project, onClose }: { project: Project; onClose: () => void }) {
  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        className="fixed inset-0 z-[150] flex items-center justify-center p-4 md:p-12 bg-bg-primary/95 backdrop-blur-xl"
        onClick={onClose}
      >
        <motion.div
          layoutId={project.name}
          onClick={(e) => e.stopPropagation()}
          className="relative w-full max-w-3xl max-h-[90vh] overflow-y-auto bg-bg-secondary border-x-2 border-accent-primary p-0 md:p-1 shadow-2xl"
        >
          <div className="p-8 md:p-12 space-y-10 bg-bg-secondary">
              <button
                onClick={onClose}
                className="absolute top-6 right-6 p-3 rounded-none bg-text-primary text-bg-primary hover:bg-accent-primary transition-colors z-20"
              >
                <X className="w-6 h-6" />
              </button>

              <div className="space-y-4">
                <div className="flex items-center gap-4">
                  <span className="font-mono text-xs font-bold text-accent-primary tracking-widest uppercase">
                    Case Study // System Analysis
                  </span>
                  <div className="h-px flex-1 bg-border/50" />
                </div>
                <h2 className="text-4xl md:text-6xl font-black text-text-primary uppercase tracking-tighter">
                  {project.name}
                </h2>
              </div>

              <div className="flex flex-wrap gap-2">
                {project.tech.map((tech) => (
                  <span key={tech} className="px-3 py-1 bg-bg-tertiary border border-border font-mono text-[10px] font-bold uppercase text-text-secondary">
                    {tech}
                  </span>
                ))}
              </div>

              <div className="grid gap-8">
                {project.problem && (
                  <div className="space-y-3">
                    <div className="flex items-center gap-2 font-mono text-xs font-black uppercase text-text-primary">
                      <Lightbulb className="w-4 h-4 text-accent-primary" /> The Challenge
                    </div>
                    <p className="text-text-secondary leading-relaxed font-medium">{project.problem}</p>
                  </div>
                )}

                {project.solution && (
                  <div className="space-y-3">
                    <div className="flex items-center gap-2 font-mono text-xs font-black uppercase text-text-primary">
                      <Target className="w-4 h-4 text-accent-primary" /> Implementation
                    </div>
                    <p className="text-text-secondary leading-relaxed font-medium">{project.solution}</p>
                  </div>
                )}
                
                {project.impact && project.impact.length > 0 && (
                  <div className="space-y-3">
                    <div className="flex items-center gap-2 font-mono text-xs font-black uppercase text-text-primary">
                      <Trophy className="w-4 h-4 text-accent-primary" /> Outcome
                    </div>
                    <ul className="grid gap-2">
                      {project.impact.map((item, i) => (
                        <li key={i} className="flex items-start gap-3 text-sm text-text-secondary font-medium">
                          <span className="text-accent-primary font-bold mt-0.5">»</span>
                          {item}
                        </li>
                      ))}
                    </ul>
                  </div>
                )}
              </div>

              <div className="flex gap-4 pt-10 border-t border-border">
                {project.github && (
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 flex items-center justify-center gap-3 py-4 bg-text-primary text-bg-primary font-mono text-xs font-black uppercase tracking-widest hover:bg-accent-primary transition-colors"
                  >
                    <FaGithub className="w-5 h-5" /> Repository
                  </a>
                )}
                {project.live && project.live !== "#" && (
                  <a
                    href={project.live}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 flex items-center justify-center gap-3 py-4 bg-accent-primary text-white font-mono text-xs font-black uppercase tracking-widest hover:bg-accent-secondary transition-colors"
                  >
                    <ExternalLink className="w-5 h-5" /> Deployment
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

  useEffect(() => {
    if (selectedProject) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [selectedProject]);

  return (
    <section id="projects" className="section-container bg-bg-primary relative z-10">
      <div className="max-w-7xl mx-auto">
        <div className="mb-20 space-y-4">
          <span className="text-accent-primary font-mono text-xs font-bold tracking-[0.5em] uppercase">
            {"// Selected Artifacts"}
          </span>
          <h2 className="text-4xl md:text-6xl font-black text-text-primary tracking-tighter uppercase">
            Featured <span className="gradient-text">Developments</span>
          </h2>
        </div>

        <div className="grid md:grid-cols-2 gap-12">
          {projects.map((project, index) => (
            <ProjectCard
              key={project.name}
              project={project}
              index={index}
              onClick={() => setSelectedProject(project)}
            />
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
