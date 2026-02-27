import { Link } from "react-router-dom";

function Footer() {
  return (
    <footer className="relative w-full flex justify-center items-center text-white mb-4">
      
      <div className="relative w-[98%] rounded-2xl border border-white/10 bg-black/10 backdrop-blur-2xl px-6 py-10 md:px-10 md:py-12 overflow-hidden">
      <img src="./images/Ellipse 9.svg"
      alt="" 
      className="absolute bottom-[65%] left-[0%] md:bottom-[10%] md:left-[0%] opacity-30 md:opacity-30  z-0"
      />
        <div className="relative flex flex-col gap-10 z-100">
          {/* Top Row */}
          <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-8 pb-[4vw]">
            <div className="flex items-center gap-5">
              <div>
                <p className="text-[10px] uppercase tracking-[0.2em] text-white/60 font-switzer">
                  Let's Collaborate <span className="text-[var(--color-orange)] font-extrabold"> :) </span>
                </p>
                <h3 className="text-xl md:text-3xl font-clash-medium tracking-wide">
                  Ready to build something <span className="text-[var(--color-orange)] font-clash-bold"> bold? </span>
                </h3>
              </div>
            </div>

            <a
              href="mailto:letsmail.shahzaib@gmail.com"
              className="w-fit rounded-full border border-white/10 bg-white/10 px-8 py-4 text-sm md:text-base font-clash-semibold uppercase tracking-wider hover:bg-white/20 transition-colors"
            >
              letsmail.shahzaib@gmail.com
            </a>
          </div>

          {/* Content Grid */}
          <div className=" grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {/* Links */}
            <div className="space-y-3">
              <p className="text-sm uppercase tracking-[0.2em] text-white/80 font-clash-medium">
                Links
              </p>
              <div className="flex flex-col gap-2 font-clash-light text-[11px] sm:text-base tracking-wider">
                <Link to="/" className="hover:text-[var(--color-orange)]">
                  Home
                </Link>
                <Link to="/about" className="hover:text-[var(--color-orange)]">
                  About
                </Link>
                <Link to="/work" className="hover:text-[var(--color-orange)]">
                  Work
                </Link>
                <Link to="/perspective" className="hover:text-[var(--color-orange)]">
                  Perspective
                </Link>
                <Link to="/contact" className="hover:text-[var(--color-orange)]">
                  Contact
                </Link>
              </div>
            </div>

            {/* Socials */}
            <div className="relative z-100 space-y-3">
              <p className="text-sm uppercase tracking-[0.2em] text-white/80 font-clash-medium">
                Socials
              </p>
              <div className="flex flex-col gap-2 font-clash-light text-[11px] sm:text-base tracking-wider">
                <a
                  href="https://www.linkedin.com/in/shahzaibanwar-dev"
                  target="_blank"
                  rel="noreferrer"
                  className="hover:text-[var(--color-orange)]"
                >
                  LinkedIn
                </a>
                
                <a
                  href="https://github.com/Shahzaib-010/"
                  target="_blank"
                  rel="noreferrer"
                  className="hover:text-[var(--color-orange)]"
                >
                  GitHub
                </a>
                
              </div>
            </div>

            {/* Contact Info */}
            <div className="space-y-3 font-clash-regular">
              <p className="text-sm uppercase tracking-[0.2em] text-white/60 font-clash-medium">
                Contact Info
              </p>
              <div className="flex flex-col gap-2 font-clash-light text-[11px] sm:text-base tracking-wider">
                <p>Lahore, Pakistan</p>
                <a
                  href="tel:+923130672552"
                  className="hover:text-[var(--color-orange)]"
                >
                  +92 313 0672552
                </a>
              </div>
            </div>

            {/* Quick Note */}
            {/* <div className="space-y-3">
              <p className="text-sm uppercase tracking-[0.2em] text-white/60 font-clash-medium">
                Get in Touch
              </p>
              <p className="text-white font-clash-regular leading-relaxed tracking-wide">
                I�m open to freelance, full-time, and short-term collaborations.
                Let�s create a meaningful digital experience.
              </p>
            </div> */}
          </div>

          {/* Big Name */}
          {/* <div className="font-wix2 font-bold flex justify-center">
            <h1 className=" text-[21vw] leading-none text-transparent">
              Shahzaib
            </h1>
          </div> */}

          <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-3 text-sm text-white/60 font-switzer">
            <p>� 2026 Shahzaib. All rights reserved.</p>
            <p>
              Design & Development by <span className="text-[var(--color-orange)]"> Shahzaib ;)</span>
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
