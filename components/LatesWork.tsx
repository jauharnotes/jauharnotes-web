import React from 'react'
import { Splide, SplideSlide } from '@splidejs/react-splide'
import { AutoScroll } from '@splidejs/splide-extension-auto-scroll'

import '@splidejs/react-splide/css'
import Link from 'next/link'

function LatesWork() {
  return (
    <>
      <h2 className="text-2xl lg:text-3xl font-bold mb-3">Lates Work</h2>
      <Splide
        options={{
          type: 'loop',
          drag: 'free',
          focus: 'center',
          perPage: 3,
          autoplay: true,
          // autoScroll: {
          //     speed: 2,
          //   },
        }}
      >
        <SplideSlide>
          <img src="/portfolio01.png" alt="portfolio image" />
        </SplideSlide>
        <SplideSlide>
          <img src="/portfolio02.png" alt="portfolio image" />
        </SplideSlide>
        <SplideSlide>
          <img src="/portfolio03.png" alt="portfolio image" />
        </SplideSlide>
      </Splide>

      <Link href='/portfolio'>
        <a className='text-base font-bold hover:text-[#094B49] mt-3 pb-14'>View all</a>
      </Link>
    </>
  )
}

export default LatesWork
