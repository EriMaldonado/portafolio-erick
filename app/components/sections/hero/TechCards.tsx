"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";

export default function TechCards({ techs }: { techs: any[] }) {
  const [activeIndex, setActiveIndex] = useState(0);
  const [mounted, setMounted] = useState(false);
  const radius = 200;
  const orbitDuration = 60;

  useEffect(() => {
    setMounted(true);
    const interval = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % techs.length);
    }, 4000);
    return () => clearInterval(interval);
  }, [techs.length]);

  if (!mounted) return null;

  return (
    <div className="relative flex items-center justify-center w-full h-[550px] overflow-visible">
      <AnimatePresence mode="wait">
        <motion.div
          key={techs[activeIndex].name}
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 0.2, scale: 1.1 }}
          exit={{ opacity: 0, scale: 1.3 }}
          transition={{ duration: 1 }}
          className="absolute w-[320px] h-[320px] rounded-full blur-[70px] pointer-events-none z-0"
          style={{ backgroundColor: techs[activeIndex].color }}
        />
      </AnimatePresence>

      <div className="absolute z-40 flex items-center justify-center pointer-events-none">
        <AnimatePresence mode="wait">
          <motion.div
            key={techs[activeIndex].name}
            initial={{ scale: 0.8, opacity: 0, filter: "blur(10px)" }}
            animate={{ scale: 1, opacity: 1, filter: "blur(0px)" }}
            exit={{ scale: 1.2, opacity: 0, filter: "blur(15px)" }}
            transition={{ type: "spring", stiffness: 100, damping: 20 }}
            className="flex flex-col items-center justify-center w-32 h-32 bg-white/10 dark:bg-black/40 backdrop-blur-3xl border border-white/20 rounded-[2.5rem] shadow-2xl"
            style={{
              boxShadow: `0 0 60px -20px ${techs[activeIndex].color}99`,
            }}
          >
            <Image
              src={techs[activeIndex].icon}
              alt="Active"
              width={45}
              height={45}
              className="object-contain drop-shadow-[0_0_10px_rgba(255,255,255,0.3)]"
            />
            <motion.span className="mt-2 text-[9px] font-black dark:text-white/80 text-black uppercase tracking-[0.2em]">
              {techs[activeIndex].name}
            </motion.span>
          </motion.div>
        </AnimatePresence>
      </div>

      <div className="relative w-full h-full flex items-center justify-center z-10">
        {techs.map((tech, index) => {
          const angleOffset = (index / techs.length) * 360;
          const isActive = index === activeIndex;

          return (
            <motion.div
              key={tech.name}
              className="absolute flex items-start justify-center"
              style={{ width: radius * 2, height: radius * 2 }}
              animate={{ rotate: [angleOffset, angleOffset + 360] }}
              transition={{
                duration: orbitDuration,
                repeat: Infinity,
                ease: "linear",
              }}
            >
              <motion.div
                animate={{
                  y: isActive ? radius : 0,
                  scale: isActive ? 0.4 : 1,
                  opacity: isActive ? 0 : 0.8,
                  rotate: [-angleOffset, -(angleOffset + 360)],
                }}
                transition={{
                  rotate: {
                    duration: orbitDuration,
                    repeat: Infinity,
                    ease: "linear",
                  },
                  y: { duration: 1, ease: [0.4, 0, 0.2, 1] },
                  opacity: { duration: 1 },
                  scale: { duration: 1 },
                }}
                className="relative group"
              >
                <div
                  className="absolute inset-0 blur-xl opacity-0 group-hover:opacity-40 transition-opacity rounded-full"
                  style={{ backgroundColor: tech.color }}
                />

                <div className="relative flex items-center justify-center w-14 h-14 bg-white/10 dark:bg-black/20 backdrop-blur-xl border border-white/10 rounded-2xl shadow-lg hover:border-white/30 transition-all duration-500">
                  <Image
                    src={tech.icon}
                    alt={tech.name}
                    width={28}
                    height={28}
                    className="object-contain"
                  />
                </div>
              </motion.div>
            </motion.div>
          );
        })}
      </div>
    </div>
  );
}
