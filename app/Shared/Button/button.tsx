"use client";

import { motion } from "framer-motion";
import { AnimatePresence } from "framer-motion";
import { useState } from "react";

interface AnimatedButtonProps {
  defaultText: string[];
  hoverText: string[];
  Class: string[];
}

export default function AnimatedButton({ defaultText, hoverText,Class }: AnimatedButtonProps) {
  const [hovered, setHovered] = useState(false);

  return (
    <button
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      className={`${Class} flex flex-row gap-x-[5px] font-bold border px-[20px] py-[8px] justify-center items-center rounded-full overflow-hidden`}
    >
      <AnimatePresence mode="wait">
        <motion.span
          key={hovered ? "hover" : "normal"}
          initial={{ opacity: 0, y: 5 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -5 }}
          className="flex flex-row gap-x-[5px]"
        >
          {(hovered ? hoverText : defaultText).map((word, i) => (
            <motion.span
              key={i}
              initial={{ opacity: 0, y: 5 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -5 }}
              transition={{ duration: 0.2, delay: i * 0.15 }}
              className="block"
            >
              {word}
            </motion.span>
          ))}
        </motion.span>
      </AnimatePresence>
    </button>
  );
}
