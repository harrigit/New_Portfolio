"use client";

import React from "react";
import GithubIcon from "@/assets/icons/GithubIcon";
import LinkedinIcon from "@/assets/icons/LinkedInIcon";
import { Link as ScrollLink, animateScroll as scroll } from "react-scroll";
import CustomScrollLink from "./CustomScrollLink";
import SocialLinks from "./SocialLinks";

function Header() {
  return (
    <div className='grid grid-cols-6 gap-4 p-4'>
      <div className='order-1 col-span-3 xl:col-span-2 '>
        <h1 className='text-2xl'>Portfolio.</h1>
      </div>
      <div className='order-2 xl:order-3 col-span-3 xl:col-span-2 place-self-end '>
        <SocialLinks />
      </div>
      <div className='order-3 xl:order-2 col-span-6 xl:col-span-2 place-self-center'>
        <div className='space-x-5 text-xl w-full cursor-pointer'>
          <CustomScrollLink to='projects'>Projects</CustomScrollLink>
          <CustomScrollLink to='technologies'>Technologies</CustomScrollLink>
          <CustomScrollLink to='about me'>About me</CustomScrollLink>
        </div>
      </div>
    </div>
  );
}

export default Header;
