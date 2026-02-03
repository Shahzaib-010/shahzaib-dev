import React from "react";
import { motion } from "motion/react";
import ScrollReveal from "../components/animations/ScrollReveal";


function About() {
  return (
    <section className="w-full text-white flex flex-col items-center pt-16 pb-24">
      {/* Header */}
      <div className="w-full max-w-6xl px-6">
        <p className="text-sm uppercase tracking-[0.35em] text-white/60 font-switzer">
          About
        </p>
        <div className=" flex flex-col lg:flex-row lg:items-end lg:justify-between gap-6">
          <h2 className="text-4xl md:text-6xl font-clash-medium text-gradient leading-tight">
            Design Precision
          </h2>
         
        </div>
      </div>

      {/* Body */}
      <div className="w-full max-w-6xl px-6 mt-12 grid grid-cols-1 lg:grid-cols-[1.2fr_0.8fr] gap-10 items-start">
        {/* Reveal Text */}
        <div className="font-clash-regular text-left md:text-3xl leading-tight tracking-wide">
          <ScrollReveal
            text="I create unconventional yet functional web interfaces that value precision over noise. From layout systems to micro‑interactions, I focus on clarity, usability, and refined execution. Strong frontend foundations paired with a design‑aware mindset allow me to ship experiences that feel effortless to use and polished to look at."
            fgColor="#3a3a3a"
            bgColor="#ffffff"
          />
        </div>

        {/* Highlights */}
        <div className="space-y-4">
          <motion.div
            whileHover={{ y: -4 }}
            transition={{ type: "spring", stiffness: 300, damping: 20 }}
            className="group relative overflow-hidden rounded-2xl border border-white/10 bg-black/50 px-5 py-5"
          >
            <div className="pointer-events-none absolute inset-0 opacity-0 group-hover:opacity-100 transition duration-500 bg-[linear-gradient(120deg,rgba(0,255,209,0.10),rgba(0,115,255,0.08),rgba(255,109,16,0.08))]" />
            <div className="flex items-center justify-between">
              <p className="text-xs uppercase tracking-[0.3em] text-white/50 font-switzer">
                Focus
              </p>
              <span className="text-[10px] text-white/40 group-hover:text-[var(--color-orange)] transition-colors">
                /01
              </span>
            </div>
            <div className="mt-3 w-fit">
              <h3 className="text-xl font-clash-medium text-[var(--color-orange)]">Interface Systems</h3>
              <span className="mt-1 block h-px w-0 bg-[var(--color-orange)] transition-all duration-500 group-hover:w-full" />
            </div>
            <p className="mt-2 text-sm text-white/70 font-switzer leading-relaxed">
              Consistent grids, type scales, and component logic that keep UI clean
              and scalable.
            </p>
          </motion.div>

          <motion.div
            whileHover={{ y: -4 }}
            transition={{ type: "spring", stiffness: 300, damping: 20 }}
            className="group relative overflow-hidden rounded-2xl border border-white/10 bg-black/50 px-5 py-5"
          >
            <div className="pointer-events-none absolute inset-0 opacity-0 group-hover:opacity-100 transition duration-500 bg-[linear-gradient(120deg,rgba(0,255,209,0.10),rgba(0,115,255,0.08),rgba(255,109,16,0.08))]" />
            <div className="flex items-center justify-between">
              <p className="text-xs uppercase tracking-[0.3em] text-white/50 font-switzer">
                Strength
              </p>
              <span className="text-[10px] text-white/40 group-hover:text-[var(--color-orange)] transition-colors">
                /02
              </span>
            </div>
            <div className="mt-3 w-fit">
              <h3 className="text-xl font-clash-medium text-[var(--color-orange)]">Performance + Motion</h3>
              <span className="mt-1 block h-px w-0 bg-[var(--color-orange)] transition-all duration-500 group-hover:w-full" />
            </div>
            <p className="mt-2 text-sm text-white/70 font-switzer leading-relaxed">
              Subtle animations with intent, optimized for responsiveness across
              devices.
            </p>
          </motion.div>

          <motion.div
            whileHover={{ y: -4 }}
            transition={{ type: "spring", stiffness: 300, damping: 20 }}
            className="group relative overflow-hidden rounded-2xl border border-white/10 bg-black/50 px-5 py-5"
          >
            <div className="pointer-events-none absolute inset-0 opacity-0 group-hover:opacity-100 transition duration-500 bg-[linear-gradient(120deg,rgba(0,255,209,0.10),rgba(0,115,255,0.08),rgba(255,109,16,0.08))]" />
            <div className="flex items-center justify-between">
              <p className="text-xs uppercase tracking-[0.3em] text-white/50 font-switzer">
                Delivery
              </p>
              <span className="text-[10px] text-white/40 group-hover:text-[var(--color-orange)] transition-colors">
                /03
              </span>
            </div>
            <div className="mt-3 w-fit">
              <h3 className="text-xl font-clash-medium text-[var(--color-orange)]">Production Ready</h3>
              <span className="mt-1 block h-px w-0 bg-[var(--color-orange)] transition-all duration-500 group-hover:w-full" />
            </div>
            <p className="mt-2 text-sm text-white/70 font-switzer leading-relaxed">
              Clean code, reusable components, and a focus on maintainability.
            </p>
          </motion.div>
        </div>
      </div>

    </section>
  );
}

export default About;
