"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { jobTitleVariants } from "@/lib/figmaAnimations";

const TITLES = [
  "Data Engineer",
  "Analytics Engineer",
  "Designing Data Pipelines",
  "Building Reliable Systems",
];

export default function JobTitle() {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((i) => (i + 1) % TITLES.length);
    }, 2800);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="relative h-[3rem] overflow-hidden">
      <AnimatePresence mode="wait">
        <motion.span
          key={index}
          variants={jobTitleVariants}
          initial="initial"
          animate="animate"
          exit="exit"
          className="absolute left-0 top-0 text-lg md:text-xl font-sans tracking-tight text-neutral-500 dark:text-neutral-400"
        >
          {TITLES[index]}
        </motion.span>
      </AnimatePresence>
    </div>
  );
}
