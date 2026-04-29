import type { Metadata, Viewport } from 'next'
import { Inter } from 'next/font/google'
import { Analytics } from '@vercel/analytics/next'
import { SpeedInsights } from '@vercel/speed-insights/next'
import './globals.css'

const inter = Inter({
  variable: '--font-sans',
  subsets: ['latin'],
})

export const viewport: Viewport = {
  themeColor: '#020617',
}

const TITLE = 'EatCorp — La plataforma todo-en-uno para tu restorán'
const DESCRIPTION =
  'Plataforma SaaS para restoranes en LatAm: compras, tareas, redes sociales con IA, reservas y mantención. Reemplaza el Excel y los grupos de WhatsApp. En castellano, listo en 30 minutos.'

export const metadata: Metadata = {
  metadataBase: new URL('https://eatcorp.cl'),
  title: TITLE,
  description: DESCRIPTION,
  keywords: [
    'software restorán LatAm',
    'gestión restaurante',
    'compras restaurante',
    'tareas cocina',
    'redes sociales restaurante IA',
    'mantención restaurante',
    'reservas restaurante',
  ],
  authors: [{ name: 'EatCorp' }],
  creator: 'EatCorp',
  category: 'business',
  alternates: {
    canonical: 'https://eatcorp.cl',
  },
  icons: {
    icon: '/favicon.svg',
    apple: '/apple-touch-icon.png',
  },
  openGraph: {
    title: TITLE,
    description: DESCRIPTION,
    url: 'https://eatcorp.cl',
    siteName: 'EatCorp',
    images: [{ url: '/og-image.png', width: 1200, height: 630, alt: 'EatCorp' }],
    type: 'website',
    locale: 'es_419',
  },
  twitter: {
    card: 'summary_large_image',
    title: TITLE,
    description: DESCRIPTION,
    images: ['/og-image.png'],
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
        <Analytics />
        <SpeedInsights />
      </body>
    </html>
  )
}
