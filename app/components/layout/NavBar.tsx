"use client";

import React, { useState } from "react";
import { ModeDark, LanguageToggle } from "@/providers";
import { useTranslation } from "@/lib/i18n";
import { useScrollPosition } from "@/lib/hooks";
import { NAV_ITEMS } from "@/lib/constants";
import Link from "next/link";
import Image from "next/image";

const NavBar: React.FC = () => {
  const [navbarOpen, setNavbarOpen] = useState(false);
  const scrolled = useScrollPosition(50);
  const { t } = useTranslation();

  const navLinks = NAV_ITEMS.map((item) => ({
    title: t.nav[item.id as keyof typeof t.nav],
    path: item.path,
  }));

  return (
    <nav
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ease-in-out ${
        scrolled
          ? "bg-white/80 dark:bg-black/80 backdrop-blur-lg shadow-lg border-b border-gray-200 dark:border-gray-800"
          : "bg-transparent backdrop-blur-sm"
      }`}
    >
      <div className="max-w-screen-xl mx-auto px-4 md:px-8">
        <div className="flex items-center justify-between py-3 md:py-4">
          <div className="flex items-center gap-x-3">
            <div className="w-12 h-12 rounded-full overflow-hidden ring-2 ring-primary/20 hover:ring-primary/40 transition-all">
              <Image
                src="/logo.png"
                alt="Erick"
                width={48}
                height={48}
                className="object-cover"
              />
            </div>
            <div className="block">
              <span className="block text-gray-900 dark:text-white font-bold text-lg">
                Erick Maldonado
              </span>
              <span className="block text-gray-700 dark:text-gray-400 text-md">
                IT Engineer | Software Developer
              </span>
            </div>
          </div>

          <div className="hidden md:flex items-center justify-center flex-1">
            <ul className="flex items-center space-x-8">
              {navLinks.map((item, idx) => (
                <li key={idx}>
                  <Link
                    href={item.path}
                    className="text-lg font-semibold text-gray-900 hover:text-primary dark:text-white dark:hover:text-primary transition-all duration-300 ease-in-out border-b-2 border-transparent hover:border-primary pb-1"
                  >
                    {item.title}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div className="flex items-center gap-2">
            <div className="hidden md:flex items-center gap-2">
              <LanguageToggle />
              <ModeDark />
            </div>

            <button
              className="md:hidden outline-none p-2 rounded-md text-gray-900 dark:text-white hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors"
              onClick={() => setNavbarOpen(!navbarOpen)}
              aria-label={navbarOpen ? "Close menu" : "Open menu"}
              aria-expanded={navbarOpen}
            >
              {navbarOpen ? (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                >
                  <path
                    fillRule="evenodd"
                    d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                    clipRule="evenodd"
                  />
                </svg>
              ) : (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M4 8h16M4 16h16"
                  />
                </svg>
              )}
            </button>
          </div>
        </div>

        <div
          className={`md:hidden ${
            navbarOpen ? "block" : "hidden"
          } transition-all duration-300 ease-in-out pb-4`}
        >
          <ul className="flex flex-col space-y-3">
            {navLinks.map((item, idx) => (
              <li key={idx}>
                <Link
                  href={item.path}
                  className="block font-semibold text-gray-900 hover:text-primary dark:text-white dark:hover:text-primary transition-all duration-300 ease-in-out py-2 px-4 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-800"
                  onClick={() => setNavbarOpen(false)}
                >
                  {item.title}
                </Link>
              </li>
            ))}
          </ul>

          <div className="flex items-center gap-3 mt-4 px-4 pt-4 border-t border-gray-200 dark:border-gray-800">
            <LanguageToggle />
            <ModeDark />
          </div>
        </div>
      </div>
    </nav>
  );
};

export default NavBar;
