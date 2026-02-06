"use client";

import { useState, useEffect } from "react";

/**
 * Custom hook to track scroll position
 * @param threshold - Scroll position threshold in pixels (default: 50)
 * @returns boolean indicating if scrolled past threshold
 */
export function useScrollPosition(threshold: number = 50): boolean {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > threshold);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [threshold]);

  return scrolled;
}
