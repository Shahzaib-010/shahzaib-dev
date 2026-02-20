import React from "react";

const projects = [
  {
    number: "01",
    title: "Sialkot Stallionz",
    role: "Development, UX",
    year: "2026",
    image: "/images/5sxpQeVzXaGycp162tMtytRY.avif",
    desc: "A bold brand system focused on clarity, pace, and conversion.",
    repo: "https://sialkotstallionz.com",
  },
  {
    number: "02",
    title: "HRMIS",
    role: "UX, UI, Development",
    year: "2025",
    image: "/images/0ramsUE1tOARs2GDYldPlBdVTP8.avif",
    desc: "A data‑driven product with refined layouts and tight interactions.",
    repo: "https://github.com/yourname/q-chart",
  },
  {
    number: "03",
    title: "BOOK PAY",
    role: "UX, UI, Branding",
    year: "2024",
    image: "/images/5sxpQeVzXaGycp162tMtytRY.avif",
    desc: "Minimal, trustworthy payment flows with strong visual hierarchy.",
    repo: "https://github.com/yourname/book-pay",
  },
];

function WorkCard({ project }) {
  return (
    <div className="group relative overflow-hidden rounded-2xl border border-white/10 bg-black/70 px-5 py-6 md:px-6 md:py-7 shadow-[0_10px_40px_rgba(0,0,0,0.25)] hover:shadow-[0_18px_60px_rgba(0,0,0,0.35)] transition-shadow">
      {/* Gradient Sweep */}
      <div className="pointer-events-none absolute inset-0 opacity-0 group-hover:opacity-100 transition duration-500 bg-[linear-gradient(120deg,rgba(0,255,209,0.10),rgba(0,115,255,0.08),rgba(255,109,16,0.08))]" />

      {/* Header Row (always visible) */}
      <div className="relative flex items-center justify-between gap-4">
        <div className="flex items-center gap-4">
          <span className="text-xs tracking-[0.35em] text-[var(--color-orange)] font-switzer">
            /{project.number}
          </span>
          <div className="w-fit">
            <h3 className="text-xl md:text-2xl font-clash-medium text-white">
              {project.title}
            </h3>
            <span className="mt-1 block h-px w-0 bg-[var(--color-orange)] transition-all duration-500 group-hover:w-full" />
          </div>
        </div>
      </div>

      {/* Details (always visible) */}
      <div className="relative mt-5 grid grid-cols-1 md:grid-cols-[1fr_0.9fr] gap-6 md:gap-8 items-stretch">
        <div className="flex flex-col">
          <p className="text-sm text-white/70 font-switzer leading-relaxed">
            {project.desc}
          </p>
          <div className="mt-3 flex flex-wrap items-center gap-3 text-xs uppercase tracking-[0.3em] text-white/50 font-switzer">
            <span>{project.role}</span>
            <span className="text-white/30">•</span>
            <span>{project.year}</span>
          </div>
          <a
            href={project.repo}
            target="_blank"
            rel="noreferrer"
            className="mt-auto pt-6 inline-flex items-center gap-2 text-xs uppercase tracking-[0.3em] text-white/70 hover:text-white"
          >
            View Repo
            <span className="transition-transform duration-300 group-hover:translate-x-1">
              →
            </span>
          </a>
        </div>
        <div className="pr-1 h-full">
          <img
            src={project.image}
            alt={project.title}
            className="w-full h-full min-h-[220px] rounded-xl object-cover border border-white/10"
          />
        </div>
      </div>
    </div>
  );
}

function Work() {
  return (
    <section className="w-full flex flex-col items-center px-6 py-24">
      <div className="w-full max-w-6xl">
        <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-6">
          <div className="flex flex-col">
            <p className="text-sm uppercase tracking-[0.35em] text-white/60 font-switzer">
              Work
            </p>
            <h1 className="mt-3 text-4xl md:text-6xl font-clash-medium text-gradient leading-tight">
              Work Stories
            </h1>
          </div>
        </div>
        <div className="mt-4 max-w-2xl">
          <p className="font-switzer text-white/70">
            A selection of projects where clarity, interaction, and visual systems
            drive measurable outcomes. Each case study highlights the process,
            key decisions, and the final impact.
          </p>
        </div>

        {/* Stacked Scroll */}
        <div className="mt-10 space-y-6 md:space-y-8">
          {projects.map((project, i) => (
            <div key={i} className="relative">
              <WorkCard project={project} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Work;
