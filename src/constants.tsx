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
import Next from "../public/logos/ri_nextjs-fill.svg";
import Sass from "../public/logos/logos_sass.svg";
import Antd from "../public/logos/devicon_antdesign.svg";
import Redux from "../public/logos/logos_redux.svg";
import Supabase from "../public/logos/devicon_supabase.svg";
import ShadcnUi from "../public/logos/simple-icons_shadcnui.svg";
import Express from "../public/logos/skill-icons_expressjs-light.svg";

// Projects Images
import Veronicas from "../public/projectsImages/Veronicas.jpg";
import Midwest from "../public/projectsImages/midwest.jpg";
import ScholarHub from "../public/projectsImages/ScholarHub.jpg";
import FitVibe from "../public/projectsImages/fitvibe.png";
import Portfolio from "../public/projectsImages/TimPortfolio.jpg";
import AppDesign from "../public/projectsImages/ImageOne.png";
import Hom from "../public/projectsImages/hom.jpg";
import Heritage from "../public/projectsImages/Heritage.png";
import Macgroup from "../public/projectsImages/Macgroup.png";

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
  { id: 5, title: "Next", logo: <Image src={Next} alt="nextjs" /> },
  { id: 6, title: "Sass", logo: <Image src={Sass} alt="sass" /> },
  { id: 7, title: "Ant Design", logo: <Image src={Antd} alt="ant design" /> },
  { id: 8, title: "Redux", logo: <Image src={Redux} alt="redux" /> },
  { id: 9, title: "ShadcnUi", logo: <Image src={ShadcnUi} alt="shadcnui" /> },
  { id: 10, title: "Supabase", logo: <Image src={Supabase} alt="supabase" /> },
  { id: 11, title: "Express", logo: <Image src={Express} alt="express" /> },
  { id: 12, title: "React", logo: <Image src={React} alt="react" /> },
];

export const researchProcess = [
  {
    id: 1,
    title: "1. Research and Design",
    notes:
      "Research is integral in every frontend project I embark on, this process and operation gets me acquainted with the necessary tools, and information needed to undertake this project, which includes, design system and theme for the project, existing website with similar functions. One the aforementioned process is done carefully, the next step to start the design phase with Figma. ",
  },
  {
    id: 2,
    title: "2. Development and Testing",
    notes:
      "While the research & design phase gets me with pre information needed, and the prototype of the website, the development and testing phase is, where I get my hands dirty. Using the right tools and technologies, I am being able to design a modern frontend application that emphasizes on user’s first. Next, is testing this is done to ensure that the website is actually how it is meant to be, regardless.",
  },
  {
    id: 3,
    title: "3. Deployment and Delivery",
    notes:
      "The Website is actually developed and working as expected, next is to deploy it, I choose to deploy most of my websites on Vercel, is blazingly fast and quick to set up. Once Deployed, the website is being delivered the client, the url of a working site, a documentation, and other information I fell is important for the client to have.",
  },
  {
    id: 4,
    title: "4. Periodic Maintenance & Update",
    notes:
      "Once deployed and delivered, I maintain periodic check on the website functions, to ensure every components are still running as they are meant to run. Updates on the other hand, are usually triggered by the client, most especially when there is call to an update on the content of website, of which I am always happy to do.",
  },
];

export const projects = [
  {
    id: 1,
    image: <Image className="project-image" src={Midwest} alt="midwest" />,
    title: "Midwest Jack and Greens",
    description: "A jamaican restaurant",
    href: "/",
    reverse: false,
  },
  {
    id: 2,
    image: <Image className="project-image" src={Veronicas} alt="veronicas" />,
    title: "Veronicas Kitchen",
    description: "A Food Reservation  Website",
    href: "/",
    reverse: true,
  },
  {
    id: 3,
    image: <Image className="project-image" src={ScholarHub} alt="scholarhub" />,
    title: "Scholars Hub",
    description: "A Research Delivery Website",
    href: "/",
    reverse: false,
  },
];

