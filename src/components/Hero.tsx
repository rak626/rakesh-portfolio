"use client";

import { useRef } from "react";
import Image from "next/image";
import { motion, useScroll, useTransform, useSpring, useMotionValue } from "framer-motion";
import { Typewriter } from "react-simple-typewriter";
import { ArrowDown, Download, Mail } from "lucide-react";
import { FaGithub, FaLinkedin, FaTwitter } from "react-icons/fa";
import { resumeData, personalInfo } from "@/datas/data";

function MagneticButton({
  children,
  className = "",
}: {
  children: React.ReactNode;
  className?: string;
}) {
  const ref = useRef<HTMLButtonElement>(null);
  const x = useMotionValue(0);
  const y = useMotionValue(0);

  const springConfig = { stiffness: 150, damping: 15 };
  const mouseX = useSpring(x, springConfig);
  const mouseY = useSpring(y, springConfig);

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!ref.current) return;
    const rect = ref.current.getBoundingClientRect();
    const centerX = rect.left + rect.width / 2;
    const centerY = rect.top + rect.height / 2;
    x.set(e.clientX - centerX);
    y.set(e.clientY - centerY);
  };

  const handleMouseLeave = () => {
    x.set(0);
    y.set(0);
  };

  return (
    <motion.button
      ref={ref}
      style={{ x: mouseX, y: mouseY }}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      className={className}
    >
      {children}
    </motion.button>
  );
}

