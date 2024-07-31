"use client";
import React, { useState } from "react";
import "./Work.scss";
import SendIcon from "../../../public/svgs/Send.svg";
import Image from "next/image";
import WorkBlur from "../../../public/blur/workBlur.svg";

const Work = () => {
  const [email, setEmail] = useState("");
  const [name, setName] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = async (e: any) => {
    e.preventDefault();

    if (!email || !name || !message || !email.includes("@")) {
      alert("Message cant be sent, check your form or email");
      return;
    } else {
      const formBody = { name, email, message };

      const response = await fetch("/api/message", {
        method: "POST",
        body: JSON.stringify(formBody),
      }).then((res) => {
        alert("Message Sent");
      });
    }
  };

  return (
    <div className="work" id="contact">
      <Image src={WorkBlur} className="work-blur-eff" alt="Work Blur Effect" />
      <div className="work__wrapper">
        <h1 className="work-header font-header">Lets me work on your next project?</h1>

        <form action="">
          <input
            onChange={(e) => {
              setName(e.target.value);
            }}
            type="text"
            placeholder="Full Name"
          />
          <input
            type="text"
            onChange={(e) => {
              setEmail(e.target.value);
            }}
            placeholder="Email Address"
          />
          <textarea
            onChange={(e) => {
              setMessage(e.target.value);
            }}
            name=""
            placeholder="Write a message!!!"
            id=""
          ></textarea>
          <button type="submit" onClick={handleSubmit}>
            Send
            <Image src={SendIcon} alt="send icon" />
          </button>
        </form>
      </div>
    </div>
  );
};

export default Work;
