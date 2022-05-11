import Link from 'next/link'
import { useRouter } from 'next/router'
import React, { useState } from 'react'

function ResponsiveMenu() {
  const [toggle, setToggle] = useState(false)
  const router = useRouter()

  return (
    <>
      {/* canvas */}
      <div className={`fixed -top-0 flex h-full justify-center items-center transition-all delay-150 ease-out bg-base z-10 ${toggle ? 'w-full' : 'left-full'}`}>
        <div className="flex-col items-center justify-center">
        <ul className="flex-col items-center text-center space-y-28">
          <li>
            <Link href="/">
              <a className={`font-bold text-slate-300 transition-all delay-100 duration-300 hover:text-white hover:underline hover:underline-offset-8 decoration-whitetext-white ${router.pathname == '/' && 'text-white underline underline-offset-8'}`}>welcome</a>
            </Link>
          </li>
          <li>
            <Link href="/profile">
              <a className={`font-bold text-slate-300 transition-all delay-100 duration-300 hover:text-white hover:underline hover:underline-offset-8 decoration-whitetext-white ${router.pathname == '/profile' && 'text-white underline underline-offset-8'}`}>profile</a>
            </Link>
          </li>
          <li>
            <Link href="/resume">
              <a className={`font-bold text-slate-300 transition-all delay-100 duration-300 hover:text-white hover:underline hover:underline-offset-8 decoration-whitetext-white ${router.pathname == '/resume' && 'text-white underline underline-offset-8'}`}>resume</a>
            </Link>
          </li>
          <li>
            <Link href="/portfolio">
              <a className={`font-bold text-slate-300 transition-all delay-100 duration-300 hover:text-white hover:underline hover:underline-offset-8 decoration-whitetext-white ${router.pathname == '/portfolio' && 'text-white underline underline-offset-8'}`}>portfolio</a>
            </Link>
          </li>
          <li>
            <Link href="/contact">
              <a className={`font-bold text-slate-300 transition-all delay-100 duration-300 hover:text-white hover:underline hover:underline-offset-8 decoration-whitetext-white ${router.pathname == '/contact' && 'text-white underline underline-offset-8'}`}>contact</a>
            </Link>
          </li>
        </ul>
        </div>
      </div>
      <div className={`fixed right-0 pr-4 md:hidden z-50 w-full h-14 -top-0 pt-3 ${toggle ? 'text-slate-300' : 'backdrop-blur-sm bg-white/30 text-base'}`}>
        <div className='flex justify-between items-center w-full'>
        {/* <p>Johar</p> */}
        <p className='font-inter font-bold text-[30px] ml-10'>Jauhar.</p>
        <button
          onClick={() => setToggle((prev) => !prev)}
          className="cursor-pointer space-y-1 border-none bg-transparent outline-none"
        >
          <span
            className={`block h-1 w-7 rounded-md transition-all delay-150 ease-out ${
              toggle ? 'translate-y-[8px] rotate-[45deg] bg-white' : 'bg-base'
            }`}
          ></span>
          <span
            className={`block h-1 w-7 rounded-md transition-all delay-150 ease-out ${
              toggle ? 'opacity-0' : 'bg-base'
            }`}
          ></span>
          <span
            className={`block h-1 w-7 rounded-md transition-all delay-150 ease-out ${
              toggle ? 'translate-y-[-8px] rotate-[-45deg] bg-white' : 'bg-base'
            }`}
          ></span>
        </button>
        </div>
      </div>
    </>
  )
}

export default ResponsiveMenu
