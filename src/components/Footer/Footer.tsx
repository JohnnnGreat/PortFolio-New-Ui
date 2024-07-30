import React from "react";
import "./Footer.scss";
import { socialMediaLinks } from "@/constants";
import Link from "next/link";
import Scrib from "../../../public/svgs/Scrib.svg";
import ScribTwo from "../../../public/svgs/ScribTwo.svg";
import Image from "next/image";
import FooterBlur from "../../../public/blur/footer.svg";

const Footer = () => {
  return (
    <div className="footer">
      <div className="footer__wrapper">
        <Image src={Scrib} alt="Scribble Svg" className="sc-one" />
        <Image src={ScribTwo} alt="Scribble Svg" className="sc-two" />
        <Image src={FooterBlur} alt="Scribble Svg" className="footer-blur" />
        <div className="container">
          <div className="social-media">
            {socialMediaLinks.map((socialMedia) => (
              <Link href={socialMedia.link} key={socialMedia.id}>
                {socialMedia.icon}
              </Link>
            ))}
          </div>
          <h1>All Rights Reserved, 2024</h1>
        </div>
      </div>
    </div>
  );
};

export default Footer;
