import React from 'react'

function MyworkExperience() {
  return (
    <>
      <h2 className="text-center text-2xl lg:text-3xl font-bold mb-5 md:mb-10 pt-14">My Work Experience</h2>
      <div className="flex md:justify-center lg:justify-between gap-2 lg:gap-14 md:gap-7 items-start">
        <div className='space-y-0 md:space-y-[105px]'>
          <div className='space-y-3 h-40 md:h-[58px] lg:h-auto'>
            <h2 className='font-semibold'>Self-Employed, Brisbone</h2>
            <p className='text-[15px]'>Sep 2016 - Aug 2018</p>
          </div>
          <div className='space-y-3 h-40 md:h-[58px] lg:h-auto'>
            <h2 className='font-semibold'>New Mon Sevices</h2>
            <p className='text-[15px]'>Jan 2018 - Mar 2020</p>
          </div>
          <div className='space-y-3 h-40 md:h-[58px] lg:h-auto'>
            <h2 className='font-semibold'>Global Solution</h2>
            <p className='text-[15px]'>Feb 2020 - Mar 2021</p>
          </div>
        </div>

        <img src="/dott02.svg" alt="dott" />

        <div className='max-w-full space-y-4'>
          <div className='space-y-3 h-[145px]'>
            <h2 className='font-semibold'>Visual Designer</h2>
            <p className='flex text-[15px] md:max-w-xs'>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Volutpat
              eu tempus bibendum accumsan enim vitae.
            </p>
          </div>
          <div className='space-y-3 h-[145px]'>
            <h2 className='font-semibold'>UI/UX Designer</h2>
            <p className='flex text-[15px] md:max-w-xs'>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Volutpat
              eu tempus bibendum accumsan enim vitae.
            </p>
          </div>
          <div className='space-y-3 h-[145px]'>
            <h2 className='font-semibold'>Full Stack Developer</h2>
            <p className='flex text-[15px] md:max-w-xs'>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Volutpat
              eu tempus bibendum accumsan enim vitae.
            </p>
          </div>
        </div>
      </div>
    </>
  )
}

export default MyworkExperience
