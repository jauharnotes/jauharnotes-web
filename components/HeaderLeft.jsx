import Link from 'next/link'
import React from 'react'

function HeaderLeft() {
  return (
    <nav className='hidden md:flex absolute bottom-0 mb-44'>
        <ul className='flex flex-col items-center space-y-[130px] -ml-10'>
            <li className='transform -rotate-90'>
                <Link href=''>
                <a className='font-bold hover:text-base hover:underline hover:underline-offset-8'>my process</a>
                </Link>
            </li>
            <li className='transform -rotate-90'>
                <Link href=''>
                <a className='font-bold hover:text-base hover:underline hover:underline-offset-8'>client reviews</a>
                </Link>
            </li>
            <li className='transform -rotate-90'>
                <Link href=''>
                <a className='font-bold hover:text-base hover:underline hover:underline-offset-8'>download cv</a>
                </Link>
            </li>
        </ul>
    </nav>
  )
}

export default HeaderLeft