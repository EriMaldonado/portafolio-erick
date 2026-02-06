"use client";
import Footer from "@/app/components/layout/Footer";
import Hero from "@/app/components/sections/hero/Hero";
import NavBar from "@/app/components/layout/NavBar";
import Projects from "@/app/components/sections/projects/Projects";
import Skills from "@/app/components/sections/skills/Skills";
import Contact from "@/app/components/forms/Contact";

export default function Home() {
  return (
    <main>
      <NavBar />
      <Hero />
      <Skills />
      <Projects />
      <Contact />
      <Footer />
    </main>
  );
}
