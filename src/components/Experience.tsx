"use client";

import { motion, useInView, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import { Briefcase } from "lucide-react";
import { experiences } from "@/datas/data";

function ExperienceCard({
  experience,
  index,
}: {
  experience: (typeof experiences)[0];
  index: number;
}) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, x: -50 }}
      animate={isInView ? { opacity: 1, x: 0 } : {}}
      transition={{ duration: 0.8, delay: index * 0.1 }}
      className="relative pl-12 md:pl-0"
    >
      <div className="md:grid md:grid-cols-12 md:gap-12">
        <div className="hidden md:flex md:col-span-3 justify-end pt-8">
          <div className="text-right">
            <span className="font-mono text-xs font-bold text-accent-primary block uppercase tracking-[0.2em]">
              {experience.date}
            </span>
            <span className="font-mono text-[10px] text-text-secondary uppercase">
              {"// Timeline_Node_"}{index}
            </span>
          </div>
        </div>

        <div className="absolute left-4 md:static md:col-span-1 flex flex-col items-center">
          <motion.div
            initial={{ scale: 0 }}
            animate={isInView ? { scale: 1 } : {}}
            transition={{ delay: index * 0.1 + 0.3, type: "spring" }}
            className="w-8 h-8 md:w-10 md:h-10 border-2 border-text-primary bg-bg-primary flex items-center justify-center z-10 rotate-45 group"
          >
            <Briefcase className="w-4 h-4 md:w-5 md:h-5 text-accent-primary -rotate-45" />
          </motion.div>
          {index !== experiences.length - 1 && (
            <div className="w-[1px] flex-1 bg-border/50 md:my-4" />
          )}
        </div>

        <div className="md:col-span-8 pb-12">
          <div className="p-8 border-l-2 border-text-primary bg-bg-secondary/30 backdrop-blur-md relative overflow-hidden group">
            <div className="absolute top-0 right-0 p-2 font-mono text-[10px] text-text-primary/10 select-none">
              0x{index}A_LOG
            </div>
            
            <div className="mb-6">
              <h3 className="text-2xl font-black text-text-primary uppercase tracking-tighter mb-1">
                {experience.role}
              </h3>
              <div className="flex items-center gap-3">
                <span className="px-3 py-1 bg-accent-primary text-white font-mono text-[10px] font-bold uppercase tracking-tighter">
                  {experience.company}
                </span>
                <span className="md:hidden font-mono text-[10px] font-bold text-text-secondary uppercase">
                  {experience.date}
                </span>
              </div>
            </div>

            <div className="space-y-4">
              <ul className="grid gap-3">
                {experience.description.map((desc, i) => (
                  <li key={i} className="flex items-start gap-4 text-sm text-text-secondary font-medium leading-relaxed">
                    <span className="text-accent-primary font-bold mt-1">»</span>
                    {desc}
                  </li>
                ))}
              </ul>

              {experience.skills && experience.skills.length > 0 && (
                <div className="flex flex-wrap gap-2 pt-6">
                  {experience.skills.map((skill) => (
                    <span
                      key={skill}
                      className="px-3 py-1 bg-bg-tertiary border border-border/50 font-mono text-[10px] font-bold text-text-primary uppercase"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
}

export default function Experience() {
  const containerRef = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"],
  });

  const opacity = useTransform(scrollYProgress, [0, 0.2], [0, 1]);

  return (
    <section
      id="experience"
      ref={containerRef}
      className="section-container bg-bg-primary relative z-10"
    >
      <div className="max-w-7xl mx-auto">
        <motion.div style={{ opacity }} className="mb-20 space-y-4">
          <span className="text-accent-primary font-mono text-xs font-bold tracking-[0.5em] uppercase">
            {"// Professional Log"}
          </span>
          <h2 className="text-4xl md:text-6xl font-black text-text-primary tracking-tighter uppercase">
            Operational <span className="gradient-text">History</span>
          </h2>
        </motion.div>

        <div className="relative">
          <div className="absolute left-[19px] md:left-[31.5%] top-0 bottom-0 w-[1px] bg-border/20 hidden md:block" />
          
          <div className="space-y-0">
            {experiences.map((experience, index) => (
              <ExperienceCard key={index} experience={experience} index={index} />
            ))}
          </div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-12 p-8 border-2 border-text-primary bg-text-primary text-bg-primary flex flex-col md:flex-row items-center justify-between gap-8 relative overflow-hidden group"
        >
          <div className="absolute inset-0 bg-accent-primary opacity-0 group-hover:opacity-100 transition-opacity duration-500 -z-0" />
          
          <div className="relative z-10">
            <h3 className="text-2xl font-black uppercase tracking-tighter mb-2">Detailed Dossier Required?</h3>
            <p className="font-mono text-xs opacity-80 uppercase tracking-widest">Access full career documentation via PDF stream.</p>
          </div>
          
          <motion.a
            href="/files/Rakesh_Ghosh_Resume_4YoE.pdf"
            download
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="relative z-10 px-8 py-4 bg-bg-primary text-text-primary font-mono text-xs font-bold uppercase tracking-[0.2em] border-2 border-transparent hover:border-bg-primary"
          >
            Download.PDF
          </motion.a>
        </motion.div>
      </div>
    </section>
  );
}
