import React from "react";
import Timeline from "./Timeline";
import { CARRIER_TIMELINE } from "@/assets/copy";

function AboutmeSections() {
  return (
    <div id='about_me' className='mx-2 sm:mx-8 xl:mx-auto space-y-12'>
      <h2 className='text-4xl font-semibold'>Career Timeline</h2>
      <Timeline />
    </div>
  );
}

export default AboutmeSections;
