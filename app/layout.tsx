import './globals.css'
import { ReactNode } from 'react'

export const metadata = {
  title: 'MyDeveloperJourney',
  description: 'Daniel Scott\'s Personal Website and Developer Journey Website ',
}

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en" className="dark">
      <head>
        <link rel="icon" href="/logo.png" />
        <meta property="og:image" content="/logo.png" />
        <meta property="og:image:type" content="image/png" />
        <meta property="og:image:width" content="512" />
        <meta property="og:image:height" content="512" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:image" content="/logo.png" />
        <meta name="description" content="Daniel Scott's developer’s portfolio showcasing projects, experience, and values." />
        <meta property="og:description" content="Daniel Scott's developer’s portfolio showcasing projects, experience, and values." />
        <meta name="twitter:description" content="Daniel Scott's developer’s portfolio showcasing projects, experience, and values." />
      </head>
      <body className="bg-darkbg font-mono text-white">
        {children}
      </body>
    </html>
  )
}
