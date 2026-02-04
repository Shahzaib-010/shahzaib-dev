// import { motion, useScroll, useTransform } from "motion/react";
// import Magnet from "../Ui.jsx/Magnet";


// export default function Landingpage() {
//   const { scrollYProgress } = useScroll();

//   // Parallax layers (tweak values freely)
//   const headingY = useTransform(scrollYProgress, [0, 1], ["0%", "-20%"]);
//   const leftLabelY = useTransform(scrollYProgress, [0, 1], ["0%", "-40%"]);
//   const rightLabelY = useTransform(scrollYProgress, [0, 1], ["0%", "-30%"]);
 
//   return (
//     <section className="w-full h-screen flex flex-col items-center justify-around relative overflow-hidden">

//       {/* MAIN WRAPPER */}
//       <div className="relative w-full flex justify-center pt-[12rem]">

//         {/* LEFT TOP LABEL */}
//         <motion.p
//           style={{ y: leftLabelY }}
//           animate={{ y: [0, -6, 0] }}
//           transition={{
//             duration: 3,
//             repeat: Infinity,
//             ease: "easeInOut",
//           }}
//           className="absolute top-[35%] left-[17%] text-blue-500 text-xl tracking-wide font-clash-regular will-change-transform"
//         >
//           Creative Designer
//         </motion.p>

//         {/* MAIN HEADING */}
//         <motion.div style={{ y: headingY }} className="will-change-transform">
//           <Magnet padding={50} disabled={false} magnetStrength={15}>
//             <h1
//               className="text-[12vw] leading-none font-clash-medium font-bold 
//               bg-gradient-to-r from-red-600 to-orange-500
//               text-transparent bg-clip-text tracking-wide"
//             >
//               SHAHZAIB
//             </h1>
//           </Magnet>
//         </motion.div>

//         {/* RIGHT BOTTOM LABEL */}
//         <motion.p
//           style={{ y: rightLabelY }}
//           animate={{ y: [0, 8, 0] }}
//           transition={{
//             duration: 4,
//             repeat: Infinity,
//             ease: "easeInOut",
//           }}
//           className="absolute -bottom-10 right-[10%] text-blue-500 text-xl tracking-wide font-clash-regular will-change-transform"
//         >
//           Frontend Web Developer
//         </motion.p>

//       </div>

//       {/* BOTTOM SECTION */}
//       <div className="w-full flex justify-between items-end-safe ">

//         <div className="text-white px-5">
//           <h1>90930909</h1>
//         </div>

//         {/* SCROLL INDICATOR */}
//         <div className="rotate-90 flex items-center gap-1">
//           <h1 className="text-white tracking-widest font-clash-regular">
//             Scroll
//           </h1>
//           <img src="/images/arrows.png" alt="" className="w-12" />
//         </div>

//       </div>
//     </section>
//   );
// }


import { motion, useScroll, useTransform } from "motion/react";
import Magnet from "../ui/Magnet";

