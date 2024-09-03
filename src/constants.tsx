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
import FileStorage from "../public/projectsImages/FileStorage.jpg";
import Ed from "../public/projectsImages/ed.jpg";
import Marketing from "../public/projectsImages/marketing.jpg";
import Culinary from "../public/projectsImages/culinary.jpg";
import Saveo from "../public/projectsImages/Saveo.jpg";
import Jobr from "../public/projectsImages/newl.jpg";

export const socialMediaLinks = [
  {
    id: 1,
    icon: <Image src={Facebook} alt="facebook" />,
    link: "https://www.facebook.com/johnossomossai",
  },
  {
    id: 2,
    icon: <Image src={Github} alt="github" />,
    link: "https://github.com/JohnnnGreat",
  },
  {
    id: 3,
    icon: <Image src={X} alt="x" />,
    link: "https://twitter.com/OssaiJohnOJ?t=Dr1f15Fd0HG74ivK4uJbkQ&s=09",
  },
  {
    id: 4,
    icon: <Image src={In} alt="in" />,
    link: "https://www.linkedin.com/in/john-ossai-65280b227?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app",
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
      "Research is integral to every frontend project I embark on. This process and operation acquaint me with the necessary tools and information needed to undertake this project, which includes the design system and theme for the project, as well as existing websites with similar functions. Once the aforementioned process is carefully done, the next step is to start the design phase with Figma.",
  },
  {
    id: 2,
    title: "2. Development and Testing",
    notes:
      "While the research and design phase provides me with the pre-information needed and the prototype of the website, the development and testing phase is where I get my hands dirty. Using the right tools and technologies, I am able to design a modern frontend application that emphasizes the user's needs. Next, testing is done to ensure that the website functions as intended, regardless of any issues.",
  },
  {
    id: 3,
    title: "3. Deployment and Delivery",
    notes:
      "After the website is developed and working as expected, the next step is to deploy it. I choose to deploy most of my websites on Vercel, as it is blazingly fast and quick to set up. Once deployed, the website is delivered to the client, along with the URL of the working site, a documentation, and any other information I feel is important for the client to have.",
  },
  {
    id: 4,
    title: "4. Periodic Maintenance & Update",
    notes:
      "Once deployed and delivered, I maintain periodic checks on the website's functions to ensure that every component is still running as intended. Updates, on the other hand, are usually triggered by the client, most especially when there is a need to update the website's content, which I am always happy to do.",
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
    image: <Image className="project-image" src={Jobr} alt="midwest" />,
    title: "Jobr",
    description: "A Full Stack Job Finder Application",
    technologiesUsed: ["React", "Vite", "Express"],
    designTheme: ["Light"],
    href: "https://jobr.vercel.app/",
    reverse: false,
    sourceCodeHref: "https://github.com/JohnnnGreat/Jobr-Online-Job-Portal.git",
  },
  {
    id: 15,
    image: <Image className="project-image" src={Midwest} alt="midwest" />,
    title: "Midwest Jack and Greens",
    description: "A jamaican restaurant",
    technologiesUsed: ["Nextjs", "Sass", "Nodemailer"],
    designTheme: ["Light"],
    href: "https://midwest-peach.vercel.app/",
    reverse: false,
    sourceCodeHref: "https://github.com/JohnnnGreat/Midwest",
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
    sourceCodeHref: "",
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
    sourceCodeHref: "https://github.com/JohnnnGreat/ScholarHub-MERN",
  },
  {
    id: 4,
    image: <Image className="project-image" src={Portfolio} alt="portfolio" />,
    title: "Tim's Portfolio",
    description: "A Portfolio Design and Development for A friend",
    href: "https://timgabrielcodes.vercel.app/",
    reverse: false,
    technologiesUsed: ["Next", "Tailwindcss"],
    designTheme: ["Light"],
    sourceCodeHref: "https://github.com/JohnnnGreat/TimPortfolio",
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
    id: 6,
    image: <Image className="project-image" src={Heritage} alt="heritage Hub" />,
    title: "Heritage Hub",
    description: "A Cuising Finder Website",
    href: "https://soulfood-sepia.vercel.app/",
    reverse: false,
    technologiesUsed: ["Nextjs", "Sass", "Nodemailer", "MongoDb", "Express Js"],
    designTheme: ["Light"],
    sourceCodeHref: "https://github.com/JohnnnGreat/Traditional-Cuisines",
  },

  {
    id: 7,
    image: <Image className="project-image" src={FitVibe} alt="scholarhub" />,
    title: "FitVibe Hub",
    description: "Landing Page for a fitness and health website",
    href: "https://fitness-and-wellness.vercel.app/",
    reverse: false,
    technologiesUsed: ["Nextjs", "Tailwindcss", "Nodemailer"],
    designTheme: ["Light"],
    sourceCodeHref: "https://github.com/JohnnnGreat/Fitness-and-Wellness",
  },

  {
    id: 8,
    image: <Image className="project-image" src={AppDesign} alt="Appdesign" />,
    title: "Food Green",
    description: "A Ui design for food delivery application",
    href: "/",
    reverse: false,
    technologiesUsed: ["Figma", "CorelDraw"],
    designTheme: ["Light"],
    sourceCodeHref: "/",
  },
  {
    id: 9,
    image: <Image className="project-image" src={Hom} alt="House of Max" />,
    title: "House of Max",
    description: "An Ngo Website based in Nigeria",
    href: "https://www.houseofmax.org/",
    reverse: false,
    technologiesUsed: ["Figma", "CorelDraw"],
    designTheme: ["Light"],
    sourceCodeHref: "https://github.com/JohnnnGreat/Maxwell-Bessie-Adiele-",
  },
  {
    id: 10,
    image: <Image className="project-image" src={FileStorage} alt="File Storage" />,
    title: "File Storage",
    description: "A File Storage Web Application that allow Sharing of files",
    href: "https://media-storage-pi.vercel.app/",
    reverse: false,
    technologiesUsed: ["Next", "Shadcnui", "Supabase"],
    designTheme: ["Light"],
    sourceCodeHref: "https://github.com/JohnnnGreat/Media-Storage-Supabase-Next.Js",
  },

  {
    id: 11,
    image: <Image className="project-image" src={Ed} alt="ed circle" />,
    title: "Ed Circle",
    description: "Landing Page for a Educational Resource Website",
    href: "https://edu-circle.netlify.app/",
    reverse: false,
    technologiesUsed: ["Html", "CSS", "Javascript"],
    designTheme: ["Light"],
    sourceCodeHref: "https://github.com/JohnnnGreat/Ed-Circle",
  },

  {
    id: 12,
    image: <Image className="project-image" src={Culinary} alt="scholarhub" />,
    title: "Culinary Finder with API",
    description: "A Culinary Finder with API",
    href: "https://food-finder-ecru.vercel.app/",
    reverse: false,
    technologiesUsed: ["Axios", "TailwindCss"],
    designTheme: ["Light"],
    sourceCodeHref: "https://github.com/JohnnnGreat/FoodFinder",
  },
  {
    id: 13,
    image: <Image className="project-image" src={Marketing} alt="ed circle" />,
    title: "Marketing Madness",
    description: "Frontend for an AI Marketing Agency",
    href: "https://marketing-madnes.vercel.app/",
    reverse: false,
    technologiesUsed: ["Html", "CSS", "Javascript"],
    designTheme: ["Dark"],
    sourceCodeHref: "https://github.com/JohnnnGreat/Marketing-Madnes",
  },
  {
    id: 14,
    image: <Image className="project-image" src={Saveo} alt="ed circle" />,
    title: "Saveo",
    description: "Dashboard Ui Design for a Savings Scheme",
    href: "https://www.behance.net/gallery/196324953/SAVEO",
    reverse: false,
    technologiesUsed: ["Figma", "CorelDraw"],
    designTheme: ["Light"],
    sourceCodeHref: "https://www.behance.net/gallery/196324953/SAVEO",
  },
];
