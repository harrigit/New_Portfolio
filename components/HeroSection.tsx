"use client";
import { HERO_DESCRIPTION, SOCIAL_LINKS } from '@/assets/copy';
import React from "react";
import HeroBackdrop from "./HeroBackdrop";
import Image from 'next/image';

function HeroSection() {
  return (
    <div className='mt-8 mx-2 sm:mx-8 xl:mx-auto'>
      <div className='grid grid-cols-2 gap-4'>
        {/* Add some shapes to the backend make it more interesting */}
        <div className='space-y-12 z-10 my-24 lg:my-32 col-span-2 lg:col-span-1 order-2 lg:order-1'>
          <div>
            <div className='bg-clip-text text-transparent bg-gradient-to-r from-secondary to-accent text-7xl inline-block'>
              <h1>{"Hi, I'm Naveed,"}</h1>
            </div>
            <span className='mt-2 text-3xl md:text-5xl block'>
              full stack developer
            </span>
          </div>
          <p className='text-md opacity-90'>{HERO_DESCRIPTION}</p>
          <div className='grid grid-cols-4 md:grid-cols-5  gap-x-4'>
            <a
              href='/Naveed_Resume.pdf'
              target='_blank'
              download={true}
              className='px-5 col-span-2 py-3 text-center shadow-md rounded-3xl text-slate-200 glow bg-gradient-to-r from-secondary to-accent'
            >
              <span className='font-semibold'>Download CV</span>
            </a>
            <a
              href={SOCIAL_LINKS.upworkURL}
              className='px-5 col-span-2 py-3 shadow-md  text-center rounded-3xl text-slate-200 glow bg-gradient-to-r from-accent to-secondary'
            >
              <span className='font-semibold'>Hire Me</span>
            </a>
          </div>
        </div>
        <div className='col-span-2 lg:col-span-1 order-1 lg:order-2 h-[11rem] sm:h-[13rem] lg:h-full'>
          <div className='relative'>
            <div className='absolute z-[10] top-[50px] lg:top-[8rem] right-[0px] lg:right-[6rem]'>
              <Image
                src='/photo.jpg'
                width={200}
                height={200}
                className='rounded-full glow'
                alt='Picture of the author'
              />
            </div>
            <HeroBackdrop />
          </div>
        </div>
      </div>
    </div>
  );
}

export default HeroSection;
