"use client";

import React from "react";
import Image from "next/image";
import {motion} from "framer-motion";
import Link from "next/link";
import {Typewriter} from "react-simple-typewriter";

const Hero = () => {
    const MotionLink = motion(Link);

    return (
        <section className="w-full min-h-screen gradient-animate flex items-center">
            <div
                className="max-w-7xl mx-auto w-full flex flex-col-reverse lg:flex-row items-center justify-between px-6 py-12 md:py-24">

                {/* Left Content */}
                <motion.div
                    className="flex-1 text-center lg:text-left mt-8 lg:mt-0"
                    initial={{opacity: 0, x: -50}}
                    animate={{opacity: 1, x: 0}}
                    transition={{duration: 0.8}}
                >
                    {/* Intro */}
                    <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold text-gray-900 leading-tight">
                        Hi, I’m
                    </h1>

                    {/* Typewriter Name */}
                    <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold text-green-600 leading-tight mt-2 lg:mt-0">
                      <span className="inline-block w-[18ch]">
                        <Typewriter
                            words={["Rakesh Ghosh", "a learner", "a developer", "a problem solver", "a traveller"]}
                            loop={true}
                            typeSpeed={70}
                            deleteSpeed={50}
                            delaySpeed={2000}
                        />
                      </span>
                    </h1>


                    {/* Description */}
                    <p className="mt-4 sm:mt-6 text-base sm:text-lg md:text-xl text-gray-700 max-w-lg lg:max-w-xl mx-auto lg:mx-0">
                        A passionate <span className="font-semibold text-green-600">Software Developer&nbsp;</span>
                        with 4+ years of experience building scalable Java & Spring Boot applications.
                        I enjoy solving complex problems and creating impactful solutions with modern tech.
                    </p>

                    {/* CTA Buttons */}
                    <motion.div
                        className="mt-6 sm:mt-8 flex flex-col sm:flex-row gap-4 justify-center lg:justify-start"
                        initial={{opacity: 0, y: 20}}
                        animate={{opacity: 1, y: 0}}
                        transition={{duration: 0.8, delay: 0.3}}
                    >
                        <motion.a
                            href="/files/Rakesh_Ghosh_Resume.pdf"
                            whileHover={{scale: 1.05}}
                            whileTap={{scale: 0.95}}
                            className="px-6 sm:px-8 py-3 sm:py-4 rounded-lg bg-green-600 text-white text-base sm:text-lg font-medium hover:bg-green-700 transition-colors shadow-md"
                        >
                            📄 Download Resume
                        </motion.a>
                        <MotionLink
                            href="/contact"
                            whileHover={{scale: 1.05}}
                            whileTap={{scale: 0.95}}
                            className="px-6 sm:px-8 py-3 sm:py-4 rounded-lg border border-green-600 text-green-600 text-base sm:text-lg font-medium hover:bg-green-600 hover:text-white transition-colors shadow-md"
                        >
                            ✉️ Contact Me
                        </MotionLink>
                    </motion.div>
                </motion.div>


                {/* Right Content (Image / Illustration) */}
                <motion.div
                    className="flex-1 flex justify-center lg:justify-end mt-12 lg:mt-0" // added mt-12 for mobile
                    initial={{opacity: 0, x: 50}}
                    animate={{opacity: 1, x: 0}}
                    transition={{duration: 0.8}}
                >
                    {/* Profile Image with green border and zoom effect */}
                    <motion.div
                        className="w-56 h-56 sm:w-72 sm:h-72 md:w-80 md:h-80 lg:w-96 lg:h-96 rounded-full border-6 md:border-8 border-green-400 overflow-hidden shadow-xl"
                        whileHover={{scale: 1.1}}
                        transition={{type: "spring", stiffness: 300}}
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
        </section>);
};

export default Hero;
