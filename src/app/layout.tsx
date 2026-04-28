import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'

const inter = Inter({
  variable: '--font-sans',
  subsets: ['latin'],
})

export const metadata: Metadata = {
  title: 'EatCorp | Plataforma de gestión para restaurantes',
  description:
    'Suite completa de apps para compras, tareas, redes sociales, mantenimiento y reservas. Todo lo que necesita tu restaurante en una sola plataforma integrada.',
  icons: {
    icon: '/favicon.svg',
    apple: '/apple-touch-icon.png',
  },
  openGraph: {
    title: 'EatCorp | Plataforma de gestión para restaurantes',
    description:
      'Suite completa de apps para compras, tareas, redes sociales, mantenimiento y reservas.',
    url: 'https://eatcorp.cl',
    siteName: 'EatCorp',
    images: [{ url: '/og-image.png', width: 1200, height: 630 }],
    type: 'website',
    locale: 'es_CL',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="es">
      <body className={`${inter.variable} antialiased`}>
        {children}
      </body>
    </html>
  )
}
