'use client'

import { Header } from '@/components/header'
import { HeroSection } from '@/components/hero-section'
import { AboutSection } from '@/components/about-section'
import { FeaturesSection } from '@/components/features-section'
import { HowItWorksSection } from '@/components/how-it-works-section'
import { RoadmapSection } from '@/components/roadmap-section'
import { TrustSection } from '@/components/trust-section'
import { FooterSection } from '@/components/footer-section'

export default function Home() {
  return (
    <main className="min-h-screen bg-background">
      <Header />
      <HeroSection />
      <AboutSection />
      <FeaturesSection />
      <HowItWorksSection />
      <RoadmapSection />
      <TrustSection />
      <FooterSection />
    </main>
  )
}
