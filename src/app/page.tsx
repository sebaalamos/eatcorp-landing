import { Navigation } from '@/components/Navigation'
import { Hero } from '@/components/Hero'
import { Features } from '@/components/Features'
import { Apps } from '@/components/Apps'
import { CTA } from '@/components/CTA'
import { Footer } from '@/components/Footer'

export default function Home() {
  return (
    <main className="flex flex-col">
      <Navigation />
      <Hero />
      <Features />
      <Apps />
      <CTA />
      <Footer />
    </main>
  )
}
