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
        <ul>
          {listing.map((tech, index) => (
            <li className='p-2 pl-6 flex items-center space-x-4' key={index}>
              <div className='h-2 w-2 bg-gradient-to-r from-secondary to-accent rounded-full'></div>
              <span className="text-lg">{tech}</span>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default DetailTech;
