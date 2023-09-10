import { ThemeProvider } from '@/context/theme'
import { Navbar } from '@/components/layouts/Navbar'
import '@/styles/globals.css'
import type { AppProps } from 'next/app'

export default function App({ Component, pageProps }: AppProps) {
  return( 
    <ThemeProvider>
      <Navbar/>
      <Component {...pageProps} />
    </ThemeProvider>)
}
