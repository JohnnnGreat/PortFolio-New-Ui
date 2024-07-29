// Svgs imports
import Facebook from "../public/svgs/facebook.svg";
import Github from "../public/svgs/github.svg";
import X from "../public/svgs/x.svg";
import In from "../public/svgs/in.svg";
import Image from "next/image";

// Tech Stack Imports
import Figma from "../public/logos/logos_figma.svg";
import CorelDraw from "../public/logos/simple-icons_coreldraw.svg";

import Typescript from "../public/logos/skill-icons_typescript.svg";
import React from "../public/logos/Vector.svg";
import ReactRouter from "../public/logos/devicon_reactrouter.svg";
export const socialMediaLinks = [
  {
    id: 1,
    icon: <Image src={Facebook} alt="facebook" />,
    link: "/",
  },
  {
    id: 2,
    icon: <Image src={Github} alt="github" />,
    link: "/",
  },
  {
    id: 3,
    icon: <Image src={X} alt="x" />,
    link: "/",
  },
  {
    id: 4,
    icon: <Image src={In} alt="in" />,
    link: "/",
  },
];

export const techStacks = [
  { id: 1, title: "Figma", logo: <Image src={Figma} alt="figma" /> },
  { id: 2, title: "Corel Draw", logo: <Image src={CorelDraw} alt="cdr" /> },
  { id: 3, title: "Typescript", logo: <Image src={Typescript} alt="typescript" /> },
  { id: 4, title: "React Router", logo: <Image src={ReactRouter} alt="rr" /> },
  { id: 5, title: "Figma", logo: <Image src={Figma} alt="figma" /> },
  { id: 6, title: "Figma", logo: <Image src={Figma} alt="figma" /> },
  { id: 7, title: "Figma", logo: <Image src={Figma} alt="figma" /> },
  { id: 8, title: "Figma", logo: <Image src={Figma} alt="figma" /> },
  { id: 9, title: "Figma", logo: <Image src={Figma} alt="figma" /> },
  { id: 10, title: "Figma", logo: <Image src={Figma} alt="figma" /> },
  { id: 11, title: "Figma", logo: <Image src={Figma} alt="figma" /> },
  { id: 12, title: "Figma", logo: <Image src={Figma} alt="figma" /> },
];
