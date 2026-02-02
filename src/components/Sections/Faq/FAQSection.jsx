import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {faqs} from "./faqs.js"

export default function FAQSection() {
  const [activeIndex, setActiveIndex] = useState(null);

  return (
    <section className="relative py-16 sm:py-24 text-white font-clash-light tracking-wide">
      <div className="max-w-4xl mx-auto px-4 sm:px-6">

        {/* Title */}
        <motion.h2
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-3xl sm:text-4xl font-clash-semibold text-center mb-10 sm:mb-14"
        >
          Frequently Asked Questions
        </motion.h2>

        {/* FAQ List */}
        <div className="space-y-3 sm:space-y-4 w-[60vw] bg-black">
          {faqs.map((faq, index) => {
            const isOpen = activeIndex === index;

            return (
              <motion.div
                layout
                key={index}
                onClick={() =>
                  setActiveIndex(isOpen ? null : index)
                }
                className="group relative cursor-pointer rounded-xl
                           bg-stone-400/10 border border-white/10
                           overflow-hidden"
              >
                {/* Glow */}
                <div
                  className="
                    pointer-events-none absolute inset-0 rounded-xl
                    opacity-0 group-hover:opacity-100
                    transition duration-300
                    bg-white/5 blur-xl
                  "
                />

                {/* Question */}
                <motion.div
                  layout
                  className="relative z-10 flex items-center justify-between
                             px-4 sm:px-5 py-4"
                >
                  <h3 className="text-base sm:text-lg font-medium leading-snug">
                    {faq.question}
                  </h3>

                  {/* Plus / Minus */}
                  <motion.span
                    animate={{ rotate: isOpen ? 180 : 0 }}
                    transition={{ duration: 0.3, ease: "easeInOut" }}
                    className="text-xl sm:text-2xl ml-4"
                  >
                    {isOpen ? "−" : "+"}
                  </motion.span>
                </motion.div>

                {/* Answer */}
                <AnimatePresence>
                  {isOpen && (
                    <motion.div
                      layout
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      exit={{ opacity: 0 }}
                      transition={{ duration: 0.25 }}
                      className="relative z-10 px-4 sm:px-5 pb-4"
                    >
                      <p className="text-sm sm:text-base text-gray-300 leading-relaxed">
                        {faq.answer}
                      </p>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
