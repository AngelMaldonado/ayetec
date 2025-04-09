"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Rocket, Menu, X } from "lucide-react"

export function Navigation() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  const scrollToSection = (e: React.MouseEvent<HTMLAnchorElement>, id: string) => {
    e.preventDefault()
    const element = document.getElementById(id)
    if (element) {
      window.scrollTo({
        top: element.offsetTop - 80, // Offset for the fixed header
        behavior: "smooth",
      })
      setMobileMenuOpen(false) // Close mobile menu after clicking
    }
  }

  return (
    <header className="sticky top-0 z-40 bg-background/90 will-change-scroll backdrop-blur-sm">
      <div className="container mx-auto flex h-16 items-center justify-between py-4">
        <div className="flex items-center gap-2">
          <Rocket className="h-6 w-6" />
          <span className="text-lg font-bold">AyE</span>
        </div>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex gap-6">
          <a
            href="#services"
            className="text-sm font-medium hover:underline underline-offset-4"
            onClick={(e) => scrollToSection(e, "services")}
          >
            Servicios
          </a>
          <a
            href="#templates"
            className="text-sm font-medium hover:underline underline-offset-4"
            onClick={(e) => scrollToSection(e, "templates")}
          >
            Diseños
          </a>
          <a
            href="#process"
            className="text-sm font-medium hover:underline underline-offset-4"
            onClick={(e) => scrollToSection(e, "process")}
          >
            Proceso
          </a>
          <a
            href="#testimonials"
            className="text-sm font-medium hover:underline underline-offset-4"
            onClick={(e) => scrollToSection(e, "testimonials")}
          >
            Testimonios
          </a>
        </nav>

        {/* Desktop Contact Button */}
        <div className="hidden md:block">
          <Button asChild>
            <a href="#contact" onClick={(e) => scrollToSection(e, "contact")}>
              Contacto
            </a>
          </Button>
        </div>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden p-2"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          aria-label="Toggle menu"
        >
          {mobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </div>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="md:hidden border-t bg-background">
          <div className="container py-4 flex flex-col gap-4">
            <a
              href="#services"
              className="text-sm font-medium hover:underline underline-offset-4"
              onClick={(e) => scrollToSection(e, "services")}
            >
              Servicios
            </a>
            <a
              href="#templates"
              className="text-sm font-medium hover:underline underline-offset-4"
              onClick={(e) => scrollToSection(e, "templates")}
            >
              Diseños
            </a>
            <a
              href="#process"
              className="text-sm font-medium hover:underline underline-offset-4"
              onClick={(e) => scrollToSection(e, "process")}
            >
              Proceso
            </a>
            <a
              href="#testimonials"
              className="text-sm font-medium hover:underline underline-offset-4"
              onClick={(e) => scrollToSection(e, "testimonials")}
            >
              Testimonios
            </a>
            <Button asChild className="w-full">
              <a href="#contact" onClick={(e) => scrollToSection(e, "contact")}>
                Contacto
              </a>
            </Button>
          </div>
        </div>
      )}
    </header>
  )
}

