import { CARRIER_TIMELINE } from "@/assets/copy";
import { CarrierTimeline } from "@/types";
import React from "react";

function Timeline() {
  return (
    <div className='mt-4'>
      <ol className='xl:hidden relative border-l-[1px] border-secondary'>
        {CARRIER_TIMELINE.map((carrier, index) => (
          <li key={index} className='ml-8'>
            <div className='absolute w-4 h-4 rounded-full -left-[9px] bg-gradient-to-r from-secondary to-accent'></div>
            <time className='mb-1 text-sm font-normal leading-none opacity-50'>
              {carrier.date}
            </time>
            <h3 className='text-lg font-semibold text-secondary'>
              {carrier.position}
            </h3>
            <p className='mb-4 text-base font-semibold opacity-90'>
              {carrier.company}
            </p>
            <p className='mb-4 text-base font-normal opacity-90'>
              {carrier.jobDescription}
            </p>
          </li>
        ))}
      </ol>

      <ol className='items-start hidden xl:flex border-t-[1px] border-secondary'>
        {CARRIER_TIMELINE.map((carrier, index) => (
          <li key={index} className='relative mb-6 sm:mb-0'>
            <div className='flex items-center'>
              <div className='z-10 -mt-2 ml-2 flex items-center justify-center w-4 h-4 rounded-full ring-base-content bg-secondary sm:ring-8'>
                <div className='bg-gradient-to-r from-secondary to-accent rounded-full w-4 h-4 glow'></div>
              </div>
              <div className='hidden sm:flex w-full h-0.5'></div>
            </div>
            <div className='mt-6 sm:pr-8'>
              <h3 className='text-xl font-semibold opacity-90 text-secondary'>
                {carrier.position}
              </h3>
              <span className='flex items-baseline space-x-4 text-end'>
                <p className='text-base font-semibold opacity-90'>
                  {carrier.company}
                </p>
                <p className='block mb-2 font-normal leading-none opacity-90'>
                  {carrier.date}
                </p>
              </span>
              <p className='text-base font-normal opacity-90'>
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
