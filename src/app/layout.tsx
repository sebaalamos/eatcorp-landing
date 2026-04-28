import type { Metadata } from 'next'
import { Geist, Geist_Mono } from 'next/font/google'
import './globals.css'

const geist = Geist({
  variable: '--font-geist-sans',
  subsets: ['latin'],
})
const geistMono = Geist_Mono({
  variable: '--font-geist-mono',
  subsets: ['latin'],
})

export const metadata: Metadata = {
  title: 'EatCorp | Gestión integral para restaurantes',
  description:
    'Suite completa de apps para compras, tareas, redes sociales, mantenimiento de activos y más. Todo lo que necesitas para operar tu restaurante.',
  openGraph: {
    title: 'EatCorp',
    description: 'Gestión integral para restaurantes',
    url: 'https://eatcorp.cl',
    siteName: 'EatCorp',
    type: 'website',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="es">
      <body className={`${geist.variable} ${geistMono.variable} antialiased`}>
        {children}
      </body>
    </html>
  )
}
