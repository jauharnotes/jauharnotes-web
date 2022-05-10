// import Image from 'next/image'
import React from 'react'
import ProfileSlide from '../components/ProfileSlide'
import Layout from '../components/Layout'
import Image from 'next/image'
import Head from 'next/head'

function Profile() {
   return (
    <Layout>
      <Head>
        <title>Profile &mdash; jauharnotes</title>
      </Head>
      <div className="mt-14 flex flex-wrap items-center gap-8 md:mx-20 md:justify-center md:gap-0 lg:mx-0 lg:ml-14 lg:flex-nowrap lg:justify-around">
        <div>
          <Image
            src="/developer.svg"
            alt="profile image"
            width={643.0344}
            height={460}
          />
        </div>
        <div className="hidden space-y-44 lg:inline-block">
          <div className="-rotate-90 hover:text-base hover:underline hover:underline-offset-4">
           <p> always try to learn</p>
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
