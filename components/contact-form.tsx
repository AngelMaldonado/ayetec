"use client"

import type React from "react"

import { useState } from "react"
import { Check } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Label } from "@/components/ui/label"

export function ContactForm() {
  const [isSubmitted, setIsSubmitted] = useState(false)
  const [isLoading, setIsLoading] = useState(false)

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setIsLoading(true)

    // Simulate form submission
    setTimeout(() => {
      setIsLoading(false)
      setIsSubmitted(true)
    }, 1500)
  }

  if (isSubmitted) {
    return (
      <div className="flex flex-col items-center justify-center space-y-4 text-center py-12">
        <div className="flex h-20 w-20 items-center justify-center rounded-full bg-primary/10">
          <Check className="h-10 w-10 text-primary" />
        </div>
        <h3 className="text-2xl font-bold">¡Gracias por tu mensaje!</h3>
        <p className="text-muted-foreground">Me pondré en contacto contigo lo antes posible.</p>
        <Button onClick={() => setIsSubmitted(false)} variant="outline">
          Enviar otro mensaje
        </Button>
      </div>
    )
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      <div className="space-y-2">
        <Label htmlFor="name">Nombre</Label>
        <Input id="name" placeholder="Tu nombre" required />
      </div>
      <div className="space-y-2">
        <Label htmlFor="email">Email</Label>
        <Input id="email" type="email" placeholder="tu@email.com" required />
      </div>
      <div className="space-y-2">
        <Label htmlFor="message">Mensaje o requerimientos</Label>
        <Textarea id="message" placeholder="Describe tu proyecto o necesidades..." className="min-h-[120px]" required />
      </div>
      <div className="flex flex-col gap-4">
        <Button type="submit" className="w-full" disabled={isLoading}>
          {isLoading ? "Enviando..." : "Enviar"}
        </Button>
      </div>
      <p className="text-xs text-muted-foreground text-center">
        Al enviar este formulario, aceptas nuestros{" "}
        <a href="#" className="underline underline-offset-2">
          Términos y Condiciones
        </a>
      </p>
    </form>
  )
}

