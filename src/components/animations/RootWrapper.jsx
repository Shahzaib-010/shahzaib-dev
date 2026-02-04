import {
  Outlet,
  ScrollRestoration,
} from "react-router-dom";
import { useEffect, useState } from "react";
import { AnimatePresence } from "motion/react";
import Lenis from "lenis";
import Loader from "./Loader";

const RootWrapper = () => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const lenis = new Lenis({
      smoothWheel: true,
      smoothTouch: false,
    });

    function raf(time) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }

    requestAnimationFrame(raf);

    return () => {
      lenis.destroy();
    };
  }, []);

  useEffect(() => {
    if (loading) {
      document.body.style.overflow = "hidden";
      document.documentElement.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
      document.documentElement.style.overflow = "";
    }
  }, [loading]);

  return (
    <>
      <ScrollRestoration getKey={() => null} />
      <AnimatePresence>
        {loading && (
          <Loader durationMs={3000} onComplete={() => setLoading(false)} />
        )}
      </AnimatePresence>
      <div
        className={`transition-opacity duration-500 ${
          loading ? "opacity-0" : "opacity-100"
        }`}
      >
        <Outlet />
      </div>
    </>
  );
};

export default RootWrapper;
