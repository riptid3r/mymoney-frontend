import { ThemeOptions, createTheme } from '@mui/material/styles'

export const theme: ThemeOptions = createTheme({
  palette: {
    mode: 'dark',
    primary: {
      main: '#5c82df'
    },
    secondary: {
      main: '#fc7f8b'
    },
    background: {
      default: '#0e0e15',
      paper: '#191927'
    }
  },
  typography: {
    fontFamily: ['Inter', 'Roboto', 'sans-serif'].join(','),
    fontSize: 13,
    htmlFontSize: 16
  },
  components: {
    MuiAppBar: {
      styleOverrides: {
        colorPrimary: {
          background: '#161620'
        }
      }
    }
  }
})
