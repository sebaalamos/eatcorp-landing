import { HashRedirect } from '@/components/HashRedirect'
import { Navigation } from '@/components/Navigation'
import { Hero } from '@/components/Hero'
import { LiveActivityBar } from '@/components/LiveActivityBar'
import { Stats } from '@/components/Stats'
import { ClientLogos } from '@/components/ClientLogos'
import { Features } from '@/components/Features'
import { ADayWithEatCorp } from '@/components/ADayWithEatCorp'
import { HowItWorks } from '@/components/HowItWorks'
import { Apps } from '@/components/Apps'
import { ComingSoonApps } from '@/components/ComingSoonApps'
import { ROICalculator } from '@/components/ROICalculator'
import { Testimonials } from '@/components/Testimonials'
import { Pricing } from '@/components/Pricing'
import { Comparison } from '@/components/Comparison'
import { FAQ } from '@/components/FAQ'
import { TrustBar } from '@/components/TrustBar'
import { CTA } from '@/components/CTA'
import { Footer } from '@/components/Footer'

export default function Home() {
  return (
    <main className="flex flex-col">
      <HashRedirect />
      <Navigation />
      <Hero />
      <LiveActivityBar />
      <Stats />
      <ClientLogos />
      <Features />
      <ADayWithEatCorp />
      <HowItWorks />
      <Apps />
      <ComingSoonApps />
      <ROICalculator />
      <Testimonials />
      <Pricing />
      <Comparison />
      <FAQ />
      <TrustBar />
      <CTA />
      <Footer />
    </main>
  )
}
