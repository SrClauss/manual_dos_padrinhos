import React, { useEffect, useRef, useState } from 'react'
import Box from '@mui/material/Box'
import useMediaQuery from '@mui/material/useMediaQuery'
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
  const frameRef = useRef(null)
  const [scale, setScale] = useState(1)
  const [expanded, setExpanded] = useState(false)
  const prefersReducedMotion = useMediaQuery('(prefers-reduced-motion: reduce)')

  // Design size (original slide pixel size): we keep this to preserve original look
  const DESIGN_W = 1280
  const DESIGN_H = 720

  function updateScale() {
    const w = window.innerWidth
    const h = window.innerHeight
    const isLandscape = w > h

    // If landscape, expand to cover (full screen), but maintain aspect ratio without distortion
    if (isLandscape) {
      // scale to fit height (so it fills vertically), but may leave horizontal space
      const scaleForHeight = h / DESIGN_H
      setScale(scaleForHeight)
      setExpanded(true)
      return
    }

    // Portrait: show a centered framed slide that doesn't distort: compute scale to fit a band
    const maxFrameWidth = Math.min(w - 32, DESIGN_W) // margin 16px each side
    const frameHeight = Math.min(h * 0.55, DESIGN_H) // cover up to ~55% of height
    const scaleX = maxFrameWidth / DESIGN_W
    const scaleY = frameHeight / DESIGN_H
    const finalScale = Math.min(scaleX, scaleY)
    setScale(finalScale)
    setExpanded(false)
  }

  useEffect(() => {
    updateScale()
    window.addEventListener('resize', updateScale)
    window.addEventListener('orientationchange', updateScale)
    return () => {
      window.removeEventListener('resize', updateScale)
      window.removeEventListener('orientationchange', updateScale)
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  // Helper that wraps slides so we can scale them without changing inner markup
  function SlideWrapper({ children }) {
    return (
      <div className={`slide-frame ${expanded ? 'expanded' : ''}`} ref={frameRef}>
        <div className="slide-scale" style={{ transform: `scale(${scale})`, transformOrigin: 'center top', transition: prefersReducedMotion ? 'none' : 'transform 240ms ease' }}>
          {children}
        </div>
      </div>
    )
  }

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
        <SwiperSlide data-hash="capa"><SlideWrapper><Slide1/></SlideWrapper></SwiperSlide>
        <SwiperSlide data-hash="agradecimento"><SlideWrapper><Slide2/></SlideWrapper></SwiperSlide>
        <SwiperSlide data-hash="versiculo"><SlideWrapper><Slide3/></SlideWrapper></SwiperSlide>
        <SwiperSlide data-hash="madrinhas"><SlideWrapper><Slide4/></SlideWrapper></SwiperSlide>
        <SwiperSlide data-hash="padrinhos"><SlideWrapper><Slide5/></SlideWrapper></SwiperSlide>
        <SwiperSlide data-hash="local"><SlideWrapper><Slide6/></SlideWrapper></SwiperSlide>
        <SwiperSlide data-hash="final"><SlideWrapper><Slide7/></SlideWrapper></SwiperSlide>
      </Swiper>
    </Box>
  )
}
