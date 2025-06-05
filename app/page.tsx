"use client"

import { BenefitsSection } from "@/components/benefits-section"
import { ContactSection } from "@/components/contact-section"
import { Footer } from "@/components/footer"
import { HeroSection } from "@/components/hero-section"
import { Navigation } from "@/components/navigation"
import { ProcessSection } from "@/components/process-section"
import { ServicesSection } from "@/components/services-section"
import { ProjectsSection } from "@/components/projects-section"
// import { TestimonialsSection } from "@/components/testimonials-section"
import { WebTemplatesSection } from "@/components/web-templates-section"

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col">
      <Navigation />
      <main className="flex-1">
        <HeroSection />
        <ServicesSection />
        <BenefitsSection />
        <ProjectsSection />
        <WebTemplatesSection />
        <ProcessSection />
        <ContactSection />
        {/* <TestimonialsSection /> */}
      </main>
      <Footer />
    </div>
  )
}

