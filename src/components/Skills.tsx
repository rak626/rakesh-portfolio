"use client";

import {useState} from "react";
import {motion, AnimatePresence} from "framer-motion";
import {skillsData} from "@/datas/data";
import {GetSkillIcon} from "@/utils/iconUtils";
import {Code, Cpu, Database, Layers} from "lucide-react";

const categoryIcons = {
    "Programming Languages": Code,
    "Frameworks & Tools": Layers,
    Databases: Database,
    default: Cpu,
};

const categoryColors = {
    "Programming Languages": "from-blue-500 to-cyan-500",
    "Frameworks & Tools": "from-purple-500 to-pink-500",
    Databases: "from-green-500 to-emerald-500",
    default: "from-orange-500 to-amber-500",
};

function SkillBadge({
                        name,
                        category,
                    }: {
    name: string;
    category: string;
}) {
    const icon = GetSkillIcon[name.toLowerCase()];
    const colorClass = categoryColors[category as keyof typeof categoryColors] || categoryColors.default;

    return (
        <motion.div
            layout
            initial={{opacity: 0, scale: 0.8}}
            animate={{opacity: 1, scale: 1}}
            exit={{opacity: 0, scale: 0.8}}
            whileHover={{scale: 1.05, y: -5}}
            className="group relative flex flex-col items-center p-4 rounded-2xl bg-[var(--bg-secondary)] border border-[var(--border)] hover:border-[var(--accent-primary)]/50 transition-all cursor-pointer"
        >
            <div
                className={`p-3 rounded-xl bg-gradient-to-br ${colorClass} opacity-80 group-hover:opacity-100 transition-opacity`}
            >
                {icon && (
                    <div className="w-8 h-8 text-white [&>svg]:w-8 [&>svg]:h-8">
                        {icon}
                    </div>
                )}
            </div>
            <span className="mt-3 text-sm font-medium text-[var(--text-primary)] text-center">
        {name}
      </span>
            <div
                className="absolute -top-12 left-1/2 -translate-x-1/2 px-3 py-1.5 rounded-lg bg-[var(--bg-tertiary)] border border-[var(--border)] opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none whitespace-nowrap z-10">
                <span className="text-xs text-[var(--text-primary)]">{name}</span>
                <div
                    className="absolute -bottom-1 left-1/2 -translate-x-1/2 w-2 h-2 rotate-45 bg-[var(--bg-tertiary)] border-r border-b border-[var(--border)]"/>
            </div>
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
    const colorClass = categoryColors[category as keyof typeof categoryColors] || categoryColors.default;

    return (
        <motion.button
            onClick={onClick}
            whileHover={{scale: 1.02}}
            whileTap={{scale: 0.98}}
            className={`relative flex items-center gap-3 px-6 py-3 rounded-xl font-medium transition-all ${
                isActive
                    ? "text-white"
                    : "text-[var(--text-secondary)] hover:text-[var(--text-primary)]"
            }`}
        >
            {isActive && (
                <motion.div
                    layoutId="activeCategory"
                    className={`absolute inset-0 bg-gradient-to-r ${colorClass} rounded-xl`}
                    transition={{type: "spring", stiffness: 300, damping: 30}}
                />
            )}
            <span className="relative z-10 flex items-center gap-2">
        <Icon className="w-5 h-5"/>
        <span className="hidden sm:inline">{category}</span>
        <span className="relative z-10 text-xs opacity-70">({count})</span>
      </span>
        </motion.button>
    );
}

export default function Skills() {
    const [activeCategory, setActiveCategory] = useState<string>("all");

    const filteredSkills = activeCategory === "all"
        ? Object.entries(skillsData).flatMap(([category, skills]) =>
            skills.map(skill => ({...skill, category}))
        )
        : skillsData[activeCategory]?.map(skill => ({...skill, category: activeCategory})) || [];

    return (
        <section
            id="skills"
            className="relative py-24 lg:py-32 bg-[var(--bg-secondary)]"
        >
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <motion.div
                    initial={{opacity: 0, y: 20}}
                    whileInView={{opacity: 1, y: 0}}
                    viewport={{once: true}}
                    className="text-center mb-12"
                >
          <span className="text-[var(--accent-primary)] font-medium mb-2 block">
            What I work with
          </span>
                    <h2 className="text-4xl md:text-5xl font-bold text-[var(--text-primary)]">
                        Tech Stack
                    </h2>
                    <div
                        className="mt-4 w-20 h-1 bg-gradient-to-r from-[var(--accent-primary)] to-[var(--accent-secondary)] mx-auto rounded-full"/>
                </motion.div>

                <div className="flex flex-wrap justify-center gap-2 mb-12">
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

                <motion.div
                    layout
                    className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4"
                >
                    <AnimatePresence mode="popLayout">
                        {filteredSkills.map((skill, index) => (
                            <motion.div
                                key={`${skill.name}-${skill.category}`}
                                layout
                                initial={{opacity: 0, y: 20}}
                                animate={{opacity: 1, y: 0}}
                                exit={{opacity: 0, scale: 0.8}}
                                transition={{delay: index * 0.03}}
                            >
                                <SkillBadge name={skill.name} category={skill.category}/>
                            </motion.div>
                        ))}
                    </AnimatePresence>
                </motion.div>

                <motion.div
                    initial={{opacity: 0, y: 20}}
                    whileInView={{opacity: 1, y: 0}}
                    viewport={{once: true}}
                    className="mt-16 p-8 rounded-3xl bg-gradient-to-br from-[var(--accent-primary)]/10 to-[var(--accent-secondary)]/10 border border-[var(--accent-primary)]/20"
                >
                    <div className="text-center">
                        <h3 className="text-2xl font-bold text-[var(--text-primary)] mb-4">
                            Currently Learning
                        </h3>
                        <div className="flex flex-wrap justify-center gap-4">
                            {["AWS", "Kubernetes", "GraphQL"].map((tech) => (
                                <motion.span
                                    key={tech}
                                    whileHover={{scale: 1.05}}
                                    className="px-4 py-2 rounded-full bg-[var(--bg-primary)] border border-[var(--border)] text-[var(--text-primary)] font-medium"
                                >
                                    {tech}
                                </motion.span>
                            ))}
                        </div>
                    </div>
                </motion.div>
            </div>
        </section>
    );
}
