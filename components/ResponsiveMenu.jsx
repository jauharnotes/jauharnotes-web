import Link from 'next/link'
import { useRouter } from 'next/router'
import React, { useState } from 'react'

function ResponsiveMenu() {
  const [toggle, setToggle] = useState(false)
  const router = useRouter()

  return (
    <>
      {/* canvas */}
      <div
        className={`fixed -top-0 z-10 flex h-full items-center justify-center bg-base transition-all delay-150 ease-out ${
          toggle ? 'w-full' : 'left-full'
        }`}
      >
        <div className="flex-col items-center justify-center">
          <ul className="flex-col items-center space-y-28 text-center">
            <li>
              <Link href="/">
                <a
                  className={`decoration-whitetext-white font-bold text-slate-300 transition-all delay-100 duration-300 hover:text-white hover:underline hover:underline-offset-8 ${
                    router.pathname == '/' &&
                    'text-white underline underline-offset-8'
                  }`}
                >
                  welcome
                </a>
              </Link>
            </li>
            <li>
              <Link href="/profile">
                <a
                  className={`decoration-whitetext-white font-bold text-slate-300 transition-all delay-100 duration-300 hover:text-white hover:underline hover:underline-offset-8 ${
                    router.pathname == '/profile' &&
                    'text-white underline underline-offset-8'
                  }`}
                >
                  profile
                </a>
              </Link>
            </li>
            <li>
              <Link href="/resume">
                <a
                  className={`decoration-whitetext-white font-bold text-slate-300 transition-all delay-100 duration-300 hover:text-white hover:underline hover:underline-offset-8 ${
                    router.pathname == '/resume' &&
                    'text-white underline underline-offset-8'
                  }`}
                >
                  resume
                </a>
              </Link>
            </li>
            <li>
              <Link href="/portfolio">
                <a
                  className={`decoration-whitetext-white font-bold text-slate-300 transition-all delay-100 duration-300 hover:text-white hover:underline hover:underline-offset-8 ${
                    router.pathname == '/portfolio' &&
                    'text-white underline underline-offset-8'
                  }`}
                >
                  portfolio
                </a>
              </Link>
            </li>
            <li>
              <Link href="/contact">
                <a
                  className={`decoration-whitetext-white font-bold text-slate-300 transition-all delay-100 duration-300 hover:text-white hover:underline hover:underline-offset-8 ${
                    router.pathname == '/contact' &&
                    'text-white underline underline-offset-8'
                  }`}
                >
                  contact
                </a>
              </Link>
            </li>
          </ul>
        </div>
      </div>
      <div
        className={`fixed right-0 -top-0 z-50 h-14 w-full pr-4 pt-3 md:hidden ${
          toggle ? 'text-slate-300' : 'bg-white/30 text-base backdrop-blur-sm'
        }`}
      >
        <div className="flex w-full items-center justify-between">
          {/* <p>Johar</p> */}
          <Link href='/'>
            <a className="ml-10 font-inter text-[30px] font-bold hover:text-white">Jauhar.</a>
          </Link>
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
                toggle
                  ? 'translate-y-[-8px] rotate-[-45deg] bg-white'
                  : 'bg-base'
              }`}
            ></span>
          </button>
        </div>
      </div>
    </>
  )
}

export default ResponsiveMenu
