"use client";

import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { FiArrowRight } from "react-icons/fi";
import Container from "../ui/Container";
import Button from "../ui/Button";

export const Hero: React.FC = () => {
  // Stats data
  const stats = [
    { value: "25+", label: "Years of Excellence" },
    { value: "150+", label: "Projects Completed" },
    { value: "100%", label: "Client Satisfaction" },
    { value: "12", label: "Industry Awards" },
  ];

  return (
    <section className="relative w-full min-h-screen flex items-center justify-center pt-28 pb-16 overflow-hidden bg-navy-950">
      {/* Full-bleed background image with modern luxury dark overlays */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/hero_bg.png"
          alt="Luxury architectural building under sunset"
          fill
          priority
          sizes="100vw"
          className="object-cover object-center opacity-35 scale-105 select-none"
        />
        {/* Navy gradients to blend the background smoothly */}
        <div className="absolute inset-0 bg-gradient-to-r from-navy-950 via-navy-950/80 to-transparent z-10" />
        <div className="absolute inset-0 bg-gradient-to-t from-navy-950 via-transparent to-navy-950/50 z-10" />
      </div>

      <Container as="div" py="none" className="relative z-20 w-full">
        <div className="max-w-3xl">
          {/* Subtle Accent Label */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="inline-flex items-center gap-2 mb-6"
          >
            <span className="w-8 h-[1px] bg-gold-400" />
            <span className="font-heading text-xs uppercase tracking-[0.3em] text-gold-400 font-semibold">
              Premier Construction Firm
            </span>
          </motion.div>

          {/* Main Headline */}
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.1 }}
            className="font-heading text-4xl sm:text-5xl md:text-6xl font-extrabold tracking-tight text-white leading-[1.15] mb-6 uppercase"
          >
            Building Exceptional Spaces with <br />
            <span className="text-gold-gradient">Quality & Precision</span>
          </motion.h1>

          {/* Supporting Text */}
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-base sm:text-lg text-slate-300 font-light leading-relaxed mb-10 max-w-2xl"
          >
            From high-end residential estates to iconic commercial developments, BuildCraft Constructions delivers unparalleled craftsmanship, innovative architecture, and a signature luxury finish.
          </motion.p>

          {/* Interactive CTAs */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="flex flex-col sm:flex-row gap-4 sm:items-center mb-16 sm:mb-20"
          >
            <Button
              variant="primary"
              size="lg"
              icon={<FiArrowRight />}
              iconPosition="right"
              onClick={() => (window.location.href = "#contact")}
            >
              Get Free Consultation
            </Button>
            <Button
              variant="secondary"
              size="lg"
              onClick={() => (window.location.href = "#projects")}
            >
              View Projects
            </Button>
          </motion.div>
        </div>

        {/* Statistics Strip */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="w-full glass-card-dark p-8 border border-white/5 grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-4"
        >
          {stats.map((stat, index) => (
            <div
              key={index}
              className="flex flex-col justify-center items-center text-center p-2"
            >
              <span className="font-heading text-3xl sm:text-4xl font-extrabold text-gold-400 tracking-tight mb-2">
                {stat.value}
              </span>
              <span className="font-heading text-[10px] sm:text-xs uppercase tracking-widest text-slate-400 font-semibold">
                {stat.label}
              </span>
            </div>
          ))}
        </motion.div>
      </Container>
    </section>
  );
};

export default Hero;
