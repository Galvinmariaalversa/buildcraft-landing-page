import React from "react";

interface PrimaryLogoProps extends React.HTMLAttributes<HTMLDivElement> {
  /** The theme layout of the logo. 'dark' is for dark backgrounds (white text), 'light' is for light backgrounds (navy text). */
  theme?: "dark" | "light";
  /** Sizing of the monogram icon in pixels */
  iconSize?: number;
  /** Custom className for container */
  className?: string;
}

/**
 * Reusable Primary Logo component for BuildCraft.
 * Includes the luxury geometric 'BC' skyscraper monogram and modern high-tracking typography.
 */
export const PrimaryLogo: React.FC<PrimaryLogoProps> = ({
  theme = "dark",
  iconSize = 48,
  className = "",
  ...props
}) => {
  const isDark = theme === "dark";

  return (
    <div className={`flex items-center gap-4 ${className}`} {...props}>
      {/* Monogram Icon */}
      <svg
        viewBox="0 0 100 100"
        width={iconSize}
        height={iconSize}
        aria-label="BuildCraft logo"
        className="flex-shrink-0"
        xmlns="http://www.w3.org/2000/svg"
      >
        <defs>
          {/* Premium Metallic Champagne Gold Gradient */}
          <linearGradient id="primaryLogoGoldGradient" x1="0%" y1="100%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="#9A7B4C" />
            <stop offset="30%" stopColor="#C9A66B" />
            <stop offset="70%" stopColor="#E6C594" />
            <stop offset="100%" stopColor="#C9A66B" />
          </linearGradient>
          <filter id="primaryLogoGlow" x="-20%" y="-20%" width="140%" height="140%">
            <feGaussianBlur stdDeviation="1.5" result="blur" />
            <feMerge>
              <feMergeNode in="blur" />
              <feMergeNode in="SourceGraphic" />
            </feMerge>
          </filter>
        </defs>

        <g id="skyscraper-monogram" filter="url(#primaryLogoGlow)">
          {/* Center Tower Spire */}
          <rect x="44" y="14" width="12" height="66" rx="1" fill="url(#primaryLogoGoldGradient)" />
          
          {/* Left Inner Tower (Part of C) */}
          <rect x="28" y="26" width="12" height="54" rx="1" fill="url(#primaryLogoGoldGradient)" />
          
          {/* Left Outer Tower (Part of C) */}
          <rect x="12" y="38" width="12" height="42" rx="1" fill="url(#primaryLogoGoldGradient)" />
          
          {/* Left Structural Connectors (C loops) */}
          <rect x="24" y="38" width="4" height="6" fill="url(#primaryLogoGoldGradient)" />
          <rect x="24" y="74" width="4" height="6" fill="url(#primaryLogoGoldGradient)" />
          
          {/* Right Inner Tower (Part of B) */}
          <rect x="60" y="26" width="12" height="54" rx="1" fill="url(#primaryLogoGoldGradient)" />
          
          {/* Right Outer Tower (Part of B) */}
          <rect x="76" y="38" width="12" height="42" rx="1" fill="url(#primaryLogoGoldGradient)" />
          
          {/* Right Structural Connectors (B loops) */}
          <rect x="72" y="38" width="4" height="6" fill="url(#primaryLogoGoldGradient)" />
          <rect x="72" y="56" width="4" height="6" fill="url(#primaryLogoGoldGradient)" />
          <rect x="72" y="74" width="4" height="6" fill="url(#primaryLogoGoldGradient)" />
        </g>
      </svg>

      {/* Typography Lockup */}
      <span className="flex flex-col">
        <span
          className={`font-heading font-bold text-xl tracking-[0.18em] uppercase leading-none transition-colors duration-300 ${
            isDark ? "text-slate-100" : "text-navy-950"
          }`}
        >
          BuildCraft
        </span>
        <span className="font-sans text-[10px] tracking-[0.32em] text-gold-400 uppercase font-medium mt-1.5">
          Constructions
        </span>
      </span>
    </div>
  );
};

export default PrimaryLogo;
