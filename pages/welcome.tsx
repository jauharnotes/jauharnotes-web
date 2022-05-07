import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import LatesWork from '../components/LatesWork'
import Layout from '../components/Layout'

function Welcome() {
  return (
    <Layout>
        <div className='flex flex-wrap lg:flex-nowrap justify-center items-center gap-10 mt-7 md:mt-[90px]'>
            <div className='flex items-center justify-between md:ml-14'>
                <Image src='/welcome-image.png' width='584' height='682' className=''/>
            </div>
            <div className='hidden lg:inline-block space-y-44'>
                <div className='-rotate-90 hover:text-base hover:underline hover:underline-offset-4'>
                    <Link href=''><a>client reviews</a></Link>
                </div>
                <hr className='rotate-90'/>
            </div>
            <div className='w-[900px] h-auto space-y-9 text-center sm:text-center lg:text-left'>
                <h2 className='font-bold text-2xl'>Hello, I&apos;am</h2>
                <h1 className='font-bold text-5xl'>Jauharuddin</h1>
                <p className='font-light text-2xl'>FRONT-END DEVELOPER</p>
                <p className='text-xl'>A professional front-end developer from Jakarta, Indonesia. I always give the best effort for each projects I did. I give a solution with my creative app.</p>
                <button type='button' className='px-9 py-3 bg-base rounded cursor-pointer font-bold text-gray text-xl hover:scale-125 hover:bg-[#094B49] transition delay-150 duration-300 ease-in-out'>
                    <Link href='/contact'><a>contact me</a></Link>
                </button>
                <div className='flex-row '>
                <LatesWork />
                </div>
            </div>
        </div>
    </Layout>
  )
}

export default Welcome