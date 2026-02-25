import { motion } from "motion/react";

export const IDOLogo = ({ className = "w-full h-full", color = "currentColor" }: { className?: string; color?: string }) => {
  return (
    <svg
      viewBox="0 0 300 150"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      aria-label="IDO Logo"
    >
      <defs>
        <linearGradient id="metallic-gradient" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor={color} stopOpacity="0.8" />
          <stop offset="50%" stopColor={color} stopOpacity="1" />
          <stop offset="100%" stopColor={color} stopOpacity="0.8" />
        </linearGradient>
        
        {/* Mask for the diamond facets (cuts) */}
        <mask id="diamond-facets">
          <rect x="0" y="0" width="300" height="150" fill="white" />
          {/* The cuts - black lines will be transparent */}
          <g stroke="black" strokeWidth="1.5" fill="none">
            {/* Horizontal Girdle */}
            <path d="M210 40 L250 40" />
            {/* Top Facets */}
            <path d="M218 25 L230 40 L242 25" />
            <path d="M230 25 L230 40" />
            {/* Bottom Facets */}
            <path d="M230 65 L223 40" />
            <path d="M230 65 L237 40" />
            <path d="M230 65 L230 40" />
          </g>
        </mask>

        {/* Mask to hide the ring behind the diamond */}
        <mask id="ring-cutout">
          <rect x="0" y="0" width="300" height="150" fill="white" />
          {/* Black shape where the diamond is, to hide the ring */}
          <path d="M208 38 L252 38 L230 68 Z" fill="black" stroke="black" strokeWidth="4" />
        </mask>
      </defs>

      {/* Musical Staff / Sound Wave Background Line */}
      <motion.path
        initial={{ pathLength: 0, opacity: 0 }}
        animate={{ pathLength: 1, opacity: 0.2 }}
        transition={{ duration: 1.5, ease: "easeInOut" }}
        d="M20 75 C 60 75, 80 40, 120 40 C 160 40, 180 110, 220 110 C 260 110, 280 75, 300 75"
        stroke={color}
        strokeWidth="2"
        fill="none"
      />

      {/* The 'I' - Microphone */}
      <motion.g
        initial={{ y: -20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
      >
        {/* Mic Head */}
        <rect x="55" y="35" width="20" height="30" rx="10" stroke={color} strokeWidth="3" fill="none" />
        <path d="M60 40 L70 40" stroke={color} strokeWidth="1" opacity="0.5" />
        <path d="M60 45 L70 45" stroke={color} strokeWidth="1" opacity="0.5" />
        <path d="M60 50 L70 50" stroke={color} strokeWidth="1" opacity="0.5" />
        <path d="M60 55 L70 55" stroke={color} strokeWidth="1" opacity="0.5" />
        
        {/* Mic Body/Stand */}
        <rect x="62" y="65" width="6" height="50" rx="2" fill={color} />
        <rect x="50" y="115" width="30" height="4" rx="2" fill={color} />
      </motion.g>

      {/* The 'D' - Play Button / Production */}
      <motion.g
        initial={{ scale: 0, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 0.6, delay: 0.3, type: "spring" }}
      >
        {/* Vertical Stem */}
        <path d="M110 35 L110 115" stroke={color} strokeWidth="6" strokeLinecap="round" />
        
        {/* Play Button Curve */}
        <path 
          d="M110 35 C 160 35, 170 75, 170 75 C 170 75, 160 115, 110 115" 
          stroke={color} 
          strokeWidth="6" 
          fill="none" 
          strokeLinecap="round"
        />
        
        {/* Play Icon Triangle inside the D */}
        <path 
          d="M125 55 L155 75 L125 95 Z" 
          fill={color} 
          opacity="0.8"
        />
      </motion.g>

      {/* The 'O' - Solid Diamond Ring */}
      <motion.g
        initial={{ rotate: -45, opacity: 0 }}
        animate={{ rotate: 0, opacity: 1 }}
        transition={{ duration: 0.8, delay: 0.6, ease: "easeOut" }}
      >
        {/* Ring Band - Masked to hide part behind diamond */}
        <circle 
          cx="230" cy="80" r="35" 
          stroke={color} 
          strokeWidth="7" 
          fill="none" 
          mask="url(#ring-cutout)"
        />
        
        {/* The Diamond - Solid with Facet Mask */}
        <motion.g
            initial={{ scale: 0, y: -10 }}
            animate={{ scale: 1, y: 0 }}
            transition={{ delay: 1.0, type: "spring", stiffness: 200 }}
        >
            {/* Diamond Shape */}
            <path 
                d="M210 40 L218 25 L242 25 L250 40 L230 65 Z" 
                fill={color}
                mask="url(#diamond-facets)"
            />
            
            {/* Sparkles / Stars */}
            <motion.g
              animate={{ opacity: [0.6, 1, 0.6], scale: [0.9, 1.1, 0.9] }}
              transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
            >
              {/* Left Star */}
              <path 
                d="M195 35 Q 200 35, 200 30 Q 200 35, 205 35 Q 200 35, 200 40 Q 200 35, 195 35" 
                fill={color} 
              />
              {/* Right Star */}
              <path 
                d="M260 30 Q 265 30, 265 25 Q 265 30, 270 30 Q 265 30, 265 35 Q 265 30, 260 30" 
                fill={color} 
              />
            </motion.g>
        </motion.g>
      </motion.g>
    </svg>
  );
};
