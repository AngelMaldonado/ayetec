import { Footer } from '@/components/footer'
import { Navigation } from '@/components/navigation'
import { ProjectsSection } from '@/components/projects-section'
import React from 'react'

export default function Page() {
  return (
    <div className="flex min-h-screen flex-col">
      <Navigation />
      <main className="flex-1">
        <ProjectsSection />
      </main>
      <Footer />
    </div>
  )
}
