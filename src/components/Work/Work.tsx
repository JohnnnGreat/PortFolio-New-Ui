import React from "react";
import "./Work.scss";
import SendIcon from "../../../public/svgs/Send.svg";
import Image from "next/image";
import WorkBlur from "../../../public/blur/workBlur.svg";

const Work = () => {
  return (
    <div className="work" id="contact">
      <Image src={WorkBlur} className="work-blur-eff" alt="Work Blur Effect" />
      <div className="work__wrapper">
        <h1 className="work-header font-header">Lets me work on your next project?</h1>

        <form action="">
          <input type="text" placeholder="Full Name" />
          <input type="text" placeholder="Email Address" />
          <textarea name="" placeholder="Write a message!!!" id=""></textarea>
          <button type="submit">
            Send
            <Image src={SendIcon} alt="send icon" />
          </button>
        </form>
      </div>
    </div>
  );
};

export default Work;
