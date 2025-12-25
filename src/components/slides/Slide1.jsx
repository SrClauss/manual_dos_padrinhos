import React from 'react'
import Box from '@mui/material/Box'
import Typography from '@mui/material/Typography'

export default function Slide1(){
  return (
    <Box className="slide-container" sx={{ height: '100%', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
      <Box sx={{ textAlign: 'center' }}>
        <Typography sx={{ textTransform: 'uppercase', letterSpacing: 2, color: 'primary.main', fontWeight: 'bold' }} variant="overline">Casamento Clausemberg & Brunella</Typography>
        <Typography variant="h2" component="h1" sx={{ fontWeight: 700, my: 2 }}>Manual dos Padrinhos</Typography>
        <Box sx={{ width: 200, height: 1, background: 'secondary.main', mx: 'auto', my: 3 }} />
        <Typography variant="subtitle1">31 de Janeiro de 2026</Typography>
      </Box>
    </Box>
  )
}