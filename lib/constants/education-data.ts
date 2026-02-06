export interface EducationItem {
  src: string;
  alt: string;
  label: string;
}

export interface EducationCategory {
  category: string;
  items: EducationItem[];
}

export const EducationData: EducationCategory[] = [
  {
    category: "Education",
    items: [
      {
        src: "/education/itin.png",
        alt: "Information Technology Engineer",
        label: "2024 - ESPE",
      },
      {
        src: "/education/frontend-g4.png",
        alt: "Frontend Developer",
        label: "2022 - Oracle One - Alura Latam",
      },
      {
        src: "/education/curso-python.png",
        alt: "Python Professional Course",
        label: "2023 - Código Facilito",
      },
      {
        src: "/education/machine-learning.png",
        alt: "Machine Learning - Sklearn",
        label: "2023 - Alura Latam",
      },
      {
        src: "/education/tecnologico.jpg",
        alt: "Technologist in Business Administration",
        label: "2019 - Tecnológico Pichincha",
      },
    ],
  },
];
