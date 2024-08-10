import '@/styles/global.css';


import Head from 'next/head'
import { ReactNode } from 'react'

export default function RootLayout({ children }: { children: ReactNode }) {
  //---------------------
  //   RENDER
  //---------------------
  return (
    <html lang="en">
      <Head>
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0-beta3/css/all.min.css" />
      </Head>
      <body>{children}</body>
    </html>
  )
}
