import { Variants } from "framer-motion";

/**
 * Figma-inspired animation variants for Framer Motion
 * Soft easing curves, 0.4–0.7s durations, no bounce effects
 */

// Easing curves
export const easing = {
  smooth: [0.43, 0.13, 0.23, 0.96],
  softOut: [0.16, 1, 0.3, 1],
  softIn: [0.7, 0, 0.84, 0],
  standard: [0.4, 0, 0.2, 1],
};

// Fade in animation
export const fadeIn: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      duration: 0.6,
      ease: easing.smooth,
    },
  },
};

// Slide up animation
export const slideUp: Variants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5,
      ease: easing.softOut,
    },
  },
};

// Slide in from left
export const slideInLeft: Variants = {
  hidden: { opacity: 0, x: -30 },
  visible: {
    opacity: 1,
    x: 0,
    transition: {
      duration: 0.5,
      ease: easing.softOut,
    },
  },
};

// Slide in from right
export const slideInRight: Variants = {
  hidden: { opacity: 0, x: 30 },
  visible: {
    opacity: 1,
    x: 0,
    transition: {
      duration: 0.5,
      ease: easing.softOut,
    },
  },
};

// Stagger container for child animations
export const staggerContainer: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.1,
    },
  },
};

// Stagger item
export const staggerItem: Variants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.4,
      ease: easing.smooth,
    },
  },
};

// Hover lift effect
export const hoverLift = {
  rest: {
    scale: 1,
    y: 0,
  },
  hover: {
    scale: 1.02,
    y: -4,
    transition: {
      duration: 0.3,
      ease: easing.softOut,
    },
  },
};

// Scale in animation
export const scaleIn: Variants = {
  hidden: { opacity: 0, scale: 0.95 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: {
      duration: 0.4,
      ease: easing.smooth,
    },
  },
};

// Text ticker animation (continuous loop)
export const textTicker = {
  animate: {
    y: [0, -100],
    transition: {
      y: {
        repeat: Infinity,
        repeatType: "loop" as const,
        duration: 3,
        ease: "linear",
      },
    },
  },
};

// Pulse animation for "Hire Me" tag
export const pulse: Variants = {
  initial: { scale: 1, opacity: 1 },
  animate: {
    scale: [1, 1.05, 1],
    opacity: [1, 0.8, 1],
    transition: {
      duration: 2,
      repeat: Infinity,
      ease: easing.smooth,
    },
  },
};

// Float animation
export const float: Variants = {
  animate: {
    y: [0, -10, 0],
    transition: {
      duration: 3,
      repeat: Infinity,
      ease: easing.smooth,
    },
  },
};

// Reveal from bottom with clip path
export const revealBottom: Variants = {
  hidden: {
    clipPath: "inset(100% 0% 0% 0%)",
    opacity: 0,
  },
  visible: {
    clipPath: "inset(0% 0% 0% 0%)",
    opacity: 1,
    transition: {
      duration: 0.7,
      ease: easing.softOut,
    },
  },
};

// Drawer slide animation
export const drawer: Variants = {
  closed: {
    x: "100%",
    transition: {
      duration: 0.4,
      ease: easing.standard,
    },
  },
  open: {
    x: 0,
    transition: {
      duration: 0.4,
      ease: easing.standard,
    },
  },
};

// Page transition
export const pageTransition: Variants = {
  initial: { opacity: 0, y: 20 },
  animate: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5,
      ease: easing.smooth,
    },
  },
  exit: {
    opacity: 0,
    y: -20,
    transition: {
      duration: 0.3,
      ease: easing.smooth,
    },
  },
};

// Appear on scroll
export const appearOnScroll: Variants = {
  offscreen: {
    opacity: 0,
    y: 50,
  },
  onscreen: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: easing.softOut,
    },
  },
};

// Card hover effect
export const cardHover = {
  rest: {
    scale: 1,
    boxShadow: "0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)",
  },
  hover: {
    scale: 1.03,
    boxShadow: "0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)",
    transition: {
      duration: 0.3,
      ease: easing.softOut,
    },
  },
};

// Job title swap animation (Rinkit-style)
export const jobTitleVariants: Variants = {
  initial: {
    opacity: 0,
    y: 24,
  },
  animate: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: easing.smooth,
    },
  },
  exit: {
    opacity: 0,
    y: -24,
    transition: {
      duration: 0.4,
      ease: easing.softIn,
    },
  },
};

