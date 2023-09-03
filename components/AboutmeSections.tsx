import React from "react";
import Timeline from "./Timeline";
import { CARRIER_TIMELINE } from "@/assets/copy";

function AboutmeSections() {
  return (
    <div id='about_me' className='mx-8 xl:mx-auto space-y-12'>
      <span className='text-4xl font-semibold'>About me</span>
      <Timeline />
    </div>
  );
}

export default AboutmeSections;
