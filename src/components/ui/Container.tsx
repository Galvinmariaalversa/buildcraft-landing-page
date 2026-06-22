"use client";

import React from "react";
import { motion } from "framer-motion";

export interface ContainerProps {
  children: React.ReactNode;
  as?: "div" | "section" | "article" | "header" | "footer";
  className?: string;
  id?: string;
  animate?: boolean;
  delay?: number;
  duration?: number;
  width?: "sm" | "md" | "lg" | "xl" | "full";
  py?: "none" | "sm" | "md" | "lg" | "xl";
}

const motionElements = {
  div: motion.div,
  section: motion.section,
  article: motion.article,
  header: motion.header,
  footer: motion.footer,
};

export const Container: React.FC<ContainerProps> = ({
  children,
  as = "section",
  className = "",
  id,
  animate = false,
  delay = 0,
  duration = 0.6,
  width = "xl",
  py = "md",
}) => {
  // Width restrictions matching corporate standards
  const widthStyles = {
    sm: "max-w-3xl",
    md: "max-w-5xl",
    lg: "max-w-6xl",
    xl: "max-w-7xl",
    full: "max-w-full",
  };

  // Spacious luxury layout padding
  const pyStyles = {
    none: "py-0",
    sm: "py-8 md:py-12",
    md: "py-16 md:py-24",
    lg: "py-24 md:py-36",
    xl: "py-32 md:py-48",
  };

  const Component = as;

  // Responsive padding structure
  const innerClass = `w-full mx-auto px-6 sm:px-8 lg:px-12 ${widthStyles[width]}`;
  const outerClass = `${pyStyles[py]} ${className}`;

  if (animate) {
    const MotionComponent = motionElements[as];
    return (
      <MotionComponent
        id={id}
        className={outerClass}
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{
          duration: duration,
          delay: delay,
          ease: [0.16, 1, 0.3, 1], // Custom premium ease-out
        }}
      >
        <div className={innerClass}>{children}</div>
      </MotionComponent>
    );
  }

  return (
    <Component id={id} className={outerClass}>
      <div className={innerClass}>{children}</div>
    </Component>
  );
};

export default Container;
