import React from "react";
import "./Tech.scss";
import TechBlur from "../../../public/blur/TechBlur.svg";
import Image from "next/image";
import { techStacks } from "@/constants";

const Tech = () => {
  return (
    <div className="tech">
      <Image src={TechBlur} className="tech-blur-eff" alt="Tech Blur Effect" />
      <div className="tech__wrapper">
        <h1 className="tech-header font-header">My Stack-Technologies</h1>
        <p className="tech-desc font-desc">
          I make use of varied rich technologies while building scalable frontend applications
        </p>

        <div className="tech-stack ">
          <div className="tech-container">
            {techStacks.map((stack) => (
              <div className="tech-card" key={stack.id}>
                {stack.logo}
                <p>{stack.title}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Tech;
