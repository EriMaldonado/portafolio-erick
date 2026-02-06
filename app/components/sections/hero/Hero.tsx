"use client";

import { useState, useEffect } from "react";
import { useTranslation } from "@/lib/i18n";
import { FaGithub } from "react-icons/fa";
import { ImLinkedin2 } from "react-icons/im";
import { TypeAnimation } from "react-type-animation";
import { motion } from "framer-motion";
import Link from "next/link";
import TechCards from "./TechCards";
import { Button } from "@/app/components/ui/button";
import { RESUME_URLS, SOCIAL_LINKS } from "@/lib/constants/social-links";

export default function Hero() {
  const { t } = useTranslation();
  const [selectedLanguage, setSelectedLanguage] = useState<"es" | "en">("es");
  const [showScrollTop, setShowScrollTop] = useState(false);

  const techs = [
    { name: "React", icon: "/tech/react.png", color: "#61DAFB" },
    { name: "Next.js", icon: "/tech/nextjs.png", color: "#808080" },
    { name: "TypeScript", icon: "/tech/typescript.png", color: "#3178C6" },
    { name: "Node.js", icon: "/tech/node.png", color: "#339933" },
    { name: "Tailwind", icon: "/tech/tailwind.png", color: "#06B6D4" },
    { name: "MongoDB", icon: "/tech/mongodb.png", color: "#47A248" },
    { name: "GCP", icon: "/tech/gcp.png", color: "#F05032" },
    { name: "Postman", icon: "/tech/postman.png", color: "#FF6C37" },
    { name: "JavaScript", icon: "/tech/javascript.png", color: "#F7DF1E" },
  ];

  useEffect(() => {
    const handleScroll = () => setShowScrollTop(window.scrollY > 300);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <section
      id="home"
      className="relative flex items-center overflow-hidden min-h-screen pt-20"
    >
      <div className="max-w-6xl p-3 w-full flex flex-col sm:p-6 mx-auto my-auto lg:flex-row lg:justify-between items-center">
        <div className="flex flex-col pt-10 md:pt-26 pb-10 lg:w-1/2 lg:text-left text-center z-10 space-y-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <h1 className="text-3xl sm:text-5xl font-bold leading-tight text-gray-900 dark:text-white">
              {t.hero.greeting}
              <br />
              <span className="text-gray-500 dark:text-gray-400">
                <TypeAnimation
                  sequence={[t.hero.role1, 2000, t.hero.role2, 2000]}
                  repeat={Infinity}
                />
              </span>
            </h1>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3 }}
          >
            <p className="text-lg font-medium text-gray-700 dark:text-gray-300 max-w-lg lg:mx-0 mx-auto leading-relaxed">
              {t.hero.description}
            </p>
          </motion.div>

          <div className="flex flex-wrap items-center gap-4 justify-center lg:justify-start">
            <Button
              variant="hero"
              onClick={() =>
                window.open(RESUME_URLS[selectedLanguage], "_blank")
              }
            >
              {t.hero.resumeButton}
            </Button>

            <select
              value={selectedLanguage}
              onChange={(e) =>
                setSelectedLanguage(e.target.value as "es" | "en")
              }
              className="bg-white dark:bg-gray-800 font-semibold border-2 border-gray-200 dark:border-gray-700 rounded-xl py-3 px-4 outline-none"
            >
              <option value="es">Español</option>
              <option value="en">English</option>
            </select>

            <div className="flex items-center space-x-4 ml-2">
              <Link href={SOCIAL_LINKS.github} target="_blank">
                <FaGithub
                  size={32}
                  className="hover:text-primary transition-colors"
                />
              </Link>
              <Link href={SOCIAL_LINKS.linkedin} target="_blank">
                <ImLinkedin2
                  size={32}
                  className="hover:text-primary transition-colors"
                />
              </Link>
            </div>
          </div>
        </div>

        <div className="flex items-center justify-center lg:w-1/2 w-full relative h-[500px] lg:h-[600px]">
          <TechCards techs={techs} />
        </div>
      </div>
    </section>
  );
}
