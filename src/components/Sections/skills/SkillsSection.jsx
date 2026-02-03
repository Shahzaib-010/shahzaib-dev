import { motion } from "framer-motion";
import SkillCard from "./SkillCard";

const skills = [
  {
    name: "Figma",
    desc: "UI Design",
    icon: "/images/icons/figma.svg",
    bgClass: "bg-cyan-400/10 border-white/10 border",
  },
  {
    name: "React",
    desc: "Frontend Library",
    icon: "/images/icons/react.svg",
    bgClass: "bg-blue-400/10 border-white/10 border",
  },
  {
    name: "JavaScript",
    desc: "Core Language",
    icon: "/images/icons/javascript.svg",
    bgClass: "bg-yellow-400/10 border-white/10 border",
  },
  {
    name: "TypeScript",
    desc: "Typed JavaScript",
    icon: "/images/icons/typescript.svg",
    bgClass: "bg-sky-400/10 border-white/10 border",
  },
  {
    name: "Next.js",
    desc: "React Framework",
    icon: "/images/icons/nextjs1.svg",
    bgClass: "bg-stone-600/10 border-white/10 border",
  },
  {
    name: "Tailwind CSS",
    desc: "Utility Styling",
    icon: "/images/icons/tailwindcss.svg",
    bgClass: "bg-cyan-400/10 border-white/10 border",
  },
  {
    name: "Node.js",
    desc: "Backend Runtime",
    icon: "/images/icons/nodejs.svg",
    bgClass: "bg-lime-400/10 border-white/10 border",
  },
  {
    name: "MongoDB",
    desc: "Document DB",
    icon: "/images/icons/mongodb.svg",
    bgClass: "bg-emerald-400/10 border-white/10 border",
  },
  {
    name: "Git",
    desc: "Version Control",
    icon: "/images/icons/git.svg",
    bgClass: "bg-orange-400/10 border-white/10 border",
  },
  {
    name: "GitHub",
    desc: "Repo Hosting",
    icon: "/images/icons/github.svg",
    bgClass: "bg-slate-500/10 border-white/10 border",
  },
  {
    name: "Vite",
    desc: "Build Tool",
    icon: "/images/icons/vite.svg",
    bgClass: "bg-indigo-400/10 border-white/10 border",
  },
  {
    name: "Material UI",
    desc: "Component Library",
    icon: "/images/icons/materialui.svg",
    bgClass: "bg-blue-400/10 border-white/10 border",
  },
  {
    name: "HTML",
    desc: "Structure",
    icon: "/images/icons/html.svg",
    bgClass: "bg-orange-400/10 border-white/10 border",
  },
  {
    name: "CSS",
    desc: "Styling",
    icon: "/images/icons/css.svg",
    bgClass: "bg-sky-400/10 border-white/10 border",
  },
  {
    name: "VS Code",
    desc: "Editor",
    icon: "/images/icons/vscode.svg",
    bgClass: "bg-sky-400/10 border-white/10 border",
  }
];

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: { staggerChildren: 0.08 },
  },
};

const item = {
  hidden: { opacity: 0, y: 24 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.45, ease: "easeOut" },
  },
};

export default function SkillsSection() {
  return (
    <section className="py-24">
      <div className="mx-auto max-w-6xl px-6">
        <div className="mb-12 md:mb-14">
          <p className="text-sm uppercase tracking-[0.35em] text-white/60 font-switzer">
            Tech Stack
          </p>
          <div className=" flex flex-col lg:flex-row lg:items-end lg:justify-between gap-6">
            <h2 className="text-4xl md:text-6xl font-clash-medium text-gradient leading-tight">
              Tools I Work With
            </h2>
            
          </div>
        </div>

        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-80px" }}
          className="
            grid grid-cols-1
            sm:grid-cols-2
            lg:grid-cols-3
            xl:grid-cols-4
            gap-5 sm:gap-6
          "
        >
          {skills.map((skill, i) => (
            <motion.div key={i} variants={item}>
              <SkillCard number={String(i + 1).padStart(2, "0")} {...skill} />
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