export default function Landingpage() {
  const { scrollYProgress } = useScroll();

  // Parallax layers (UNCHANGED)
  const headingY = useTransform(scrollYProgress, [0, 1], ["0%", "-20%"]);

  return (
    <section className="w-full min-h-[90vh] flex flex-col items-center justify-between relative overflow-hidden">
     


      {/* MAIN WRAPPER */}
      <motion.div
        initial={{ opacity: 0, scale: 0.98 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{
          duration: 1.2,
          ease: [0.22, 1, 0.36, 1],
        }}
        className="relative w-full flex justify-center pt-12 md:pt-16 lg:pt-20 flex-1"
      >

        {/* LEFT TOP LABEL */}
        {/* <motion.div
          
          animate={{ y: [0, -6, 0] }}
          transition={{
            duration: 3,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="absolute top-[18%] sm:top-[24%] md:top-[28%] left-[6%] sm:left-[10%] text-yellow-300 text-sm sm:text-base md:text-xl tracking-wide font-clash-regular will-change-transform"
        >
          
          <p className="relative">Creative Designer</p>
         <img src="/images/arrow1.0.png" alt="" className="absolute -top-0 -right-10 sm:-right-14 w-12 h-12 sm:w-16 sm:h-16 md:w-20 md:h-20 rotate-12"/>
        </motion.div> */}
        

        {/* MAIN HEADING */}
        <motion.div style={{ y: headingY }} className="will-change-transform relative">
          
          <Magnet padding={50} disabled={false} magnetStrength={15}>
            <h1
              className="text-[12vw] sm:text-[10vw] md:text-[11vw] leading-none font-clash-medium font-bold 
              text-gradient tracking-wide pt-[7vw]"
            >
              SHAHZAIB
            </h1>
             
          </Magnet>
          <div className="mt-4 sm:mt-6 flex flex-col items-center gap-2 sm:gap-3">
            <p className="text-white/70 font-clash-light text-[10px] sm:text-xs md:text-sm tracking-[0.35em] uppercase text-center px-4">
              Product-focused frontend developer
            </p>
            <motion.div
              initial={{ width: 0, opacity: 0 }}
              animate={{ width: "9rem", opacity: 1 }}
              transition={{ delay: 0.6, duration: 0.9, ease: "easeOut" }}
              className="h-px bg-gradient-to-r from-transparent via-white/80 to-transparent"
            />
          </div>
        </motion.div>

        {/* RIGHT BOTTOM LABEL */}
        {/* <motion.div
          
          animate={{ y: [0, 8, 0] }}
          transition={{
            duration: 4,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        className="absolute -bottom-40 sm:-bottom-40 md:-bottom-0 right-[6%] sm:right-[8%] text-blue-500 text-sm sm:text-base md:text-xl tracking-wide font-clash-regular will-change-transform"
      >
           <img src="/images/arrow3.1.png" alt="" className="absolute rotate-180 bottom-4 -left-10 sm:-left-12 w-12 h-12 sm:w-16 sm:h-16 md:w-20 md:h-20"/>
          <p className="relative text-yellow-300">Frontend Web Developer </p>
        </motion.div> */}

      </motion.div>

      {/* BOTTOM SECTION */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.6, duration: 0.8 }}
        className="w-full flex justify-between items-end-safe pb-6 sm:pb-8"
      >
        <div className="px-5 pt-2 sm:pt-4 flex flex-col gap-2 sm:gap-3">
          <a
            href="/resume.pdf"
            className="group inline-flex items-center gap-3 rounded-full border border-white/15 bg-white/5 px-4 py-2 text-xs font-switzer tracking-[0.25em] uppercase text-white/80 hover:text-white hover:border-white/30 transition-colors"
          >
            <img src="/images/resume2.png" className="w-4 h-4 opacity-80 group-hover:opacity-100" alt="" />
            Resume
          </a>
          <a
            href="https://www.linkedin.com"
            target="_blank"
            rel="noreferrer"
            className="group inline-flex items-center gap-3 rounded-full border border-white/15 bg-white/5 px-4 py-2 text-xs font-switzer tracking-[0.25em] uppercase text-white/80 hover:text-white hover:border-white/30 transition-colors"
          >
            <img src="/images/linkedin.png" className="w-4 h-4 opacity-80 group-hover:opacity-100" alt="" />
            LinkedIn
          </a>
          <a
            href="https://github.com"
            target="_blank"
            rel="noreferrer"
            className="group inline-flex items-center gap-3 rounded-full border border-white/15 bg-white/5 px-4 py-2 text-xs font-switzer tracking-[0.25em] uppercase text-white/80 hover:text-white hover:border-white/30 transition-colors"
          >
            <img src="/images/github.png" className="w-4 h-4 opacity-80 group-hover:opacity-100" alt="" />
            GitHub
          </a>
        </div>

        <div className="rotate-90 flex items-center gap-1 pr-4 sm:pr-6">
          <h1 className="text-white tracking-widest font-clash-regular">
            Scroll
          </h1>
          <img src="/images/arrows.png" alt="" className="w-12" />
        </div>
      </motion.div>
      

    </section>
  );
}
