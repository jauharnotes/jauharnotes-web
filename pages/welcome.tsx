import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import LatesWork from '../components/LatesWork'
import Layout from '../components/Layout'
import { AnimatePresence, motion } from 'framer-motion'

function Welcome() {
  return (
    <Layout>
      <Head>
        <title>Home &mdash; jauharnotes</title>
      </Head>
      <AnimatePresence exitBeforeEnter>
      <motion.div
        animate={{ opacity: 1 }}
        initial={{ opacity: 0 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.5 }}
        className="mt-7 flex flex-wrap items-start justify-center gap-10 md:mt-[90px] lg:flex-nowrap">
        <div className="flex items-center justify-between md:ml-14">
          <Image
            src="/welcome-image.png"
            width="584"
            height="682"
          />
        </div>
        <div className="hidden space-y-24 lg:inline-block my-auto">
          <p className="vertical-lr text-center">Tech Enthusiast</p>
          <hr className="vertical-lr border-[0.1px] h-[200px] ml-3" />
        </div>
        <div className="h-auto w-[900px] flex-col items-start space-y-9 text-center sm:text-center lg:text-left">
          <h2 className="text-2xl font-bold text-[#3C2344]">Hello, I&apos;am</h2>
          <h1 className="text-5xl font-bold text-[#3C2344]">Jauharuddin</h1>
          <p className="text-2xl font-light max-w-[240px] lg:text-left inline-block typewriter text-base">FRONT-END DEVELOPER</p>
          <p className="text-xl">
            A professional front-end developer from Jakarta, Indonesia. I always
            give the best effort for each projects I did. I give a solution with
            my creative app.
          </p>
          <button
            type="button"
            className="cursor-pointer rounded bg-base px-9 py-3 text-xl font-bold transition delay-150 duration-300 ease-in-out hover:scale-125 hover:bg-[#094B49]"
          >
            <Link href="/contact">
              <a className='text-white'>contact me</a>
            </Link>
          </button>
          <div className="flex-row absolute">
            <LatesWork />
          </div>
        </div>
      </motion.div>
      </AnimatePresence>
    </Layout>
  )
}

export default Welcome
