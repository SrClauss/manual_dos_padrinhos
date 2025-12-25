import React from 'react'
import Box from '@mui/material/Box'
import Typography from '@mui/material/Typography'

export default function Slide2(){
  return (
    <Box className="slide-container" sx={{ height: '100%', display: 'flex', alignItems: 'center', justifyContent: 'center', textAlign: 'center', px: 2 }}>
      <Box sx={{ maxWidth: 900 }}>
        <Typography variant="h3" sx={{ fontSize: { xs: 28, sm: 40, md: 60 }, mb: { xs: 2, md: 4 } }}>Obrigado por aceitarem!</Typography>
        <Typography variant="body1" sx={{ maxWidth: 800, fontSize: { xs: 16, sm: 20, md: 26 } }}>
          Ficamos imensamente felizes por terem aceitado o nosso convite. Ter pessoas tão especiais como vocês ao nosso lado no altar torna este momento ainda mais inesquecível.
          <br/><br/>
          <strong>Obrigado por fazerem parte da nossa história!</strong>
        </Typography>
      </Box>
    </Box>
  )
}