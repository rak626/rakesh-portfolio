"use client";

import { motion, useInView, useScroll, useTransform } from "framer-motion";
import React, { useRef, useState, useEffect } from "react";
import Image from "next/image";
import { MapPin, Briefcase, GraduationCap, Heart, Code, Zap, Coffee, Target } from "lucide-react";
import { personalInfo } from "@/datas/data";

function AnimatedCounter({
  end,
  suffix = "",
  duration = 2000,
}: {
  end: number;
  suffix?: string;
  duration?: number;
}) {
  const [count, setCount] = useState(0);
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  useEffect(() => {
    if (!isInView) return;

    let startTime: number;
    const animate = (timestamp: number) => {
      if (!startTime) startTime = timestamp;
      const progress = Math.min((timestamp - startTime) / duration, 1);
      setCount(Math.floor(progress * end));
      if (progress < 1) {
        requestAnimationFrame(animate);
      }
    };
    requestAnimationFrame(animate);
  }, [isInView, end, duration]);

  return (
    <span ref={ref}>
      {count}
      {suffix}
    </span>
  );
}

function StatCard({
  icon: Icon,
  value,
  suffix,
  label,
  delay,
}: {
  icon: React.ElementType;
  value: number;
  suffix?: string;
  label: string;
  delay: number;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay, duration: 0.5 }}
      whileHover={{ y: -5 }}
      className="p-6 rounded-none border-l-4 border-accent-primary bg-bg-secondary/50 backdrop-blur-sm group"
    >
      <div className="flex flex-col gap-2">
        <div className="text-3xl font-black text-text-primary flex items-baseline gap-1">
          <AnimatedCounter end={value} suffix={suffix} />
        </div>
        <div className="flex items-center gap-2">
          <Icon className="w-4 h-4 text-accent-primary" />
          <div className="text-[10px] uppercase tracking-widest font-bold text-text-secondary">{label}</div>
        </div>
      </div>
    </motion.div>
  );
}

export default function About() {
  const containerRef = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"],
  });

  const xBg = useTransform(scrollYProgress, [0, 1], [-100, 100]);
  
  const stats = [
    { icon: Briefcase, value: personalInfo.totalYoE, suffix: "+", label: "Years Exp", delay: 0 },
    { icon: Code, value: 5, suffix: "+", label: "Major Projects", delay: 0.1 },
    { icon: Zap, value: 10, suffix: "+", label: "Core Techs", delay: 0.2 },
    { icon: Target, value: 3, label: "Scale Success", delay: 0.3 },
  ];

  return (
    <section
      id="about"
      ref={containerRef}
      className="section-container overflow-hidden bg-bg-primary relative z-10"
    >
      {/* Background Parallax Text */}
      <motion.div
        style={{ x: xBg }}
        className="absolute top-20 left-0 text-[15rem] font-black text-text-primary/[0.03] whitespace-nowrap pointer-events-none select-none uppercase"
      >
        Core Architect // Backend specialist
      </motion.div>

      <div className="max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-12 gap-16 items-start">
          
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="lg:col-span-5 relative"
          >
            <div className="relative group">
              <div className="absolute -inset-4 bg-accent-primary/20 blur-2xl group-hover:bg-accent-primary/30 transition-colors rounded-full" />
              <div className="relative aspect-[4/5] overflow-hidden border-2 border-text-primary shadow-[20px_20px_0px_0px_var(--accent-primary)] group-hover:shadow-none transition-all duration-500">
                <Image
                  src="/photos/image.jpg"
                  alt="Rakesh Ghosh"
                  fill
                  className="object-cover grayscale hover:grayscale-0 transition-all duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-text-primary/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex flex-col justify-end p-8 text-bg-primary">
                  <div className="font-mono text-xs mb-2 tracking-tighter">DATA_STREAM_v2.0</div>
                  <div className="font-bold uppercase tracking-wider">System Visualized</div>
                </div>
              </div>

              {/* Decorative skewed tags */}
              <div className="absolute -bottom-6 -left-6 bg-accent-secondary text-white px-4 py-2 font-mono text-xs font-bold uppercase tracking-tighter shadow-xl -skew-x-12">
                {"<Origin: "}{personalInfo.address}{" />"}
              </div>
            </div>
          </motion.div>

          <div className="lg:col-span-7 space-y-12">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="space-y-6"
            >
              <div className="space-y-2">
                <span className="text-accent-primary font-mono text-xs font-bold tracking-[0.5em] uppercase">
                  {"// Mission Statement"}
                </span>
                <h2 className="text-4xl md:text-6xl font-black text-text-primary tracking-tighter uppercase">
                  Architecting <span className="gradient-text">Resilience</span>
                </h2>
              </div>

              <div className="space-y-4 text-lg text-text-secondary font-medium leading-relaxed">
                <p>
                  I am a Software Engineer specialized in high-throughput infrastructures. 
                  Currently at <span className="text-text-primary font-bold underline decoration-accent-primary underline-offset-4">RS Software</span>, 
                  I focus on the intersection of payment processing and distributed systems.
                </p>
                <p>
                  My philosophy centers on technical integrity and performance. I don&apos;t just write code; 
                  I build scalable foundations that power modern digital commerce, processing 
                  thousands of transactions per second with sub-millisecond latency.
                </p>
              </div>

              <div className="grid sm:grid-cols-2 gap-4">
                {[
                  { icon: GraduationCap, text: "B.Tech in Computer Science" },
                  { icon: MapPin, text: "Remote // Worldwide" },
                  { icon: Coffee, text: "Open Source Contributor" },
                  { icon: Heart, text: "Tech Mentor & Speaker" }
                ].map((item, i) => (
                  <div key={i} className="flex items-center gap-3 p-4 bg-bg-secondary border border-border/50 font-mono text-sm group hover:border-accent-primary transition-colors">
                    <item.icon className="w-5 h-5 text-accent-primary group-hover:scale-110 transition-transform" />
                    <span className="text-text-secondary font-bold group-hover:text-text-primary">{item.text}</span>
                  </div>
                ))}
              </div>
            </motion.div>

            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
              {stats.map((stat) => (
                <StatCard key={stat.label} {...stat} />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
