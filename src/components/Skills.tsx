"use client";

import {useState} from "react";
import {motion, AnimatePresence, useInView} from "framer-motion";
import {useRef} from "react";
import {skillsData} from "@/datas/data";
import {GetSkillIcon} from "@/utils/iconUtils";

function AnimatedSkillBar({
                              name,
                              rating,
                              index,
                          }: {
    name: string;
    rating: number;
    index: number;
}) {
    const ref = useRef(null);
    const isInView = useInView(ref, {once: true, margin: "-50px"});
    const [isExpanded, setIsExpanded] = useState(false);
    const icon = GetSkillIcon[name.toLowerCase()];

    return (
        <motion.div
            ref={ref}
            initial={{opacity: 0, x: -20}}
            animate={isInView ? {opacity: 1, x: 0} : {}}
            transition={{delay: index * 0.05, duration: 0.3}}
            className="group"
        >
            <div
                onClick={() => setIsExpanded(!isExpanded)}
                className="flex items-center gap-3 px-4 py-3 bg-[var(--bg-secondary)] border border-[var(--border)] rounded cursor-pointer hover:border-[var(--accent-primary)] transition-colors"
            >
                <div className="w-8 h-8 flex items-center justify-center text-[var(--accent-primary)]">
                    {icon && <span className="[&>svg]:w-5 [&>svg]:h-5">{icon}</span>}
                </div>

                <div className="flex-1 min-w-0">
                    <div className="flex items-center justify-between mb-1">
                        <span className="text-sm text-[var(--text-primary)] truncate">{name}</span>
                        <span className="text-xs text-[var(--text-secondary)] ml-2">
                            {rating}/5
                        </span>
                    </div>

                    <div className="h-2 bg-[var(--bg-tertiary)] rounded-full overflow-hidden">
                        <motion.div
                            initial={{width: 0}}
                            animate={isInView ? {width: `${(rating / 5) * 100}%`} : {}}
                            transition={{delay: index * 0.05 + 0.2, duration: 0.8, ease: "easeOut"}}
                            className="h-full bg-gradient-to-r from-[var(--accent-primary)] to-[var(--accent-secondary)] rounded-full"
                        />
                    </div>
                </div>

                <motion.span
                    animate={{rotate: isExpanded ? 90 : 0}}
                    className="text-[var(--text-secondary)] text-xs"
                >
                    {isExpanded ? "[-]" : "[+]"}
                </motion.span>
            </div>

            <AnimatePresence>
                {isExpanded && (
                    <motion.div
                        initial={{height: 0, opacity: 0}}
                        animate={{height: "auto", opacity: 1}}
                        exit={{height: 0, opacity: 0}}
                        className="overflow-hidden"
                    >
                        <div className="mt-2 ml-4 pl-4 border-l border-[var(--accent-primary)]/30 text-xs text-[var(--text-secondary)]">
                            {name}: {rating === 5 ? "Expert" : rating >= 4 ? "Advanced" : rating >= 3 ? "Intermediate" : "Beginner"} level
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </motion.div>
    );
}

function JsonView({skills}: { skills: { name: string; category: string }[] }) {
    const ref = useRef(null);
    const isInView = useInView(ref, {once: true});

    return (
        <motion.div
            ref={ref}
            initial={{opacity: 0}}
            animate={isInView ? {opacity: 1} : {}}
            className="p-4 bg-[var(--bg-secondary)] border border-[var(--border)] rounded overflow-x-auto"
        >
            <div className="text-xs text-[var(--text-secondary)] mb-3">
                <span className="text-[var(--accent-secondary)]">cat</span> skills.json
            </div>
            <pre className="text-xs space-y-1">
                <span className="text-[var(--accent-secondary)]">{"{"}</span>
                {"\n"}
                {skills.map((skill, index) => (
                    <motion.div
                        key={skill.name}
                        initial={{opacity: 0, x: -10}}
                        animate={isInView ? {opacity: 1, x: 0} : {}}
                        transition={{delay: index * 0.02}}
                    >
                        <span className="text-[var(--neon-cyan)]">&quot;{skill.name}&quot;</span>
                        <span className="text-[var(--text-secondary)]">: </span>
                        <span className="text-[var(--neon-green)]">&quot;{skill.category}&quot;</span>
                        {index < skills.length - 1 && (
                            <span className="text-[var(--text-secondary)]">,</span>
                        )}
                    </motion.div>
                ))}
                {"\n"}
                <span className="text-[var(--accent-secondary)]">{"}"}</span>
            </pre>
        </motion.div>
    );
}

export default function Skills() {
    const [activeCategory, setActiveCategory] = useState<string>("all");
    const [viewMode, setViewMode] = useState<"bars" | "json">("bars");

    const allSkills = Object.entries(skillsData).flatMap(([category, skills]) =>
        skills.map(skill => ({...skill, category}))
    );

    const filteredSkills = activeCategory === "all"
        ? allSkills
        : skillsData[activeCategory as keyof typeof skillsData]?.map(skill => ({
            ...skill,
            category: activeCategory,
        })) || [];

    return (
        <section id="skills" className="relative py-24 lg:py-32 bg-[var(--bg-secondary)]">
            <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
                <motion.div
                    initial={{opacity: 0, y: 20}}
                    whileInView={{opacity: 1, y: 0}}
                    viewport={{once: true}}
                    className="mb-12"
                >
                    <div className="flex items-center gap-2 mb-4">
                        <span className="text-[var(--accent-primary)]">$</span>
                        <span className="text-[var(--text-secondary)]">cat skills.json</span>
                    </div>
                    <h2 className="text-3xl md:text-4xl font-bold text-[var(--text-primary)] neon-text">
                        Tech Stack
                    </h2>
                </motion.div>

                <div className="mb-8 flex flex-wrap gap-2">
                    <CategoryTab
                        category="all"
                        isActive={activeCategory === "all"}
                        onClick={() => setActiveCategory("all")}
                        count={allSkills.length}
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

                <div className="mb-4 flex gap-2">
                    <button
                        onClick={() => setViewMode("bars")}
                        className={`px-3 py-1.5 rounded text-xs ${
                            viewMode === "bars"
                                ? "bg-[var(--accent-primary)] text-[var(--bg-primary)]"
                                : "bg-[var(--bg-tertiary)] text-[var(--text-secondary)] border border-[var(--border)]"
                        }`}
                    >
                        [--bars]
                    </button>
                    <button
                        onClick={() => setViewMode("json")}
                        className={`px-3 py-1.5 rounded text-xs ${
                            viewMode === "json"
                                ? "bg-[var(--accent-primary)] text-[var(--bg-primary)]"
                                : "bg-[var(--bg-tertiary)] text-[var(--text-secondary)] border border-[var(--border)]"
                        }`}
                    >
                        [--json]
                    </button>
                </div>

                <AnimatePresence mode="wait">
                    {viewMode === "bars" ? (
                        <motion.div
                            key="bars"
                            initial={{opacity: 0}}
                            animate={{opacity: 1}}
                            exit={{opacity: 0}}
                            className="space-y-3"
                        >
                            {filteredSkills.map((skill, index) => (
                                <AnimatedSkillBar
                                    key={`${skill.name}-${skill.category}`}
                                    name={skill.name}
                                    rating={skill.rating}
                                    index={index}
                                />
                            ))}
                        </motion.div>
                    ) : (
                        <motion.div
                            key="json"
                            initial={{opacity: 0}}
                            animate={{opacity: 1}}
                            exit={{opacity: 0}}
                        >
                            <JsonView skills={filteredSkills} />
                        </motion.div>
                    )}
                </AnimatePresence>

                <motion.div
                    initial={{opacity: 0, y: 20}}
                    whileInView={{opacity: 1, y: 0}}
                    viewport={{once: true}}
                    className="mt-12 p-4 bg-[var(--accent-primary)]/10 border border-[var(--accent-primary)]/30 rounded"
                >
                    <div className="text-xs text-[var(--accent-primary)] mb-2">
                        <span className="text-[var(--accent-secondary)]">$</span> currently_learning
                    </div>
                    <div className="flex flex-wrap gap-3">
                        {["AWS", "Kubernetes", "GraphQL"].map((tech) => (
                            <span
                                key={tech}
                                className="px-3 py-1.5 bg-[var(--bg-secondary)] border border-[var(--accent-secondary)] text-[var(--accent-secondary)] rounded text-sm"
                            >
                                + {tech}
                            </span>
                        ))}
                    </div>
                </motion.div>
            </div>
        </section>
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
    return (
        <motion.button
            onClick={onClick}
            whileHover={{scale: 1.02}}
            whileTap={{scale: 0.98}}
            className={`px-4 py-2 rounded text-sm transition-all ${
                isActive
                    ? "bg-[var(--accent-primary)] text-[var(--bg-primary)] font-medium"
                    : "bg-[var(--bg-tertiary)] text-[var(--text-secondary)] hover:text-[var(--text-primary)] border border-[var(--border)]"
            }`}
        >
            {category}
            <span className="ml-2 opacity-60">({count})</span>
        </motion.button>
    );
}