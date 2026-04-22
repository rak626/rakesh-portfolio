"use client";

import React, {useState, FormEvent} from "react";
import {motion, AnimatePresence} from "framer-motion";
import {Mail, MapPin, Send, CheckCircle, Loader2} from "lucide-react";
import {FaGithub, FaLinkedin, FaTwitter} from "react-icons/fa";
import {personalInfo} from "@/datas/data";
import {useConfetti} from "@/components/ui/Confetti";

interface TerminalInputProps {
    name: string;
    placeholder: string;
    value: string;
    onChange: (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => void;
    type?: string;
    required?: boolean;
}

function TerminalInput({
                          name,
                          placeholder,
                          value,
                          onChange,
                          type = "text",
                          required,
                      }: TerminalInputProps) {
    return (
        <div className="space-y-2">
            <label className="text-xs text-[var(--text-secondary)]">
                <span className="text-[var(--accent-secondary)]">--{name}</span>
                {required && <span className="text-[var(--accent-primary)]">*</span>}
            </label>
            <input
                type={type}
                name={name}
                placeholder={placeholder}
                value={value}
                onChange={onChange}
                required={required}
                className="w-full px-4 py-3 bg-[var(--bg-secondary)] border border-[var(--border)] rounded text-[var(--text-primary)] placeholder:text-[var(--text-secondary)] focus:outline-none focus:border-[var(--accent-primary)] transition-colors"
            />
        </div>
    );
}

function TerminalTextarea({
                            name,
                            placeholder,
                            value,
                            onChange,
                            rows = 4,
                        }: {
    name: string;
    placeholder: string;
    value: string;
    onChange: (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => void;
    rows?: number;
}) {
    return (
        <div className="space-y-2">
            <label className="text-xs text-[var(--text-secondary)]">
                <span className="text-[var(--accent-secondary)]">--{name}</span>
            </label>
            <textarea
                name={name}
                placeholder={placeholder}
                value={value}
                onChange={onChange}
                rows={rows}
                className="w-full px-4 py-3 bg-[var(--bg-secondary)] border border-[var(--border)] rounded text-[var(--text-primary)] placeholder:text-[var(--text-secondary)] focus:outline-none focus:border-[var(--accent-primary)] transition-colors resize-none"
            />
        </div>
    );
}

export default function Contact() {
    const [form, setForm] = useState({
        name: "",
        email: "",
        subject: "",
        message: ""
    });
    const [submitted, setSubmitted] = useState(false);
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [logs, setLogs] = useState<string[]>([]);
    const celebrate = useConfetti();

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        setForm({...form, [e.target.name]: e.target.value});
    };

    const handleSubmit = async (e: FormEvent) => {
        e.preventDefault();
        setIsSubmitting(true);

        setLogs([]);
        const logMessages = [
            "[INFO] Preparing request...",
            "[INFO] Validating input fields...",
            "[INFO] Encoding message...",
            "[INFO] Opening WhatsApp...",
        ];

        for (let i = 0; i < logMessages.length; i++) {
            await new Promise(resolve => setTimeout(resolve, 400));
            setLogs(prev => [...prev, logMessages[i]]);
        }

        const phone = personalInfo.phone.replace(/\D/g, "");
        const message = `Hi Rakesh!%0A%0A*Name:* ${form.name}%0A*Email:* ${form.email}%0A*Subject:* ${form.subject}%0A%0A*Message:*%0A${form.message}`;
        const whatsappUrl = `https://wa.me/${phone}?text=${message}`;

        await new Promise(resolve => setTimeout(resolve, 500));
        setLogs(prev => [...prev, "[SUCCESS] Redirecting to WhatsApp..."]);

        setTimeout(() => {
            window.open(whatsappUrl, "_blank");
            setSubmitted(true);
            setIsSubmitting(false);
            celebrate();

            setTimeout(() => {
                setLogs([]);
                setForm({name: "", email: "", subject: "", message: ""});
                setSubmitted(false);
            }, 5000);
        }, 500);
    };

    return (
        <section id="contact" className="relative py-24 lg:py-32 bg-[var(--bg-primary)]">
            <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
                <motion.div
                    initial={{opacity: 0, y: 20}}
                    whileInView={{opacity: 1, y: 0}}
                    viewport={{once: true}}
                    className="mb-12"
                >
                    <div className="flex items-center gap-2 mb-4">
                        <span className="text-[var(--accent-primary)]">$</span>
                        <span className="text-[var(--text-secondary)]">curl -X POST contact</span>
                    </div>
                    <h2 className="text-3xl md:text-4xl font-bold text-[var(--text-primary)] neon-text">
                        Get in Touch
                    </h2>
                    <p className="mt-2 text-sm text-[var(--text-secondary)]">
                        <span className="text-[var(--accent-secondary)]">#</span> Send me a message via WhatsApp
                    </p>
                </motion.div>

                <div className="grid lg:grid-cols-5 gap-8">
                    <motion.div
                        initial={{opacity: 0, y: 30}}
                        whileInView={{opacity: 1, y: 0}}
                        viewport={{once: true}}
                        transition={{duration: 0.5}}
                        className="lg:col-span-3"
                    >
                        <div className="p-6 bg-[var(--bg-secondary)] border border-[var(--border)] rounded">
                            <div className="text-xs text-[var(--text-secondary)] mb-4">
                                <span className="text-[var(--accent-primary)]">$</span> POST /api/contact
                            </div>

                            <AnimatePresence>
                                {logs.length > 0 && (
                                    <motion.div
                                        initial={{opacity: 0, height: 0}}
                                        animate={{opacity: 1, height: "auto"}}
                                        exit={{opacity: 0, height: 0}}
                                        className="mb-4 p-3 bg-[var(--bg-primary)] border border-[var(--border)] rounded font-mono"
                                    >
                                        {logs.map((log, i) => (
                                            <motion.div
                                                key={i}
                                                initial={{opacity: 0}}
                                                animate={{opacity: 1}}
                                                className={`text-xs ${
                                                    log.includes("[SUCCESS]")
                                                        ? "text-[var(--accent-primary)]"
                                                        : "text-[var(--text-secondary)]"
                                                }`}
                                            >
                                                {log}
                                                {i === logs.length - 1 && isSubmitting && (
                                                    <motion.span
                                                        animate={{opacity: [1, 0]}}
                                                        transition={{duration: 0.5, repeat: Infinity}}
                                                        className="ml-1"
                                                    >
                                                        _
                                                    </motion.span>
                                                )}
                                            </motion.div>
                                        ))}
                                    </motion.div>
                                )}
                            </AnimatePresence>

                            <AnimatePresence>
                                {submitted && (
                                    <motion.div
                                        initial={{opacity: 0, y: -10}}
                                        animate={{opacity: 1, y: 0}}
                                        exit={{opacity: 0, y: -10}}
                                        className="mb-4 p-3 bg-[var(--accent-primary)]/10 border border-[var(--accent-primary)]/30 rounded flex items-center gap-2"
                                    >
                                        <CheckCircle className="w-4 h-4 text-[var(--accent-primary)]" />
                                        <span className="text-sm text-[var(--accent-primary)]">
                                            Message sent! Check WhatsApp to complete.
                                        </span>
                                    </motion.div>
                                )}
                            </AnimatePresence>

                            <form onSubmit={handleSubmit} className="space-y-4">
                                <TerminalInput
                                    name="name"
                                    placeholder="John Doe"
                                    value={form.name}
                                    onChange={handleChange}
                                    required
                                />
                                <TerminalInput
                                    name="email"
                                    type="email"
                                    placeholder="john@example.com"
                                    value={form.email}
                                    onChange={handleChange}
                                    required
                                />
                                <TerminalInput
                                    name="subject"
                                    placeholder="Project Inquiry"
                                    value={form.subject}
                                    onChange={handleChange}
                                    required
                                />
                                <TerminalTextarea
                                    name="message"
                                    placeholder="Tell me about your project..."
                                    value={form.message}
                                    onChange={handleChange}
                                />

                                <motion.button
                                    type="submit"
                                    disabled={isSubmitting}
                                    whileHover={{scale: 1.02}}
                                    whileTap={{scale: 0.98}}
                                    className="w-full py-3 bg-[var(--accent-primary)] text-[var(--bg-primary)] font-medium rounded flex items-center justify-center gap-2 disabled:opacity-50"
                                >
                                    {isSubmitting ? (
                                        <>
                                            <Loader2 className="w-4 h-4 animate-spin" />
                                            Sending...
                                        </>
                                    ) : (
                                        <>
                                            <Send className="w-4 h-4" />
                                            curl -X POST
                                        </>
                                    )}
                                </motion.button>
                            </form>
                        </div>
                    </motion.div>

                    <motion.div
                        initial={{opacity: 0, y: 30}}
                        whileInView={{opacity: 1, y: 0}}
                        viewport={{once: true}}
                        transition={{duration: 0.5, delay: 0.1}}
                        className="lg:col-span-2 space-y-4"
                    >
                        <div className="p-4 bg-[var(--bg-secondary)] border border-[var(--border)] rounded">
                            <div className="text-xs text-[var(--text-secondary)] mb-3">
                                <span className="text-[var(--accent-secondary)]">#</span> info.json
                            </div>

                            <div className="space-y-3 text-sm">
                                <div className="flex items-center gap-2">
                                    <Mail className="w-4 h-4 text-[var(--accent-primary)]" />
                                    <a
                                        href={`mailto:${personalInfo.email}`}
                                        className="text-[var(--text-secondary)] hover:text-[var(--accent-primary)] transition-colors"
                                    >
                                        {personalInfo.email}
                                    </a>
                                </div>

                                <div className="flex items-center gap-2">
                                    <MapPin className="w-4 h-4 text-[var(--accent-primary)]" />
                                    <span className="text-[var(--text-secondary)]">
                                        {personalInfo.address}
                                    </span>
                                </div>
                            </div>
                        </div>

                        <div className="p-4 bg-[var(--bg-secondary)] border border-[var(--border)] rounded">
                            <div className="text-xs text-[var(--text-secondary)] mb-3">
                                <span className="text-[var(--accent-secondary)]">#</span> socials
                            </div>

                            <div className="space-y-2">
                                {[
                                    {href: personalInfo.socials.linkedin, icon: FaLinkedin, label: "LinkedIn"},
                                    {href: personalInfo.socials.github, icon: FaGithub, label: "GitHub"},
                                    {href: personalInfo.socials.twitter, icon: FaTwitter, label: "Twitter"},
                                ].map((social) => (
                                    <a
                                        key={social.label}
                                        href={social.href}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="flex items-center gap-2 px-3 py-2 bg-[var(--bg-tertiary)] text-sm text-[var(--text-secondary)] hover:text-[var(--accent-primary)] rounded transition-colors"
                                    >
                                        <social.icon className="w-4 h-4" />
                                        {social.label}
                                    </a>
                                ))}
                            </div>
                        </div>

                        <div className="p-4 bg-[var(--accent-primary)]/10 border border-[var(--accent-primary)]/30 rounded">
                            <div className="text-xs text-[var(--accent-primary)] mb-2">
                                <span className="text-[var(--accent-secondary)]">$</span> status
                            </div>
                            <p className="text-sm text-[var(--text-secondary)]">
                                <span className="text-[var(--neon-green)]">●</span> Open to opportunities
                            </p>
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
}