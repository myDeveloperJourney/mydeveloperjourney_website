import './globals.css'
import { ReactNode } from 'react'

export const metadata = {
  title: 'MyDeveloperJourney',
  description: 'Daniel Scott\'s Personal Website and Developer Journey Website ',
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
