"use client";

import { useState } from "react";
import { motion, AnimatePresence, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import { skillsData } from "@/datas/data";
import { GetSkillIcon } from "@/utils/iconUtils";
import { Code, Cpu, Database, Layers, Terminal } from "lucide-react";

const categoryIcons = {
  "Programming Languages": Code,
  "Frameworks & Tools": Layers,
  Databases: Database,
  default: Cpu,
};

function SkillBadge({ name }: { name: string; category: string }) {
  const icon = GetSkillIcon[name.toLowerCase()];

  return (
    <motion.div
      layout
      whileHover={{ scale: 1.05, y: -5 }}
      className="group relative flex flex-col items-center p-6 bg-bg-secondary/40 backdrop-blur-md border border-border/50 hover:border-accent-primary transition-all cursor-crosshair overflow-hidden"
    >
      <div className="absolute top-0 right-0 w-8 h-8 bg-accent-primary/10 -rotate-45 translate-x-4 -translate-y-4 group-hover:bg-accent-primary/20 transition-colors" />
      
      <div className="relative z-10 p-4 rounded-full bg-bg-tertiary shadow-inner group-hover:glow-sm transition-all duration-500">
        {icon && (
          <div className="w-10 h-10 text-accent-primary [&>svg]:w-10 [&>svg]:h-10">
            {icon}
          </div>
        )}
      </div>
      
      <span className="mt-4 font-mono text-xs font-bold tracking-widest text-text-secondary group-hover:text-accent-primary transition-colors uppercase">
        {name}
      </span>

      <div className="absolute bottom-0 left-0 w-full h-0.5 bg-gradient-to-r from-transparent via-accent-primary to-transparent scale-x-0 group-hover:scale-x-100 transition-transform duration-500" />
    </motion.div>
  );
}

function CategoryTab({
  category,
  isActive,
  onClick,
  count,
}: {
  category: string;
  isActive: boolean;
  onClick: () => void;
  count: number;
}) {
  const Icon = categoryIcons[category as keyof typeof categoryIcons] || categoryIcons.default;

  return (
    <motion.button
      onClick={onClick}
      className={`relative px-6 py-4 font-mono text-xs font-bold uppercase tracking-[0.2em] transition-all flex items-center gap-3 border-2 ${
        isActive 
          ? "bg-text-primary text-bg-primary border-text-primary" 
          : "text-text-secondary border-transparent hover:border-border"
      }`}
    >
      <Icon className="w-4 h-4" />
      {category}
      <span className={`text-[10px] ${isActive ? "opacity-60" : "text-accent-primary"}`}>[{count}]</span>
    </motion.button>
  );
}

export default function Skills() {
  const [activeCategory, setActiveCategory] = useState<string>("all");
  const containerRef = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"],
  });

  const rotate = useTransform(scrollYProgress, [0, 1], [0, 10]);

  const filteredSkills = activeCategory === "all"
    ? Object.entries(skillsData).flatMap(([category, skills]) =>
        skills.map(skill => ({ ...skill, category }))
      )
    : skillsData[activeCategory]?.map(skill => ({ ...skill, category: activeCategory })) || [];

  return (
    <section
      id="skills"
      ref={containerRef}
      className="section-container bg-bg-primary relative z-10"
    >
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col lg:flex-row lg:items-end justify-between mb-16 gap-8">
          <div className="space-y-4">
            <span className="text-accent-primary font-mono text-xs font-bold tracking-[0.5em] uppercase">
              {"// Tech Stack v2.6"}
            </span>
            <h2 className="text-4xl md:text-6xl font-black text-text-primary tracking-tighter uppercase">
              Engineered <span className="gradient-text">Competencies</span>
            </h2>
          </div>

          <div className="flex flex-wrap gap-2">
            <CategoryTab
              category="all"
              isActive={activeCategory === "all"}
              onClick={() => setActiveCategory("all")}
              count={Object.values(skillsData).flat().length}
            />
            {Object.entries(skillsData).map(([category, skills]) => (
              <CategoryTab
                key={category}
                category={category}
                isActive={activeCategory === category}
                onClick={() => setActiveCategory(category)}
                count={skills.length}
              />
            ))}
          </div>
        </div>

        <motion.div
          style={{ rotateX: rotate }}
          className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-[1px] bg-border/20 border border-border/20"
        >
          <AnimatePresence mode="popLayout">
            {filteredSkills.map((skill, index) => (
              <motion.div
                key={`${skill.name}-${skill.category}`}
                layout
                initial={{ opacity: 0, filter: "blur(10px)" }}
                animate={{ opacity: 1, filter: "blur(0px)" }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ delay: index * 0.02 }}
              >
                <SkillBadge name={skill.name} category={skill.category} />
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-20 p-8 border-t-2 border-accent-primary bg-accent-primary/[0.03] flex flex-col md:flex-row items-center justify-between gap-8"
        >
          <div className="flex items-center gap-4">
            <div className="w-12 h-12 rounded-full bg-accent-primary/10 flex items-center justify-center">
              <Terminal className="w-6 h-6 text-accent-primary" />
            </div>
            <div>
              <h3 className="font-bold text-text-primary uppercase tracking-wider">Active Learning Protocol</h3>
              <p className="text-xs text-text-secondary font-mono">Syncing new modules to core database...</p>
            </div>
          </div>
          
          <div className="flex flex-wrap gap-3">
            {["AWS Architect", "Kubernetes", "GraphQL", "Web3"].map((tech) => (
              <span
                key={tech}
                className="px-4 py-2 bg-text-primary text-bg-primary font-mono text-xs font-bold skew-x-[-12deg]"
              >
                {tech}
              </span>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
