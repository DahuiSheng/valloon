// app/layout.tsx
'use client'

import { CacheProvider } from '@chakra-ui/next-js'
import { ChakraProvider } from '@chakra-ui/react'
import Header from './components/Header'
import Footer from './components/Footer'

export default function RootLayout({
  children,
}: {
  children: React.ReactNode,
}) {
  return (
    <html lang='en'>
      <head />
      <body>
        <CacheProvider>
          <ChakraProvider>
            {/* <Header /> */}
            {children}
            <Footer />
            </ChakraProvider>
        </CacheProvider>
      </body>
    </html>
  )
}