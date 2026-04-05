"use client";

import { useEffect } from "react";

export default function WindowSizeProvider() {
  console.log("WindowSizeProvider: Module Loaded"); // Should see in browser console

  useEffect(() => {
    console.log("WindowSizeProvider: Initialized on Client");

    const handleResize = () => {
      const w = window.innerWidth;
      const h = window.innerHeight;

      console.log(`Resizing: ${w}px x ${h}px`); // Monitor this in console

      document.documentElement.style.setProperty("--win-w", `${w}px`);
      document.documentElement.style.setProperty("--win-h", `${h}px`);
    };

    window.addEventListener("resize", handleResize);
    handleResize(); // Call once to set initial variables

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return null;
}
