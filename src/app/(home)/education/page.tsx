"use client";

import {motion, useScroll, useTransform} from "framer-motion";
import {useRef} from "react";
import {institutions} from "@/datas/data";

export default function EducationPage() {

    const containerRef = useRef<HTMLDivElement>(null);

    const {scrollYProgress} = useScroll({
        target: containerRef,
        offset: ["start 0.2", "end 0.9"], // top-to-bottom scroll mapping
    });

    const lineHeight = useTransform(scrollYProgress, [0, 1], ["0%", "100%"]);

    return (
        <section className="section-header-style gradient-animate">
            <div className="max-w-7xl mx-auto px-4 lg:px-8 pt-8 lg:pt-12">
                {/* Section Title */}
                <motion.h2
                    className="text-4xl font-extrabold text-gray-900 text-center mb-12"
                    initial={{x: -50, opacity: 0}}
                    animate={{x: 0, opacity: 1}}
                    transition={{duration: 0.5}}
                >
                    Educations
                </motion.h2>
            </div>
            <div ref={containerRef} className="relative max-w-5xl mx-auto px-6">
                {/* Timeline vertical line */}
                <div className="absolute left-8 top-0 w-[4px] h-full bg-gray-300 rounded">
                    <motion.div
                        className="absolute left-0 top-0 w-[4px] bg-green-600 rounded"
                        style={{height: lineHeight}}
                    />
                </div>

                {/* Timeline entries */}
                {institutions.map((institute, idx) => (
                    <motion.div
                        key={idx}
                        initial={{opacity: 0, x: idx % 2 === 0 ? -50 : 50}}
                        animate={{opacity: 1, x: 0}}
                        transition={{duration: 0.6, delay: idx * 0.2}}
                        className="relative flex flex-col items-start justify-center mb-12"
                    >
                        {/* Circle marker */}
                        <div
                            className="relative z-10 w-6 h-6 rounded-full bg-green-600 border-4 border-white shadow"></div>

                        <div className="flex flex-col lg:flex-row ml-4">
                            {/* Duration */}
                            <div className="w-42 text-left lg:text-center text-sm m-4 lg:mx-4 lg:my-0 text-gray-600">
                                {institute.duration}
                            </div>

                            {/* Education details */}
                            <div className="mx-4 rounded-xl flex-1">
                                <h3 className="text-lg font-semibold text-gray-800">{institute.degree}</h3>
                                <p className="text-green-600 font-medium">{institute.school}</p>
                                <p className={`text-gray-500 text-md`}>{institute.location}</p>
                                <p className="text-gray-500 text-sm mb-3">{institute.grade}</p>

                                <ul className="list-disc list-inside text-gray-700 mt-2 mx-6 space-y-1">
                                    {institute.highlights.map((h, i) => (
                                        <motion.li
                                            key={i}
                                            initial={{opacity: 0, y: 10}}
                                            animate={{opacity: 1, y: 0}}
                                            transition={{duration: 0.4, delay: i * 0.15}}
                                        >
                                            {h}
                                        </motion.li>
                                    ))}
                                </ul>
                            </div>
                        </div>
                    </motion.div>
                ))}
            </div>
        </section>
    );
}
