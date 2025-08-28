"use client";

import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import Link from "next/link";

const Hero = () => {
    const MotionLink = motion(Link);
    return (
        <section className="w-full h-screen gradient-animate">
            <div className="max-w-7xl mx-auto h-full flex flex-col md:flex-row items-center justify-center px-6">

                {/* Left Content */}
                <motion.div
                    className="flex-1 text-center md:text-left"
                    initial={{ opacity: 0, x: -50 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.8 }}
                >
                    <h1 className="text-5xl md:text-6xl font-extrabold text-gray-900 leading-tight">
                        Hi, I’m <span className="text-green-600">Rakesh Ghosh</span>
                    </h1>
                    <p className="mt-6 text-xl text-gray-700 max-w-xl mx-auto md:mx-0">
                        A passionate <span className="font-semibold text-green-600">Software Developer</span>
                        with 4+ years of experience building scalable Java & Spring Boot applications.
                        I enjoy solving complex problems and creating impactful solutions with modern tech.
                    </p>

                    {/* CTA Buttons */}
                    <motion.div
                        className="mt-8 flex flex-col sm:flex-row gap-4 justify-center md:justify-start"
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 0.3 }}
                    >
                        <motion.a
                            href="/files/Rakesh_Ghosh_Resume.pdf"
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                            className="px-8 py-4 rounded-lg bg-green-600 text-white text-lg font-medium hover:bg-green-700 transition-colors shadow-md"
                        >
                            📄 Download Resume
                        </motion.a>
                        <MotionLink
                            href="/contact"
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                            className="px-8 py-4 rounded-lg border border-green-600 text-green-600 text-lg font-medium hover:bg-green-600 hover:text-white transition-colors shadow-md"
                        >
                            ✉️ Contact Me
                        </MotionLink>
                    </motion.div>
                </motion.div>

                {/* Right Content (Image / Illustration) */}
                <motion.div
                    className="flex-1 mt-12 md:mt-0 flex justify-center"
                    initial={{ opacity: 0, x: 50 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.8 }}
                >
                    {/* Profile Image with green border and zoom effect */}
                    <motion.div
                        className="w-72 h-72 md:w-96 md:h-96 rounded-full border-8 border-green-400 overflow-hidden shadow-xl"
                        whileHover={{ scale: 1.1 }}
                        transition={{ type: "spring", stiffness: 300 }}
                    >
                        <Image
                            src="/photos/image.jpg"
                            alt="Profile"
                            width={384}
                            height={384}
                            className="w-full h-full object-cover"
                            priority
                        />
                    </motion.div>
                </motion.div>

            </div>
        </section>
    );
};

export default Hero;
