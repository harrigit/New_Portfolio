"use client";
import { HERO_DESCRIPTION, SOCIAL_LINKS } from "@/assets/copy";
import handleCVDownload from "@/utils/downloadCV";
import React from "react";
import HeroBackdrop from "./HeroBackdrop";
import Image from "next/image";
import openInNewTab from "@/utils/openInNewTab";

function HeroSection() {
  return (
    <div className='mt-16 mx-2 sm:mx-8 xl:mx-auto'>
      <div className='grid grid-cols-2'>
        {/* Add some shapes to the backend make it more interesting */}
        <div className='space-y-12 my-24 lg:my-32 col-span-2 lg:col-span-1 order-2 lg:order-1'>
          <div>
            <div className='bg-clip-text text-transparent bg-gradient-to-r from-secondary to-accent text-7xl inline-block'>
              {"Hi, I'm Naveed,"}
            </div>
            <span className='mt-2 text-3xl md:text-5xl xl:text-7xl block'>
              full stack developer
            </span>
          </div>
          <p className='text-md text-gray-500'>{HERO_DESCRIPTION}</p>
          <div className='grid grid-cols-2 md:grid-cols-3 gap-x-4'>
            <button
              type='button'
              className='px-5 py-3 shadow-md rounded-3xl glow bg-gradient-to-r from-secondary to-accent'
              onClick={handleCVDownload}
            >
              <span className='font-semibold'>Download CV</span>
            </button>
            <button
              type='button'
              className='px-5 py-3 shadow-md rounded-3xl glow bg-gradient-to-r from-accent to-secondary'
              onClick={() => openInNewTab(SOCIAL_LINKS.upworkURL)}
            >
              <span className='font-semibold'>Hire Me</span>
            </button>
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
