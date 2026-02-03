import { motion, useScroll, useTransform } from "motion/react";
import Magnet from "../components/ui/Magnet";
import PhotoMasonry from "../components/Sections/Photography/PhotoMasonry";
import { useEffect, useMemo, useState } from "react";
import LightboxModal from "../components/animations/LightboxModal";

const images = [
  { src: "/images/Photography/img10.webp", alt: "Light", tags: ["Sky", "Minimal"] },
  { src: "/images/Photography/img2.webp", alt: "Motion", tags: ["Street"] },
  { src: "/images/Photography/img3.webp", alt: "Motion", tags: ["Street"] },
  { src: "/images/Photography/img13.webp", alt: "Light", tags: ["Sky"] },
  { src: "/images/Photography/img5.webp", alt: "Light", tags: ["Architecture"] },
  { src: "/images/Photography/img17.webp", alt: "Motion", tags: ["Street"] },
  { src: "/images/Photography/img7.webp", alt: "Motion", tags: ["Street"] },
  { src: "/images/Photography/img8.webp", alt: "Light", tags: ["Sky"] },
  { src: "/images/Photography/img9.webp", alt: "Light", tags: ["Minimal"] },
  { src: "/images/Photography/img1.webp", alt: "Light", tags: ["Architecture"] },
  { src: "/images/Photography/img11.webp", alt: "Light", tags: ["Minimal"] },
  { src: "/images/Photography/img12.webp", alt: "Light", tags: ["Sky"] },
  { src: "/images/Photography/img4.webp", alt: "Light", tags: ["Architecture"] },
  { src: "/images/Photography/img14.webp", alt: "Light", tags: ["Minimal"] },
  { src: "/images/Photography/img15.webp", alt: "Light", tags: ["Sky"] },
  { src: "/images/Photography/img6.webp", alt: "Light", tags: ["Street"] },
];

const filters = ["All", "Street", "Architecture", "Sky", "Minimal"];

function Perspective() {
  const { scrollYProgress } = useScroll();
  const headingY = useTransform(scrollYProgress, [0, 1], ["0%", "-20%"]); 
  const [activeIndex, setActiveIndex] = useState(null);
  const [activeFilter, setActiveFilter] = useState("All");

  const filteredImages = useMemo(() => {
    if (activeFilter === "All") return images;
    return images.filter((img) => img.tags?.includes(activeFilter));
  }, [activeFilter]);

  useEffect(() => {
    setActiveIndex(null);
  }, [activeFilter]);

  return (
    <section className="relative min-h-screen w-full overflow-hidden">
      <div className="relative flex flex-col items-center p-4">
        {/* HERO */}
        <div className="min-h-[90vh] flex flex-col justify-center w-full">
          <motion.div
            initial={{ opacity: 0, scale: 0.98 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1.2, ease: [0.22, 1, 0.36, 1] }}
            className="relative w-full flex justify-center"
          >
            {/* Minimal Vertical Wordmark */}
            <div className="absolute left-2 md:left-6 top-1/2 -translate-y-1/2 hidden sm:flex flex-col items-center gap-3">
              <div className="h-16 w-px bg-white/20" />
              <span className="text-[10px] tracking-[0.4em] uppercase text-white/50 font-switzer [writing-mode:vertical-rl] rotate-180">
                Scroll
              </span>
              <div className="h-16 w-px bg-white/20" />
            </div>

            {/* LEFT TOP LABEL */}
            <motion.div
              animate={{ y: [0, -6, 0] }}
              transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
              className="absolute top-[-30%] left-[4%] text-yellow-300 text-sm md:text-xl tracking-wide font-clash-regular"
            >
              <p className="relative">Welcome to my creative side</p>
              <img
                src="/images/arrow1.0.png"
                alt=""
                className="absolute -top-2 -right-12 w-16 h-16 md:w-20 md:h-20"
              />
            </motion.div>

            {/* MAIN HEADING */}
            <motion.div style={{ y: headingY }} className="relative">
              <Magnet padding={50} magnetStrength={15}>
                <h1 className="text-[12vw] md:text-[9vw] font-clash-medium font-bold text-gradient">
                  PERSPECTIVE
                </h1>
              </Magnet>
              <div className="mt-4 flex flex-col items-center gap-3">
                <p className="text-white/70 font-switzer text-xs md:text-sm tracking-[0.35em] uppercase">
                  Visual explorations
                </p>
                <motion.div
                  initial={{ width: 0, opacity: 0 }}
                  animate={{ width: "8rem", opacity: 1 }}
                  transition={{ delay: 0.6, duration: 0.9, ease: "easeOut" }}
                  className="h-px bg-gradient-to-r from-transparent via-white/70 to-transparent"
                />
              </div>
            </motion.div>

            {/* RIGHT BOTTOM LABEL */}
            <motion.div
              animate={{ y: [0, 8, 0] }}
              transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
              className="absolute -bottom-16 right-[6%] text-sm md:text-xl tracking-wide font-clash-regular"
            >
              <img
                src="/images/arrow3.1.png"
                alt=""
                className="absolute rotate-180 bottom-3 -left-10 w-16 h-16 md:w-20 md:h-20"
              />
              <p className="relative text-yellow-300">Content Creator</p>
            </motion.div>

            {/* Left Footer Meta */}
            <div className="absolute -bottom-16 left-[6%] text-xs md:text-sm uppercase tracking-[0.35em] text-white/50 font-switzer">
              Gallery / 16 Frames
            </div>
          </motion.div>
        </div>

     

        {/* GALLERY */}
        <div className="w-[90%] md:w-[80%] flex flex-col items-center">
          <div className="w-full flex flex-col items-center md:items-start">
            <p className="text-xs uppercase tracking-[0.35em] text-white/60 font-switzer">
              Curated set · {filteredImages.length} frames
            </p>
            <h1 className="mt-3 text-white font-clash-medium text-3xl md:text-5xl">
              World From My Lens
            </h1>
          </div>

          <div className="mt-6 w-full flex flex-wrap gap-2">
            {filters.map((filter) => (
              <button
                key={filter}
                type="button"
                onClick={() => setActiveFilter(filter)}
                className={`text-xs uppercase tracking-[0.3em] font-switzer px-4 py-2 rounded-full border transition-colors ${
                  activeFilter === filter
                    ? "text-white border-white/30 bg-white/10"
                    : "text-white/60 border-white/10 hover:text-white hover:border-white/20"
                }`}
              >
                {filter}
              </button>
            ))}
          </div>

          <div className="mt-8 w-full">
            <PhotoMasonry
              images={filteredImages}
              onImageClick={(index) => setActiveIndex(index)}
            />
          </div>
        </div>
      </div>

      {/* LIGHTBOX (always top layer) */}
      <LightboxModal
        images={filteredImages}
        activeIndex={activeIndex}
        setActiveIndex={setActiveIndex}
        onClose={() => setActiveIndex(null)}
      />
    </section>
  );
}

export default Perspective;
