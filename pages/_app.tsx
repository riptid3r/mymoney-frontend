import { CssBaseline, ThemeProvider } from '@mui/material'
import type { AppProps } from 'next/app'

import Header from '@/src/components/header/Header'

import { theme } from '@/src/data/themeConfig'

function App({ Component, pageProps }: AppProps) {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Header />
      <Component {...pageProps} />
    </ThemeProvider>
  )
}

export default App
