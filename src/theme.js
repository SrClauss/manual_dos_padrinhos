import { createTheme, responsiveFontSizes } from '@mui/material/styles'

let theme = createTheme({
  palette: {
    primary: { main: '#B02C0C' },
    secondary: { main: '#CFCFCF' },
  },
  typography: {
    fontFamily: ['Inter', 'Arial', 'sans-serif'].join(','),
  },
  components: {
    MuiCssBaseline: {
      styleOverrides: {
        body: {
          backgroundColor: '#fff',
        },
      },
    },
  },
})

theme = responsiveFontSizes(theme)

export default theme
