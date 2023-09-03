import { DetailTechList } from "@/types";
import React from "react";

function DetailTech({ techName, listing }: DetailTechList) {
  return (
    <div>
      <div className='my-12'>
        <div className='flex justify-between my-4'>
          <div className='flex flex-col lg:flex-row md:space-x-4'>
            <span className='text-xl font-bold'>{techName}</span>
          </div>
        </div>
        <ul className="list-none">
          {listing.map((tech, index) => ( 
            <li className='p-2 xl:pl-6 items-baseline grid grid-cols-12 justify-start' key={index}>
              <div className='z-10 h-2 w-2 min-w-fit col-span-1 bg-gradient-to-r from-secondary to-accent rounded-full'></div>
              <span className="text-lg text-left col-span-10">{tech}</span>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default DetailTech;
