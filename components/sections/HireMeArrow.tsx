"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { slideUp } from "@/lib/figmaAnimations";

export default function HireMeArrow() {
  return (
    <motion.div
      variants={slideUp}
      initial="hidden"
      animate="visible"
      transition={{ delay: 0.6 }}
      className="absolute -right-10 -top-4 flex items-center gap-1"
    >
      <svg
        width="36"
        height="36"
        viewBox="0 0 24 24"
        fill="none"
        className="text-muted-foreground"
      >
        <path
          d="M3 21C6 15 12 10 21 6"
          stroke="currentColor"
          strokeWidth="1.5"
          strokeLinecap="round"
        />
        <path
          d="M15 6h6v6"
          stroke="currentColor"
          strokeWidth="1.5"
          strokeLinecap="round"
        />
      </svg>

      <Link
        href="/contact"
        className="text-xs uppercase tracking-wide text-muted-foreground hover:text-foreground"
      >
        Hire me
      </Link>
    </motion.div>
  );
}
