import { TechLevel, Technology } from "@/types";
import React from "react";

function TechnologyBar({ name, level, eg }: Technology) {
  return (
    <div className='my-12'>
      <div className='flex justify-between my-4'>
        <div className='flex flex-col lg:flex-row md:space-x-4'>
          <span className='text-lg font-bold'>{name}</span>
          <span className='text-normal font-semibold'>{eg}</span>
        </div>
        <span className='text font-bold md:mr-[5rem]'>{TechLevel[level]}</span>
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
