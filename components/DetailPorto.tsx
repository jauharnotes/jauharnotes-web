import React from 'react'

interface Props {
  link: string
  img: string
}

function DetailPorto({ link, img }: Props) {
  return (
    <>
      <div className="z-0 h-[100%] w-[100%] overflow-hidden rounded-2xl border-2 border-slate-300 bg-white mt-6">
        <div className="sticky flex h-5 items-center bg-gray">
          <div className="my-1 mx-1 h-2 w-2 rounded-full bg-[#FF5F57]"></div>
          <div className="my-1 mx-1 h-2 w-2 rounded-full bg-[#FFBD2E]"></div>
          <div className="my-1 mx-1 h-2 w-2 rounded-full bg-[#28CA41]"></div>
        </div>
        <a href={link} rel="noreferrer">
          <img
            loading="lazy"
            src={img}
            alt="gambar01"
            className="h-auto w-full object-cover transition-all delay-150 duration-[10s] ease-in-out md:hover:translate-y-[-100%]"
          />
        </a>
      </div>
    </>
  )
}

export default DetailPorto
