import Certification from "@/components/Certification";
import Footer from "@/components/Footer";
import Hero from "@/components/Hero";
import NavBar from "@/components/NavBar";
import Projects from "@/components/Projects";
import Skills from "@/components/Skills";
import { Contact } from "lucide-react";

export default function Home() {
  return (
    <main>
      <NavBar />
      <Hero />
      <Projects />
      <Skills />
      <Certification />
      <Contact />
      <Footer />
    </main>
  );
}
