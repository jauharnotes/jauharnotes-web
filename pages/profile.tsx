// import Image from 'next/image'
import React from 'react'
import ProfileSlide from '../components/ProfileSlide'
import Layout from '../components/Layout'
import Link from 'next/link'
import Image from 'next/image'

function Profile() {
  // let sizeWidth: number
  // let sizeHeight: number

  // if (window.innerWidth == 1280) {
  //   sizeWidth = 300
  //   sizeHeight = 280
  // } else {
  //   sizeWidth = 596.81
  //   sizeHeight = 542.16
  // }

  return (
    <Layout>
      <div className="flex items-center lg:justify-around md:justify-center flex-wrap lg:flex-nowrap gap-8 md:gap-0 lg:mx-0 md:mx-20 mt-14 lg:ml-14">
        <div>
          <Image
            src="/profile-image.png"
            alt="profile image"
            width={596.81}
            height={542.16}
          />
        </div>
        <div className='hidden lg:inline-block space-y-44'>
                <div className='-rotate-90 hover:text-base hover:underline hover:underline-offset-4'>
                    <Link href=''><a>client reviews</a></Link>
                </div>
                <hr className='rotate-90'/>
            </div>
        <div className='flex md:justify-center md:w-[700px] lg:w-auto'>
        <ProfileSlide />
        </div>
      </div>
    </Layout>
  )
}

export default Profile
