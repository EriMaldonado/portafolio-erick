"use client";
import React from "react";
import Image from "next/image";

import { TechData, TechCategory } from "@/lib/constants/tech-data";

const SkillsTabContent: React.FC = () => {
  return (
    <div className="space-y-10 py-6">
      <div className="max-w-7xl w-full grid grid-cols-1 sm:grid-cols-1 xl:grid-cols-3 gap-8 mx-auto">
        {TechData.map((category: TechCategory) => (
          <div key={category.category} className="flex justify-center">
            <div className="bg-gradient-to-br from-[#e9e8e4]/90 to-white dark:from-gray-900 dark:to-gray-800 rounded-2xl shadow-xl w-full max-w-md p-8 transition-transform hover:scale-[1.02] hover:shadow-2xl border border-border/50">
              <h2 className="text-2xl font-bold text-center text-gray-800 dark:text-gray-200 pb-6">
                {category.category}
              </h2>

              <div className="grid grid-cols-3 gap-4">
                {category.items.map((item, index) => (
                  <div
                    key={`${category.category}-${item.label}-${index}`}
                    className="group flex flex-col items-center bg-white/50 dark:bg-gray-700/50 backdrop-blur-sm rounded-xl p-3 shadow-sm transition-all hover:bg-white dark:hover:bg-gray-700 hover:scale-110 hover:shadow-md border border-transparent hover:border-primary/20"
                  >
                    <div className="w-10 h-10 relative mb-2">
                      <Image
                        src={item.src}
                        alt={item.alt}
                        fill
                        sizes="40px"
                        style={{ objectFit: "contain" }}
                        className="transition-transform duration-500 ease-in-out transform group-hover:rotate-12 group-hover:scale-110"
                      />
                    </div>
                    <span className="text-[10px] sm:text-xs font-bold text-gray-700 dark:text-gray-200 text-center leading-tight">
                      {item.label}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default SkillsTabContent;
