import React from 'react'
import { Splide, SplideSlide } from '@splidejs/react-splide'
import { AutoScroll } from '@splidejs/splide-extension-auto-scroll'

import '@splidejs/react-splide/css'

function LatesWork() {
  return (
    <>
      <h2 className="text-2xl lg:text-3xl font-bold">Lates Work</h2>
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
    </>
  )
}

export default LatesWork