export default function Hero() {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollY } = useScroll();
  
  const yText = useTransform(scrollY, [0, 500], [0, 200]);
  const opacityText = useTransform(scrollY, [0, 300], [1, 0]);
  const scaleImage = useTransform(scrollY, [0, 500], [1, 1.2]);
  const rotateImage = useTransform(scrollY, [0, 500], [0, 10]);

  const scrollToAbout = () => {
    document.getElementById("about")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section
      id="home"
      ref={containerRef}
      className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20 z-10 bg-bg-primary"
    >
      {/* Hero Parallax Elements */}
      <motion.div 
        style={{ y: useTransform(scrollY, [0, 500], [0, -100]) }}
        className="absolute top-1/4 left-1/10 w-2 h-2 bg-accent-primary rounded-full glow-sm"
      />
      <motion.div 
        style={{ y: useTransform(scrollY, [0, 500], [0, -200]) }}
        className="absolute top-1/3 right-1/10 w-3 h-3 bg-accent-secondary rounded-full glow-sm"
      />
      <motion.div 
        style={{ y: useTransform(scrollY, [0, 500], [0, 150]) }}
        className="absolute bottom-1/4 left-1/4 w-1.5 h-1.5 bg-accent-primary rounded-full glow-sm"
      />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-24">
          <motion.div
            style={{ y: yText, opacity: opacityText }}
            className="flex-1 text-center lg:text-left"
          >
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              className="mb-6 inline-block"
            >
              <span className="relative inline-flex items-center gap-2 px-4 py-2 rounded-full bg-accent-primary/10 border border-accent-primary/20 text-accent-primary text-xs font-bold uppercase tracking-widest backdrop-blur-md">
                <span className="relative flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-accent-primary opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-accent-primary"></span>
                </span>
                System Architect // 2026
              </span>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.8 }}
              className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-black text-text-primary leading-tight tracking-tighter"
            >
              RAKESH<br />
              <span className="gradient-text">GHOSH</span>
            </motion.h1>

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.4 }}
              className="mt-4 text-xl sm:text-2xl font-mono text-accent-secondary"
            >
              &gt; <Typewriter
                words={[
                  "Building Digital Fortresses",
                  "Architecting Scalable Systems",
                  "Backend Specialist",
                  "Performance Optimizer",
                ]}
                loop={true}
                cursor
                cursorStyle="_"
                typeSpeed={70}
                deleteSpeed={50}
                delaySpeed={2000}
              />
            </motion.div>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5 }}
              className="mt-8 text-lg text-text-secondary max-w-xl mx-auto lg:mx-0 leading-relaxed font-medium"
            >
              Engineered high-throughput payment infrastructures and distributed microservices. 
              Translating complex business logic into elegant, high-performance code.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6 }}
              className="mt-10 flex flex-wrap gap-4 justify-center lg:justify-start"
            >
              <MagneticButton
                className="px-8 py-4 rounded-none bg-accent-primary text-white font-bold uppercase tracking-wider shadow-[8px_8px_0px_0px_rgba(99,102,241,0.3)] hover:shadow-none transition-all flex items-center justify-center gap-2 border-2 border-accent-primary"
              >
                <Download className="w-5 h-5" />
                <a href={`/files/${resumeData.name}`} download>
                  Download Dossier
                </a>
              </MagneticButton>

              <MagneticButton
                className="px-8 py-4 rounded-none border-2 border-text-primary text-text-primary font-bold uppercase tracking-wider hover:bg-text-primary hover:text-bg-primary transition-all flex items-center justify-center gap-2"
              >
                <Mail className="w-5 h-5" />
                <a href={`mailto:${personalInfo.email}`}>Initialize Contact</a>
              </MagneticButton>
            </motion.div>

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.8 }}
              className="mt-12 flex items-center gap-8 justify-center lg:justify-start"
            >
              {[
                { icon: <FaGithub className="w-6 h-6" />, href: personalInfo.socials.github },
                { icon: <FaLinkedin className="w-6 h-6" />, href: personalInfo.socials.linkedin },
                { icon: <FaTwitter className="w-6 h-6" />, href: personalInfo.socials.twitter }
              ].map((social, i) => (
                <motion.a
                  key={i}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ y: -5, color: "var(--accent-primary)" }}
                  className="text-text-secondary transition-colors"
                >
                  {social.icon}
                </motion.a>
              ))}
            </motion.div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.8, rotate: -5 }}
            animate={{ opacity: 1, scale: 1, rotate: 0 }}
            transition={{ duration: 1, delay: 0.3 }}
            className="relative flex-shrink-0"
          >
            <motion.div
              style={{ scale: scaleImage, rotate: rotateImage }}
              className="relative"
            >
              <div className="absolute -inset-4 border-2 border-accent-primary/30 rounded-full animate-[spin_20s_linear_infinite] border-dashed" />
              <div className="absolute -inset-8 border border-accent-secondary/20 rounded-full animate-[spin_30s_linear_infinite_reverse] border-dashed" />
              
              <div className="relative w-64 h-64 sm:w-80 sm:h-80 lg:w-96 lg:h-96 rounded-full p-4 bg-gradient-to-br from-accent-primary to-accent-secondary shadow-2xl overflow-hidden group">
                <div className="relative w-full h-full rounded-full overflow-hidden border-4 border-bg-primary/20">
                  <Image
                    src="/photos/image.jpg"
                    alt="Rakesh Ghosh"
                    fill
                    className="object-cover grayscale hover:grayscale-0 transition-all duration-700 ease-in-out"
                    priority
                  />
                  <div className="absolute inset-0 bg-accent-primary/10 mix-blend-overlay group-hover:opacity-0 transition-opacity" />
                </div>
              </div>

              <motion.div
                className="absolute -bottom-6 -right-6 px-6 py-3 bg-text-primary text-bg-primary font-mono text-sm font-bold shadow-2xl skew-x-[-12deg]"
                animate={{ y: [0, -10, 0] }}
                transition={{ duration: 4, repeat: Infinity }}
              >
                LEVEL: SDE II // 4+ YOE
              </motion.div>
            </motion.div>
          </motion.div>
        </div>

        <motion.button
          onClick={scrollToAbout}
          className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-text-secondary hover:text-accent-primary transition-colors group"
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
        >
          <span className="text-[10px] font-bold uppercase tracking-[0.3em]">Protocol: Scroll</span>
          <ArrowDown className="w-6 h-6 group-hover:scale-125 transition-transform" />
        </motion.button>
      </div>
    </section>
  );
}
