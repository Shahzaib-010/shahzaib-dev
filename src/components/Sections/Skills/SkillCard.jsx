import { motion } from "framer-motion";

export default function SkillCard({
  icon,
  name,
  desc,
  bgClass,
  number,
  showLabels = true,
}) {
  return (
    <motion.div
      whileHover={{ y: -8 }}
      transition={{ type: "spring", stiffness: 300, damping: 20 }}
      className="
        group relative overflow-hidden rounded-2xl
        bg-[#0b0b0b]
        border border-white/10
        px-4 py-4 w-full
        hover:border-white/20
        hover:bg-[#0e0e0e]
        
      "
    >
      {/* Color Sweep */}
      <div
        className="
          pointer-events-none absolute inset-0
          opacity-0 group-hover:opacity-100
          transition duration-500
          bg-[linear-gradient(120deg,rgba(0,255,209,0.10),rgba(0,115,255,0.08),rgba(255,109,16,0.08))]
        "
      />

      {/* Glow */}
      <div
        className="
          pointer-events-none absolute inset-0 rounded-xl
          opacity-0 group-hover:opacity-100
          transition duration-500
          bg-black/50 blur-2xl
        "
      />

      <div
        className={`relative h-auto flex ${
          showLabels ? "items-start gap-3 justify-start" : "items-center justify-center"
        }`}
      >
        {/* Icon Container */}
        <div
          className={`
            flex h-10 w-10 shrink-0 items-center justify-center
            rounded-lg
            
            ${bgClass}
          `}
          
        >
          <img
            src={icon}
            alt={name}
            className="h-5 w-5 object-contain transition-transform duration-500 group-hover:rotate-[8deg] group-hover:scale-110"
          />
        </div>

        {/* Text */}
        {showLabels && (
          <div className="space-y-0.5 flex-1">
            <div className="flex items-start justify-between gap-2">
              <h3 className="text-white text-[14px] font-medium leading-none font-clash-medium tracking-wide pb-[2px]">
                {name}
              </h3>
              <svg
                width="14"
                height="14"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className="text-white/40 transition-colors duration-300 motion-safe:group-hover:animate-pulse group-hover:text-blue-400"
              >
                <path
                  d="M13 2L4 14h6l-1 8 9-12h-6l1-8z"
                  stroke="currentColor"
                  strokeWidth="1.6"
                  strokeLinejoin="round"
                />
              </svg>
            </div>
            <p className="text-[12px] text-white/60 leading-none font-clash-regular tracking-wide">
              {desc}
            </p>
          </div>
        )}
      </div>

    </motion.div>
  );
}
