"use client";

import {useState} from "react";
import {motion} from "framer-motion";
import {GetSkillIcon} from "@/utils/iconUtils";
import SkillIcon from "@/components/SkillIcon";
import {personalInfo} from "@/datas/data";

export default function ContactPage() {
    const [form, setForm] = useState({name: "", email: "", message: ""});
    const [submitted, setSubmitted] = useState(false);

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        setForm({...form, [e.target.name]: e.target.value});
    };

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        // TODO: Connect with API, email service, or serverless function
        console.log("Form submitted:", form);
        setSubmitted(true);
        setForm({name: "", email: "", message: ""});
    };

    const inputBoxClasses = "border-b-2 border-green-400 rounded px-4 py-2 focus:outline-none ";

    return (
        <main className="min-h-screen py-20 px-6 gradient-animate">
            <div className="max-w-7xl mx-auto">
                <motion.h2
                    className="text-4xl font-bold text-center mb-4"
                    initial={{opacity: 0, y: -20}}
                    animate={{opacity: 1, y: 0}}
                    transition={{duration: 0.6}}
                >
                    Get in Touch
                </motion.h2>


                <div className="w-full flex flex-col lg:flex-row lg:justify-around lg: items-center">
                    <div className="flex-1">
                        {submitted && (
                            <motion.div
                                className="bg-green-100 text-green-800 p-4 rounded mb-6 text-center"
                                initial={{opacity: 0}}
                                animate={{opacity: 1}}
                                transition={{duration: 0.5}}
                            >
                                Thank you! Your message has been sent.
                            </motion.div>
                        )}

                        <motion.form
                            onSubmit={handleSubmit}
                            className="  rounded-xl p-8 space-y-6"
                            initial={{opacity: 0, y: 20}}
                            animate={{opacity: 1, y: 0}}
                            transition={{duration: 0.6}}
                        >
                            <div className="flex flex-col">
                                <label htmlFor="name" className="mb-2 font-medium text-gray-700">
                                    Name
                                </label>
                                <input
                                    type="text"
                                    name="name"
                                    id="name"
                                    value={form.name}
                                    onChange={handleChange}
                                    required
                                    className={inputBoxClasses}
                                    placeholder="Your Name"
                                />
                            </div>

                            <div className="flex flex-col">
                                <label htmlFor="email" className="mb-2 font-medium text-gray-700">
                                    Email
                                </label>
                                <input
                                    type="email"
                                    name="email"
                                    id="email"
                                    value={form.email}
                                    onChange={handleChange}
                                    required
                                    className={inputBoxClasses}
                                    placeholder="your@email.com"
                                />
                            </div>

                            <div className="flex flex-col">
                                <label htmlFor="message" className="mb-2 font-medium text-gray-700">
                                    Message
                                </label>
                                <textarea
                                    name="message"
                                    id="message"
                                    value={form.message}
                                    onChange={handleChange}
                                    required
                                    rows={5}
                                    className={inputBoxClasses + " resize-none"}
                                    placeholder="Write your message..."
                                ></textarea>
                            </div>

                            <button
                                type="submit"
                                className="w-full bg-green-600 text-white font-semibold py-3 rounded-lg hover:bg-green-700 transition-colors"
                            >
                                Send Message
                            </button>
                        </motion.form>
                    </div>
                    <div className="w-0.5 lg:h-96 bg-gray-400 mx-10"></div>
                    <div className="flex-1 text-center flex flex-col justify-center gap-y-8">
                        <div>
                            <h3 className="text-2xl font-bold mb-4">Connect with me</h3>
                            <div className="flex justify-center space-x-6">
                                {GetSkillIcon["linkedin"] && (
                                    <a
                                        href={personalInfo.socials.linkedin}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="text-gray-700 hover:text-gray-900 transition-colors"
                                    >
                                        <SkillIcon>{GetSkillIcon["linkedin"]}</SkillIcon>
                                    </a>
                                )}
                                {GetSkillIcon["github"] && (
                                    <a
                                        href={personalInfo.socials.github}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="text-gray-700 hover:text-gray-900 transition-colors"
                                    >
                                        <SkillIcon>{GetSkillIcon["github"]}</SkillIcon>
                                    </a>
                                )}
                                {GetSkillIcon["twitter"] && (
                                    <a
                                        href={personalInfo.socials.twitter}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="text-gray-700 hover:text-gray-900 transition-colors"
                                    >
                                        <SkillIcon>{GetSkillIcon["linkedin"]}</SkillIcon>
                                    </a>
                                )}
                                {GetSkillIcon["facebook"] && (
                                    <a
                                        href={personalInfo.socials.facebook}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="text-gray-700 hover:text-gray-900 transition-colors"
                                    >
                                        <SkillIcon>{GetSkillIcon["facebook"]}</SkillIcon>
                                    </a>
                                )}
                                {GetSkillIcon["instagram"] && (
                                    <a
                                        href={personalInfo.socials.instagram}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="text-gray-700 hover:text-gray-900 transition-colors"
                                    >
                                        <SkillIcon>{GetSkillIcon["instagram"]}</SkillIcon>
                                    </a>
                                )}
                            </div>
                        </div>
                        <div className="flex items-center justify-center gap-4">
                            <hr className="h-0.5 w-1/6 bg-gray-500"/>
                        </div>
                        <div>
                            {/* Email Contact */}
                            <motion.div
                                className="text-center mb-12 text-gray-700 text-lg"
                                initial={{opacity: 0}}
                                animate={{opacity: 1}}
                                transition={{duration: 0.6, delay: 0.2}}
                            >
                                <div className={`m-2`}>
                                    Or
                                </div>
                                <div>
                                    email me directly at{" "}
                                </div>
                                <div className={`mt-2`}>
                                    <a
                                        href={`mailto:${personalInfo.email}`}
                                        className="text-green-600 hover:underline"
                                    >
                                        {personalInfo.email}
                                    </a>
                                </div>
                            </motion.div>
                        </div>
                    </div>
                </div>
            </div>
        </main>
    );
}
