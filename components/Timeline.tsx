import { CARRIER_TIMELINE } from "@/assets/copy";
import { CarrierTimeline } from "@/types";
import React from "react";

function Timeline() {
  return (
    <div>
      <ol className='xl:hidden relative border-l-2 border-gray-200 dark:border-gray-700'>
        {CARRIER_TIMELINE.map((carrier, index) => (
          <li key={index} className='ml-8'>
            <div className='absolute w-4 h-4 rounded-full mt-1.5 -left-2 bg-gradient-to-r from-secondary to-accent'></div>
            <time className='mb-1 text-sm font-normal leading-none text-gray-400 dark:text-gray-500'>
              {carrier.date}
            </time>
            <h3 className='text-lg font-semibold text-gray-900 dark:text-white'>
              {carrier.position}
            </h3>
            <p className='mb-4 text-base font-semibold text-gray-500 dark:text-gray-400'>
              {carrier.company}
            </p>
            <p className='mb-4 text-base font-normal text-gray-500 dark:text-gray-400'>
              {carrier.jobDescription}
            </p>
          </li>
        ))}
      </ol>

      <ol className='items-center hidden xl:flex'>
        {CARRIER_TIMELINE.map((carrier, index) => (
          <li key={index} className='relative mb-6 sm:mb-0'>
            <div className='flex items-center'>
              <div className='z-10 flex items-center justify-center w-4 h-4 bg-blue-100 rounded-full ring-0 ring-white dark:bg-blue-900 sm:ring-8 dark:ring-gray-900 shrink-0'>
                <div className='absolute bg-gradient-to-r from-secondary to-accent rounded-full w-4 h-4 glow'></div>
              </div>
              <div className='hidden sm:flex w-full bg-gray-200 h-0.5 dark:bg-gray-700'></div>
            </div>
            <div className='mt-3 sm:pr-8'>
              <h3 className='text-xl font-semibold text-gray-900 dark:text-white'>
                {carrier.position}
              </h3>
              <span className='flex items-baseline space-x-4 text-end'>
                <span className='text-base font-semibold text-gray-200 dark:text-gray-400'>
                  {carrier.company}
                </span>
                <span className='block mb-2 font-normal leading-none text-gray-400 dark:text-gray-500'>
                  {carrier.date}
                </span>
              </span>
              <p className='text-base font-normal text-gray-700 dark:text-gray-400'>
                {carrier.jobDescription}
              </p>
            </div>
          </li>
        ))}
      </ol>
    </div>
  );
}

export default Timeline;
