// import React, { useState, useEffect, useRef } from "react";
// import { CgMenuRightAlt, CgClose } from "react-icons/cg";
// import { motion, AnimatePresence } from "motion/react";
// import { Link } from "react-router-dom";

// // FlipLink Component (same animation as before)
// const DURATION = 0.25;
// const STAGGER = 0.025;

// const FlipLink = ({ to, children, onClick, className = "" }) => (
//   <Link
//     to={to}
//     onClick={onClick}
//     className={`relative overflow-hidden ${className}`}
//   >
//     <motion.div
//       initial="initial"
//       whileHover="hovered"
//       className="relative block overflow-hidden font-light uppercase text-[1rem] md:text-[12px]"
//     >
//       <div>
//         {children.split("").map((l, i) => (
//           <motion.span
//             key={i}
//             variants={{
//               initial: { y: 0 },
//               hovered: { y: "-100%" },
//             }}
//             transition={{
//               duration: DURATION,
//               ease: "easeInOut",
//               delay: STAGGER * i,
//             }}
//             className="inline-block"
//           >
//             {l}
//           </motion.span>
//         ))}
//       </div>
//       <div className="absolute inset-0">
//         {children.split("").map((l, i) => (
//           <motion.span
//             key={i}
//             variants={{
//               initial: { y: "100%" },
//               hovered: { y: 0 },
//             }}
//             transition={{
//               duration: DURATION,
//               ease: "easeInOut",
//               delay: STAGGER * i,
//             }}
//             className="inline-block"
//           >
//             {l}
//           </motion.span>
//         ))}
//       </div>
//     </motion.div>
//   </Link>
// );

// export default function Navbar() {
//   const [isOpen, setIsOpen] = useState(false);
//   const [time, setTime] = useState("");
//   const [hide, setHide] = useState(false);
//   const lastScrollY = useRef(0);

//   // 🕒 live time in New York
//   useEffect(() => {
//     const updateTime = () => {
//       const nyTime = new Date().toLocaleString("en-US", {
//         timeZone: "Asia/Karachi",
//         hour12: true,
//         hour: "numeric",
//         minute: "numeric",
//         second: "numeric",
//       });
//       setTime(nyTime);
//     };
//     updateTime();
//     const interval = setInterval(updateTime, 1000);
//     return () => clearInterval(interval);
//   }, []);

//   useEffect(() => {
//     const handleScroll = () => {
//       const currentY = window.scrollY;
//       const isScrollingDown = currentY > lastScrollY.current;
//       if (currentY > 80 && isScrollingDown) {
//         setHide(true);
//       } else {
//         setHide(false);
//       }
//       lastScrollY.current = currentY;
//     };

//     window.addEventListener("scroll", handleScroll, { passive: true });
//     return () => window.removeEventListener("scroll", handleScroll);
//   }, []);

//   const toggleNavbar = () => setIsOpen((prev) => !prev);

//   return (
//     <nav className="w-full flex justify-center items-center">
//       <div
//         className={`w-[90%] z-50 font-switzer border-b border-white/10 mt-4
//         transition-transform duration-500 ease-out
//         ${hide ? "-translate-y-20 opacity-0" : "translate-y-0 opacity-100"}`}
//       >
//         {/* Top Row */}
//         <div className="flex items-center justify-between px-6 md:px-10 h-[4rem] md:h-[4rem]">
//           {/* Left: Timezone */}
//           <div className="  md:text-sm font-switzer text-white">
//             <span className="text-xl md:text-[12px]">
//               Local –{" "}
//               <span className="font-light text-2xl md:text-[12px]">{time}</span>
//             </span>
//           </div>

//           {/* Center: Navigation Links (desktop only) */}
//           <div className="hidden lg:flex gap-7 text-white uppercase">
//             <FlipLink to="/">Home</FlipLink>
//             <FlipLink to="/about">About</FlipLink>
//             <FlipLink to="/work">Work</FlipLink>
//             <FlipLink to="/perspective">Perspective</FlipLink>
//             <FlipLink to="/contact">Contact</FlipLink>
//           </div>

          
//           <div className="hidden lg:flex">
//             {/* <img src="./images/codesnippet.png" alt="pfp" className="w-8 text-white" /> */}
//             <svg class="w-5 h-5 text-white" width="100%" height="100%" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
//              <path d="M16 18L22 12L16 6M8 6L2 12L8 18" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
//             </svg>
//           </div>

//           {/* Menu Button (mobile only) */}
//           <button
//             onClick={toggleNavbar}
//             className="lg:hidden text-white text-3xl"
//           >
//             {isOpen ? <CgClose /> : <CgMenuRightAlt />}
//           </button>
//         </div>

