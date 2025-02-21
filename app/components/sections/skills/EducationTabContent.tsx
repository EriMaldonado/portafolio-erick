import React, { useState } from "react";
import Image from "next/image";

const EducationData = [
  {
    category: "Education",
    items: [
      {
        src: "/itin.png",
        alt: "Information Technology Engineer ",
        label: "2024 - ESPE",
      },
      {
        src: "/frontend-g4.png",
        alt: "Frontend Developer",
        label: "2022 - Oracle One - Alura Latam",
      },
      {
        src: "/curso-python.png",
        alt: "Python Professional Course",
        label: "2023 - Código Facilito",
      },
      {
        src: "/machine-learning.png",
        alt: "Machine Learning - Sklearn",
        label: "2023 - Alura Latam",
      },
      {
        src: "/tecnologico.jpg",
        alt: "Technologist in Business Administration",
        label: "2019 - Tecnológico Pichincha",
      },
    ],
  },
];

const EducationTabContent: React.FC = () => {
  const [modalOpen, setModalOpen] = useState(false);
  const [modalContent, setModalContent] = useState<{
    src: string;
    alt: string;
    label: string;
  } | null>(null);

  const handleImageClick = (src: string, alt: string, label: string) => {
    setModalContent({ src, alt, label });
    setModalOpen(true);
  };

  const closeModal = () => {
    setModalOpen(false);
    setModalContent(null);
  };

  return (
    <>
      {EducationData.map((category) => (
        <div className="max-w-screen-xl mx-auto p-3" key={category.category}>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 max-w-[1240px] mx-auto pt-2 ">
            {category.items.map((item, index) => (
              <div
                key={index}
                onClick={() => handleImageClick(item.src, item.alt, item.label)}
                className="transform hover:scale-105 transition-all duration-300 cursor-pointer rounded-xl overflow-hidden shadow-lg"
              >
                <div className="relative w-full h-[160px] ">
                  <Image
                    src={item.src}
                    alt={item.alt}
                    fill
                    style={{ objectFit: "cover" }}
                  />
                </div>
                <div className="p-4 bg-white dark:bg-gray-800 rounded-b-lg">
                  <h3 className="text-center text-gray-900 dark:text-[#ffffff] font-semibold">
                    {item.alt}
                  </h3>
                  <p className="text-center text-gray-800 dark:text-[#bbbbbb]">
                    {item.label}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      ))}
      {modalOpen && modalContent && (
        <div
          className="fixed inset-0 bg-black bg-opacity-50 backdrop-blur-sm flex items-center justify-center z-50 transition-opacity duration-300 ease-out"
          onClick={closeModal}
        >
          <div
            className="bg-white dark:bg-gray-800 p-6 w-11/12 sm:w-96 relative transform scale-95 transition-transform duration-300 ease-in-out hover:scale-100 rounded-xl"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              onClick={closeModal}
              className="absolute text-3xl font-semibold top-2 right-2 w-10 h-10 flex items-center justify-center rounded-full text-gray-600  "
            >
              &times;
            </button>

            <div className="flex justify-center mb-6">
              <img
                src={modalContent.src}
                alt={modalContent.alt}
                className="w-82 h-64 object-cover rounded-lg"
              />
            </div>

            <h2 className="text-xl font-semibold text-center text-[#15326F] dark:text-[#ffffff] ">
              {modalContent.alt}
            </h2>
            <p className="text-center text-lg text-[#5872c5] dark:text-[#bbbbbb]">
              {modalContent.label}
            </p>
          </div>
        </div>
      )}
    </>
  );
};

export default EducationTabContent;
