"use client";

import React, { useState } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { FiMapPin, FiArrowRight } from "react-icons/fi";
import Container from "../ui/Container";

interface Project {
  id: number;
  title: string;
  category: "Residential" | "Commercial" | "Renovation";
  location: string;
  image: string;
  description: string;
}

export const ProjectsShowcase: React.FC = () => {
  const [filter, setFilter] = useState<string>("All");

  const categories = ["All", "Residential", "Commercial", "Renovation"];

  const projects: Project[] = [
    {
      id: 1,
      title: "The Crestview Villa",
      category: "Residential",
      location: "Beverly Hills, CA",
      image: "/project_villa.webp",
      description:
        "A custom 12,000 sq ft luxury estate featuring architectural concrete, a sleek cantilevered infinity pool, and state-of-the-art automation.",
    },
    {
      id: 2,
      title: "Apex Plaza Tower",
      category: "Commercial",
      location: "Manhattan, NY",
      image: "/project_office.webp",
      description:
        "A modern 32-story corporate headquarters with energy-efficient glazed glass walls and high-performance LEED Gold building infrastructure.",
    },
    {
      id: 3,
      title: "The Meridian Residences",
      category: "Residential",
      location: "Miami, FL",
      image: "/project_apartment.webp",
      description:
        "An elite waterfront residential complex containing 45 bespoke units, green rooftops, and high-wind structural resilience engineering.",
    },
    {
      id: 4,
      title: "Aspen Chalet Renovation",
      category: "Renovation",
      location: "Aspen, CO",
      image: "/project_renovation.webp",
      description:
        "A full interior transformation of a luxury mountain lodge combining timber framing, modern smart lighting, and custom stonework.",
    },
  ];

  const filteredProjects =
    filter === "All"
      ? projects
      : projects.filter((project) => project.category === filter);

  return (
    <Container id="projects" py="lg" className="bg-navy-950 relative overflow-hidden">
      {/* Glow effect */}
      <div className="absolute top-1/2 right-1/4 w-96 h-96 bg-gold-400/5 rounded-full filter blur-[120px] pointer-events-none" />

      {/* Title */}
      <div className="text-center max-w-3xl mx-auto mb-12">
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
            Our Portfolio
          </span>
          <span className="w-8 h-[1px] bg-gold-400" />
        </motion.div>

        {/* Headline */}
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="font-heading text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-white uppercase mb-6"
        >
          Iconic Spaces, <br />
          <span className="text-gold-gradient">Flawlessly Executed</span>
        </motion.h2>
      </div>

      {/* Filter Tabs */}
      <div className="flex justify-center flex-wrap gap-3 mb-16">
        {categories.map((cat) => (
          <button
            key={cat}
            onClick={() => setFilter(cat)}
            className={`px-5 py-2.5 font-heading text-[10px] sm:text-xs uppercase tracking-widest transition-all duration-300 rounded-none cursor-pointer border relative focus:outline-none ${
              filter === cat
                ? "bg-gold-400 border-gold-400 text-navy-950 font-bold"
                : "bg-transparent border-white/10 text-slate-400 hover:text-white hover:border-white/30"
            }`}
          >
            {cat}
          </button>
        ))}
      </div>

      {/* Project Grid */}
      <motion.div
        layout
        className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12"
      >
        <AnimatePresence mode="popLayout">
          {filteredProjects.map((project) => (
            <motion.div
              layout
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.95 }}
              transition={{ duration: 0.5 }}
              key={project.id}
              className="group flex flex-col bg-navy-900 border border-white/5 relative overflow-hidden"
            >
              {/* Image Container with Hover zoom */}
              <div className="relative w-full aspect-[16/10] overflow-hidden">
                <Image
                  src={project.image}
                  alt={project.title}
                  fill
                  sizes="(max-width: 768px) 100vw, 50vw"
                  className="object-cover object-center transition-transform duration-700 ease-out group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-navy-950 via-navy-950/20 to-transparent opacity-80" />
                
                {/* Floating Category Tag */}
                <div className="absolute top-4 left-4 bg-navy-950/80 backdrop-blur-md border border-white/10 px-3 py-1 font-heading text-[9px] uppercase tracking-widest text-gold-400 font-semibold">
                  {project.category}
                </div>
              </div>

              {/* Project Info */}
              <div className="p-6 sm:p-8 flex flex-col justify-between flex-grow">
                <div>
                  {/* Location and Category */}
                  <div className="flex items-center gap-1.5 text-slate-400 text-[10px] sm:text-xs font-light uppercase tracking-wider mb-2">
                    <FiMapPin className="text-gold-400 w-3.5 h-3.5" />
                    <span>{project.location}</span>
                  </div>

                  {/* Title */}
                  <h3 className="font-heading text-lg sm:text-xl font-bold uppercase tracking-wider text-white mb-3 group-hover:text-gold-400 transition-colors duration-300">
                    {project.title}
                  </h3>

                  {/* Description */}
                  <p className="text-sm text-slate-400 font-light leading-relaxed mb-6">
                    {project.description}
                  </p>
                </div>

                {/* Arrow CTA */}
                <div className="pt-4 border-t border-white/5 flex items-center justify-between">
                  <span className="text-[10px] font-heading font-semibold uppercase tracking-wider text-slate-400 group-hover:text-gold-400 transition-colors duration-300">
                    Explore Details
                  </span>
                  <div className="w-8 h-8 rounded-none border border-white/10 group-hover:border-gold-400 group-hover:bg-gold-400 group-hover:text-navy-950 flex items-center justify-center text-slate-400 transition-all duration-300">
                    <FiArrowRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-0.5" />
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </AnimatePresence>
      </motion.div>
    </Container>
  );
};

export default ProjectsShowcase;
