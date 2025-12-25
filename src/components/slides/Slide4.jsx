import React from 'react'
import Box from '@mui/material/Box'
import Grid from '@mui/material/Grid'
import Typography from '@mui/material/Typography'

export default function Slide4(){
  return (
    <Box className="slide-container" sx={{ p: { xs:2, md:4 } }}>
      <Typography variant="h4" sx={{ mb: 2 }}>Dress Code: Madrinhas</Typography>
      <Grid container spacing={4} alignItems="center">
        <Grid item xs={12} md={5}>
          <Box sx={{ position: 'relative', textAlign: 'center' }}>
            <Box
              component="img"
              src="/img/adelle_madrinha3.jpg"
              alt="Modelo Madrinha - Adelle"
              onError={(e)=>{e.target.src='/img/placeholder.svg'}}
              sx={{ width: '100%', height: 'auto', borderRadius: 2 }}
            />
            <Typography variant="caption" display="block" sx={{ mt: 1 }}>Madrinhas</Typography>
          </Box>
        </Grid>
        <Grid item xs={12} md={7}>
          <Box sx={{ display: 'flex', alignItems: 'flex-start', gap: 2 }}>
            <Box sx={{ width: 28, height: 28, borderRadius: '50%', backgroundColor: 'primary.main' }} />
            <Box>
              <Typography variant="h6">Vestido Longo Terracota</Typography>
              <Typography variant="body1">Para o nosso altar, sonhamos com uma paleta quente e vibrante. Pedimos que escolham um vestido <strong>longo</strong> no tom <strong>Terracota</strong> (#B02C0C).</Typography>
            </Box>
          </Box>
        </Grid>
      </Grid>
    </Box>
  )
}