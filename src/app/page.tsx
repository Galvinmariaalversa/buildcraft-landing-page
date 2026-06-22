"use client";

import React from "react";
import Hero from "@/components/sections/Hero";
import About from "@/components/sections/About";
import Services from "@/components/sections/Services";
import WhyChooseUs from "@/components/sections/WhyChooseUs";
import ProjectsShowcase from "@/components/sections/ProjectsShowcase";
import Timeline from "@/components/sections/Timeline";
import Stats from "@/components/sections/Stats";
import Testimonials from "@/components/sections/Testimonials";
import FAQ from "@/components/sections/FAQ";
import Contact from "@/components/sections/Contact";

export default function Home() {
  return (
    <div className="bg-navy-950 min-h-screen text-slate-100 selection:bg-gold-400 selection:text-navy-950">
      <Hero />
      <About />
      <Services />
      <WhyChooseUs />
      <ProjectsShowcase />
      <Timeline />
      <Stats />
      <Testimonials />
      <FAQ />
      <Contact />
    </div>
  );
}
