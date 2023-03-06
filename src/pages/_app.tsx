import type { AppProps } from 'next/app'

import { ThemeProvider } from '@mui/material'
import CssBaseline from '@mui/material/CssBaseline';

import '@/styles/globals.css'
import { darkTheme, lightTheme } from '@/themes';

export default function App({ Component, pageProps }: AppProps) {
  return (
<ThemeProvider theme={ darkTheme }>
  <CssBaseline/>
   <Component {...pageProps} />
</ThemeProvider>
  )
}