export const projectsInfoDetails = [
  {
    id: 1,
    image: <Image className="project-image" src={Midwest} alt="midwest" />,
    title: "Midwest Jack and Greens",
    description: "A jamaican restaurant",
    technologiesUsed: ["Nextjs", "Sass", "Nodemailer"],
    designTheme: ["Light"],
    href: "https://midwest-peach.vercel.app/",
    reverse: false,
  },
  {
    id: 2,
    image: <Image className="project-image" src={Veronicas} alt="veronicas" />,
    title: "Veronicas Kitchen",
    description: "A Food Reservation  Website",
    technologiesUsed: ["Nextjs", "Sass", "Nodemailer"],
    designTheme: ["Light"],
    href: "https://www.veronicas-kitchen.com/",
    reverse: true,
  },
  {
    id: 3,
    image: <Image className="project-image" src={ScholarHub} alt="scholarhub" />,
    title: "Scholars Hub ",
    description: "A Research Delivery Website - [ONGOING PROJECT]",
    href: "https://scholar-six.vercel.app/",
    reverse: false,
    technologiesUsed: ["Nextjs", "TailwindCss", "Ant Design", "React Router"],
    designTheme: ["Dark"],
    sourceCodeHref: "/",
  },
  {
    id: 4,
    image: <Image className="project-image" src={Portfolio} alt="portfolio" />,
    title: "Tim's Portfolio",
    description: "A Portfolio Design and Development for A friend",
    href: "https://timgabrielcodes.vercel.app/",
    reverse: false,
    technologiesUsed: ["Angular", "Tailwindcss"],
    designTheme: ["Light"],
    sourceCodeHref: "/",
  },
  {
    id: 5,
    image: <Image className="project-image" src={Macgroup} alt="Macgroup Tech" />,
    title: "Macgroup Technologies",
    description: "A ReDesign and Development of the Macgroup Technologies",
    href: "https://www.macgrouptech.com/",
    reverse: false,
    technologiesUsed: ["Nextjs", "Sass", "Nodemailer"],
    designTheme: ["Light"],
    sourceCodeHref: "/",
  },

  {
    id: 5,
    image: <Image className="project-image" src={Heritage} alt="heritage Hub" />,
    title: "Heritage Hub",
    description: "A Cuising Finder Website",
    href: "https://soulfood-sepia.vercel.app/",
    reverse: false,
    technologiesUsed: ["Nextjs", "Sass", "Nodemailer", "MongoDb", "Express Js"],
    designTheme: ["Light"],
    sourceCodeHref: "/",
  },

  {
    id: 3,
    image: <Image className="project-image" src={FitVibe} alt="scholarhub" />,
    title: "FitVibe Hub",
    description: "Landing Page for a fitness and health website",
    href: "https://fitness-and-wellness.vercel.app/",
    reverse: false,
    technologiesUsed: ["Nextjs", "Tailwindcss", "Nodemailer"],
    designTheme: ["Light"],
    sourceCodeHref: "/",
  },

  {
    id: 3,
    image: <Image className="project-image" src={ScholarHub} alt="scholarhub" />,
    title: "Culinary Finder with API",
    description: "A Culinary Finder with API",
    href: "https://food-finder-ecru.vercel.app/",
    reverse: false,
    technologiesUsed: ["Axios", "TailwindCss"],
    designTheme: ["Light"],
    sourceCodeHref: "/",
  },

  {
    id: 3,
    image: <Image className="project-image" src={AppDesign} alt="Appdesign" />,
    title: "Food Green",
    description: "A Ui design for food delivery application",
    href: "",
    reverse: false,
    technologiesUsed: ["Figma", "CorelDraw"],
    designTheme: ["Light"],
    sourceCodeHref: "/",
  },
  {
    id: 3,
    image: <Image className="project-image" src={Hom} alt="House of Max" />,
    title: "House of Max",
    description: "",
    href: "https://www.houseofmax.org/",
    reverse: false,
    technologiesUsed: ["Figma", "CorelDraw"],
    designTheme: ["Light"],
    sourceCodeHref: "/",
  },
];
