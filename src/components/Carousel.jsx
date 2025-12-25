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
import { createPortal } from 'react-dom'

export default function Carousel() {
  const frameRef = useRef(null)
  const [scale, setScale] = useState(1)
  const [expanded, setExpanded] = useState(false)
  const [hidden, setHidden] = useState(false)
  const [isLandscape, setIsLandscape] = useState(false)
  const [activeIndex, setActiveIndex] = useState(0)
  const prefersReducedMotion = useMediaQuery('(prefers-reduced-motion: reduce)')

  // Design size (original slide pixel size): we keep this to preserve original look
  const DESIGN_W = 1280
  const DESIGN_H = 720

  function updateScale() {
    const w = window.innerWidth
    const h = window.innerHeight
    
    // Case 1: Desktop/Large screens (width > 900px) - show normal centered slide
    if (w > 900) {
      const scaleToFit = Math.min(1, (w - 80) / DESIGN_W, (h - 120) / DESIGN_H)
      setScale(scaleToFit)
      setExpanded(false)
      setHidden(false)
      setIsLandscape(false)
      return
    }
    
    // Case 2: Mobile Portrait (width <= 900 and height > width) - show framed slide
    if (h > w) {
      const scaleX = (w - 32) / DESIGN_W
      const scaleY = (h * 0.6) / DESIGN_H
      setScale(Math.min(scaleX, scaleY, 1))
      setExpanded(false)
      setHidden(false)
      setIsLandscape(false)
      return
    }
    
    // Case 3: Mobile Landscape (width <= 900 and width >= height) - expand to fill screen
    const scaleForHeight = (h - 40) / DESIGN_H
    const scaleForWidth = (w - 40) / DESIGN_W
    // limit scale so slide always fits within viewport and doesn't overflow vertically
    setScale(Math.min(scaleForHeight, scaleForWidth, 1))
    setExpanded(true)
    setHidden(false)
    setIsLandscape(true)
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
    if (hidden) return <div className="slide-frame" style={{ minHeight: 40 }} />
    return (
      <div className="slide-frame" ref={frameRef}>
        <div className="slide-scale" style={{ transform: `scale(${scale})`, transformOrigin: 'center center', transition: prefersReducedMotion ? 'none' : 'transform 240ms ease' }}>
          {children}
        </div>
      </div>
    )
  }

  // Fullscreen helpers — apply to the currently active slide frame
  async function enterFullscreenForActiveSlide() {
    try {
      const activeFrame = document.querySelector('.swiper-slide-active .slide-frame')
      if (!activeFrame) return
      // request fullscreen on the frame (user gesture required)
      if (activeFrame.requestFullscreen) {
        await activeFrame.requestFullscreen()
      }
      // ensure visible and expanded state
      setHidden(false)
      setExpanded(true)
      // scale to fit height while preserving ratio
      const h = window.innerHeight
      setScale(h / DESIGN_H)
    } catch (err) {
      console.error('Fullscreen failed', err)
    }
  }

  function exitFullscreenHandler() {
    const isFS = !!document.fullscreenElement
    if (!isFS) {
      // exited fullscreen
      setExpanded(false)
      // recompute normal scale
      updateScale()
    }
  }

  useEffect(() => {
    document.addEventListener('fullscreenchange', exitFullscreenHandler)
    return () => document.removeEventListener('fullscreenchange', exitFullscreenHandler)
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  // Keep body class in sync when overlay is open to prevent scrolling
  useEffect(() => {
    if (expanded && isLandscape) document.body.classList.add('landscape-overlay-open')
    else document.body.classList.remove('landscape-overlay-open')
  }, [expanded, isLandscape])


  const slidesArr = [<div key="s1"><Slide1/></div>, <div key="s2"><Slide2/></div>, <div key="s3"><Slide3/></div>, <div key="s4"><Slide4/></div>, <div key="s5"><Slide5/></div>, <div key="s6"><Slide6/></div>, <div key="s7"><Slide7/></div>]

  const swiperRef = useRef(null)
  function handlePrev() { if (swiperRef.current) swiperRef.current.slidePrev() }
  function handleNext() { if (swiperRef.current) swiperRef.current.slideNext() }

  // touch swipe on overlay
  const touchStartX = useRef(0)
  function onOverlayTouchStart(e) { touchStartX.current = e.touches[0].clientX }
  function onOverlayTouchEnd(e) {
    const dx = e.changedTouches[0].clientX - touchStartX.current
    if (dx > 40) handlePrev()
    else if (dx < -40) handleNext()
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
        onSlideChange={(s) => setActiveIndex(s.activeIndex)}
        onSwiper={(s) => (swiperRef.current = s)}
      >
        <SwiperSlide data-hash="capa"><SlideWrapper><Slide1/></SlideWrapper></SwiperSlide>
        <SwiperSlide data-hash="agradecimento"><SlideWrapper><Slide2/></SlideWrapper></SwiperSlide>
        <SwiperSlide data-hash="versiculo"><SlideWrapper><Slide3/></SlideWrapper></SwiperSlide>
        <SwiperSlide data-hash="madrinhas"><SlideWrapper><Slide4/></SlideWrapper></SwiperSlide>
        <SwiperSlide data-hash="padrinhos"><SlideWrapper><Slide5/></SlideWrapper></SwiperSlide>
        <SwiperSlide data-hash="local"><SlideWrapper><Slide6/></SlideWrapper></SwiperSlide>
        <SwiperSlide data-hash="final"><SlideWrapper><Slide7/></SlideWrapper></SwiperSlide>
      </Swiper>

      {/* Fullscreen button for small screens */}
      <div className="fullscreen-button-wrapper">
        <button aria-label="Full screen" className="fullscreen-button" onClick={enterFullscreenForActiveSlide}>
          ⤢
        </button>
      </div>

      {/* Landscape overlay rendered to body via portal so it's not affected by Swiper transforms */}
      {expanded && isLandscape && createPortal(
        <div className="landscape-overlay" onTouchStart={onOverlayTouchStart} onTouchEnd={onOverlayTouchEnd}>
          <button className="overlay-nav overlay-prev" aria-label="Previous" onClick={handlePrev}>‹</button>
          <div className="overlay-scale" style={{ transform: `scale(${scale})` }}>
            <div className="overlay-inner">
              {slidesArr[activeIndex]}
            </div>
          </div>
          <button className="overlay-nav overlay-next" aria-label="Next" onClick={handleNext}>›</button>
        </div>,
        document.body
      )}
    </Box>
  )
}
