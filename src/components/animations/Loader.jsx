import React, { useEffect, useState } from "react";
import { motion, AnimatePresence } from "motion/react";

const words = [
  "Hello",
  "اسلام علیکم",
  "Bonjour",
  "مرحبا",
  "Hola",
  "Ciao",
  "Hallo",
  
  
 
];

export default function Loader({ durationMs = 3000, onComplete }) {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const stepMs = Math.max(320, Math.floor(durationMs / words.length));
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % words.length);
    }, stepMs);

    const timeout = setTimeout(() => {
      clearInterval(interval);
      onComplete?.();
    }, durationMs);

    return () => {
      clearInterval(interval);
      clearTimeout(timeout);
    };
  }, [durationMs, onComplete]);

  return (
    <motion.div
      className="fixed inset-0 z-[9999] flex items-center justify-center bg-black"
      initial={{ opacity: 1 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.3, ease: "easeOut" }}
    >
      <div className="flex flex-col items-center gap-4">
        <div className="min-h-[3rem] sm:min-h-[4rem] flex items-center">
          <AnimatePresence mode="wait" initial={false}>
            <motion.span
              key={index}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.15, ease: "easeOut" }}
              className="text-3xl sm:text-5xl font-clash-medium text-white"
            >
              {words[index]}
            </motion.span>
          </AnimatePresence>
        </div>
      
      </div>
    </motion.div>
  );
}