//         {/* Mobile Overlay Menu */}
//         <AnimatePresence>
//           {isOpen && (
//             <motion.div
//               initial={{ clipPath: "inset(100% 0% 0% 0%)" }}
//               animate={{ clipPath: "inset(0% 0% 0% 0%)" }}
//               exit={{ clipPath: "inset(100% 0% 0% 0%)" }}
//               transition={{ duration: 0.6, ease: [0.76, 0, 0.24, 1] }}
//               className="fixed inset-0 bg-[var(--color-orange)] flex flex-col items-center justify-center gap-8 text-black z-40"
//             >
//               <FlipLink to="/" onClick={toggleNavbar}>
//                 Home
//               </FlipLink>
//               <FlipLink to="/about" onClick={toggleNavbar}>
//                 About
//               </FlipLink>
//               <FlipLink to="/works" onClick={toggleNavbar}>
//                 Works
//               </FlipLink>
//               <FlipLink to="/services" onClick={toggleNavbar}>
//                 Services
//               </FlipLink>
//               <FlipLink to="/awards" onClick={toggleNavbar}>
//                 Awards
//               </FlipLink>
//               <FlipLink to="/contact" onClick={toggleNavbar}>
//                 Contact
//               </FlipLink>
//             </motion.div>
//           )}
//         </AnimatePresence>
//       </div>
//     </nav>
//   );
// }




import React, { useEffect, useRef, useState } from "react";
import { NavLink } from "react-router-dom";
import { CgMenuRightAlt, CgClose } from "react-icons/cg";
import { motion, AnimatePresence } from "motion/react";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [hide, setHide] = useState(false);
  const lastScrollY = useRef(0);
  const [time, setTime] = useState("");

  // Live time (Asia/Karachi)
  useEffect(() => {
    const updateTime = () => {
      const t = new Date().toLocaleString("en-US", {
        timeZone: "Asia/Karachi",
        hour: "numeric",
        minute: "numeric",
        second: "numeric",
        hour12: true,
      });
      setTime(t);
    };

    updateTime();
    const i = setInterval(updateTime, 1000);
    return () => clearInterval(i);
  }, []);

  // Hide on scroll down / show on scroll up
  useEffect(() => {
    const onScroll = () => {
      const current = window.scrollY;
      if (current > lastScrollY.current && current > 80) {
        setHide(true);
      } else {
        setHide(false);
      }
      lastScrollY.current = current;
    };

    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const linkClass =
    "uppercase text-[12px] transition-colors duration-300 hover:text-[var(--color-orange)]";

  const activeClass = "text-[var(--color-orange)]";

  return (
    <>
      <motion.nav
        animate={{
          y: hide ? -90 : 0,
          opacity: hide ? 0 : 1,
        }}
        transition={{ duration: 0.4, ease: [0.4, 0, 0.2, 1] }}
        className="sticky top-0 z-50 w-full bg-black"
      >
        <div className="flex justify-center">
          <div className="w-[90%] h-[4rem]
                          flex items-center justify-between
                          text-white font-switzer">

            {/* Left — Time */}
            <div className="text-[12px] uppercase">
              Local — <span className="font-light">{time}</span>
            </div>

            {/* Center — Links */}
            <div className="hidden lg:flex gap-8">
              <NavLink to="/" end className={({ isActive }) =>
                `${linkClass} ${isActive ? activeClass : ""}`
              }>
                Home
              </NavLink>

              <NavLink to="/about" className={({ isActive }) =>
                `${linkClass} ${isActive ? activeClass : ""}`
              }>
                About
              </NavLink>

              <NavLink to="/work" className={({ isActive }) =>
                `${linkClass} ${isActive ? activeClass : ""}`
              }>
                Work
              </NavLink>

              <NavLink to="/perspective" className={({ isActive }) =>
                `${linkClass} ${isActive ? activeClass : ""}`
              }>
                Perspective
              </NavLink>

              <NavLink to="/contact" className={({ isActive }) =>
                `${linkClass} ${isActive ? activeClass : ""}`
              }>
                Contact
              </NavLink>
            </div>

            {/* Right — Code Icon */}
            <div className="hidden lg:flex">
              <svg
                className="w-5 h-5"
                viewBox="0 0 24 24"
                fill="none"
              >
                <path
                  d="M16 18L22 12L16 6M8 6L2 12L8 18"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </div>

            {/* Mobile Button */}
            <button
              onClick={() => setIsOpen((p) => !p)}
              className="lg:hidden text-3xl"
            >
              {isOpen ? <CgClose /> : <CgMenuRightAlt />}
            </button>
          </div>
        </div>
      </motion.nav>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ y: "-100%" }}
            animate={{ y: 0 }}
            exit={{ y: "-100%" }}
            transition={{ duration: 0.6, ease: [0.76, 0, 0.24, 1] }}
            className="fixed inset-0 z-40 bg-[var(--color-orange)]
                       flex flex-col items-center justify-center
                       gap-8 text-black uppercase"
          >
            {["/", "/about", "/work", "/perspective", "/contact"].map(
              (path, i) => (
                <NavLink
                  key={i}
                  to={path}
                  onClick={() => setIsOpen(false)}
                  className="text-xl"
                >
                  {path === "/" ? "Home" : path.replace("/", "")}
                </NavLink>
              )
            )}
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}

