import React from "react";
import "./Project.scss";
import { projects } from "@/constants";
import Image from "next/image";

const Projects = () => {
  return (
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
                <button>
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
  );
};

export default Projects;
