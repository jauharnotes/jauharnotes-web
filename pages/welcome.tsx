import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import LatesWork from '../components/LatesWork'
import Layout from '../components/Layout'

function Welcome() {
  return (
    <Layout>
      <Head>
        <title>Home &mdash; jauharnotes</title>
      </Head>
      <div className="mt-7 flex flex-wrap items-center justify-center gap-10 md:mt-[90px] lg:flex-nowrap">
        <div className="flex items-center justify-between md:ml-14">
          <Image
            src="/welcome-image.png"
            width="584"
            height="682"
          />
        </div>
        <div className="hidden space-y-44 lg:inline-block">
          <div className="-rotate-90">
            <p>Tech Enthusiast</p>
          </div>
          <hr className="rotate-90" />
        </div>
        <div className="h-auto w-[900px] space-y-9 text-center sm:text-center lg:text-left">
          <h2 className="text-2xl font-bold">Hello, I&apos;am</h2>
          <h1 className="text-5xl font-bold">Jauharuddin</h1>
          <p className="text-2xl font-light">FRONT-END DEVELOPER</p>
          <p className="text-xl">
            A professional front-end developer from Jakarta, Indonesia. I always
            give the best effort for each projects I did. I give a solution with
            my creative app.
          </p>
          <button
            type="button"
            className="cursor-pointer rounded bg-base px-9 py-3 text-xl font-bold text-gray transition delay-150 duration-300 ease-in-out hover:scale-125 hover:bg-[#094B49]"
          >
            <Link href="/contact">
              <a>contact me</a>
            </Link>
          </button>
          <div className="flex-row ">
            <LatesWork />
          </div>
        </div>
      </div>
    </Layout>
  )
}

export default Welcome
