"use client";

import { useState, useEffect, ReactNode } from "react";
import { Geist, Geist_Mono } from "next/font/google";

const geistSans = Geist({ variable: "--font-geist-sans", subsets: ["latin"] });
const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export default function DynamicBody({ children }: { children: ReactNode }) {
  const [bodyClass, setBodyClass] = useState("");

  useEffect(() => {
    setBodyClass(`${geistSans.variable} ${geistMono.variable}`);
  }, []);

  return <div className={bodyClass}>{children}</div>;
}
