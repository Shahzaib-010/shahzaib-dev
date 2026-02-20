import React, { useEffect, useRef, useState } from "react";
import { NavLink } from "react-router-dom";
import { motion, AnimatePresence } from "motion/react";
import { CgMenuRight } from "react-icons/cg";
import { TfiClose } from "react-icons/tfi";

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

  const menuLinks = [
    { to: "/", label: "Home" },
    { to: "/about", label: "About" },
    { to: "/work", label: "Work" },
    { to: "/perspective", label: "Perspective" },
    { to: "/contact", label: "Contact" },
  ];

  const socials = [
    { href: "https://github.com", label: "GitHub" },
    { href: "https://www.linkedin.com", label: "LinkedIn" },
    { href: "https://www.behance.net", label: "Behance" },
  ];

  return (
    <>
      <motion.nav
        animate={{
          y: hide ? -90 : 0,
          opacity: hide ? 0 : 1,
        }}
        transition={{ duration: 0.4, ease: [0.4, 0, 0.2, 1] }}
        className="fixed top-0 z-50 w-full  backdrop-blur-md bg-black/1   shadow-lg"
      >
        <div className="flex justify-center">
          <div className="w-[90%] h-[4rem] flex items-center justify-between text-white font-clash-medium">
            {/* Left � Time */}
            <div className="text-[11px] ">
              Local : <span className="font-light">{time}</span>
            </div>

            {/* Center � Links */}
            <div className="hidden lg:flex gap-8">
              {menuLinks.map((link) => (
                <NavLink
                  key={link.to}
                  to={link.to}
                  end={link.to === "/"}
                  className={({ isActive }) =>
                    `${linkClass} ${isActive ? activeClass : ""}`
                  }
                >
                  {link.label}
                </NavLink>
              ))}
            </div>

            {/* Right � Code Icon */}
            <div className="hidden lg:flex">
              <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none">
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
              className="lg:hidden w-10 h-10 flex items-center justify-center"
              aria-label="Toggle menu"
            >
              <AnimatePresence mode="wait" initial={false}>
                {isOpen ? (
                  <motion.div
                    key="close"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 0.25, ease: "easeOut" }}
                  >
                    <TfiClose className="text-2xl text-white" />
                  </motion.div>
                ) : (
                  <motion.div
                    key="menu"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 0.25, ease: "easeOut" }}
                  >
                    <CgMenuRight className="text-2xl text-white" />
                  </motion.div>
                )}
              </AnimatePresence>
            </button>
          </div>
        </div>
      </motion.nav>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ y: "-100%", opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            exit={{ y: "-100%", opacity: 0 }}
            transition={{ duration: 0.7, ease: [0.76, 0, 0.24, 1], delay: 0.05 }}
            className="fixed inset-0 z-40 bg-black flex flex-col justify-between px-6 pt-24 pb-10"
          >
            <div className="flex flex-col items-center gap-6">
              {menuLinks.map((link, i) => (
                <motion.div
                  key={link.to}
                  initial={{ opacity: 0, y: 8 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.35, ease: "easeOut", delay: 0.08 + i * 0.05 }}
                  className="w-full flex justify-center "
                >
                  <NavLink
                    to={link.to}
                    onClick={() => setIsOpen(false)}
                    className="relative text-center font-clash-medium text-2xl text-white"
                  >
                    {/* <span className="absolute -top-3 -left-6 text-[8px] tracking-[0.3em] text-[var(--color-orange)]">
                   {String(i + 1).padStart(2, "0")}
                    </span> */}
                    {link.label}
                  </NavLink>
                </motion.div>
              ))}
            </div>

            <div className="flex justify-center gap-6 text-sm uppercase tracking-[0.35em] text-white/60 font-switzer">
              {socials.map((s) => (
                <a
                  key={s.href}
                  href={s.href}
                  target="_blank"
                  rel="noreferrer"
                  className="hover:text-white"
                >
                  {s.label}
                </a>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
