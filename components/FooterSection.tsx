"use client";

import React from "react";
import SocialLinks from "./SocialLinks";

function FooterSection() {
  return (
    <div className='mx-8 xl:mx-auto mt-24 py-16 grid grid-cols-1 md:grid-cols-2 gap-4'>
      <div className='order-1 xl:order-1 place-self-center md:place-self-start'>
        <div className='bg-clip-text text-transparent bg-gradient-to-r from-secondary to-accent text-lg font-bold inline-block'>
          {"Feel free to contact me"}
        </div>
      </div>
      <div className='order-2 xl:order-4 place-self-center md:place-self-end'>
        <SocialLinks footer={true} />
      </div>
    </div>
  );
}

export default FooterSection;
