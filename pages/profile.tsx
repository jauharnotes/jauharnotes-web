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
      <div className="mt-14 flex flex-wrap items-center gap-8 md:mx-20 md:justify-center md:gap-0 lg:mx-0 lg:ml-14 lg:flex-nowrap lg:justify-around">
        <div>
          <Image
            src="/profile-image.png"
            alt="profile image"
            width={596.81}
            height={542.16}
          />
        </div>
        <div className="hidden space-y-44 lg:inline-block">
          <div className="-rotate-90 hover:text-base hover:underline hover:underline-offset-4">
            <Link href="">
              <a>client reviews</a>
            </Link>
          </div>
          <hr className="rotate-90" />
        </div>
        <div className="flex md:w-[700px] md:justify-center lg:w-auto">
          <ProfileSlide />
        </div>
      </div>
    </Layout>
  )
}

export default Profile
