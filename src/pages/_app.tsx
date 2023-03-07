import type { AppProps } from 'next/app'

import { ThemeProvider } from '@mui/material'
import CssBaseline from '@mui/material/CssBaseline';

import '@/styles/globals.css'
import { darkTheme, lightTheme } from '@/themes';
import { UIProvider } from '@/context/ui';

export default function App({ Component, pageProps }: AppProps) {
  return (
    <UIProvider>
      <ThemeProvider theme={lightTheme}>
        <CssBaseline />
        <Component {...pageProps} />
      </ThemeProvider>
    </UIProvider>

  )
}
