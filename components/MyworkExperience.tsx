import React from 'react'

function MyworkExperience() {
  return (
    <>
      <h2 className="text-center text-2xl lg:text-3xl font-bold mb-5 md:mb-10 pt-14">My Work Experience</h2>
      <div className="flex md:justify-center lg:justify-between gap-2 lg:gap-14 md:gap-7 items-start">
        <div className='space-y-0 md:space-y-[105px]'>
          <div className='space-y-3 h-40 md:h-[58px] lg:h-auto'>
            <h2 className='font-semibold'>Awani Digital Printing</h2>
            <p className='text-[15px]'>Sep 2017 - Aug 2019</p>
          </div>
          <div className='space-y-3 h-40 md:h-[58px] lg:h-auto'>
            <h2 className='font-semibold'>CV Pandawa24 jam</h2>
            <p className='text-[15px]'>Jan 2019 - Mar 2020</p>
          </div>
          <div className='space-y-3 h-40 md:h-[58px] lg:h-auto'>
            <h2 className='font-semibold'>Deso Studios</h2>
            <p className='text-[15px]'>Apr 2020 - Jan 2022</p>
          </div>
        </div>

        <img src="/dott02.svg" alt="dott" />

        <div className='max-w-full space-y-4'>
          <div className='space-y-3 h-[145px]'>
            <h2 className='font-semibold'>Graphic Designer</h2>
            <p className='flex text-[15px] md:max-w-xs'>
              Created design, concepts, and sample layouts, based on knowledge of layout before printing process
            </p>
          </div>
          <div className='space-y-3 h-[145px]'>
            <h2 className='font-semibold'>Graphic Designer</h2>
            <p className='flex text-[15px] md:max-w-xs'>
            Created design, concepts, and sample layouts, based on knowledge of layout before printing process
            </p>
          </div>
          <div className='space-y-3 h-[145px]'>
            <h2 className='font-semibold'>Full Stack Developer</h2>
            <p className='flex text-[15px] md:max-w-xs'>
              Developed a full-stack web application using stack ReactJs, VueJs, nodeJs, laravel, MySql, mongoDB
            </p>
          </div>
        </div>
      </div>
    </>
  )
}

export default MyworkExperience
