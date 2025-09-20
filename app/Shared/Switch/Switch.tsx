"use client";
import { motion } from "framer-motion";
import { useEffect, useState } from "react";

interface AnimateSwitchProps {
  Texts: string[];
  Class: String[]
}

const Switch = ({ Texts,Class }: AnimateSwitchProps) => {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prevIndex) => (prevIndex + 1) % Texts.length);
    }, 5000);

    return () => clearInterval(interval);
  }, [Texts.length]);

  return (
      <motion.span
        key={index}
        initial={{ opacity: 0.5, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: -20 }}
        transition={{ duration: 1 }}
        className={`w-auto ${Class}`}
      >
        {Texts[index]}
      </motion.span>
  );
};

export default Switch;
