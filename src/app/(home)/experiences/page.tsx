"use client";
import {motion, useScroll, useTransform} from "framer-motion";
import {useRef} from "react";
import SkillIcon from "@/components/SkillIcon";
import {GetSkillIcon} from "@/utils/iconUtils";
import {experiences} from "@/datas/data"

export default function ExperiencePage() {
    const containerRef = useRef<HTMLDivElement>(null);
    const {scrollYProgress} = useScroll({
        target: containerRef, offset: ["start 0.2", "end 0.9"], // controls when animation starts/ends
    });

    const lineHeight = useTransform(scrollYProgress, [0, 1], ["0%", "100%"]);

    return (
        <section className="section-header-style gradient-animate">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
                <motion.div
                    className="text-4xl font-extrabold text-gray-900 text-center mb-12"
                    initial={{x: -50, opacity: 0}}
                    animate={{x: 0, opacity: 1}}
                    transition={{duration: 0.5}}
                >
                    Experiences
                </motion.div>
            </div>

            <div ref={containerRef} className="relative w-full lg:max-w-8/12 mx-auto px-6">
                {/* Timeline vertical line */}
                <div className="absolute left-8 top-0 w-[4px] h-full bg-gray-300 rounded">
                    <motion.div
                        className="absolute left-0 top-0 w-[4px] bg-green-600 rounded"
                        style={{height: lineHeight}}
                    />
                </div>

                {experiences.map((exp, idx) => (
                    <motion.div
                        key={idx}
                        initial={{opacity: 0, x: idx % 2 === 0 ? -50 : 50}}
                        animate={{opacity: 1, x: 0}}         // <-- REPLACED
                        transition={{duration: 0.6, delay: idx * 0.1}}  // optional stagger
                        className="relative flex flex-col items-start justify-center mb-12"
                    >
                        {/* Circle */}
                        <div
                            className="relative z-10 w-6 h-6 rounded-full bg-green-600 border-4 border-white shadow"
                        />

                        <div className="flex flex-col lg:flex-row ml-4">
                            {/* Date */}
                            <div className="w-42 text-left text-sm m-4 lg:mx-4 lg:my-0 text-gray-600">
                                {exp.date}
                            </div>

                            {/* Description */}
                            <div className="mx-4 rounded-xl flex-1">
                                <h3 className="text-lg font-semibold text-gray-800">{exp.role}</h3>
                                <p className="text-green-600 font-medium">{exp.company}</p>
                                <ul className="list-disc list-inside text-gray-700 mt-3 mx-10 space-y-1">
                                    {exp.description.map((d, i) => (<li key={i}>{d}</li>))}
                                </ul>
                                {exp.skills && exp.skills.length > 0 ?
                                    <div className="flex flex-col space-y-2">
                                        <div className={`flex items-center`}>
                                            <h4 className="text-md font-semibold text-gray-800 mt-4 mb-2 ">Technologies
                                                Used:</h4>
                                        </div>
                                        <div className={`flex items-center space-x-6 flex-wrap`}>
                                            {exp.skills.map((skill, i) => (
                                                <div key={i} className={`flex flex-col items-center`}>
                                                    {GetSkillIcon[skill.toLowerCase()] && <>
                                                        <SkillIcon title={skill}
                                                                   classProps={`transition-transform duration-200 transform hover:scale-120`}>
                                                            {GetSkillIcon[skill.toLowerCase()]}
                                                        </SkillIcon>
                                                    </>}
                                                </div>

                                            ))}
                                        </div>
                                    </div> : null}
                            </div>
                        </div>
                    </motion.div>))}
            </div>
        </section>
    );
}
