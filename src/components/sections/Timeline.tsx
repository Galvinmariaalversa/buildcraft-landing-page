"use client";

import React, { useRef } from "react";
import { motion, useScroll, Variants } from "framer-motion";
import Container from "../ui/Container";

interface Step {
  number: string;
  title: string;
  subtitle: string;
  description: string;
}

export const Timeline: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  
  // Track scroll position to draw the timeline path dynamically
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start center", "end center"],
  });

  const steps: Step[] = [
    {
      number: "01",
      title: "Consultation",
      subtitle: "Understanding your vision",
      description:
        "We begin with a deep exploration of your goals, aesthetic preferences, budget boundaries, and lifestyle requirements to frame the project core.",
    },
    {
      number: "02",
      title: "Planning & Feasibility",
      subtitle: "Securing project parameters",
      description:
        "Our engineering and zoning analysts inspect soil conditions, wind parameters, local municipal codes, and structural limits to define feasibility.",
    },
    {
      number: "03",
      title: "Bespoke Design",
      subtitle: "Visualizing the dream",
      description:
        "We craft ultra-realistic 3D walkthroughs, interior renders, and exact blueprint schemas, modifying architectural details until they are flawless.",
    },
    {
      number: "04",
      title: "Construction Phase",
      subtitle: "Crafting the masterpiece",
      description:
        "Under dedicated project leaders and certified safety masters, construction begins using high-performance structural components and master artisans.",
    },
    {
      number: "05",
      title: "Quality Inspections",
      subtitle: "Enforcing absolute perfection",
      description:
        "Our multi-point safety, alignment, finishing, and MEP inspections are performed continuously. We leave zero details unverified.",
    },
    {
      number: "06",
      title: "Project Handover",
      subtitle: "Bespoke keys transfer",
      description:
        "We walk you through every finished detail, hand over custom operation user manuals, warranties, certificates, and deliver your luxury welcome keys.",
    },
  ];

  const cardVariants = (index: number): Variants => ({
    hidden: { opacity: 0, x: index % 2 === 0 ? -40 : 40, y: 20 },
    show: {
      opacity: 1,
      x: 0,
      y: 0,
      transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] },
    },
  });

  return (
    <Container id="process" py="lg" className="bg-navy-900 border-t border-b border-white/5 relative overflow-hidden">
      {/* Background glow overlay */}
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-navy-800/30 rounded-full filter blur-[120px] pointer-events-none" />

      {/* Header Container */}
      <div className="text-center max-w-3xl mx-auto mb-20 md:mb-28">
        {/* Subheading */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="inline-flex items-center gap-2 mb-4 justify-center"
        >
          <span className="w-8 h-[1px] bg-gold-400" />
          <span className="font-heading text-xs uppercase tracking-[0.3em] text-gold-400 font-semibold">
            Our Methodology
          </span>
          <span className="w-8 h-[1px] bg-gold-400" />
        </motion.div>

        {/* Title */}
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="font-heading text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-white uppercase mb-6"
        >
          A Seamless Design-Build <br />
          <span className="text-gold-gradient">Process Timeline</span>
        </motion.h2>

        {/* Intro */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="text-slate-400 font-light leading-relaxed text-sm sm:text-base max-w-2xl mx-auto"
        >
          We coordinate all architects, master craftsmen, and inspections under a unified schedule. Here is what you can expect during your luxury build lifecycle.
        </motion.p>
      </div>

      {/* Timeline Wrapper */}
      <div ref={containerRef} className="relative w-full max-w-5xl mx-auto min-h-screen">
        {/* Static Background Path Line */}
        <div className="absolute left-6 lg:left-1/2 top-4 bottom-4 w-[2px] bg-white/10 -translate-x-[1px] pointer-events-none" />

        {/* Dynamic Draw Path Line on scroll */}
        <motion.div
          style={{ scaleY: scrollYProgress }}
          className="absolute left-6 lg:left-1/2 top-4 bottom-4 w-[2px] bg-gold-400 -translate-x-[1px] origin-top pointer-events-none"
        />

        {/* Timeline Cards Container */}
        <div className="space-y-12 lg:space-y-20 relative">
          {steps.map((step, idx) => {
            const isEven = idx % 2 === 0;
            return (
              <div
                key={idx}
                className={`flex flex-col lg:flex-row items-start lg:items-center relative w-full ${
                  isEven ? "lg:flex-row" : "lg:flex-row-reverse"
                }`}
              >
                {/* Central Circle Badge Pin */}
                <div className="absolute left-6 lg:left-1/2 w-4 h-4 bg-navy-950 border-2 border-gold-400 rounded-full -translate-x-2 z-10 top-6 lg:top-auto" />

                {/* Left/Right Card column */}
                <div className={`w-full lg:w-1/2 pl-14 lg:pl-0 ${isEven ? "lg:pr-16" : "lg:pl-16"}`}>
                  <motion.div
                    variants={cardVariants(idx)}
                    initial="hidden"
                    whileInView="show"
                    viewport={{ once: true, margin: "-80px" }}
                    className="bg-navy-950/60 border border-white/5 p-8 relative hover:border-gold-400/20 transition-colors duration-300"
                  >
                    {/* Floating Step Number */}
                    <div className="absolute top-4 right-6 font-heading text-3xl sm:text-4xl font-extrabold text-gold-400/20 tracking-tighter select-none">
                      {step.number}
                    </div>

                    {/* Step Title */}
                    <span className="font-heading text-[10px] uppercase tracking-widest text-gold-400 font-semibold mb-2 block">
                      {step.subtitle}
                    </span>
                    <h3 className="font-heading text-lg font-bold uppercase tracking-wider text-white mb-4">
                      {step.title}
                    </h3>

                    {/* Description */}
                    <p className="text-sm text-slate-400 font-light leading-relaxed">
                      {step.description}
                    </p>
                  </motion.div>
                </div>

                {/* Empty column to maintain alternate layout spacing on desktop */}
                <div className="hidden lg:block lg:w-1/2" />
              </div>
            );
          })}
        </div>
      </div>
    </Container>
  );
};

export default Timeline;
