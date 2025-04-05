"use client"

import type React from "react"
import { Button } from "@/components/ui/button"
import { Code } from "lucide-react"

export function Navigation() {
  const scrollToSection = (e: React.MouseEvent<HTMLAnchorElement>, id: string) => {
    e.preventDefault()
    const element = document.getElementById(id)
    if (element) {
      window.scrollTo({
        top: element.offsetTop - 80, // Offset for the fixed header
        behavior: "smooth",
      })
    }
  }

  return (
    <header className="sticky top-0 z-40 border-b bg-background">
      <div className="container flex h-16 items-center justify-between py-4">
        <div className="flex items-center gap-2">
          <Code className="h-6 w-6" />
          <span className="text-lg font-bold">WebDev</span>
        </div>
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
            Plantillas
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
        <Button asChild>
          <a href="#contact" onClick={(e) => scrollToSection(e, "contact")}>
            Contacto
          </a>
        </Button>
      </div>
    </header>
  )
}

