'use client';

import { Project } from '@/types';
import openInNewTab from '@/utils/openInNewTab';
import Image from 'next/image';
import React from 'react';

function ProjectCard({
  name,
  description,
  technologies,
  image,
  githubLink,
  websiteLink,
}: Project) {
  return (
    <div className='inline-block  md:w-min  rounded-xl bg-gradient-to-r from-secondary  to-accent'>
      <div className='rounded-xl p-6 md:w-[350px] min-h-[500px] h-max m-[1px] bg-primary flex flex-col justify-between items-center'>
        <div className='space-y-4'>
          <Image
            src={image ?? '/project.png'}
            width={400}
            height={400}
            alt='Picture of the project'
          />
          <p className='text-2xl py-2 font-bold'>{name}</p>
          <div className='space-x-2'>
            {technologies.map((tech, index) => (
              <span
                key={index}
                className='text-sm p-2 bg-secondary text-slate-100 rounded-full hover:scale-125 glow'
              >
                {tech}
              </span>
            ))}
          </div>
          <p className='text-sm'>{description}</p>
        </div>

        <div
          className={`pt-4 w-full grid gap-2 ${
            githubLink && 'lg:grid-cols-2'
          } text-slate-100 font-semibold`}
        >
          <a
            target='_blank'
            href={websiteLink}
            aria-label='Live Preview'
            className='px-2 py-2 xl:px-4 xl:py-3 text-center shadow-md rounded-3xl bg-gradient-to-r from-secondary to-accent glow'
          >
            Live Preview
          </a>
          {githubLink && (
            <a
              target='_blank'
              href={githubLink}
              aria-label='Check on Github'
              className='px-2 py-2 xl:px-4 xl:py-3 text-center shadow-md rounded-3xl bg-gradient-to-r from-accent to-secondary  glow'
            >
              Check on Github
            </a>
          )}
        </div>
      </div>
    </div>
  );
}

export default ProjectCard;
