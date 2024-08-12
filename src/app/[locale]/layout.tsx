import '@/styles/global.css'

import type { ReactNode } from 'react'

import ReduxProvider from '../Provider'

export default function RootLayout({ children }: { children: ReactNode }) {
  //---------------------
  //   RENDER
  //---------------------
  return (
    <html lang="en">
      <head>
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0-beta3/css/all.min.css" />
      </head>
      <body>
        <ReduxProvider>{children}</ReduxProvider>
      </body>
    </html>
  )
}
