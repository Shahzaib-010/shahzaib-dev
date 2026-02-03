import { useInView } from "../animations/useInView";

const steps = [
  {
    number: "01",
    title: "Discovery & Scope",
    desc: "Clarify goals, users, and constraints. Define scope, timeline, and success metrics.",
    meta: "Briefing • Research • Constraints",
  },
  {
    number: "02",
    title: "Design System First",
    desc: "Create a clean visual language: type scale, spacing rules, and core components.",
    meta: "Typography • Layout • Components",
  },
  {
    number: "03",
    title: "Build for Performance",
    desc: "Implement with reusable UI, accessibility, and optimized motion across devices.",
    meta: "Responsive • A11y • Motion",
  },
  {
    number: "04",
    title: "Refine & Launch",
    desc: "Polish details, test flows, and deliver production-ready experiences.",
    meta: "QA • Iteration • Delivery",
  },
];

export default function Approach() {
  return (
    <section className="w-full py-28 text-white">
      {/* Heading */}
      <div className="max-w-6xl mx-auto px-6 mb-16 md:mb-20">
        <p className="text-sm uppercase tracking-[0.35em] text-white/60 font-switzer">
          Process
        </p>
        <div className=" flex flex-col lg:flex-row lg:items-end lg:justify-between gap-6">
          <h2 className="text-4xl md:text-6xl font-clash-medium text-gradient leading-tight">
            Creative Process
          </h2>
          
        </div>
      </div>

      {/* Grid */}
      <div className="max-w-6xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-6">
        {steps.map((step, i) => {
          const [ref, visible] = useInView();

          return (
            <div
              key={i}
              ref={ref}
              className={`
                group relative p-7 md:p-8 rounded-2xl
                bg-black border border-white/10
                transition-all duration-500 ease-out
                hover:scale-[1.01]
                hover:gradient-border
                ${visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"}
              `}
            >
              <div className="pointer-events-none absolute inset-0 opacity-0 group-hover:opacity-100 transition duration-500 bg-[linear-gradient(120deg,rgba(0,255,209,0.10),rgba(0,115,255,0.08),rgba(255,109,16,0.08))]" />
              {/* Top Row */}
              <div className="flex items-center justify-between">
                <span className="text-sm  font-switzer text-[var(--color-orange)]">
                  // {step.number}
                </span>
                <span className="text-xs uppercase text-white/50 font-switzer transition-colors duration-300 group-hover:text-[var(--color-orange)]">
                  {step.meta}
                </span>
              </div>

              {/* Title */}
              <h3 className="mt-6 text-2xl md:text-3xl font-clash-medium group-hover:text-[var(--color-orange)]">
                {step.title}
              </h3>

              {/* Description */}
              <p className="mt-3 text-sm md:text-base text-white/70 leading-relaxed font-switzer">
                {step.desc}
              </p>

              {/* Micro Interaction */}
              <div className="mt-6 flex items-center gap-3 text-sm font-switzer text-white/60">
                <span className="h-px w-8 bg-white/20 transition-all duration-300 group-hover:w-14 group-hover:bg-[var(--color-orange)]" />
                <span className="transition-colors duration-300 group-hover:text-white">
                  View step details
                </span>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}
