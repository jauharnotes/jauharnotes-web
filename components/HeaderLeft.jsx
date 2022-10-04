// import Link from 'next/link'
import React from 'react'

function HeaderLeft() {
  return (
    <nav className="absolute bottom-0 left-0 mb-44 ml-[70px] hidden md:flex">
      <ul className="flex flex-col items-center gap-14 ">
        <li className="vertical-lr">
          <a
            href="https://github.com/jauharnotes"
            target="_blank"
            className="font-bold hover:text-base hover:underline hover:underline-offset-8"
          >
            my open source projects
          </a>
        </li>
        <li className="vertical-lr">
          <a
            href="https://www.fiverr.com/joharid"
            target="_blank"
            className="font-bold hover:text-base hover:underline hover:underline-offset-8"
          >
            fiverr
          </a>
        </li>
        <li className="vertical-lr">
          <a
            href="https://drive.google.com/file/d/1tA1b7Wl2oPMzZ2mj4FXOuMQ1TnXdoQa1/view"
            target="_blank"
            className="font-bold hover:text-base hover:underline hover:underline-offset-8"
          >
            download cv
          </a>
        </li>
      </ul>
    </nav>
  )
}

export default HeaderLeft
