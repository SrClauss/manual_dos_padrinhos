import React from 'react'
import Box from '@mui/material/Box'
import Grid from '@mui/material/Grid'
import Typography from '@mui/material/Typography'
import LocationOnIcon from '@mui/icons-material/LocationOn'
import ChurchIcon from '@mui/icons-material/Church'
import AccessTimeIcon from '@mui/icons-material/AccessTime'

export default function Slide6(){
  return (
    <Box className="slide-container" sx={{ p: { xs:2, md:4 } }}>
      <Typography variant="h4" sx={{ mb: 2 }}>Onde e Quando</Typography>
      <Grid container spacing={3}>
        <Grid item xs={12} md={4}>
          <Box sx={{ bgcolor: 'background.paper', p:2, borderRadius: 2 }}> 
            <ChurchIcon color="primary" sx={{ fontSize: 36 }} />
            <Typography variant="h6">Cerimônia</Typography>
            <Typography variant="body1"><strong>10:00 Horas</strong><br/>Igreja Matriz de São Mateus - ES</Typography>
            <Typography variant="body2" sx={{ color: 'text.secondary', mt:1 }}>R. Floriano Peixoto - Centro, 29930-080</Typography>
          </Box>
        </Grid>
        <Grid item xs={12} md={4}>
          <Box sx={{ bgcolor: 'background.paper', p:2, borderRadius: 2 }}>
            <AccessTimeIcon color="primary" sx={{ fontSize: 36 }} />
            <Typography variant="h6">Chegada dos Padrinhos</Typography>
            <Typography variant="body1"><strong>09:30 Horas</strong></Typography>
            <Typography variant="body2">Padrinhos precisam estar meia hora no mínimo adiantados para organização.</Typography>
          </Box>
        </Grid>
        <Grid item xs={12} md={4}>
          <Box sx={{ bgcolor: 'background.paper', p:2, borderRadius: 2 }}>
            <LocationOnIcon color="primary" sx={{ fontSize: 36 }} />
            <Typography variant="h6">Coordenadas</Typography>
            <Typography variant="body1"><a href="https://www.google.com/maps/search/?api=1&query=-18.7155556,-39.8619444" target="_blank" rel="noopener noreferrer" title="Abrir no Google Maps">18° 42′ 56″ S<br/>39° 51′ 43″ O</a></Typography>
            <Typography variant="body2" sx={{ mt:1 }}>Nos encontramos lá!</Typography>
          </Box>
        </Grid>
      </Grid>
    </Box>
  )
}