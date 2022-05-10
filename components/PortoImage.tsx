// import Image from 'next/image'
import React from 'react'

interface Props {
  img: string
  link: string
}

function PortoImage({ img, link }: Props) {
  return (
    <>
      <div className="h-[261px] w-[362px] overflow-hidden rounded-2xl border-2 border-slate-300 bg-white transition-all duration-500 ease-in-out hover:z-50 md:hover:scale-125">
        <div className="sticky z-20 flex h-5 items-center bg-gray">
          <div className="my-1 mx-1 h-2 w-2 rounded-full bg-[#FF5F57]"></div>
          <div className="my-1 mx-1 h-2 w-2 rounded-full bg-[#FFBD2E]"></div>
          <div className="my-1 mx-1 h-2 w-2 rounded-full bg-[#28CA41]"></div>
        </div>
        <a href={link} rel="noreferrer">
          <img loading='lazy'
            src={img}
            alt="gambar01"
            className="h-auto w-full object-cover transition-all delay-150 duration-[10s] ease-in-out hover:translate-y-[-100%]"
          />
        </a>
      </div>
    </>
  )
}

export default PortoImage
