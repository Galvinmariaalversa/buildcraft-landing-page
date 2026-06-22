"use client";

import React from "react";
import Link from "next/link";
import { FiInstagram, FiLinkedin, FiFacebook, FiMapPin, FiPhone, FiMail } from "react-icons/fi";

const quickLinks = [
  { label: "Home", href: "/" },
  { label: "Our Services", href: "#services" },
  { label: "Projects Portfolio", href: "#projects" },
  { label: "About BuildCraft", href: "#about" },
  { label: "Contact Us", href: "#contact" },
];

const serviceLinks = [
  { label: "Residential Construction", href: "#services" },
  { label: "Commercial Construction", href: "#services" },
  { label: "Renovation Services", href: "#services" },
  { label: "Interior Design", href: "#services" },
];

export const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-navy-950 text-slate-400 font-sans border-t border-white/5 relative overflow-hidden">
      {/* Decorative top accent gold line */}
      <div className="h-1 w-full bg-gradient-to-r from-gold-600 via-gold-400 to-gold-700" />

      {/* Main Footer Content */}
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 py-16 md:py-24 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 md:gap-8">
        {/* Brand & Bio Column */}
        <div className="flex flex-col gap-6">
          <Link href="/" className="flex items-center gap-3 focus:outline-none">
            <span className="w-10 h-10 bg-gold-400 text-navy-800 font-heading font-black text-xl flex items-center justify-center">
              B
            </span>
            <span className="flex flex-col">
              <span className="font-heading font-bold text-lg tracking-widest text-slate-100 uppercase leading-none">
                BuildCraft
              </span>
              <span className="font-sans text-[9px] tracking-[0.25em] text-gold-400 uppercase font-medium mt-1">
                Constructions
              </span>
            </span>
          </Link>
          
          <p className="text-sm leading-relaxed text-slate-400 pr-4">
            Crafting premium residential, commercial, and interior spaces with peerless quality, unmatched precision, and elite execution.
          </p>

          <div className="flex items-center gap-4 mt-2">
            <a
              href="https://linkedin.com"
              target="_blank"
              rel="noopener noreferrer"
              className="w-9 h-9 rounded-none border border-white/10 flex items-center justify-center text-slate-400 hover:text-gold-400 hover:border-gold-400 transition-colors duration-300 focus:outline-none"
              aria-label="Visit BuildCraft LinkedIn page"
            >
              <FiLinkedin className="w-4 h-4" />
            </a>
            <a
              href="https://instagram.com"
              target="_blank"
              rel="noopener noreferrer"
              className="w-9 h-9 rounded-none border border-white/10 flex items-center justify-center text-slate-400 hover:text-gold-400 hover:border-gold-400 transition-colors duration-300 focus:outline-none"
              aria-label="Visit BuildCraft Instagram page"
            >
              <FiInstagram className="w-4 h-4" />
            </a>
            <a
              href="https://facebook.com"
              target="_blank"
              rel="noopener noreferrer"
              className="w-9 h-9 rounded-none border border-white/10 flex items-center justify-center text-slate-400 hover:text-gold-400 hover:border-gold-400 transition-colors duration-300 focus:outline-none"
              aria-label="Visit BuildCraft Facebook page"
            >
              <FiFacebook className="w-4 h-4" />
            </a>
          </div>
        </div>

        {/* Quick Links Column */}
        <div className="flex flex-col gap-6">
          <h3 className="font-heading font-semibold text-xs tracking-widest text-slate-100 uppercase">
            Quick Navigation
          </h3>
          <ul className="flex flex-col gap-3">
            {quickLinks.map((link) => (
              <li key={link.label}>
                <Link
                  href={link.href}
                  className="text-sm hover:text-gold-400 transition-colors duration-300 focus:outline-none block py-1"
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Services Column */}
        <div className="flex flex-col gap-6">
          <h3 className="font-heading font-semibold text-xs tracking-widest text-slate-100 uppercase">
            Our Specialties
          </h3>
          <ul className="flex flex-col gap-3">
            {serviceLinks.map((link) => (
              <li key={link.label}>
                <Link
                  href={link.href}
                  className="text-sm hover:text-gold-400 transition-colors duration-300 focus:outline-none block py-1"
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Contact Info Column */}
        <div className="flex flex-col gap-6">
          <h3 className="font-heading font-semibold text-xs tracking-widest text-slate-100 uppercase">
            Head Office
          </h3>
          <ul className="flex flex-col gap-4">
            <li className="flex items-start gap-3">
              <FiMapPin className="w-4 h-4 mt-1 text-gold-400 shrink-0" />
              <span className="text-sm leading-relaxed">
                100 Luxury Avenue, Suite 500,<br />New York, NY 10001
              </span>
            </li>
            <li className="flex items-center gap-3">
              <FiPhone className="w-4 h-4 text-gold-400 shrink-0" />
              <a href="tel:+18005550199" className="text-sm hover:text-gold-400 transition-colors duration-300">
                +1 (800) 555-0199
              </a>
            </li>
            <li className="flex items-center gap-3">
              <FiMail className="w-4 h-4 text-gold-400 shrink-0" />
              <a href="mailto:info@buildcraft.com" className="text-sm hover:text-gold-400 transition-colors duration-300">
                info@buildcraft.com
              </a>
            </li>
          </ul>
        </div>
      </div>

      {/* Copyright Bar */}
      <div className="border-t border-white/5 py-8">
        <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs tracking-wider uppercase text-slate-500">
          <p>&copy; {currentYear} BuildCraft Constructions. All Rights Reserved.</p>
          <div className="flex items-center gap-6">
            <Link href="#privacy" className="hover:text-slate-300 transition-colors">
              Privacy Policy
            </Link>
            <Link href="#terms" className="hover:text-slate-300 transition-colors">
              Terms of Service
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
