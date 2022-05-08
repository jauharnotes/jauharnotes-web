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
                drag: 'free',
                focus: 'center',
                perPage: 5,
                autoplay: true,
            }}>
            <SplideSlide>
                <img src="/javascript.svg" alt="javascript" />
            </SplideSlide>
            <SplideSlide>
                <img src="/typescript.svg" alt="typescript" />
            </SplideSlide>
            <SplideSlide>
                <img src="/nodejs.svg" alt="nodejs" />
            </SplideSlide>
            <SplideSlide>
                <img src="/php.svg" alt="php" />
            </SplideSlide>
            <SplideSlide>
                <img src="/golang.svg" alt="golang" />
            </SplideSlide>
        </Splide>

        <Splide
            options={{
                type: 'loop',
                drag: 'free',
                focus: 'center',
                perPage: 5,
                autoplay: true,
            }}>
            <SplideSlide>
                <img src="/react.svg" alt="react" />
            </SplideSlide>
            <SplideSlide>
                <img src="/vue.svg" alt="vue" />
            </SplideSlide>
            <SplideSlide>
                <img src="/tailwind.svg" alt="tailwind" />
            </SplideSlide>
            <SplideSlide>
                <img src="/bootstrap.svg" alt="bootstrap" />
            </SplideSlide>
            <SplideSlide>
                <img src="/laravel.svg" alt="laravel" />
            </SplideSlide>
        </Splide>

        <Splide
            options={{
                type: 'loop',
                drag: 'free',
                focus: 'center',
                perPage: 5,
                autoplay: true,
            }}>
            <SplideSlide>
                <img src="/figma.svg" alt="figma" />
            </SplideSlide>
            <SplideSlide>
                <img src="/xd.svg" alt="xd" />
            </SplideSlide>
            <SplideSlide>
                <img src="/ps.svg" alt="ps" />
            </SplideSlide>
            <SplideSlide>
                <img src="/docker.svg" alt="docker" />
            </SplideSlide>
            <SplideSlide>
                <img src="/github.svg" alt="github" />
            </SplideSlide>
        </Splide>
    </div>
  )
}

export default MySkills