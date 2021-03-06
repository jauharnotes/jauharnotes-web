// import Image from 'next/image'
import React from 'react'
import ProfileSlide from '../components/ProfileSlide'
import Layout from '../components/Layout'
import Image from 'next/image'
import Head from 'next/head'
import { AnimatePresence, motion } from 'framer-motion'

function Profile() {
   return (
    <Layout>
      <Head>
        <title>Profile &mdash; jauharnotes</title>
      </Head>
      <AnimatePresence exitBeforeEnter>
      <motion.div
         animate={{ opacity: 1 }}
         initial={{ opacity: 0 }}
         exit={{ opacity: 0 }}
         transition={{ duration: 0.5 }}
        className="mt-14 flex flex-wrap items-center gap-8 md:mx-20 md:justify-center md:gap-0 lg:mx-0 lg:ml-14 lg:flex-nowrap lg:justify-around">
        <div>
          <Image
            src="/developer.svg"
            alt="profile image"
            width={643.0344}
            height={460}
          />
        </div>
        <div className="hidden lg:inline-block">
         <div className='flex-col items-center space-y-24 px-10'>
         <p className='vertical-lr text-center'> always try to learn</p>
          <hr className="vertical-lr border-[0.1px] h-[200px] ml-3" />
         </div>
        </div>
        <div className="flex md:w-[700px] md:justify-center lg:w-auto">
          <ProfileSlide />
        </div>
      </motion.div>
      </AnimatePresence>
    </Layout>
  )
}

export default Profile
