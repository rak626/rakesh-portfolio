"use client";

import {useState} from "react";
import {motion, useInView} from "framer-motion";
import {useRef} from "react";
import {ChevronDown, Building2, Calendar, Briefcase} from "lucide-react";
import {experiences} from "@/datas/data";
import {GetSkillIcon} from "@/utils/iconUtils";

function ExperienceCard({
                            experience,
                            index,
                        }: {
    experience: (typeof experiences)[0];
    index: number;
}) {
    const [expanded, setExpanded] = useState(false);
    const ref = useRef(null);
    const isInView = useInView(ref, {once: true, margin: "-100px"});

    return (
        <motion.div
            ref={ref}
            initial={{opacity: 0, x: -50}}
            animate={isInView ? {opacity: 1, x: 0} : {}}
            transition={{duration: 0.5, delay: index * 0.1}}
            className="relative"
        >
            <div className="flex gap-6">
                <div className="flex flex-col items-center">
                    <motion.div
                        initial={{scale: 0}}
                        animate={isInView ? {scale: 1} : {}}
                        transition={{delay: index * 0.1 + 0.3, type: "spring"}}
                        className="w-12 h-12 rounded-full bg-gradient-to-br from-[var(--accent-primary)] to-[var(--accent-secondary)] flex items-center justify-center z-10"
                    >
                        <Briefcase className="w-6 h-6 text-white"/>
                    </motion.div>
                    {index !== experiences.length - 1 && (
                        <div
                            className="w-[2px] flex-1 bg-gradient-to-b from-[var(--accent-primary)] to-[var(--accent-secondary)] opacity-30 my-4"/>
                    )}
                </div>

                <motion.div
                    whileHover={{scale: 1.01}}
                    className="flex-1 pb-8"
                >
                    <div
                        className="p-6 rounded-2xl bg-[var(--bg-secondary)] border border-[var(--border)] hover:border-[var(--accent-primary)]/50 transition-all">
                        <div className="flex flex-wrap items-start justify-between gap-4 mb-4">
                            <div>
                                <h3 className="text-xl font-bold text-[var(--text-primary)]">
                                    {experience.role}
                                </h3>
                                <div className="flex items-center gap-2 mt-1">
                                    <Building2 className="w-4 h-4 text-[var(--accent-primary)]"/>
                                    <span className="text-[var(--accent-primary)] font-medium">
                    {experience.company}
                  </span>
                                </div>
                            </div>
                            <div className="flex items-center gap-4 text-sm text-[var(--text-secondary)]">
                <span className="flex items-center gap-1">
                  <Calendar className="w-4 h-4"/>
                    {experience.date}
                </span>
                            </div>
                        </div>

                        <motion.div
                            initial={false}
                            animate={{height: expanded ? "auto" : 0, opacity: expanded ? 1 : 0}}
                            className="overflow-hidden"
                        >
                            <ul className="space-y-3 mb-4">
                                {experience.description.map((desc, i) => (
                                    <li
                                        key={i}
                                        className="flex items-start gap-3 text-[var(--text-secondary)]"
                                    >
                                        <span
                                            className="w-1.5 h-1.5 rounded-full bg-[var(--accent-primary)] mt-2 flex-shrink-0"/>
                                        {desc}
                                    </li>
                                ))}
                            </ul>

                            {experience.skills && experience.skills.length > 0 && (
                                <div className="flex flex-wrap gap-2 pt-4 border-t border-[var(--border)]">
                                    {experience.skills.map((skill) => {
                                        const icon = GetSkillIcon[skill.toLowerCase()];
                                        return (
                                            <span
                                                key={skill}
                                                className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-[var(--bg-tertiary)] text-sm text-[var(--text-secondary)]"
                                            >
                        {icon && (
                            <span className="w-4 h-4 text-[var(--accent-primary)]">
                            {icon}
                          </span>
                        )}
                                                {skill}
                      </span>
                                        );
                                    })}
                                </div>
                            )}
                        </motion.div>

                        <button
                            onClick={() => setExpanded(!expanded)}
                            className="flex items-center gap-2 text-[var(--accent-primary)] font-medium mt-4 hover:underline"
                        >
                            {expanded ? "Show Less" : "Show More"}
                            <motion.div
                                animate={{rotate: expanded ? 180 : 0}}
                                transition={{duration: 0.2}}
                            >
                                <ChevronDown className="w-4 h-4"/>
                            </motion.div>
                        </button>
                    </div>
                </motion.div>
            </div>
        </motion.div>
    );
}

export default function Experience() {
    return (
        <section
            id="experience"
            className="relative py-24 lg:py-32 bg-[var(--bg-secondary)]"
        >
            <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
                <motion.div
                    initial={{opacity: 0, y: 20}}
                    whileInView={{opacity: 1, y: 0}}
                    viewport={{once: true}}
                    className="text-center mb-16"
                >
          <span className="text-[var(--accent-primary)] font-medium mb-2 block">
            My professional journey
          </span>
                    <h2 className="text-4xl md:text-5xl font-bold text-[var(--text-primary)]">
                        Work Experience
                    </h2>
                    <div
                        className="mt-4 w-20 h-1 bg-gradient-to-r from-[var(--accent-primary)] to-[var(--accent-secondary)] mx-auto rounded-full"/>
                </motion.div>

                <div className="space-y-4">
                    {experiences.map((experience, index) => (
                        <ExperienceCard key={index} experience={experience} index={index}/>
                    ))}
                </div>

                <motion.div
                    initial={{opacity: 0, y: 20}}
                    whileInView={{opacity: 1, y: 0}}
                    viewport={{once: true}}
                    className="mt-16 p-8 rounded-3xl bg-gradient-to-br from-[var(--accent-primary)]/10 to-[var(--accent-secondary)]/10 border border-[var(--accent-primary)]/20 text-center"
                >
                    <h3 className="text-xl font-bold text-[var(--text-primary)] mb-2">
                        Want to know more?
                    </h3>
                    <p className="text-[var(--text-secondary)] mb-6">
                        Download my resume for detailed information about my experience and
                        achievements.
                    </p>
                    <motion.a
                        href="/files/Rakesh_Ghosh_Resume_4YoE.pdf"
                        download
                        whileHover={{scale: 1.05}}
                        whileTap={{scale: 0.95}}
                        className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-gradient-to-r from-[var(--accent-primary)] to-[var(--accent-secondary)] text-white font-semibold"
                    >
                        <Calendar className="w-5 h-5"/>
                        Download Resume
                    </motion.a>
                </motion.div>
            </div>
        </section>
    );
}
