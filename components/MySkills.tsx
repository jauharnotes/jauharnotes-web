import React from 'react'
import { Splide, SplideSlide } from '@splidejs/react-splide';

import '@splidejs/react-splide/css';

function MySkills() {
  return (
    <div className='block text-center space-y-20'>
        <h2 className='font-bold text-2xl lg:text-3xl'>My Skills</h2>
        <Splide
            options={{
                type: 'loop',
                arrows: false,
                pagination: false,
                drag: 'free',
                focus: 'center',
                perPage: 5,
                autoplay: true,
            }}>
            <SplideSlide>
                <img className='h-14 lg:h-20' src="/javascript.svg" alt="javascript" />
            </SplideSlide>
            <SplideSlide>
                <img className='h-14 lg:h-20' src="/typescript.svg" alt="typescript" />
            </SplideSlide>
            <SplideSlide>
                <img className='h-14 lg:h-20' src="/nodejs.svg" alt="nodejs" />
            </SplideSlide>
            <SplideSlide>
                <img className='h-14 lg:h-20' src="/php.svg" alt="php" />
            </SplideSlide>
            <SplideSlide>
                <img className='h-14 lg:h-20' src="/golang.svg" alt="golang" />
            </SplideSlide>
        </Splide>

        <Splide
            options={{
                type: 'loop',
                arrows: false,
                pagination: false,
                drag: 'free',
                focus: 'center',
                perPage: 5,
                autoplay: true,
            }}>
            <SplideSlide>
                <img className='h-14 lg:h-20' src="/react.svg" alt="react" />
            </SplideSlide>
            <SplideSlide>
                <img className='h-14 lg:h-20' src="/vue.svg" alt="vue" />
            </SplideSlide>
            <SplideSlide>
                <img className='h-14 lg:h-20' src="/tailwind.svg" alt="tailwind" />
            </SplideSlide>
            <SplideSlide>
                <img className='h-14 lg:h-20' src="/bootstrap.svg" alt="bootstrap" />
            </SplideSlide>
            <SplideSlide>
                <img className='h-14 lg:h-20' src="/laravel.svg" alt="laravel" />
            </SplideSlide>
        </Splide>

        <Splide
            options={{
                type: 'loop',
                drag: 'free',
                arrows: false,
                pagination: false,
                focus: 'center',
                perPage: 5,
                autoplay: true,
            }}>
            <SplideSlide>
                <img className='h-14 lg:h-20' src="/figma.svg" alt="figma" />
            </SplideSlide>
            <SplideSlide>
                <img className='h-14 lg:h-20' src="/xd.svg" alt="xd" />
            </SplideSlide>
            <SplideSlide>
                <img className='h-14 lg:h-20' src="/ps.svg" alt="ps" />
            </SplideSlide>
            <SplideSlide>
                <img className='h-14 lg:h-20' src="/docker.svg" alt="docker" />
            </SplideSlide>
            <SplideSlide>
                <img className='h-14 lg:h-20' src="/github.svg" alt="github" />
            </SplideSlide>
        </Splide>
    </div>
  )
}

export default MySkills