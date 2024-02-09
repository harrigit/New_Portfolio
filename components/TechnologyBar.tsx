import { TechLevel, Technology } from "@/types";
import React from "react";

function TechnologyBar({ name, level, eg }: Technology) {
  return (
    <div className='my-12'>
      <div className='flex justify-between my-4 space-x-2'>
        <div className='flex flex-col lg:flex-row md:space-x-4'>
          <h3 className='text-normal lg:text-lg font-normal lg:font-bold'>
            {name}
          </h3>
          <p className='text-normal font-semibold'>{eg}</p>
        </div>
        <p className='text font-bold  md:mr-[5rem]'>{TechLevel[level]}</p>
      </div>
      <div
        className={`h-2 md:h-4 ${TechLevel[
          level
        ].toLowerCase()} w-full bg-gradient-to-r from-secondary to-accent rounded-full`}
      ></div>
    </div>
  );
}

export default TechnologyBar;
