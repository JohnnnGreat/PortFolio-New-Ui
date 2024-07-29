import Development from "@/components/Development/Development";
import Hero from "@/components/HeroComponent/Hero";
import Projects from "@/components/Projects/Projects";
import Tech from "@/components/Tech/Tech";
import Work from "@/components/Work/Work";

export default function Home() {
  return (
    <>
      <Hero />
      <Projects />
      <Tech />
      <Development />
      <Work />
    </>
  );
}
