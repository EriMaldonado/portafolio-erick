"use client";

import { useState, useEffect } from "react";

/**
 * Custom hook to track scroll to top button visibility
 * @param threshold - Scroll position threshold in pixels (default: 300)
 * @returns boolean indicating if scroll to top button should be shown
 */
export function useScrollToTop(threshold: number = 300): {
  showScrollTop: boolean;
  scrollToTop: () => void;
} {
  const [showScrollTop, setShowScrollTop] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setShowScrollTop(window.scrollY > threshold);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [threshold]);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return { showScrollTop, scrollToTop };
}
