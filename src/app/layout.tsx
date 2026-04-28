import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'

const inter = Inter({
  variable: '--font-sans',
  subsets: ['latin'],
})

export const metadata: Metadata = {
  title: 'EatCorp — El motor de tu restaurante',
  description:
    'Compras, equipo, redes sociales y reservas — todo conectado en una sola plataforma, con IA donde más importa.',
  themeColor: '#0f172a',
  icons: {
    icon: '/favicon.svg',
    apple: '/apple-touch-icon.png',
  },
  openGraph: {
    title: 'EatCorp — El motor de tu restaurante',
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
    title: 'EatCorp — El motor de tu restaurante',
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
