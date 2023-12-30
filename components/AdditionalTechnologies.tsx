import { DETAIL_TECH_LIST } from "@/assets/copy";
import React from "react";
import DetailTech from "./DetailTech";

function AdditionalTechnologies() {
  return (
    <div className='mx-2 sm:mx-8 xl:mx-auto mt-24'>
      <span className='text-3xl font-semibold'>Expertise and Skills</span>
      <div className='grid grid-cols-1 xl:grid-cols-2 '>
        {DETAIL_TECH_LIST.map((tech, index) => (
          <DetailTech {...tech} key={index} />
        ))}
      </div>
    </div>
  );
}

export default AdditionalTechnologies;
