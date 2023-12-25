"use client";

import React from "react";
import CustomScrollLink from "./CustomScrollLink";
import SocialLinks from "./SocialLinks";

function Header() {
  return (
    <div className='mx-2 grid grid-cols-6 gap-y-4 py-4 bg-primary z-10 sm:mx-8 xl:mx-auto justify-between'>
      <div className='order-1 col-span-3 xl:col-span-2 w-full'>
        <h1 className='text-3xl text-secondary'>naremis.</h1>
      </div>
      <div className='order-2 xl:order-3 col-span-3 xl:col-span-2 '>
        <SocialLinks />
      </div>
      <div className='order-3 xl:order-2 col-span-6 xl:col-span-2 flex justify-around'>
        {/* <div className='space-x-5 text-xl w-full cursor-pointer flex flex-grow'> */}
        <CustomScrollLink to='projects'>Projects</CustomScrollLink>
        <CustomScrollLink to='technologies'>Technologies</CustomScrollLink>
        <CustomScrollLink to='about_me'>About me</CustomScrollLink>
        {/* </div> */}
      </div>
    </div>
  );
}

export default Header;
