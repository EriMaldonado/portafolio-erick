"use client";
import React, { useState, useEffect } from "react";
import { FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa";

const Footer: React.FC = () => {
  const [currentYear, setCurrentYear] = useState<number>(
    new Date().getFullYear()
  );

  useEffect(() => {
    const interval = setInterval(
      () => setCurrentYear(new Date().getFullYear()),
      1000
    );
    return () => clearInterval(interval);
  }, []);

  return (
    <footer className="relative bg-[#121212] text-white py-12 overflow-hidden">
      <div className="absolute -top-20 -left-20 w-[300px] h-[300px] bg-gradient-to-tr from-[#15326F] via-[#1F2937] to-[#121212] rounded-full opacity-25 blur-3xl animate-spin-slow pointer-events-none"></div>
      <div className="absolute -bottom-20 -right-20 w-[250px] h-[250px] bg-gradient-to-bl from-[#FFD700] via-[#4C92D8] to-[#FF4500] rounded-full opacity-20 blur-2xl animate-pulse-slow pointer-events-none"></div>

      <div className="relative max-w-screen-xl mx-auto px-6 lg:px-8 flex flex-col items-center gap-6">
        <h1 className="text-3xl font-bold font-mono drop-shadow-[0_4px_8px_rgba(255,255,255,0.2)]">
          Erick Maldonado
        </h1>
        <p className="text-gray-400 text-center text-base">
          Software Developer | IT Engineer
        </p>
        <div className="flex gap-4 mt-2">
          {[FaLinkedin, FaGithub, FaEnvelope].map((Icon, i) => (
            <a
              key={i}
              href="#"
              className="relative p-3 rounded-full bg-[#1F2937] shadow-lg hover:shadow-[0_10px_20px_rgba(0,0,0,0.4)] hover:scale-110 transition-transform duration-400 transform-gpu"
            >
              <Icon
                size={24}
                className="hover:rotate-12 transition-all duration-400"
              />
              <span className="absolute inset-0 rounded-full bg-gradient-to-r from-[#FFD700] via-[#4C92D8] to-[#FF4500] opacity-0 hover:opacity-25 blur-lg transition-all duration-400 pointer-events-none"></span>
            </a>
          ))}
        </div>
        <div className="w-24 h-[2px] bg-gradient-to-r from-[#FFD700] via-[#4C92D8] to-[#FF4500] my-4 opacity-50 rounded-full"></div>

        <p className="text-gray-400 text-center text-sm">
          © {currentYear} Erick Maldonado. Made with 💛 in Ecuador
        </p>
      </div>
    </footer>
  );
};

export default Footer;
