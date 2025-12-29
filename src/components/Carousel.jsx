import React, { useEffect, useRef, useState } from 'react'
import Box from '@mui/material/Box'
import IconButton from '@mui/material/IconButton'
import ArrowBackIcon from '@mui/icons-material/ArrowBack'
import ArrowForwardIcon from '@mui/icons-material/ArrowForward'

import Slide1 from './slides/Slide1'
import Slide2 from './slides/Slide2'
import Slide3 from './slides/Slide3'
import Slide4 from './slides/Slide4'
import Slide5 from './slides/Slide5'
import Slide6 from './slides/Slide6'
import Slide7 from './slides/Slide7'

export default function Carousel() {
  const [activeIndex, setActiveIndex] = useState(0)
  const [scale, setScale] = useState(1)

  // Design size (original slide pixel size)
  const DESIGN_W = 1280
  const DESIGN_H = 720

  const slides = [
    { component: <Slide1 />, label: 'Capa' },
    { component: <Slide2 />, label: 'Agradecimento' },
    { component: <Slide3 />, label: 'Versículo' },
    { component: <Slide4 />, label: 'Madrinhas' },
    { component: <Slide5 />, label: 'Padrinhos' },
    { component: <Slide6 />, label: 'Local' },
    { component: <Slide7 />, label: 'Final' }
  ]

  function updateScale() {
    const w = window.innerWidth
    const h = window.innerHeight
    
    // Calculate scale to fit viewport while maintaining aspect ratio
    const scaleX = (w - 80) / DESIGN_W
    const scaleY = (h - 200) / DESIGN_H
    const newScale = Math.min(scaleX, scaleY, 1)
    
    setScale(newScale)
  }

  useEffect(() => {
    updateScale()
    window.addEventListener('resize', updateScale)
    return () => {
      window.removeEventListener('resize', updateScale)
    }
  }, [])

  function handlePrev() {
    setActiveIndex((prev) => (prev > 0 ? prev - 1 : prev))
  }

  function handleNext() {
    setActiveIndex((prev) => (prev < slides.length - 1 ? prev + 1 : prev))
  }

  // Keyboard navigation
  useEffect(() => {
    function handleKeyDown(e) {
      if (e.key === 'ArrowLeft') handlePrev()
      if (e.key === 'ArrowRight') handleNext()
    }
    window.addEventListener('keydown', handleKeyDown)
    return () => window.removeEventListener('keydown', handleKeyDown)
  }, [activeIndex])

  return (
    <Box sx={{ width: '100%', minHeight: { xs: '70vh', md: '80vh' }, display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 2 }}>
      {/* Slide display area */}
      <Box sx={{ flex: 1, display: 'flex', justifyContent: 'center', alignItems: 'center', width: '100%' }}>
        <div className="slide-frame">
          <div className="slide-scale" style={{ transform: `scale(${scale})`, transformOrigin: 'center center' }}>
            {slides[activeIndex].component}
          </div>
        </div>
      </Box>

      {/* Navigation controls */}
      <Box sx={{ display: 'flex', alignItems: 'center', gap: 2, pb: 2 }}>
        <IconButton
          onClick={handlePrev}
          disabled={activeIndex === 0}
          sx={{
            backgroundColor: '#B02C0C',
            color: 'white',
            '&:hover': { backgroundColor: '#8f2206' },
            '&:disabled': { backgroundColor: '#ccc', color: '#888' }
          }}
          aria-label="Anterior"
        >
          <ArrowBackIcon />
        </IconButton>

        {/* Page indicator */}
        <Box sx={{ 
          display: 'flex', 
          gap: 1, 
          alignItems: 'center',
          px: 2,
          py: 1,
          backgroundColor: '#f5f5f5',
          borderRadius: 2
        }}>
          {slides.map((_, index) => (
            <Box
              key={index}
              onClick={() => setActiveIndex(index)}
              sx={{
                width: 12,
                height: 12,
                borderRadius: '50%',
                backgroundColor: index === activeIndex ? '#B02C0C' : '#CFCFCF',
                cursor: 'pointer',
                transition: 'all 0.3s ease',
                '&:hover': { transform: 'scale(1.2)' }
              }}
            />
          ))}
        </Box>

        <IconButton
          onClick={handleNext}
          disabled={activeIndex === slides.length - 1}
          sx={{
            backgroundColor: '#B02C0C',
            color: 'white',
            '&:hover': { backgroundColor: '#8f2206' },
            '&:disabled': { backgroundColor: '#ccc', color: '#888' }
          }}
          aria-label="Próximo"
        >
          <ArrowForwardIcon />
        </IconButton>
      </Box>

      {/* Slide counter */}
      <Box sx={{ pb: 2, color: '#666', fontSize: '14px' }}>
        {activeIndex + 1} / {slides.length}
      </Box>
    </Box>
  )
}
