import { ReactNode } from 'react'

export default function RootLayout({ children }: { children: ReactNode }) {
  //---------------------
  //   RENDER
  //---------------------
  return (
    <html>
      <body>
        {children}
      </body>
    </html>
  )
}