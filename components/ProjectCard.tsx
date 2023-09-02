import Image from "next/image";
import React from "react";

function ProjectCard({ name,description}: Project) {
  return (
    <div className='inline-block  md:w-min rounded-xl bg-gradient-to-r from-secondary  to-accent'>
      <div className='rounded-xl p-6 md:w-[400px] h-[500px] m-[1px] bg-primary flex flex-col justify-between items-center'>
        <div className='space-y-4'>
          <Image
            src='/project.png'
            width={400}
            height={400}
            alt='Picture of the project'
          />
          <p className='text-2xl py-2 font-bold'>{name}</p>
          <p className='text-sm text-gray-400'>
            {description}
          </p>
        </div>
        <div className='pt-4 w-full flex justify-between'>
          <button className='px-5 py-3 shadow-md rounded-3xl bg-gradient-to-r from-secondary to-accent glow'>
            Live Preview
          </button>
          <button className='px-4 py-3 shadow-md rounded-3xl border glow'>
            Check on Github
          </button>
        </div>
      </div>
    </div>
  );
}

export default ProjectCard;
