"use client";

import React from "react";
import SocialLinks from "./SocialLinks";
import { CONTACT } from "@/assets/copy";

function FooterSection() {
  return (
    <div className='mx-8 xl:mx-auto mt-24 py-16 grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-4'>
      <div className='order-1 xl:order-1 '>
        <div className='bg-clip-text text-transparent bg-gradient-to-r from-secondary to-accent text-lg font-bold inline-block'>
          {"Feel free to contact me"}
        </div>
      </div>
      <div className='order-3 xl:order-2'>
        <a href={`mailto:${CONTACT.email}`} className='font-semibold'>
          {CONTACT.email}
        </a>
      </div>
      <div className='order-4 place-self-end xl:order-3 '>
        <a href={`tel:${CONTACT.phoneNumber}`} className='font-semibold'>
          {CONTACT.phoneNumber}
        </a>
      </div>
      <div className='order-2 xl:order-4'>
        <SocialLinks />
      </div>
    </div>
  );
}

export default FooterSection;
