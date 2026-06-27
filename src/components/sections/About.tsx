"use client";

import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { FiCheck } from "react-icons/fi";
import Container from "../ui/Container";

export const About: React.FC = () => {
  const values = [
    { title: "Uncompromising Quality", desc: "We utilize premium materials and elite artisans to ensure every detail exceeds industry standards." },
    { title: "Visionary Innovation", desc: "Blending state-of-the-art technology with modern architectural principles to create future-proof structures." },
    { title: "Absolute Integrity", desc: "Honesty, transparent communication, and strict adherence to project timelines and budgets." },
    { title: "Client Centered Focus", desc: "Collaborating closely with our clients at every step to bring their unique visions to reality." },
  ];

  return (
    <Container id="about" py="lg" className="bg-navy-900 border-t border-b border-white/5 relative overflow-hidden">
      {/* Decorative blurred background shapes to feel premium */}
      <div className="absolute top-1/4 right-0 w-96 h-96 bg-gold-400/5 rounded-full filter blur-[80px] pointer-events-none" />
      <div className="absolute bottom-1/4 left-0 w-96 h-96 bg-navy-800/20 rounded-full filter blur-[80px] pointer-events-none" />

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
        {/* Text Column */}
        <div className="lg:col-span-7 flex flex-col justify-center">
          {/* Subheading */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6 }}
            className="inline-flex items-center gap-2 mb-4"
          >
            <span className="w-8 h-[1px] bg-gold-400" />
            <span className="font-heading text-xs uppercase tracking-[0.3em] text-gold-400 font-semibold">
              Our Legacy
            </span>
          </motion.div>

          {/* Main Title */}
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="font-heading text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-white uppercase mb-6 leading-tight"
          >
            We Turn Architectural Concepts <br />
            <span className="text-gold-gradient">Into Living Masterpieces</span>
          </motion.h2>

          {/* Story Paragraphs */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-slate-300 font-light leading-relaxed mb-6 text-base"
          >
            Founded on a commitment to precision and luxury, BuildCraft Constructions has established itself as the region's premier builder. We specialize in luxury residential estates, sophisticated commercial structures, high-end renovations, and bespoke interior spaces.
          </motion.p>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="text-slate-400 font-light leading-relaxed mb-8 text-sm animate-pulse-slow"
          >
            <strong>Our Mission:</strong> To construct enduring environments that elevate the standard of living and working. By integrating master builders, project managers, and top-tier designers, we deliver a seamless design-build experience that exceeds expectations at every turn.
          </motion.p>

          {/* Core Values List */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mt-4">
            {values.map((val, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.5, delay: 0.1 * idx }}
                className="flex gap-3"
              >
                <div className="flex-shrink-0 w-5 h-5 bg-gold-400/10 text-gold-400 rounded-none flex items-center justify-center mt-1 border border-gold-400/20">
                  <FiCheck className="w-3.5 h-3.5" />
                </div>
                <div>
                  <h3 className="font-heading text-sm font-semibold uppercase text-white tracking-wider mb-1">
                    {val.title}
                  </h3>
                  <p className="text-xs text-slate-400 font-light leading-normal">
                    {val.desc}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Visual Column */}
        <div className="lg:col-span-5 relative w-full aspect-square md:aspect-[4/5] lg:h-[550px] flex items-center justify-center mt-8 lg:mt-0">
          {/* Main Image Wrapper with border decoration */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="relative w-full h-full border border-gold-400/20 p-3 bg-navy-950/40"
          >
            <div className="relative w-full h-full overflow-hidden">
              <Image
                src="/about_company.webp"
                alt="Luxury building interior architecture by BuildCraft Constructions"
                fill
                sizes="(max-width: 1024px) 100vw, 40vw"
                className="object-cover object-center transition-transform duration-700 hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-navy-950/60 via-transparent to-transparent animate-fade-in" />
            </div>
          </motion.div>

          {/* Floating Gold Experience Badge */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="absolute -bottom-6 -left-6 md:-left-8 bg-gold-400 text-navy-950 p-6 md:p-8 flex flex-col justify-center items-center text-center shadow-2xl border-4 border-navy-900 w-44 h-44 md:w-48 md:h-48"
          >
            <span className="font-heading text-4xl md:text-5xl font-black tracking-tight leading-none mb-1">
              25
            </span>
            <span className="font-heading text-[10px] md:text-xs uppercase tracking-widest font-extrabold leading-tight">
              Years of
            </span>
            <span className="font-heading text-[10px] md:text-xs uppercase tracking-widest font-extrabold leading-tight text-navy-800">
              Craftsmanship
            </span>
          </motion.div>
        </div>
      </div>
    </Container>
  );
};

export default About;
