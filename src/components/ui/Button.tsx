"use client";

import React from "react";
import { motion, HTMLMotionProps } from "framer-motion";

export interface ButtonProps extends HTMLMotionProps<"button"> {
  variant?: "primary" | "secondary" | "outline" | "ghost";
  size?: "sm" | "md" | "lg";
  isLoading?: boolean;
  icon?: React.ReactNode;
  iconPosition?: "left" | "right";
  fullWidth?: boolean;
  children?: React.ReactNode;
}

export const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  (
    {
      className = "",
      variant = "primary",
      size = "md",
      isLoading = false,
      icon,
      iconPosition = "left",
      fullWidth = false,
      children,
      disabled,
      ...props
    },
    ref
  ) => {
    // Base classes for our premium buttons
    const baseStyles =
      "inline-flex items-center justify-center font-heading font-medium tracking-wide uppercase transition-all duration-300 rounded-none focus:outline-none cursor-pointer disabled:opacity-50 disabled:cursor-not-allowed select-none";

    // Premium corporate aesthetic sizing
    const sizeStyles = {
      sm: "px-4 py-2 text-xs gap-1.5",
      md: "px-6 py-3 text-xs gap-2",
      lg: "px-8 py-4 text-sm gap-2.5 tracking-widest",
    };

    // Curated harmonized luxury color palette classes
    const variantStyles = {
      primary:
        "bg-gold-400 text-navy-800 hover:bg-gold-500 shadow-sm border border-gold-400 hover:border-gold-500 text-shadow-sm font-semibold",
      secondary:
        "bg-navy-800 text-gold-400 border border-gold-400/30 hover:border-gold-400 hover:bg-navy-900",
      outline:
        "bg-transparent text-navy-800 border border-navy-800/20 hover:border-navy-800 hover:bg-navy-50/50 dark:text-slate-100 dark:border-slate-100/20 dark:hover:border-slate-100 dark:hover:bg-navy-900/50",
      ghost:
        "bg-transparent text-navy-800 hover:bg-navy-50/50 dark:text-slate-200 dark:hover:bg-navy-850",
    };

    // Spin animation styling for loader
    const spinner = (
      <svg
        className="animate-spin -ml-1 mr-3 h-4 w-4 text-current"
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
      >
        <circle
          className="opacity-25"
          cx="12"
          cy="12"
          r="10"
          stroke="currentColor"
          strokeWidth="4"
        ></circle>
        <path
          className="opacity-75"
          fill="currentColor"
          d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
        ></path>
      </svg>
    );

    return (
      <motion.button
        ref={ref}
        whileHover={disabled || isLoading ? {} : { scale: 1.02 }}
        whileTap={disabled || isLoading ? {} : { scale: 0.98 }}
        disabled={disabled || isLoading}
        className={`
          ${baseStyles}
          ${sizeStyles[size]}
          ${variantStyles[variant]}
          ${fullWidth ? "w-full" : ""}
          ${className}
        `}
        {...props}
      >
        {isLoading && spinner}
        {!isLoading && icon && iconPosition === "left" && (
          <span className="flex items-center shrink-0">{icon}</span>
        )}
        <span className="relative flex items-center">{children}</span>
        {!isLoading && icon && iconPosition === "right" && (
          <span className="flex items-center shrink-0">{icon}</span>
        )}
      </motion.button>
    );
  }
);

Button.displayName = "Button";
export default Button;
