import Development from "@/components/Development/Development";
import Footer from "@/components/Footer/Footer";
import Hero from "@/components/HeroComponent/Hero";
import Projects from "@/components/Projects/Projects";
import Tech from "@/components/Tech/Tech";
import Work from "@/components/Work/Work";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "John Ossai",
  description: "I am a Frontend Developer",
};

export default function Home() {
  return (
    <>
      <Hero />
      <Projects />
      <Tech />
      <Development />
      <Work />
      <Footer />
    </>
  );
}
