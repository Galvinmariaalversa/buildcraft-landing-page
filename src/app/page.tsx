import React from "react";
import dynamic from "next/dynamic";
import Hero from "@/components/sections/Hero";

// Dynamic imports for sections below the fold to enable client-side code-splitting
const About = dynamic(() => import("@/components/sections/About"));
const Services = dynamic(() => import("@/components/sections/Services"));
const WhyChooseUs = dynamic(() => import("@/components/sections/WhyChooseUs"));
const ProjectsShowcase = dynamic(() => import("@/components/sections/ProjectsShowcase"));
const Timeline = dynamic(() => import("@/components/sections/Timeline"));
const Stats = dynamic(() => import("@/components/sections/Stats"));
const Testimonials = dynamic(() => import("@/components/sections/Testimonials"));
const FAQ = dynamic(() => import("@/components/sections/FAQ"));
const Contact = dynamic(() => import("@/components/sections/Contact"));

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
