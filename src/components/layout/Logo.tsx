import React from 'react';

interface LogoProps extends React.HTMLAttributes<SVGSVGElement> {
  /** Additional CSS classes */
  className?: string;
}

/**
 * Premium Logo component used across the corporate site.
 * Renders an elegant SVG with gradient fill and subtle animation.
 * The component accepts a `className` prop to allow sizing and additional styling.
 */
const Logo: React.FC<LogoProps> = ({ className = '' }) => {
  return (
    <svg
      viewBox="0 0 100 100"
      aria-label="BuildCraft logo"
      className={`inline-block ${className}`}
      xmlns="http://www.w3.org/2000/svg"
    >
      {/* Gradient definition for a premium gold-to-amber look */}
      <defs>
        <linearGradient id="logoGradient" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#fcd44d" />
          <stop offset="100%" stopColor="#f9a825" />
        </linearGradient>
        <filter id="glow" x="-20%" y="-20%" width="140%" height="140%">
          <feGaussianBlur stdDeviation="2" result="coloredBlur" />
          <feMerge>
            <feMergeNode in="coloredBlur" />
            <feMergeNode in="SourceGraphic" />
          </feMerge>
        </filter>
      </defs>
      {/* Circle background with subtle glass‑like blur */}
      <circle cx="50" cy="50" r="45" fill="url(#logoGradient)" filter="url(#glow)" />
      {/* Monogram – B and C intertwined */}
      <text
        x="50%"
        y="55%"
        dominantBaseline="middle"
        textAnchor="middle"
        fontFamily="'Outfit', sans-serif"
        fontSize="48"
        fontWeight="900"
        fill="currentColor"
        opacity="0.9"
      >
        BC
      </text>
    </svg>
  );
};

export default Logo;
