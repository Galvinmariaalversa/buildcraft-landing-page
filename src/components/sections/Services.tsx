"use client";

import React from "react";
import { motion, Variants } from "framer-motion";
import {
  FiHome,
  FiBriefcase,
  FiRefreshCw,
  FiGrid,
  FiClipboard,
  FiCompass,
  FiArrowRight,
} from "react-icons/fi";
import Container from "../ui/Container";

interface Service {
  icon: React.ReactNode;
  title: string;
  description: string;
  benefits: string[];
}

export const Services: React.FC = () => {
  const services: Service[] = [
    {
      icon: <FiHome className="w-6 h-6 text-gold-400" />,
      title: "Residential Construction",
      description:
        "Creating custom estates and luxury residences tailored precisely to your lifestyle. We blend architectural brilliance with masterful craftsmanship.",
      benefits: ["Bespoke luxury finishes", "High-performance smart homes", "Complete project warranty"],
    },
    {
      icon: <FiBriefcase className="w-6 h-6 text-gold-400" />,
      title: "Commercial Construction",
      description:
        "Developing state-of-the-art office spaces, retail hubs, and multi-use complexes. Engineered to reflect corporate prestige and ensure structural longevity.",
      benefits: ["Rigorous timeline scheduling", "Structural steel engineering", "Eco-friendly LEED solutions"],
    },
    {
      icon: <FiRefreshCw className="w-6 h-6 text-gold-400" />,
      title: "Renovation Services",
      description:
        "Transforming existing structures into modern masterpieces. We upgrade legacy estates and commercial assets while retaining historic charm.",
      benefits: ["Seamless structural upgrades", "Historical design preservation", "Phased execution scheduling"],
    },
    {
      icon: <FiGrid className="w-6 h-6 text-gold-400" />,
      title: "Interior Design",
      description:
        "Crafting bespoke interior environments that balance form and function. Curating custom furniture, spatial layouts, and premium lighting solutions.",
      benefits: ["Bespoke millwork & sourcing", "Bespoke spatial engineering", "Intelligent light rendering"],
    },
    {
      icon: <FiClipboard className="w-6 h-6 text-gold-400" />,
      title: "Project Management",
      description:
        "Providing end-to-end oversight to keep projects on schedule and within budget. We manage suppliers, compliance, safety, and contractors.",
      benefits: ["Single point of accountability", "Real-time cost ledger reporting", "Strict OSHA/safety compliance"],
    },
    {
      icon: <FiCompass className="w-6 h-6 text-gold-400" />,
      title: "Architectural Consultation",
      description:
        "Translating initial concepts into detailed architectural plans. Guiding zoning, spatial flow, structural feasibility, and green design.",
      benefits: ["Comprehensive permit advisory", "3D virtual blueprint renders", "Sustainable energy modeling"],
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

  const itemVariants: Variants = {
    hidden: { opacity: 0, y: 30 },
    show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.16, 1, 0.3, 1] } },
  };

  return (
    <Container id="services" py="lg" className="bg-navy-950 relative overflow-hidden">
      {/* Subtle background glow */}
      <div className="absolute -top-40 left-1/3 w-96 h-96 bg-gold-400/5 rounded-full filter blur-[120px] pointer-events-none" />

      {/* Header Container */}
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
            Our Expertise
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
          Bespoke Building Solutions <br />
          <span className="text-gold-gradient">Tailored To Perfection</span>
        </motion.h2>

        {/* Intro */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="text-slate-400 font-light leading-relaxed text-sm sm:text-base max-w-2xl mx-auto"
        >
          We offer a comprehensive suite of elite construction services. From initial blueprint draft to final luxury finish, our experienced teams deliver unparalleled craftsmanship.
        </motion.p>
      </div>

      {/* Services Grid */}
      <motion.div
        variants={containerVariants}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, margin: "-100px" }}
        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8"
      >
        {services.map((service, index) => (
          <motion.div
            key={index}
            variants={itemVariants}
            whileHover={{ y: -8, transition: { duration: 0.3 } }}
            className="group relative flex flex-col justify-between bg-navy-900/50 hover:bg-navy-900 border border-white/5 hover:border-gold-400/30 p-8 transition-colors duration-300 h-full cursor-pointer"
            onClick={() => (window.location.href = "#contact")}
          >
            {/* Top gold line hover indicator */}
            <span className="absolute top-0 left-0 w-0 h-[2px] bg-gold-400 transition-all duration-500 group-hover:w-full" />

            <div>
              {/* Icon Container */}
              <div className="w-12 h-12 bg-navy-950 border border-white/5 flex items-center justify-center mb-6 group-hover:border-gold-400/20 group-hover:bg-navy-900 transition-colors duration-300">
                {service.icon}
              </div>

              {/* Title */}
              <h3 className="font-heading text-lg font-bold uppercase tracking-wider text-white mb-4 group-hover:text-gold-400 transition-colors duration-300">
                {service.title}
              </h3>

              {/* Description */}
              <p className="text-sm text-slate-400 font-light leading-relaxed mb-6">
                {service.description}
              </p>

              {/* Benefits */}
              <ul className="space-y-2 mb-8">
                {service.benefits.map((benefit, bIdx) => (
                  <li key={bIdx} className="flex items-center gap-2 text-xs text-slate-400 font-light">
                    <span className="w-1.5 h-1.5 bg-gold-400 rounded-none shrink-0" />
                    <span>{benefit}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Inquire link */}
            <div className="pt-4 border-t border-white/5 flex items-center justify-between">
              <span className="text-[10px] font-heading font-semibold uppercase tracking-wider text-slate-400 group-hover:text-gold-400 transition-colors duration-300">
                Inquire Service
              </span>
              <FiArrowRight className="w-4 h-4 text-slate-400 group-hover:text-gold-400 group-hover:translate-x-1.5 transition-all duration-300" />
            </div>
          </motion.div>
        ))}
      </motion.div>
    </Container>
  );
};

export default Services;
