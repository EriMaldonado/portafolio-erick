"use client";

import React, { useEffect, useState } from "react";
import { useTheme } from "next-themes";
import Link from "next/link";
import { FaGithub, FaLinkedin, FaEnvelope, FaWhatsapp } from "react-icons/fa";

import { NAV_ITEMS } from "@/lib/constants/navigation";
import { SOCIAL_LINKS } from "@/lib/constants/social-links";

const ICONS_MAP = {
  github: FaGithub,
  linkedin: FaLinkedin,
  email: FaEnvelope,
  whatsapp: FaWhatsapp,
} as const;

const Footer: React.FC = () => {
  const { theme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  const isDark = theme === "dark";
  if (!mounted) {
    return <footer className="w-full border-t border-transparent" />;
  }

  return (
    <footer
      className={`w-full border-t transition-colors duration-300 ease-in-out bg-transparent ${
        isDark ? "border-gray-700" : "border-gray-200"
      }`}
    >
      <div className="max-w-screen-xl mx-auto px-4 py-8 md:py-12 flex flex-col md:flex-row justify-between items-center gap-6">
        <div className="text-center md:text-left">
          <h2
            className={`text-xl font-bold ${isDark ? "text-white" : "text-gray-900"}`}
          >
            Erick Maldonado
          </h2>
          <p
            className={`mt-1 text-sm ${isDark ? "text-gray-400" : "text-gray-600"}`}
          >
            Software Developer | IT Engineer
          </p>
        </div>

        <div className="flex flex-col md:flex-row items-center gap-4 md:gap-6">
          {NAV_ITEMS.map((item) => (
            <Link
              key={item.id}
              href={item.href}
              className={`hover:text-blue-600 transition-colors ${
                isDark ? "text-gray-300" : "text-gray-700"
              }`}
            >
              {item.id.charAt(0).toUpperCase() + item.id.slice(1)}
            </Link>
          ))}
        </div>

        <div className="flex gap-4 mt-4 md:mt-0">
          {Object.entries(SOCIAL_LINKS).map(([key, value]) => {
            if (!["github", "linkedin", "email", "whatsapp"].includes(key))
              return null;

            const Icon = ICONS_MAP[key as keyof typeof ICONS_MAP];
            const href =
              key === "email"
                ? `mailto:${value}`
                : key === "whatsapp"
                  ? SOCIAL_LINKS.whatsappUrl
                  : value;

            return (
              <Link
                key={key}
                href={href as string}
                target="_blank"
                aria-label={key}
              >
                <Icon
                  size={24}
                  className={`transition-transform transform hover:scale-110 ${
                    isDark
                      ? "text-white hover:text-blue-400"
                      : "text-gray-700 hover:text-blue-600"
                  }`}
                />
              </Link>
            );
          })}
        </div>
      </div>

      <div
        className={`w-full text-center py-4 text-sm ${
          isDark
            ? "text-gray-500 border-t border-gray-700"
            : "text-gray-500 border-t border-gray-200"
        }`}
      >
        © {new Date().getFullYear()} Erick Maldonado. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
