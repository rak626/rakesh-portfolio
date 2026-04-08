"use client";

import React, {useState, FormEvent} from "react";
import {motion} from "framer-motion";
import {Mail, MapPin, MessageCircle, CheckCircle} from "lucide-react";
import {FaGithub, FaLinkedin, FaTwitter} from "react-icons/fa";
import {personalInfo} from "@/datas/data";
import InputField from "@/components/InputField";
import TextAreaField from "@/components/TextAreaField";
import SocialLink from "@/components/SocialLink";
import PhoneInput from "@/components/ui/PhoneInput";

export default function Contact() {
    const [form, setForm] = useState({
        name: "",
        email: "",
        phone: {code: "IN", number: ""},
        subject: "",
        message: ""
    });
    const [submitted, setSubmitted] = useState(false);

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        setForm({...form, [e.target.name]: e.target.value});
    };

    const handlePhoneChange = (phone: { code: string; number: string }) => {
        setForm({...form, phone});
    };

    const handleSubmit = (e: FormEvent) => {
        e.preventDefault();

        const phone = personalInfo.phone.replace(/\D/g, "");
        const message = `Hi Rakesh!%0A%0A*Name:* ${form.name}%0A*Email:* ${form.email}%0A*Phone:* +${form.phone.code === "IN" ? "91" : ""}${form.phone.number}%0A*Subject:* ${form.subject}%0A%0A*Message:*%0A${form.message}`;
        const whatsappUrl = `https://wa.me/${phone}?text=${message}`;

        window.open(whatsappUrl, "_blank");

        setForm({name: "", email: "", phone: {code: "IN", number: ""}, subject: "", message: ""});
        setSubmitted(true);
        setTimeout(() => setSubmitted(false), 5000);
    };

    return (
        <section id="contact" className="relative py-24 lg:py-32 bg-[var(--bg-secondary)]">
            <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
                <motion.div
                    initial={{opacity: 0, y: 20}}
                    whileInView={{opacity: 1, y: 0}}
                    viewport={{once: true}}
                    className="text-center mb-12"
                >
          <span className="text-[var(--accent-primary)] font-medium mb-2 block">
            Let&apos;s Connect
          </span>
                    <h2 className="text-4xl md:text-5xl font-bold text-[var(--text-primary)]">
                        Get in Touch
                    </h2>
                    <div
                        className="mt-4 w-20 h-1 bg-gradient-to-r from-[var(--accent-primary)] to-[var(--accent-secondary)] mx-auto rounded-full"/>
                    <p className="mt-6 text-[var(--text-secondary)] max-w-2xl mx-auto">
                        Have a project in mind or just want to say hello? I&apos;d love to hear from you.
                    </p>
                </motion.div>

                <div className="grid lg:grid-cols-5 gap-8 lg:gap-12">
                    <motion.div
                        initial={{opacity: 0, y: 30}}
                        whileInView={{opacity: 1, y: 0}}
                        viewport={{once: true}}
                        transition={{duration: 0.5}}
                        className="lg:col-span-3"
                    >
                        <div className="p-6 md:p-8 rounded-2xl bg-[var(--bg-primary)] border border-[var(--border)]">
                            <h3 className="text-xl font-bold text-[var(--text-primary)] mb-6">
                                Send me a message
                            </h3>

                            {submitted && (
                                <motion.div
                                    initial={{opacity: 0, y: -10}}
                                    animate={{opacity: 1, y: 0}}
                                    className="mb-6 p-4 rounded-xl bg-green-500/10 border border-green-500/30 flex items-center gap-3"
                                >
                                    <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0"/>
                                    <span className="text-green-500 font-medium text-sm">
                    Opening WhatsApp! Send the message from there.
                  </span>
                                </motion.div>
                            )}

                            <form onSubmit={handleSubmit} className="space-y-5">
                                <div className="grid sm:grid-cols-2 gap-5">
                                    <InputField
                                        label="Name"
                                        name="name"
                                        placeholder="John Doe"
                                        value={form.name}
                                        onChange={handleChange}
                                    />
                                    <InputField
                                        label="Email"
                                        name="email"
                                        type="email"
                                        placeholder="john@example.com"
                                        value={form.email}
                                        onChange={handleChange}
                                    />
                                </div>
                                <PhoneInput
                                    label="Phone Number"
                                    name="phone"
                                    value={form.phone}
                                    onChange={handlePhoneChange}
                                />
                                <InputField
                                    label="Subject"
                                    name="subject"
                                    placeholder="Project Inquiry"
                                    value={form.subject}
                                    onChange={handleChange}
                                />
                                <TextAreaField
                                    label="Message"
                                    name="message"
                                    placeholder="Tell me about your project..."
                                    rows={4}
                                    value={form.message}
                                    onChange={handleChange}
                                />

                                <motion.button
                                    type="submit"
                                    whileHover={{scale: 1.02}}
                                    whileTap={{scale: 0.98}}
                                    className="w-full py-4 rounded-xl bg-gradient-to-r from-[var(--accent-primary)] to-[var(--accent-secondary)] text-white font-semibold flex items-center justify-center gap-2"
                                >
                                    <MessageCircle className="w-5 h-5"/>
                                    Send via WhatsApp
                                </motion.button>
                            </form>
                        </div>
                    </motion.div>

                    <motion.div
                        initial={{opacity: 0, y: 30}}
                        whileInView={{opacity: 1, y: 0}}
                        viewport={{once: true}}
                        transition={{duration: 0.5, delay: 0.1}}
                        className="lg:col-span-2 space-y-6"
                    >
                        <div className="p-6 rounded-2xl bg-[var(--bg-primary)] border border-[var(--border)] space-y-4">
                            <h3 className="text-lg font-bold text-[var(--text-primary)]">
                                Contact Information
                            </h3>

                            <div className="flex items-start gap-4">
                                <div className="p-2.5 rounded-xl bg-[var(--accent-primary)]/10 flex-shrink-0">
                                    <Mail className="w-5 h-5 text-[var(--accent-primary)]"/>
                                </div>
                                <div>
                                    <p className="text-xs text-[var(--text-secondary)] mb-1">Email</p>
                                    <a
                                        href={`mailto:${personalInfo.email}`}
                                        className="text-sm text-[var(--text-primary)] font-medium hover:text-[var(--accent-primary)] transition-colors break-all"
                                    >
                                        {personalInfo.email}
                                    </a>
                                </div>
                            </div>

                            <div className="flex items-start gap-4">
                                <div className="p-2.5 rounded-xl bg-[var(--accent-primary)]/10 flex-shrink-0">
                                    <MapPin className="w-5 h-5 text-[var(--accent-primary)]"/>
                                </div>
                                <div>
                                    <p className="text-xs text-[var(--text-secondary)] mb-1">Location</p>
                                    <p className="text-sm text-[var(--text-primary)] font-medium">
                                        {personalInfo.address}
                                    </p>
                                </div>
                            </div>
                        </div>

                        <div className="p-6 rounded-2xl bg-[var(--bg-primary)] border border-[var(--border)]">
                            <h3 className="text-lg font-bold text-[var(--text-primary)] mb-4">
                                Connect with me
                            </h3>

                            <div className="space-y-3">
                                <SocialLink
                                    href={personalInfo.socials.linkedin}
                                    icon={FaLinkedin}
                                    label="LinkedIn"
                                />
                                <SocialLink
                                    href={personalInfo.socials.github}
                                    icon={FaGithub}
                                    label="GitHub"
                                />
                                <SocialLink
                                    href={personalInfo.socials.twitter}
                                    icon={FaTwitter}
                                    label="Twitter"
                                />
                            </div>
                        </div>

                        <div
                            className="p-6 rounded-2xl bg-gradient-to-br from-[var(--accent-primary)]/10 to-[var(--accent-secondary)]/10 border border-[var(--accent-primary)]/20">
                            <h4 className="text-base font-bold text-[var(--text-primary)] mb-2">
                                Open to Opportunities
                            </h4>
                            <p className="text-sm text-[var(--text-secondary)]">
                                I&apos;m currently open to new opportunities and collaborations. Whether you
                                have a project in mind or just want to connect, feel free to reach out!
                            </p>
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
}
