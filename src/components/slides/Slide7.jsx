import React from 'react'
import Box from '@mui/material/Box'
import Typography from '@mui/material/Typography'

export default function Slide7(){
  return (
    <Box className="slide-container" sx={{ height: '100%', display: 'flex', alignItems: 'center', justifyContent: 'center', textAlign: 'center', px:2 }}>
      <Box>
        <Typography variant="h3" sx={{ fontSize: { xs: 28, sm: 40, md: 50 } }}>Contamos com vocês!</Typography>
        <Typography variant="body1" sx={{ mt:2 }}>Qualquer dúvida, estamos à disposição.</Typography>
        <Typography sx={{ mt:6, fontFamily: 'Playfair Display, serif', fontSize: 32, color: 'primary.main' }}>Com carinho,<br/>Os Noivos</Typography>
      </Box>
    </Box>
  )
}