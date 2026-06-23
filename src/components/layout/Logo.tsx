import React from "react";

interface LogoProps extends React.HTMLAttributes<SVGSVGElement> {
  /** Additional CSS classes */
  className?: string;
}

/**
 * Premium Logo component used across the corporate site.
 * Renders the custom geometric "BC" skyscraper monogram.
 */
const Logo: React.FC<LogoProps> = ({ className = "", ...props }) => {
  return (
    <svg
      viewBox="0 0 100 100"
      aria-label="BuildCraft logo"
      className={`inline-block ${className}`}
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <defs>
        {/* Premium Metallic Champagne Gold Gradient */}
        <linearGradient id="navbarLogoGoldGradient" x1="0%" y1="100%" x2="100%" y2="0%">
          <stop offset="0%" stopColor="#9A7B4C" />
          <stop offset="30%" stopColor="#C9A66B" />
          <stop offset="70%" stopColor="#E6C594" />
          <stop offset="100%" stopColor="#C9A66B" />
        </linearGradient>
        <filter id="navbarLogoGlow" x="-20%" y="-20%" width="140%" height="140%">
          <feGaussianBlur stdDeviation="1.5" result="blur" />
          <feMerge>
            <feMergeNode in="blur" />
            <feMergeNode in="SourceGraphic" />
          </feMerge>
        </filter>
      </defs>

      <g id="skyscraper-monogram" filter="url(#navbarLogoGlow)">
        {/* Center Tower Spire */}
        <rect x="44" y="14" width="12" height="66" rx="1" fill="url(#navbarLogoGoldGradient)" />
        
        {/* Left Inner Tower (Part of C) */}
        <rect x="28" y="26" width="12" height="54" rx="1" fill="url(#navbarLogoGoldGradient)" />
        
        {/* Left Outer Tower (Part of C) */}
        <rect x="12" y="38" width="12" height="42" rx="1" fill="url(#navbarLogoGoldGradient)" />
        
        {/* Left Structural Connectors (C loops) */}
        <rect x="24" y="38" width="4" height="6" fill="url(#navbarLogoGoldGradient)" />
        <rect x="24" y="74" width="4" height="6" fill="url(#navbarLogoGoldGradient)" />
        
        {/* Right Inner Tower (Part of B) */}
        <rect x="60" y="26" width="12" height="54" rx="1" fill="url(#navbarLogoGoldGradient)" />
        
        {/* Right Outer Tower (Part of B) */}
        <rect x="76" y="38" width="12" height="42" rx="1" fill="url(#navbarLogoGoldGradient)" />
        
        {/* Right Structural Connectors (B loops) */}
        <rect x="72" y="38" width="4" height="6" fill="url(#navbarLogoGoldGradient)" />
        <rect x="72" y="56" width="4" height="6" fill="url(#navbarLogoGoldGradient)" />
        <rect x="72" y="74" width="4" height="6" fill="url(#navbarLogoGoldGradient)" />
      </g>
    </svg>
  );
};

export default Logo;
