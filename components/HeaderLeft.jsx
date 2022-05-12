// import Link from 'next/link'
import React from 'react'

function HeaderLeft() {
  return (
    <nav className='hidden md:flex absolute bottom-0 left-0 mb-44'>
        <ul className='flex flex-col items-center space-y-[130px] -ml-10'>
            <li className='transform -rotate-90 mb-20'>
                <a href='https://github.com/jauharnotes' target='_blank' className='font-bold hover:text-base hover:underline hover:underline-offset-8'>my open source projects</a>
            </li>
            <li className='transform -rotate-90'>
                <a href='https://www.fiverr.com/joharid' target='_blank' className='font-bold hover:text-base hover:underline hover:underline-offset-8'>fiverr</a>
            </li>
            <li className='transform -rotate-90'>
                <a href='https://drive.google.com/file/d/1qxxDhASmQZopaQMmLND8TsbsQkVPRTqK/view' target='_blank' className='font-bold hover:text-base hover:underline hover:underline-offset-8'>download cv</a>
            </li>
        </ul>
    </nav>
  )
}

export default HeaderLeft