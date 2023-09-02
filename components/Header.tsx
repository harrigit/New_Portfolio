import React from "react";
import GithubIcon from "@/assets/icons/GithubIcon";
import LinkedinIcon from "@/assets/icons/LinkedInIcon";

function Header() {
  return (
    <div className='grid grid-cols-6 gap-4 p-4'>
      <div className='order-1 col-span-3 lg:col-span-2 '>
        <h1 className='text-2xl'>Naveed Portfolio</h1>
      </div>
      <div className='order-2 lg:order-3 col-span-3 lg:col-span-2 place-self-end '>
        <div className='flex space-x-5'>
          <GithubIcon />
          <LinkedinIcon />
        </div>
      </div>
      <div className='order-3 lg:order-2 col-span-6 lg:col-span-2 place-self-center'>
        <div className='space-x-5 text-xl w-full'>
          <a>Projects</a>
          <a>Technologies</a>
          <a>About me</a>
        </div>
      </div>
    </div>
  );
}

export default Header;
