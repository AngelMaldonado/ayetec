"use client"

import { Navigation } from "@/components/navigation"
import { HeroSection } from "@/components/hero-section"
import { ServicesSection } from "@/components/services-section"
import { BenefitsSection } from "@/components/benefits-section"
import { TemplatesSection } from "@/components/templates-section"
import { ContactSection } from "@/components/contact-section"
import { ProcessSection } from "@/components/process-section"
import { TestimonialsSection } from "@/components/testimonials-section"
import { Footer } from "@/components/footer"

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col">
      <Navigation />
      <main className="flex-1">
        <HeroSection />
        <ServicesSection />
        <BenefitsSection />
        <TemplatesSection />
        <ContactSection />
        <ProcessSection />
        <TestimonialsSection />
      </main>
      <Footer />
    </div>
  )
}

