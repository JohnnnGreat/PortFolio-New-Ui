"use client";
import Link from "next/link";
import React, { useState } from "react";
import "../main.scss";
import { projectsInfoDetails } from "@/constants";
import Image from "next/image";
import useFetchInfo from "@/components/hook/fetchhook";
import Head from "next/head";

const MyProjects = () => {
  const [openProjectInfo, setOpenProjectInfo] = useState(false);
  const { data, setTitleFn, title } = useFetchInfo("");
  return (
    <>
      <title>My Projects</title>

      <div className="my-projects">
        <div className="my-projects__wrapper">
          <div className="nav">
            <Link href="/">Back</Link>
            <Link href="/#contact">Contact Me</Link>
          </div>

          <div className="myprojects-main">
            <h1 className="myprojects-main-header">Here is a Catalog of my Past Projects</h1>

            <div className="myprojects-container">
              <div className="myprojects-container-grid">
                {projectsInfoDetails.map((project) => (
                  <div className="myproject">
                    {project.image}
                    <h1>{project.title}</h1>
                    <p>{project.description}</p>
                    <button
                      onClick={() => {
                        setTitleFn(project.title);
                        setOpenProjectInfo(true);
                      }}
                    >
                      View Project
                    </button>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Project Information Card Display */}
      {openProjectInfo && (
        <div className="project-card">
          <button
            className="close-card"
            onClick={() => {
              setOpenProjectInfo(false);
            }}
          >
            CLOSE
          </button>

          <div className="project-wrapper">
            <div className="project-content">
              <h1>Project Name</h1>
              <hr />
              <p>{data[0].title}</p>
            </div>
          </div>
          <div className="project-wrapper">
            <div className="project-content">
              <h1>Technologies Used</h1>
              <hr />
              <div className="project-technologies">
                {data[0].technologiesUsed.map((tech) => (
                  <p>{tech}</p>
                ))}
              </div>
            </div>
          </div>
          <div className="project-wrapper">
            <div className="project-content">
              <h1>Design Theme</h1>
              <hr />
              <div className="project-technologies">
                {data[0].designTheme.map((theme) => (
                  <p>{theme}</p>
                ))}
              </div>
            </div>
          </div>
          <div className="project-wrapper">
            <div className="project-content">
              <Link className="flex items-center gap-[.8rem]" target="_blank" href={data[0].href}>
                View Live Project{" "}
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
              <hr />
            </div>
          </div>
          <div className="project-wrapper">
            <div className="project-content">
              <Link
                className="flex items-center gap-[.8rem]"
                target="_blank"
                href={data[0].sourceCodeHref}
              >
                View Source Code
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
              <hr />
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default MyProjects;
