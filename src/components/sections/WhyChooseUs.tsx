"use client";

import React from "react";
import { motion, Variants } from "framer-motion";
import {
  FiUsers,
  FiShield,
  FiClock,
  FiDollarSign,
  FiSmile,
  FiAward,
} from "react-icons/fi";
import Container from "../ui/Container";

interface Feature {
  icon: React.ReactNode;
  title: string;
  description: string;
}

export const WhyChooseUs: React.FC = () => {
  const features: Feature[] = [
    {
      icon: <FiUsers className="w-6 h-6 text-gold-400" />,
      title: "Experienced Team",
      description:
        "Our team consists of industry-leading architects, engineers, master builders, and project managers dedicated to excellence.",
    },
    {
      icon: <FiShield className="w-6 h-6 text-gold-400" />,
      title: "Quality Materials",
      description:
        "We source premium raw materials and implement strict quality controls to guarantee structural integrity and flawless finishes.",
    },
    {
      icon: <FiClock className="w-6 h-6 text-gold-400" />,
      title: "On-Time Delivery",
      description:
        "Using advanced scheduling software and rigorous milestones, we guarantee your project completes on or ahead of schedule.",
    },
    {
      icon: <FiDollarSign className="w-6 h-6 text-gold-400" />,
      title: "Transparent Pricing",
      description:
        "We provide detailed, fully itemized quotes with zero hidden fees. You know exactly where every dollar of your budget is allocated.",
    },
    {
      icon: <FiSmile className="w-6 h-6 text-gold-400" />,
      title: "Client Satisfaction",
      description:
        "We prioritize clear, daily communication and collaborative check-ins, resulting in a 100% customer satisfaction score.",
    },
    {
      icon: <FiAward className="w-6 h-6 text-gold-400" />,
      title: "Modern Standards",
      description:
        "We build to the latest international building codes, integrating sustainable engineering and green technology solutions.",
    },
  ];

  // Framer motion variants for staggered grid layout
  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const cardVariants: Variants = {
    hidden: { opacity: 0, y: 30 },
    show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.16, 1, 0.3, 1] } },
  };

  return (
    <Container id="why-choose-us" py="lg" className="bg-navy-900 border-t border-b border-white/5 relative overflow-hidden">
      {/* Decorative blurred background shapes */}
      <div className="absolute top-1/3 left-0 w-96 h-96 bg-gold-400/5 rounded-full filter blur-[100px] pointer-events-none" />
      <div className="absolute bottom-1/3 right-0 w-96 h-96 bg-navy-800/40 rounded-full filter blur-[100px] pointer-events-none" />

      {/* Header text container */}
      <div className="text-center max-w-3xl mx-auto mb-16 md:mb-24">
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
            Why Partner With Us
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
          The BuildCraft standard of <br />
          <span className="text-gold-gradient">Luxury & Trust</span>
        </motion.h2>

        {/* Intro */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="text-slate-400 font-light leading-relaxed text-sm sm:text-base max-w-2xl mx-auto"
        >
          We construct spaces that endure for generations. Our strict standards of craftsmanship and customer-centric planning set us apart as the premier build firm.
        </motion.p>
      </div>

      {/* Grid of feature cards */}
      <motion.div
        variants={containerVariants}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, margin: "-100px" }}
        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8"
      >
        {features.map((feat, index) => (
          <motion.div
            key={index}
            variants={cardVariants}
            whileHover={{ y: -6, transition: { duration: 0.3 } }}
            className="group relative bg-navy-950/40 hover:bg-navy-950 border border-white/5 hover:border-gold-400/30 p-8 transition-colors duration-300 h-full flex flex-col justify-between"
          >
            {/* Top gold bar indicator on hover */}
            <span className="absolute top-0 left-0 w-0 h-[2px] bg-gold-400 transition-all duration-500 group-hover:w-full" />
            
            <div>
              {/* Icon */}
              <div className="w-12 h-12 bg-navy-900 border border-white/5 flex items-center justify-center mb-6 group-hover:border-gold-400/20 group-hover:bg-navy-950 transition-colors duration-300">
                {feat.icon}
              </div>

              {/* Title */}
              <h3 className="font-heading text-base font-bold uppercase tracking-wider text-white mb-4 group-hover:text-gold-400 transition-colors duration-300">
                {feat.title}
              </h3>

              {/* Description */}
              <p className="text-sm text-slate-400 font-light leading-relaxed">
                {feat.description}
              </p>
            </div>
          </motion.div>
        ))}
      </motion.div>
    </Container>
  );
};

export default WhyChooseUs;
