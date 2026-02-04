import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { faqs } from "./faqs.js";

export default function FAQSection() {
  const [activeIndex, setActiveIndex] = useState(null);

  return (
    <section className="relative py-20 sm:py-28 text-white font-clash-light tracking-wide">
      <div className="max-w-5xl mx-auto px-4 sm:px-6">
        {/* Title */}
        <div className="text-center mb-10 sm:mb-14">
          <p className="text-sm uppercase tracking-[0.35em] text-white/60 font-switzer">
            FAQ
          </p>
          <motion.h2
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="mt-3 text-3xl sm:text-5xl font-clash-medium text-gradient"
          >
            Quick Answers
          </motion.h2>
        </div>

        {/* FAQ List */}
        <div className="space-y-6">
          {faqs.map((faq, index) => {
            const isOpen = activeIndex === index;

            return (
              <motion.div
                key={index}
                onClick={() => setActiveIndex(isOpen ? null : index)}
                className="group cursor-pointer"
                layout
                transition={{ layout: { duration: 0.35, ease: "easeOut" } }}
              >
                <div className="border-t border-white/10 pt-5">
                  <div className="flex items-start justify-between">
                    <div>
                      <span className="text-[10px] tracking-[0.35em] text-white/40 font-switzer">
                        {String(index + 1).padStart(2, "0")}
                      </span>
                      <h3 className="mt-2 text-base sm:text-lg font-medium leading-snug transition-colors duration-300 group-hover:text-white">
                        {faq.question}
                      </h3>
                      <span
                        className={`mt-2 block h-px w-0 bg-[var(--color-orange)] transition-all duration-500 ${
                          isOpen ? "w-full" : "group-hover:w-16"
                        }`}
                      />
                    </div>
                    <motion.span
                      animate={{ rotate: isOpen ? 45 : 0 }}
                      transition={{ duration: 0.3, ease: "easeInOut" }}
                      className="text-xl sm:text-2xl text-white/60 transition-colors duration-300 group-hover:text-[var(--color-orange)]"
                    >
                      +
                    </motion.span>
                  </div>

                  <AnimatePresence initial={false}>
                    {isOpen && (
                      <motion.div
                        key="content"
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: "auto" }}
                        exit={{ opacity: 0, height: 0 }}
                        transition={{ duration: 0.35, ease: "easeOut" }}
                        className="overflow-hidden"
                      >
                        <div className="mt-3">
                          <p className="text-sm sm:text-base text-gray-300 leading-relaxed">
                            {faq.answer}
                          </p>
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
