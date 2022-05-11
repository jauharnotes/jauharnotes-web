import React from 'react'

function TechnicalSheet() {
  return (
    <div className='text-center space-y-10 mt-28'>
      <div className='space-y-4'>
        <h2 className='font-bold text-2xl lg:text-3xl'>Technical Sheet</h2>
        <p>Code technologies I got involved with while working on this project.</p>
      </div>

        <h3 className='font-bold'>TECHNOLOGY</h3>
        <div className='flex justify-center items-center gap-8'>
            <img src="/img/icons/react-logo.svg" alt="logo react" />
            <img src="/img/icons/tailwindcss-logo.svg" alt="logo tailwindcss" />
            <img src="/img/icons/nodejs-logo.svg" alt="logo nodejs" />
        </div>
        <hr className='w-96 mx-auto'/>

        <h3 className='font-bold'>TOOLS</h3>
        <div className='flex justify-center items-center gap-8 pb-10'>
            <img src="/img/icons/figma-logo.svg" alt="logo figma" />
            <img src="/img/icons/docker-logo.svg" alt="logo docker" />
            <img src="/img/icons/github-logo.svg" alt="logo github" />
        </div>

    </div>
  )
}

export default TechnicalSheet