import React from 'react'
import Box from '@mui/material/Box'
import Grid from '@mui/material/Grid'
import Typography from '@mui/material/Typography'

export default function Slide5(){
  return (
    <Box className="slide-container" sx={{ p: { xs:2, md:4 } }}>
      <Typography variant="h4" sx={{ mb: 2 }}>Dress Code: Padrinhos</Typography>
      <Grid container spacing={4} alignItems="center">
        <Grid item xs={12} md={7}>
          <Box>
            <Box sx={{ width: 28, height: 28, borderRadius: '50%', backgroundColor: 'secondary.main', mb:1 }} />
            <Typography variant="h6">Cinza Claro & Branco</Typography>
            <Typography variant="body1" sx={{ mt:1 }}>O visual dos nossos padrinhos será leve e sofisticado, ideal para uma cerimônia matutina:</Typography>
            <Box component="ul" sx={{ mt:2, pl: 3 }}>
              <li><strong>Calça Social:</strong> Cinza Claro (#CFCFCF).</li>
              <li><strong>Camisa:</strong> Social Branca (manga longa, bem alinhada).</li>
              <li>Sem necessidade de paletó.</li>
              <li>Sapatos em tons de café ou preto.</li>
            </Box>
          </Box>
        </Grid>
        <Grid item xs={12} md={5}>
          <Box sx={{ textAlign: 'center' }}>
            <Box
              component="img"
              src="/img/padrinho_tom_holland.jpg"
              alt="Modelo Padrinho - Holland"
              onError={(e)=>{e.target.src='/img/placeholder.svg'}}
              sx={{ width: '100%', height: 'auto', borderRadius: 2 }}
            />
            <Typography variant="caption" display="block" sx={{ mt: 1 }}>Padrinhos</Typography>
          </Box>
        </Grid>
      </Grid>
    </Box>
  )
}