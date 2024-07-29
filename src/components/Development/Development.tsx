import React from "react";
import "./Development.scss";
import { researchProcess } from "@/constants";
import DevBlur from "../../../public/blur/ProcessBlur.svg";
import Image from "next/image";

const Development = () => {
  return (
    <div className="development">
      <Image src={DevBlur} className="dev-blur-eff" alt="dev Blur Effect" />
      <div className="development__wrapper">
        <h1 className="development-header font-header">My Development Process</h1>
        <p className="development-desc font-desc">
          Yes! I do have an approach I take when designing and developing frontend application, and
          here is it.
        </p>

        <div className="development-container">
          {researchProcess.map((process) => (
            <div key={process.id} className="development-card">
              <h1 className="font-desc">{process.title}</h1>
              <div className="note-se">
                <div className="divider">
                  <div className="dot"></div>
                  <div className="line"></div>
                </div>
                <p className="font-desc">{process.notes}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Development;
