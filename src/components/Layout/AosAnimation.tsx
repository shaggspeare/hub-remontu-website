"use client";

import React from "react";
import AOS from "aos";
import { usePathname } from "next/navigation";
import "../../../node_modules/aos/dist/aos.css";

const AosAnimation = () => {
  const pathname = usePathname();

  React.useEffect(() => {
    AOS.init({
      once: true,
      duration: 600,
      offset: 50,
    });

    // Layout can still shift after init (images, fonts, swiper sliders
    // finishing their own async mounting), which leaves AOS with stale
    // trigger offsets. Recalculate once everything has settled.
    const handleLoad = () => AOS.refreshHard();
    window.addEventListener("load", handleLoad);
    return () => window.removeEventListener("load", handleLoad);
  }, []);

  // The layout persists across client-side navigations, so AOS.init()
  // above only ever runs once per full page load. Without this, any
  // page reached via next/link (instead of a hard reload) never gets
  // its [data-aos] elements registered and they stay invisible.
  React.useEffect(() => {
    AOS.refreshHard();
  }, [pathname]);

  return null;
};

export default AosAnimation;
