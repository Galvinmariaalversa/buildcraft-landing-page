"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FiPlus } from "react-icons/fi";
import Container from "../ui/Container";

interface FAQItemProps {
  question: string;
  answer: string;
  isOpen: boolean;
  onToggle: () => void;
}

const FAQItem: React.FC<FAQItemProps> = ({ question, answer, isOpen, onToggle }) => {
  return (
    <div className="border-b border-white/5 py-6 last:border-b-0">
      <button
        onClick={onToggle}
        className="w-full flex items-center justify-between text-left focus:outline-none cursor-pointer group py-2"
        aria-expanded={isOpen}
      >
        <span className="font-heading text-base sm:text-lg font-bold text-white group-hover:text-gold-400 transition-colors duration-300 uppercase tracking-wide">
          {question}
        </span>
        <motion.span
          animate={{ rotate: isOpen ? 45 : 0 }}
          transition={{ duration: 0.3, ease: "easeInOut" }}
          className="text-gold-400 flex-shrink-0 ml-4 p-1.5 border border-white/5 bg-navy-900 group-hover:border-gold-400/20 transition-colors"
        >
          <FiPlus className="w-4 h-4" />
        </motion.span>
      </button>

      <AnimatePresence initial={false}>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
            className="overflow-hidden"
          >
            <div className="pt-4 pr-12 text-sm sm:text-base text-slate-400 font-light leading-relaxed">
              {answer}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export const FAQ: React.FC = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const faqs = [
    {
      question: "How long does construction take?",
      answer: "Project durations depend entirely on scope and complexity. A luxury custom villa typically spans 12 to 18 months, whereas large commercial developments can take 18 to 36 months. We establish strict timeline schedules and guarantee delivery dates in our contracts.",
    },
    {
      question: "Do you provide design consultation?",
      answer: "Yes, we offer comprehensive in-house architectural design and spatial engineering. We can guide your project from initial concept sketching through 3D rendering to final execution, or collaborate seamlessly with your external architect.",
    },
    {
      question: "What locations do you serve?",
      answer: "BuildCraft Constructions operates regionally, serving select metropolitan areas and premium residential zones. Contact our corporate office to verify if your site falls within our active builder zones.",
    },
    {
      question: "How are project costs calculated?",
      answer: "Project budgets are modeled dynamically during our feasibility and design phases. We provide fully itemized spreadsheets detailing material standards, labor allocations, permits, and contingencies, guaranteeing transparent fixed pricing.",
    },
    {
      question: "Do you offer renovation services?",
      answer: "Yes, we specialize in high-end structural renovations and heritage conservation. We can modernize legacy estates and premium commercial hubs, integrating state-of-the-art HVAC, light rendering, and custom finishes.",
    },
  ];

  return (
    <Container id="faq" py="lg" className="bg-navy-900 relative overflow-hidden">
      {/* Subtle background glow */}
      <div className="absolute top-1/2 left-1/4 w-96 h-96 bg-gold-400/5 rounded-full filter blur-[120px] pointer-events-none" />

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
        {/* Title / Intro Column */}
        <div className="lg:col-span-4 flex flex-col justify-center lg:sticky lg:top-28">
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
              FAQ
            </span>
          </motion.div>

          {/* Title */}
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="font-heading text-3xl sm:text-4xl font-bold tracking-tight text-white uppercase mb-6 leading-tight"
          >
            Frequently Asked <br />
            <span className="text-gold-gradient">Questions</span>
          </motion.h2>

          {/* Description */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-slate-400 font-light leading-relaxed text-sm"
          >
            Have questions about your project scope, financing, or timeline? We've summarized our core client inquiries below. If you need custom estimates, feel free to contact us.
          </motion.p>
        </div>

        {/* Accordions Column */}
        <div className="lg:col-span-8 bg-navy-950/40 border border-white/5 p-8 sm:p-12">
          {faqs.map((faq, index) => (
            <FAQItem
              key={index}
              question={faq.question}
              answer={faq.answer}
              isOpen={openIndex === index}
              onToggle={() => setOpenIndex(openIndex === index ? null : index)}
            />
          ))}
        </div>
      </div>
    </Container>
  );
};

export default FAQ;
