import React from 'react'
import Box from '@mui/material/Box'
import Typography from '@mui/material/Typography'
import Paper from '@mui/material/Paper'

export default function Slide3(){
  return (
    <Box className="slide-container" sx={{ height: '100%', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
      <Paper elevation={0} sx={{ p: { xs:2, sm:4 }, maxWidth: 900, bgcolor: 'transparent' }}>
        <Typography variant="h5" component="blockquote" sx={{ fontStyle: 'italic', textAlign: 'center' }}>
          "O Senhor te abençoe e te guarde; o Senhor faça resplandecer o seu rosto sobre ti e te conceda graça; o Senhor volte para ti o seu rosto e te dê paz."
        </Typography>
        <Typography variant="subtitle2" sx={{ textAlign: 'center', mt: 2 }}>Números 6:24-26</Typography>
      </Paper>
    </Box>
  )
}