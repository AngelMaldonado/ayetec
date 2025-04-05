"use client"

import { BenefitsSection } from "@/components/benefits-section"
import { ContactSection } from "@/components/contact-section"
import { Footer } from "@/components/footer"
import { HeroSection } from "@/components/hero-section"
import { Navigation } from "@/components/navigation"
import { ProcessSection } from "@/components/process-section"
import { ServicesSection } from "@/components/services-section"
import { TemplatesSection } from "@/components/templates-section"
import { TestimonialsSection } from "@/components/testimonials-section"

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

