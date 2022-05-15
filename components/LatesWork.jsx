import React, { useEffect, useState } from 'react'
import { Splide, SplideSlide } from '@splidejs/react-splide'
import { AutoScroll } from '@splidejs/splide-extension-auto-scroll'
import  useWindowDimension  from './useWindowDimension'

import '@splidejs/react-splide/css'
import Link from 'next/link'

function LatesWork() {
  const [page, setPage] = useState(4)
  const { height, width } = useWindowDimension()

  useEffect(() => {
    if (width < 760) {
      setPage(3)
    } else {
      setPage(4)
    }
  },[height, width])

  return (
    <>
      <h2 className="text-2xl lg:text-3xl font-bold mb-3">Lates Work</h2>
      <Splide
        options={{
          type: 'loop',
          arrows: false,
          drag: 'free',
          focus: 'center',
          perPage: page,
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
        <a className='text-base font-bold hover:text-[#094B49] pb-14'>View all</a>
      </Link>
    </>
  )
}

export default LatesWork
