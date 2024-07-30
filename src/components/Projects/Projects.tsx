"use client";
import React, { useState } from "react";
import "./Project.scss";
import { projects } from "@/constants";
import Image from "next/image";
import useFetchInfo from "../hook/fetchhook";
import Link from "next/link";

const Projects = () => {
  const [openProjectInfo, setOpenProjectInfo] = useState(false);
  const { data, setTitleFn, title } = useFetchInfo("");
  return (
    <>
      <div className="projects">
        <div className="projects__wrapper">
          <h1 className="projects-header font-header">Projects Highlights</h1>
          <p className="projects-desc font-desc">These are some of my executed projects</p>

          <div className="projects-container">
            {projects.map((project) => (
              <div key={project.id} className={`project ${project.reverse ? "reverse" : ""}`}>
                <div className="image-container">
                  {project.image}
                  <div className="img-card"></div>
                </div>

                <div className="project-content">
                  <h1>{project.title}</h1>
                  <p>{project.description}</p>
                  <button
                    onClick={() => {
                      setTitleFn(project.title);
                      setOpenProjectInfo(true);
                    }}
                  >
                    View Project{" "}
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
                  </button>
                </div>
              </div>
            ))}
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
              <Link className="flex items-center gap-[.8rem]" href={data[0].href}>
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
              <Link className="flex items-center gap-[.8rem]" href={data[0].href}>
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

export default Projects;
