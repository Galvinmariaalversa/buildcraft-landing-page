"use client";

import React from "react";
import Image from "next/image";
import { motion, Variants } from "framer-motion";
import { FiStar } from "react-icons/fi";
import Container from "../ui/Container";

interface Testimonial {
  name: string;
  role: string;
  projectType: string;
  review: string;
  avatar: string;
  rating: number;
}

export const Testimonials: React.FC = () => {
  const testimonials: Testimonial[] = [
    {
      name: "Marcus Vance",
      role: "CEO, Vance Holdings",
      projectType: "Apex Plaza Tower (Commercial)",
      review: "BuildCraft delivered our corporate headquarters ahead of schedule and with structural execution that exceeded our expectations. Their transparent accounting and daily reporting minimized project risks entirely.",
      avatar: "/avatar_1.png",
      rating: 5,
    },
    {
      name: "Elena Rostova",
      role: "Lead Architect, Elena Designs",
      projectType: "Crestview Villa (Residential)",
      review: "As an architect, finding a builder that respects specific material tolerances and design lines is rare. BuildCraft is that builder. They executed my vision to absolute precision.",
      avatar: "/avatar_2.png",
      rating: 5,
    },
    {
      name: "Jonathan Hughes",
      role: "Real Estate Investor",
      projectType: "Waterfront Development (Residential)",
      review: "We worked with BuildCraft on a multi-family waterfront complex. Their understanding of high-wind load engineering, local permit requirements, and luxury finishes makes them the premier developer in the region.",
      avatar: "/avatar_3.png",
      rating: 5,
    },
    {
      name: "Sarah Lin",
      role: "Private Homeowner",
      projectType: "Bespoke Penthouse Renovation (Renovation)",
      review: "The team transformed our heritage penthouse into a modern architectural wonder. The custom stone detailing and intelligent lighting layouts are spectacular. An unmatched luxury finish.",
      avatar: "/avatar_4.png",
      rating: 5,
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
    <Container id="testimonials" py="lg" className="bg-navy-950 relative overflow-hidden border-t border-b border-white/5">
      {/* Decorative blurred background shapes */}
      <div className="absolute top-1/3 right-0 w-96 h-96 bg-gold-400/5 rounded-full filter blur-[100px] pointer-events-none" />
      <div className="absolute bottom-1/3 left-0 w-96 h-96 bg-navy-800/20 rounded-full filter blur-[100px] pointer-events-none" />

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
            Testimonials
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
          Trusted By <br />
          <span className="text-gold-gradient">Industry Visionaries</span>
        </motion.h2>

        {/* Intro */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="text-slate-400 font-light leading-relaxed text-sm sm:text-base max-w-2xl mx-auto"
        >
          Read reviews from private homeowners, corporate directors, and real estate developers who have experienced the BuildCraft standard of execution.
        </motion.p>
      </div>

      {/* Testimonials Grid */}
      <motion.div
        variants={containerVariants}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, margin: "-100px" }}
        className="grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-6xl mx-auto"
      >
        {testimonials.map((test, index) => (
          <motion.div
            key={index}
            variants={cardVariants}
            whileHover={{ y: -4, transition: { duration: 0.3 } }}
            className="bg-navy-900 border border-white/5 p-8 sm:p-10 flex flex-col justify-between hover:border-gold-400/20 transition-all duration-300 relative"
          >
            {/* Quote Graphic Overlay */}
            <div className="absolute top-4 right-8 text-7xl font-serif text-gold-400/5 select-none pointer-events-none">
              &ldquo;
            </div>

            <div>
              {/* Star Rating */}
              <div className="flex gap-1.5 mb-6">
                {[...Array(test.rating)].map((_, i) => (
                  <FiStar key={i} className="w-4 h-4 fill-gold-400 text-gold-400" />
                ))}
              </div>

              {/* Review Text */}
              <p className="text-sm sm:text-base text-slate-300 font-light leading-relaxed mb-8 italic">
                &ldquo;{test.review}&rdquo;
              </p>
            </div>

            {/* Client Bio */}
            <div className="flex items-center gap-4 pt-6 border-t border-white/5">
              <div className="relative w-12 h-12 overflow-hidden border border-gold-400/20 bg-navy-950 flex-shrink-0">
                <Image
                  src={test.avatar}
                  alt={test.name}
                  fill
                  sizes="48px"
                  className="object-cover object-center"
                />
              </div>
              <div>
                <h4 className="font-heading text-sm font-bold uppercase tracking-wider text-white">
                  {test.name}
                </h4>
                <p className="text-xs text-slate-400 font-medium mt-0.5">
                  {test.role}
                </p>
                <span className="text-[10px] text-gold-400 font-heading font-semibold uppercase tracking-wider mt-1 block">
                  {test.projectType}
                </span>
              </div>
            </div>
          </motion.div>
        ))}
      </motion.div>
    </Container>
  );
};

export default Testimonials;
