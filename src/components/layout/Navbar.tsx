"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { FiMenu, FiX, FiArrowRight } from "react-icons/fi";
import Button from "../ui/Button";
import Logo from "./Logo";

interface NavLink {
  label: string;
  href: string;
}

const navLinks: NavLink[] = [
  { label: "Home", href: "/" },
  { label: "Services", href: "#services" },
  { label: "Projects", href: "#projects" },
  { label: "About", href: "#about" },
  { label: "Contact", href: "#contact" },
];

export const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  // Handle scroll events to add styling updates
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      <motion.header
        className={`fixed top-0 left-0 w-full z-50 transition-all duration-500 ${
          isScrolled
            ? "bg-navy-900/90 backdrop-blur-md border-b border-white/5 py-4 shadow-lg"
            : "bg-transparent py-6 border-b border-transparent"
        }`}
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
      >
        <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 flex items-center justify-between">
          {/* Luxury Brand Logo */}
          <Link href="/" className="flex items-center gap-3 group focus:outline-none">
            <Logo className="w-10 h-10 logo-animate group-hover:rotate-6 transition-transform duration-500" />
            <span className="flex flex-col">
              <span className="font-heading font-bold text-lg tracking-widest text-slate-100 uppercase leading-none">
                BuildCraft
              </span>
              <span className="font-sans text-[9px] tracking-[0.25em] text-gold-400 uppercase font-medium mt-1">
                Constructions
              </span>
            </span>
          </Link>

          {/* Desktop Navigation Links */}
          <nav className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <Link
                key={link.label}
                href={link.href}
                className="relative font-heading text-xs tracking-wider uppercase text-slate-300 hover:text-gold-400 transition-colors duration-300 py-2 group focus:outline-none"
              >
                {link.label}
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-gold-400 transition-all duration-300 group-hover:w-full" />
              </Link>
            ))}
          </nav>

          {/* CTA Inquire Button */}
          <div className="hidden md:flex items-center">
            <Button
              variant="primary"
              size="sm"
              icon={<FiArrowRight />}
              iconPosition="right"
              onClick={() => (window.location.href = "#contact")}
            >
              Get In Touch
            </Button>
          </div>

          {/* Mobile Hamburguer Menu Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden text-slate-100 focus:outline-none p-2 cursor-pointer"
            aria-expanded={isOpen}
            aria-label="Toggle navigation menu"
          >
            {isOpen ? <FiX className="w-6 h-6 text-gold-400" /> : <FiMenu className="w-6 h-6" />}
          </button>
        </div>
      </motion.header>

      {/* Mobile Navigation Drawer */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
            className="fixed inset-0 top-[72px] bg-navy-950 z-40 flex flex-col px-8 py-12 md:hidden"
          >
            <nav className="flex flex-col gap-6 mb-12">
              {navLinks.map((link, index) => (
                <motion.div
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.05 }}
                  key={link.label}
                >
                  <Link
                    href={link.href}
                    onClick={() => setIsOpen(false)}
                    className="font-heading text-2xl tracking-widest text-slate-100 hover:text-gold-400 transition-colors uppercase block py-2 border-b border-white/5"
                  >
                    {link.label}
                  </Link>
                </motion.div>
              ))}
            </nav>

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.3 }}
              className="mt-auto"
            >
              <Button
                variant="primary"
                size="lg"
                fullWidth
                icon={<FiArrowRight />}
                iconPosition="right"
                onClick={() => {
                  setIsOpen(false);
                  window.location.href = "#contact";
                }}
              >
                Inquire Now
              </Button>
              <div className="mt-8 text-center">
                <p className="text-[10px] uppercase tracking-widest text-slate-500">
                  BuildCraft Constructions
                </p>
                <p className="text-[11px] text-slate-400 mt-1">info@buildcraft.com</p>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Navbar;
