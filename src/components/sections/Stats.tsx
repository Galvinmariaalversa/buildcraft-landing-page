"use client";

import React, { useEffect, useRef, useState } from "react";
import { motion, useInView, Variants } from "framer-motion";
import Container from "../ui/Container";

// Reusable Counter component that animates from 0 to value when scrolled into view
interface CounterProps {
  value: number;
  suffix?: string;
}

const Counter: React.FC<CounterProps> = ({ value, suffix = "" }) => {
  const ref = useRef<HTMLSpanElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (isInView) {
      // Import dynamic animate controls from framer-motion
      const { animate } = require("framer-motion");
      const controls = animate(0, value, {
        duration: 2.2,
        ease: [0.16, 1, 0.3, 1], // Custom premium ease-out
        onUpdate(latest: number) {
          setCount(Math.floor(latest));
        },
      });
      return () => controls.stop();
    }
  }, [isInView, value]);

  return <span ref={ref}>{count}{suffix}</span>;
};

interface Stat {
  value: number;
  suffix: string;
  label: string;
  description: string;
}

export const Stats: React.FC = () => {
  const stats: Stat[] = [
    {
      value: 350,
      suffix: "+",
      label: "Projects Completed",
      description: "From luxury estates to soaring office centers.",
    },
    {
      value: 25,
      suffix: "+",
      label: "Years Experience",
      description: "Mastering luxury architectural execution.",
    },
    {
      value: 320,
      suffix: "+",
      label: "Happy Clients",
      description: "Maintaining long-term relationships.",
    },
    {
      value: 85,
      suffix: "",
      label: "Team Members",
      description: "Elite architects, designers, and builders.",
    },
  ];

  // Motion variants for fade in
  const itemVariants: Variants = {
    hidden: { opacity: 0, y: 20 },
    show: (idx: number) => ({
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, delay: idx * 0.1, ease: [0.16, 1, 0.3, 1] },
    }),
  };

  return (
    <Container id="stats" py="lg" className="bg-navy-950 relative overflow-hidden border-t border-b border-white/5">
      {/* Background glow effects */}
      <div className="absolute top-1/2 left-1/4 w-96 h-96 bg-gold-400/5 rounded-full filter blur-[120px] pointer-events-none" />
      <div className="absolute top-1/2 right-1/4 w-96 h-96 bg-navy-800/30 rounded-full filter blur-[120px] pointer-events-none" />

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
        {/* Intro Text */}
        <div className="lg:col-span-5 flex flex-col justify-center">
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
              Our Footprint
            </span>
          </motion.div>

          {/* Title */}
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="font-heading text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-white uppercase mb-6 leading-tight"
          >
            Proven Track Record of <br />
            <span className="text-gold-gradient">Solid Execution</span>
          </motion.h2>

          {/* Description */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-slate-300 font-light leading-relaxed text-sm sm:text-base"
          >
            Our statistics represent more than just numbers; they stand for the trust, safety, and vision we construct every single day. We bring absolute quality assurance to each square foot we build, ensuring that our projects endure both time and structural challenges.
          </motion.p>
        </div>

        {/* Stats Counters Grid */}
        <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-6 sm:gap-8">
          {stats.map((stat, idx) => (
            <motion.div
              key={idx}
              custom={idx}
              variants={itemVariants}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true, margin: "-100px" }}
              className="bg-navy-900/60 border border-white/5 p-8 relative flex flex-col justify-between hover:border-gold-400/20 transition-all duration-300"
            >
              {/* Top Accent Line */}
              <span className="absolute top-0 left-0 w-8 h-[2px] bg-gold-400" />

              <div>
                {/* Dynamic Counter */}
                <h3 className="font-heading text-4xl sm:text-5xl font-extrabold text-white tracking-tight mb-2">
                  <Counter value={stat.value} suffix={stat.suffix} />
                </h3>

                {/* Label */}
                <span className="font-heading text-xs uppercase tracking-widest text-gold-400 font-bold block mb-3">
                  {stat.label}
                </span>

                {/* Description */}
                <p className="text-xs text-slate-400 font-light leading-relaxed">
                  {stat.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </Container>
  );
};

export default Stats;
