import React from 'react'
import Container from '@mui/material/Container'
import Box from '@mui/material/Box'
import Carousel from './components/Carousel'

export default function App() {
  return (
    <Container maxWidth="lg" sx={{ p: { xs: 1, sm: 2, md: 4 } }}>
      <Box sx={{ minHeight: '80vh' }}>
        <Carousel />
      </Box>
    </Container>
  )
}
