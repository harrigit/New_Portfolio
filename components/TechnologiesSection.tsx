import React from "react";
import TechnologyBar from "./TechnologyBar";
import { TECHNOLOGIES } from "@/assets/copy";

function TechnologiesSection() {
  return (
    <div id='technologies' className='mt-28 mx-2 sm:mx-8 xl:mx-auto'>
      <h2 className='text-4xl font-semibold mb-12'>Technologies</h2>
      {TECHNOLOGIES.map((tech, index) => (
        <TechnologyBar {...tech} key={index} />
      ))}
    </div>
  );
}

export default TechnologiesSection;
