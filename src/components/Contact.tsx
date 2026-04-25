"use client";

import React, { useState, FormEvent, useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { Mail, Globe, Send } from "lucide-react";
import { FaGithub, FaLinkedin, FaTwitter } from "react-icons/fa";
import { personalInfo } from "@/datas/data";
import InputField from "@/components/InputField";
import TextAreaField from "@/components/TextAreaField";
import PhoneInput from "@/components/ui/PhoneInput";

export default function Contact() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: { code: "IN", number: "" },
    subject: "",
    message: ""
  });
  const [submitted, setSubmitted] = useState(false);
  
  const containerRef = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"],
  });

  const y = useTransform(scrollYProgress, [0, 1], [100, -100]);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handlePhoneChange = (phone: { code: string; number: string }) => {
    setForm({ ...form, phone });
  };

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    const phone = personalInfo.phone.replace(/\D/g, "");
    const message = `Hi Rakesh!%0A%0A*Name:* ${form.name}%0A*Email:* ${form.email}%0A*Phone:* +${form.phone.code === "IN" ? "91" : ""}${form.phone.number}%0A*Subject:* ${form.subject}%0A%0A*Message:*%0A${form.message}`;
    const whatsappUrl = `https://wa.me/${phone}?text=${message}`;
    window.open(whatsappUrl, "_blank");
    setForm({ name: "", email: "", phone: { code: "IN", number: "" }, subject: "", message: "" });
    setSubmitted(true);
    setTimeout(() => setSubmitted(false), 5000);
  };

  return (
    <section id="contact" ref={containerRef} className="section-container bg-bg-primary relative z-10">
      <div className="max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-12 gap-16 items-start">
          
          <motion.div style={{ y }} className="lg:col-span-4 space-y-12">
            <div className="space-y-4">
              <span className="text-accent-primary font-mono text-xs font-bold tracking-[0.5em] uppercase">
                {"// Transmission Node"}
              </span>
              <h2 className="text-4xl md:text-6xl font-black text-text-primary tracking-tighter uppercase">
                Initialize <span className="gradient-text">Contact</span>
              </h2>
              <p className="text-text-secondary font-medium leading-relaxed">
                Available for high-impact architectural roles and distributed system consultancy.
              </p>
            </div>

            <div className="space-y-6">
              {[
                { icon: Mail, label: "Neural Mail", value: personalInfo.email, href: `mailto:${personalInfo.email}` },
                { icon: Globe, label: "Current Sector", value: personalInfo.address, href: "#" },
              ].map((item, i) => (
                <div key={i} className="group p-6 border-l-2 border-border/50 hover:border-accent-primary bg-bg-secondary/30 backdrop-blur-sm transition-all">
                  <div className="flex items-center gap-4">
                    <item.icon className="w-5 h-5 text-accent-primary" />
                    <div>
                      <div className="font-mono text-[10px] font-bold text-text-secondary uppercase tracking-widest">{item.label}</div>
                      <a href={item.href} className="text-sm font-bold text-text-primary group-hover:text-accent-primary transition-colors">{item.value}</a>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            <div className="flex gap-4">
              {[
                { icon: <FaGithub size={20} />, href: personalInfo.socials.github },
                { icon: <FaLinkedin size={20} />, href: personalInfo.socials.linkedin },
                { icon: <FaTwitter size={20} />, href: personalInfo.socials.twitter }
              ].map((social, i) => (
                <a key={i} href={social.href} className="w-12 h-12 border-2 border-text-primary flex items-center justify-center hover:bg-text-primary hover:text-bg-primary transition-all">
                  {social.icon}
                </a>
              ))}
            </div>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="lg:col-span-8 bg-bg-secondary/50 backdrop-blur-md border-2 border-text-primary p-8 md:p-12 relative"
          >
            <div className="absolute top-0 right-0 w-24 h-24 bg-accent-primary/5 -rotate-45 translate-x-12 -translate-y-12" />
            
            <div className="relative z-10">
              <div className="flex items-center gap-4 mb-10">
                <div className="w-3 h-3 bg-accent-primary rounded-full animate-pulse" />
                <span className="font-mono text-xs font-bold text-text-primary uppercase tracking-widest">Secure Uplink Established</span>
              </div>

              {submitted && (
                <motion.div
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="mb-8 p-6 bg-accent-primary text-white font-mono text-sm font-bold uppercase tracking-tighter"
                >
                  [SYSTEM_SUCCESS]: Protocol initialized. Opening WhatsApp gateway...
                </motion.div>
              )}

              <form onSubmit={handleSubmit} className="grid gap-8">
                <div className="grid md:grid-cols-2 gap-8">
                  <InputField
                    label="Identifier"
                    name="name"
                    placeholder="ENTER_NAME"
                    value={form.name}
                    onChange={handleChange}
                  />
                  <InputField
                    label="Neural Link"
                    name="email"
                    type="email"
                    placeholder="ENTER_EMAIL"
                    value={form.email}
                    onChange={handleChange}
                  />
                </div>
                
                <PhoneInput
                  label="COMMS_FREQUENCY"
                  name="phone"
                  value={form.phone}
                  onChange={handlePhoneChange}
                />

                <InputField
                  label="Operation Subject"
                  name="subject"
                  placeholder="CLASSIFIED"
                  value={form.subject}
                  onChange={handleChange}
                />
                
                <TextAreaField
                  label="Detailed Transmission"
                  name="message"
                  placeholder="BEGIN_LOG..."
                  rows={4}
                  value={form.message}
                  onChange={handleChange}
                />

                <motion.button
                  type="submit"
                  whileHover={{ x: 10 }}
                  className="w-full md:w-max px-12 py-5 bg-text-primary text-bg-primary font-mono text-xs font-black uppercase tracking-[0.3em] flex items-center justify-center gap-4 hover:bg-accent-primary transition-colors shadow-[8px_8px_0px_0px_var(--accent-primary)]"
                >
                  Execute Send <Send className="w-4 h-4" />
                </motion.button>
              </form>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
