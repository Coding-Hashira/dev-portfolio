import { projects } from "@/constants";
import React from "react";
import Project from "./Project";
import Section from "./Section";

const Projects = () => {
  return (
    <Section id="projects" title="Projects" subtitle="Browse my">
      <div className="flex gap-8 md:flex-row flex-col justify-center">
        {projects.map((project) => (
          <div key={project.id} className="w-[325px] ">
            <Project
              title={project.title}
              src={project.src}
              liveSite={project.liveSite}
              githubRepo={project.githubRepo}
              desc={project.desc}
            />
          </div>
        ))}
      </div>
    </Section>
  );
};

export default Projects;
