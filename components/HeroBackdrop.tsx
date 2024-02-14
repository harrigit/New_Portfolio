import React from "react";

function HeroBackdrop() {
  return (
    <div className='relative'>
      {/* Large Circle */}
      <div className='absolute bg-gradient-to-r from-secondary to-accent rounded-full w-[25rem] h-[25rem] right-[0rem] lg:right-[6rem] top-[5rem] lg:top-[9rem] z-0 flex justify-center items-center glow'>
        <div className='w-[25rem] h-[25rem] rounded-full bg-primary'></div>
      </div>

      {/* Small Circle */}
      <div className='absolute bg-gradient-to-r overflow-hidden from-secondary to-accent rounded-full w-32 h-32 right-[7rem] lg:right-[4rem] top-[2rem] lg:top-[16rem] z-0 glow'></div>
    </div>
  );
}

export default HeroBackdrop;
