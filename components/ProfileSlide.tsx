import { Splide, SplideSlide } from '@splidejs/react-splide'
import React from 'react'

import '@splidejs/react-splide/css';
import Aboutme from './Aboutme';
import MyworkExperience from './MyworkExperience';

function ProfileSlide() {
  
  return (
    <Splide
        options={{
            type: 'loop',
            direction: 'ttb',
            height: '40rem',
            autoplay: true,
        }}
        >
        <SplideSlide>
          <Aboutme />
        </SplideSlide>
        <SplideSlide>
          <MyworkExperience />
        </SplideSlide>
    </Splide>
  )
}

export default ProfileSlide