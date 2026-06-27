"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FiMapPin, FiPhone, FiMail, FiCheckCircle } from "react-icons/fi";
import Container from "../ui/Container";
import Button from "../ui/Button";

interface FormValues {
  name: string;
  email: string;
  phone: string;
  projectType: string;
  budgetRange: string;
  description: string;
}

interface FormErrors {
  name?: string;
  email?: string;
  phone?: string;
  projectType?: string;
  budgetRange?: string;
  description?: string;
}

export const Contact: React.FC = () => {
  const [formValues, setFormValues] = useState<FormValues>({
    name: "",
    email: "",
    phone: "",
    projectType: "",
    budgetRange: "",
    description: "",
  });

  const [errors, setErrors] = useState<FormErrors>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  // Validate individual input
  const validateField = (name: keyof FormValues, value: string): string => {
    switch (name) {
      case "name":
        return value.trim() ? "" : "Full Name is required.";
      case "email":
        return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value)
          ? ""
          : "Please enter a valid email address.";
      case "phone":
        return /^\+?[0-9\s\-()]{7,20}$/.test(value)
          ? ""
          : "Please enter a valid phone number.";
      case "projectType":
        return value ? "" : "Please select a project type.";
      case "budgetRange":
        return value ? "" : "Please select a budget range.";
      case "description":
        return value.trim().length >= 10
          ? ""
          : "Description must be at least 10 characters.";
      default:
        return "";
    }
  };

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;
    setFormValues((prev) => ({ ...prev, [name]: value }));

    // Real-time validation update
    const errorMsg = validateField(name as keyof FormValues, value);
    setErrors((prev) => ({ ...prev, [name]: errorMsg }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    // Run final validation check on all fields
    const newErrors: FormErrors = {};
    Object.keys(formValues).forEach((key) => {
      const fieldKey = key as keyof FormValues;
      const errorMsg = validateField(fieldKey, formValues[fieldKey]);
      if (errorMsg) {
        newErrors[fieldKey] = errorMsg;
      }
    });

    setErrors(newErrors);

    if (Object.keys(newErrors).length === 0) {
      setIsSubmitting(true);
      // Simulate API submit request
      setTimeout(() => {
        setIsSubmitting(false);
        setIsSuccess(true);
        setFormValues({
          name: "",
          email: "",
          phone: "",
          projectType: "",
          budgetRange: "",
          description: "",
        });
      }, 1500);
    }
  };

  return (
    <Container id="contact" py="lg" className="bg-navy-950 relative overflow-hidden border-t border-white/5">
      {/* Background glow overlay */}
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-gold-400/5 rounded-full filter blur-[100px] pointer-events-none" />

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
        {/* Left Column: Contact details & abstract map placeholder */}
        <div className="lg:col-span-5 flex flex-col justify-center">
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
              Contact Us
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
            Let's Build Your <br />
            <span className="text-gold-gradient">Next Project</span>
          </motion.h2>

          {/* Description */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-slate-400 font-light leading-relaxed text-sm sm:text-base mb-10"
          >
            Ready to secure estimates, inspect timelines, or discuss feasibility? Reach out to our project team or fill out our structural consultation planner.
          </motion.p>

          {/* Details list */}
          <div className="space-y-6 mb-10">
            <div className="flex items-start gap-4">
              <div className="w-10 h-10 bg-navy-900 border border-white/5 flex items-center justify-center text-gold-400 flex-shrink-0">
                <FiMapPin className="w-4 h-4" />
              </div>
              <div>
                <h3 className="font-heading text-xs uppercase tracking-wider text-slate-400 font-bold mb-1">
                  Head Office Address
                </h3>
                <p className="text-sm text-white font-light leading-relaxed">
                  100 Luxury Avenue, Suite 500, New York, NY 10001
                </p>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <div className="w-10 h-10 bg-navy-900 border border-white/5 flex items-center justify-center text-gold-400 flex-shrink-0">
                <FiPhone className="w-4 h-4" />
              </div>
              <div>
                <h3 className="font-heading text-xs uppercase tracking-wider text-slate-400 font-bold mb-1">
                  Corporate Inquiries
                </h3>
                <a
                  href="tel:+18005550199"
                  className="text-sm text-white hover:text-gold-400 transition-colors font-light block"
                >
                  +1 (800) 555-0199
                </a>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <div className="w-10 h-10 bg-navy-900 border border-white/5 flex items-center justify-center text-gold-400 flex-shrink-0">
                <FiMail className="w-4 h-4" />
              </div>
              <div>
                <h3 className="font-heading text-xs uppercase tracking-wider text-slate-400 font-bold mb-1">
                  General Projects Email
                </h3>
                <a
                  href="mailto:info@buildcraft.com"
                  className="text-sm text-white hover:text-gold-400 transition-colors font-light block"
                >
                  info@buildcraft.com
                </a>
              </div>
            </div>
          </div>

          {/* Minimalist stylized Google Maps placeholder */}
          <div className="w-full h-48 bg-navy-900 border border-white/5 relative overflow-hidden flex flex-col justify-center items-center p-6 text-center group">
            {/* Grid Pattern overlay */}
            <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:16px_16px] pointer-events-none" />
            
            {/* Map lines decorations */}
            <div className="absolute top-1/3 left-0 right-0 h-[1px] bg-white/5 transform rotate-6" />
            <div className="absolute top-1/2 left-0 right-0 h-[1px] bg-white/5 transform -rotate-12" />
            <div className="absolute top-0 bottom-0 left-1/3 w-[1px] bg-white/5 transform rotate-12" />

            <div className="relative z-10 flex flex-col items-center">
              <div className="w-10 h-10 rounded-full bg-gold-400/10 text-gold-400 border border-gold-400/20 flex items-center justify-center mb-3 animate-bounce">
                <FiMapPin className="w-5 h-5" />
              </div>
              <span className="font-heading text-xs font-bold uppercase tracking-wider text-white">
                Interactive Map View
              </span>
              <p className="text-[10px] text-slate-400 uppercase tracking-widest mt-1">
                40.7128° N, 74.0060° W
              </p>
            </div>
            {/* Border hover effect */}
            <span className="absolute bottom-0 left-0 w-0 h-[2px] bg-gold-400 transition-all duration-500 group-hover:w-full" />
          </div>
        </div>

        {/* Right Column: Leads Form Container */}
        <div className="lg:col-span-7 bg-navy-900 border border-white/5 p-8 sm:p-12 relative min-h-[500px]">
          <AnimatePresence mode="wait">
            {!isSuccess ? (
              <motion.form
                key="contact-form"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                onSubmit={handleSubmit}
                noValidate
                className="space-y-6"
              >
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  {/* Name */}
                  <div className="flex flex-col">
                    <label
                      htmlFor="name"
                      className="font-heading text-[10px] sm:text-xs uppercase tracking-widest text-slate-400 mb-2 font-semibold"
                    >
                      Full Name *
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formValues.name}
                      onChange={handleInputChange}
                      className={`bg-navy-950 border px-4 py-3 text-sm text-white focus:outline-none transition-all rounded-none ${
                        errors.name
                          ? "border-red-500/50 focus:border-red-500"
                          : formValues.name && !errors.name
                          ? "border-gold-400/50 focus:border-gold-400"
                          : "border-white/10 focus:border-gold-400"
                      }`}
                      placeholder="e.g. John Doe"
                    />
                    {errors.name && (
                      <span className="text-red-400 text-xs mt-1.5">{errors.name}</span>
                    )}
                  </div>

                  {/* Email */}
                  <div className="flex flex-col">
                    <label
                      htmlFor="email"
                      className="font-heading text-[10px] sm:text-xs uppercase tracking-widest text-slate-400 mb-2 font-semibold"
                    >
                      Email Address *
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formValues.email}
                      onChange={handleInputChange}
                      className={`bg-navy-950 border px-4 py-3 text-sm text-white focus:outline-none transition-all rounded-none ${
                        errors.email
                          ? "border-red-500/50 focus:border-red-500"
                          : formValues.email && !errors.email
                          ? "border-gold-400/50 focus:border-gold-400"
                          : "border-white/10 focus:border-gold-400"
                      }`}
                      placeholder="e.g. john@example.com"
                    />
                    {errors.email && (
                      <span className="text-red-400 text-xs mt-1.5">{errors.email}</span>
                    )}
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  {/* Phone */}
                  <div className="flex flex-col">
                    <label
                      htmlFor="phone"
                      className="font-heading text-[10px] sm:text-xs uppercase tracking-widest text-slate-400 mb-2 font-semibold"
                    >
                      Phone Number *
                    </label>
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      value={formValues.phone}
                      onChange={handleInputChange}
                      className={`bg-navy-950 border px-4 py-3 text-sm text-white focus:outline-none transition-all rounded-none ${
                        errors.phone
                          ? "border-red-500/50 focus:border-red-500"
                          : formValues.phone && !errors.phone
                          ? "border-gold-400/50 focus:border-gold-400"
                          : "border-white/10 focus:border-gold-400"
                      }`}
                      placeholder="e.g. +1 (555) 0199"
                    />
                    {errors.phone && (
                      <span className="text-red-400 text-xs mt-1.5">{errors.phone}</span>
                    )}
                  </div>

                  {/* Project Type */}
                  <div className="flex flex-col">
                    <label
                      htmlFor="projectType"
                      className="font-heading text-[10px] sm:text-xs uppercase tracking-widest text-slate-400 mb-2 font-semibold"
                    >
                      Project Type *
                    </label>
                    <select
                      id="projectType"
                      name="projectType"
                      value={formValues.projectType}
                      onChange={handleInputChange}
                      className={`bg-navy-950 border px-4 py-3 text-sm text-slate-300 focus:outline-none transition-all rounded-none ${
                        errors.projectType
                          ? "border-red-500/50 focus:border-red-500"
                          : formValues.projectType && !errors.projectType
                          ? "border-gold-400/50 focus:border-gold-400"
                          : "border-white/10 focus:border-gold-400"
                      }`}
                    >
                      <option value="">Select Specialty</option>
                      <option value="Residential">Residential Construction</option>
                      <option value="Commercial">Commercial Construction</option>
                      <option value="Renovation">Renovation Services</option>
                      <option value="Interior">Interior Design</option>
                      <option value="Other">Other / Joint Consult</option>
                    </select>
                    {errors.projectType && (
                      <span className="text-red-400 text-xs mt-1.5">{errors.projectType}</span>
                    )}
                  </div>
                </div>

                {/* Budget Range */}
                <div className="flex flex-col">
                  <label
                    htmlFor="budgetRange"
                    className="font-heading text-[10px] sm:text-xs uppercase tracking-widest text-slate-400 mb-2 font-semibold"
                  >
                    Budget Range *
                  </label>
                  <select
                    id="budgetRange"
                    name="budgetRange"
                    value={formValues.budgetRange}
                    onChange={handleInputChange}
                    className={`bg-navy-950 border px-4 py-3 text-sm text-slate-300 focus:outline-none transition-all rounded-none ${
                      errors.budgetRange
                        ? "border-red-500/50 focus:border-red-500"
                        : formValues.budgetRange && !errors.budgetRange
                        ? "border-gold-400/50 focus:border-gold-400"
                        : "border-white/10 focus:border-gold-400"
                    }`}
                  >
                    <option value="">Select Budget Limit</option>
                    <option value="Under 100K">Under $100K</option>
                    <option value="100K - 500K">$100K - $500K</option>
                    <option value="500K - 2M">$500K - $2M</option>
                    <option value="2M - 5M">$2M - $5M</option>
                    <option value="5M+">$5M+ (Luxury Estate/Commercial)</option>
                  </select>
                  {errors.budgetRange && (
                    <span className="text-red-400 text-xs mt-1.5">{errors.budgetRange}</span>
                  )}
                </div>

                {/* Project Description */}
                <div className="flex flex-col">
                  <label
                    htmlFor="description"
                    className="font-heading text-[10px] sm:text-xs uppercase tracking-widest text-slate-400 mb-2 font-semibold"
                  >
                    Project Details & Scope *
                  </label>
                  <textarea
                    id="description"
                    name="description"
                    value={formValues.description}
                    onChange={handleInputChange}
                    rows={4}
                    className={`bg-navy-950 border px-4 py-3 text-sm text-white focus:outline-none transition-all rounded-none resize-none ${
                      errors.description
                        ? "border-red-500/50 focus:border-red-500"
                        : formValues.description && !errors.description
                        ? "border-gold-400/50 focus:border-gold-400"
                        : "border-white/10 focus:border-gold-400"
                    }`}
                    placeholder="Describe your design intentions, timeline expectations, or zoning parameters..."
                  />
                  {errors.description && (
                    <span className="text-red-400 text-xs mt-1.5">{errors.description}</span>
                  )}
                </div>

                {/* CTA Submit Button */}
                <div className="pt-2">
                  <Button
                    type="submit"
                    variant="primary"
                    size="lg"
                    fullWidth
                    isLoading={isSubmitting}
                  >
                    Submit Project Request
                  </Button>
                </div>
              </motion.form>
            ) : (
              <motion.div
                key="success-message"
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.5, ease: "easeOut" }}
                className="absolute inset-0 flex flex-col items-center justify-center text-center p-8 sm:p-12"
              >
                <div className="w-16 h-16 rounded-full bg-gold-400/10 text-gold-400 border border-gold-400/20 flex items-center justify-center mb-6">
                  <FiCheckCircle className="w-8 h-8" />
                </div>
                <h3 className="font-heading text-2xl font-bold uppercase tracking-wider text-white mb-4">
                  Request Received
                </h3>
                <p className="text-sm text-slate-400 font-light leading-relaxed max-w-md mb-8">
                  Thank you for submitting your project specifications. Our custom engineering and management team will review your parameters and contact you within 24 hours to schedule a consultation.
                </p>
                <button
                  onClick={() => setIsSuccess(false)}
                  className="font-heading text-[10px] uppercase tracking-widest text-gold-400 hover:text-white transition-colors py-2 px-4 border border-gold-400/30 hover:border-white focus:outline-none cursor-pointer"
                >
                  Submit Another Plan
                </button>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </div>
    </Container>
  );
};

export default Contact;
