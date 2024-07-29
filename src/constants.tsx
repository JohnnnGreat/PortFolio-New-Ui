// Svgs imports
import Facebook from "../public/svgs/facebook.svg";
import Github from "../public/svgs/github.svg";
import X from "../public/svgs/x.svg";
import In from "../public/svgs/in.svg";
import Image from "next/image";

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
