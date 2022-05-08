import Image from 'next/image'
import React from 'react'
import Layout from '../components/Layout'
import MyServices from '../components/MyServices'
import MySkills from '../components/MySkills'

function resume() {
  return (
    <Layout>
      <div className="mt-20 flex flex-wrap justify-center gap-6 md:mx-14 lg:flex-nowrap">
        <div className="mt-6 flex w-full flex-row items-center justify-center">
          <Image
            src="/resume-illustration.png"
            alt="resume illustration"
            width={541}
            height={421}
            className="animate-[wiggle_2s_ease-in-out_infinite]"
          />
        </div>
        <div className='lg:overflow-auto h-[76vh]'>
          <div className="mt-6 flex w-full flex-row items-center justify-center">
            <MySkills />
          </div>
          <div className="mt-6 flex w-full flex-row items-center justify-center">
            <MyServices />
          </div>
        </div>
      </div>
    </Layout>
  )
}

export default resume
