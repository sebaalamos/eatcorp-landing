import type { Metadata, Viewport } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'

const inter = Inter({
  variable: '--font-sans',
  subsets: ['latin'],
})

export const viewport: Viewport = {
  themeColor: '#020617',
}

export const metadata: Metadata = {
  metadataBase: new URL('https://eatcorp.cl'),
  title: 'EatCorp — El motor de tu restorán',
  description:
    'Compras, equipo, redes sociales y reservas — todo conectado en una sola plataforma, con IA donde más importa.',
  icons: {
    icon: '/favicon.svg',
    apple: '/apple-touch-icon.png',
  },
  openGraph: {
    title: 'EatCorp — El motor de tu restorán',
    description:
      'Compras, equipo, redes sociales y reservas — todo conectado en una sola plataforma, con IA donde más importa.',
    url: 'https://eatcorp.cl',
    siteName: 'EatCorp',
    images: [{ url: '/og-image.png', width: 1200, height: 630 }],
    type: 'website',
    locale: 'es_CL',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'EatCorp — El motor de tu restorán',
    description:
      'Compras, equipo, redes sociales y reservas — todo conectado en una sola plataforma, con IA donde más importa.',
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
      </body>
    </html>
  )
}
