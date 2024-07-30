import Development from "@/components/Development/Development";
import Footer from "@/components/Footer/Footer";
import Hero from "@/components/HeroComponent/Hero";
import Projects from "@/components/Projects/Projects";
import Tech from "@/components/Tech/Tech";
import Work from "@/components/Work/Work";
import { Metadata } from "next";

export const metadata = {
  title: "John Ossai - Frontend Developer",
  description: "John Ossai's portfolio - A showcase of my work and skills as a frontend developer.",
  openGraph: {
    title: "John Ossai - Frontend Developer",
    description: "A showcase of John Ossai's work and skills as a frontend developer.",
    type: "website",
    url: "https://johnos.vercel.app/",
    siteName: "John Ossai's Portfolio",
    images: [
      {
        url: "https://johnos.vercel.app/_next/static/media/profile_illus.c0fc7545.svg",
        width: 1200,
        height: 630,
        alt: "John Ossai - Frontend Developer",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    site: "@OssaiJohnOJ",
    title: "John Ossai - Frontend Developer",
    description: "A showcase of John Ossai's work and skills as a frontend developer.",
    image: "https://johnos.vercel.app/_next/static/media/profile_illus.c0fc7545.svg",
  },
  additionalMetaTags: [
    {
      name: "viewport",
      content: "width=device-width, initial-scale=1",
    },
    {
      name: "theme-color",
      content: "#000000",
    },
    {
      name: "author",
      content: "John Ossai",
    },
    {
      name: "keywords",
      content:
        "John Ossai, frontend developer, web developer, portfolio, HTML, CSS, JavaScript, React",
    },
  ],
  manifest: "/manifest.json",
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
