import './globals.css'
import { ReactNode } from 'react'

export const metadata = {
  title: 'danielscott.dev',
  description: 'Personal Brand & Coding Community Website for Daniel Scott',
}

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en" className="dark">
      <body className="bg-darkbg font-mono text-white">
        {children}
      </body>
    </html>
  )
}
