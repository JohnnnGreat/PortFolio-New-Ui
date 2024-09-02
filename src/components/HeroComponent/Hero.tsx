import React from "react";
import "./Hero.scss";
import { socialMediaLinks } from "@/constants";
import Link from "next/link";
import Avatar from "../../../public/svgs/profile_illus.svg";
import Image from "next/image";
import HeroBlur from "../../../public/blur/HeroBlur.svg";
import Jobr from "../../../public/projectsImages/newI.jpg";

const Hero = () => {
  return (
    <div className="main">
      <Image src={HeroBlur} className="hero-blue-eff" alt="Hero Blur Effect" />
      <div className="main__wrapper">
        <header className="main__header">
          <div className="social-media">
            {socialMediaLinks.map((socialMedia) => (
              <Link href={socialMedia.link} target="_blank" key={socialMedia.id}>
                {socialMedia.icon}
              </Link>
            ))}
          </div>
          <div className="cta-buttons">
            <a className="hire-me" href="#contact">
              Hire Me
            </a>
            <a className="resume" target="_blank" href="/John_Ossai_Resume.pdf">
              My Resume
            </a>
          </div>
        </header>

        <div className="main__display-text contents">
          <div className="contents__wrapper">
            <div className="contents-avater">
              <Image src={Avatar} alt="John Ossai" />
            </div>
            <h1 className="contents-text font-header">John Ossai</h1>
            <p className="contents-desc">
              I am a frontend developer with 4 years of experience, building frontend applications
              using top rated frontend technologies. My core value lies around building applications
              with modern designs, and technologies and are highly optimal.
            </p>
          </div>
        </div>

        <div className="pinned">
          <div className="pinned__first">
            <h1 className="font-header">Pinned Projects</h1>
            <p className="font-desc">Have a look first of my ongoing project</p>
          </div>
          <div className="pinned__second">
            <Image src={Jobr} alt="Pinned project" />
            <Link className="font-desc" href="https://jobr.vercel.app/" target="_blank">
              View Site
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="size-6"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="m4.5 19.5 15-15m0 0H8.25m11.25 0v11.25"
                />
              </svg>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
