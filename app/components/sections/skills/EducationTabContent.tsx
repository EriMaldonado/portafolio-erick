"use client";
import React, { useState } from "react";
import Image from "next/image";
import {
  EducationData,
  EducationCategory,
  EducationItem,
} from "@/lib/constants/education-data";

const EducationTabContent: React.FC = () => {
  const [modalOpen, setModalOpen] = useState(false);
  const [modalContent, setModalContent] = useState<EducationItem | null>(null);

  const handleImageClick = (item: EducationItem) => {
    setModalContent(item);
    setModalOpen(true);
  };

  const closeModal = () => {
    setModalOpen(false);
    setModalContent(null);
  };

  return (
    <div className="py-6">
      {EducationData.map((category: EducationCategory) => (
        <div className="max-w-screen-xl mx-auto p-3" key={category.category}>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 max-w-[1240px] mx-auto pt-2">
            {category.items.map((item: EducationItem, index: number) => (
              <div
                key={`${item.alt}-${index}`}
                onClick={() => handleImageClick(item)}
                className="transform hover:-translate-y-2 transition-all duration-300 cursor-pointer rounded-2xl overflow-hidden shadow-lg bg-white dark:bg-gray-800 border border-border/50"
              >
                <div className="relative w-full h-[180px]">
                  <Image
                    src={item.src}
                    alt={item.alt}
                    fill
                    sizes="(max-width: 768px) 100vw, 33vw"
                    className="object-cover"
                  />
                </div>
                <div className="p-5">
                  <h3 className="text-gray-900 dark:text-white font-bold mb-1">
                    {item.alt}
                  </h3>
                  <p className="text-primary text-sm">{item.label}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      ))}

      {modalOpen && modalContent && (
        <div
          className="fixed inset-0 bg-black/80 backdrop-blur-sm flex items-center justify-center z-[100] p-4"
          onClick={closeModal}
        >
          <div
            className="bg-white dark:bg-gray-900 p-2 w-full max-w-3xl relative rounded-2xl shadow-2xl"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              onClick={closeModal}
              className="absolute -top-12 right-0 text-white text-4xl"
            >
              &times;
            </button>
            <div className="relative w-full aspect-video">
              <Image
                src={modalContent.src}
                alt={modalContent.alt}
                fill
                className="object-contain"
              />
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default EducationTabContent;
