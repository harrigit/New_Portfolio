import React from "react";
import ProjectCard from "./ProjectCard";
import { PROJECTS } from "@/assets/copy";

function ProjectSection() {
  return (
    <div id='projects' className='mx-2 sm:mx-8 mt-28 xl:mx-auto space-y-4 lg:space-y-12'>
      <span className='text-4xl font-semibold'>Projects</span>
      <div className='grid gap-x-32 gap-y-8 grid-cols-1 w-full place-items-center lg:place-items-start lg:grid-cols-2 xl:grid-cols-3 mx-auto'>
        {PROJECTS.map((project, index) => (
          <ProjectCard {...project} key={index} />
        ))}
      </div>
    </div>
  );
}

export default ProjectSection;
