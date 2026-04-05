"use client";
import { useState, useEffect } from "react";

export default function ResponsivePageSwap({
  mobile,
  desktop,
  pad,
  type,
}: {
  mobile: React.ReactNode;
  desktop: React.ReactNode;
  type: "application" | "landing" | "projects" | "shop";
  pad?: React.ReactNode;
}) {
  // Initialize with null to prevent Hydration Mismatch
  const [isDesktop, setIsDesktop] = useState<boolean | null>(null);
  const [isPad, setIsPad] = useState<boolean | null>(null);

  useEffect(() => {
    // This function only sets state if the VALUE changes (true -> false or false -> true)
    const handleResize = () => {
      if (type == "landing") {
        const match = window.innerWidth > 550 && type == "landing";
        setIsDesktop((prev) => (prev === match ? prev : match));
      } else if (
        type == "application" ||
        type === "projects" ||
        type === "shop"
      ) {
        const match =
          window.innerWidth > 600 &&
          (type == "application" || type === "projects" || type === "shop");
        setIsDesktop((prev) => (prev === match ? prev : match));
        setIsPad(
          window.innerWidth > 550 &&
            window.innerWidth <= 815 &&
            (type == "application" || type === "projects"),
        );
      }
    };

    window.addEventListener("resize", handleResize);
    handleResize(); // Set initial state

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  // 1. Loading state (prevents "flash" of mobile on desktop)
  if (isDesktop === null) return null;

  // 2. ONLY the correct screen is rendered/mounted in memory
  return isPad ? pad : isDesktop ? desktop : mobile;
}
