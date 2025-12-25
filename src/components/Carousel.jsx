import React from 'react'
import Box from '@mui/material/Box'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Navigation, Pagination, HashNavigation, Keyboard } from 'swiper/modules'
import 'swiper/css'
import 'swiper/css/navigation'
import 'swiper/css/pagination'
import 'swiper/css/hash-navigation'

import Slide1 from './slides/Slide1'
import Slide2 from './slides/Slide2'
import Slide3 from './slides/Slide3'
import Slide4 from './slides/Slide4'
import Slide5 from './slides/Slide5'
import Slide6 from './slides/Slide6'
import Slide7 from './slides/Slide7'

export default function Carousel() {
  return (
    <Box sx={{ width: '100%', minHeight: { xs: '70vh', md: '80vh' } }}>
      <Swiper
        modules={[Navigation, Pagination, HashNavigation, Keyboard]}
        navigation
        pagination={{ clickable: true }}
        hashNavigation={{ watchState: true }}
        keyboard={{ enabled: true }}
        spaceBetween={30}
        slidesPerView={1}
      >
        <SwiperSlide data-hash="capa"><Slide1/></SwiperSlide>
        <SwiperSlide data-hash="agradecimento"><Slide2/></SwiperSlide>
        <SwiperSlide data-hash="versiculo"><Slide3/></SwiperSlide>
        <SwiperSlide data-hash="madrinhas"><Slide4/></SwiperSlide>
        <SwiperSlide data-hash="padrinhos"><Slide5/></SwiperSlide>
        <SwiperSlide data-hash="local"><Slide6/></SwiperSlide>
        <SwiperSlide data-hash="final"><Slide7/></SwiperSlide>
      </Swiper>
    </Box>
  )
}
