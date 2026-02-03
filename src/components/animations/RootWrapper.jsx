import {
  Outlet,
  ScrollRestoration,
} from "react-router-dom";
import { useEffect } from "react";
import Lenis from "lenis";

const RootWrapper = () => {
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

  return (
    <>
      {/* 🔥 THIS FIXES REFRESH SCROLL */}
      <ScrollRestoration getKey={() => null} />
      <Outlet />
    </>
  );
};

export default RootWrapper;
