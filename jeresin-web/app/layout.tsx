import Header from './components/Header'
import Footer from './components/Footer'
import './globals.css'
import type { Metadata } from 'next'


export const metadata: Metadata = {
  title: 'Jeresin Crafts',
  description: 'Resin crafts made by Jeriesa',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className='font-montserrat'>
      <body className='m-0 bg-sakura flex flex-col min-h-screen'>
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  )
}
