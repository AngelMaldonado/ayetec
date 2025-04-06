"use client"

import type React from "react"
import { Check } from "lucide-react"
import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"

export function ContactForm() {
  const [isSubmitted, setIsSubmitted] = useState(false)
  const [isLoading, setIsLoading] = useState(false)

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setIsLoading(true)

    const formData = new FormData(e.target as HTMLFormElement)
    const name = formData.get("name")
    const email = formData.get("email")
    const phone = formData.get("phone")
    const message = formData.get("message")

    const response = await fetch("/api/contact", {
      method: "POST",
      body: JSON.stringify({ name, email, phone, message }),
    })

    if (response.ok) {
      setIsSubmitted(true)
    }
  }

  if (isSubmitted) {
    return (
      <div className="flex flex-col items-center justify-center space-y-4 text-center py-12">
        <div className="flex h-20 w-20 items-center justify-center rounded-full bg-primary/10">
          <Check className="h-10 w-10 text-primary" />
        </div>
        <h3 className="text-2xl font-bold">¡Gracias por tu mensaje!</h3>
        <p className="text-muted-foreground">Nos pondremos en contacto contigo lo antes posible.</p>
        <Button onClick={() => {
          setIsSubmitted(false)
          setIsLoading(false)
        }} variant="outline">
          Enviar otro mensaje
        </Button>
      </div>
    )
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      <div className="space-y-2">
        <Label htmlFor="name">Nombre</Label>
        <Input id="name" name="name" placeholder="Tu nombre" required />
      </div>
      <div className="space-y-2">
        <Label htmlFor="email">Email</Label>
        <Input id="email" name="email" type="email" placeholder="tu@email.com" required />
      </div>
      <div className="space-y-2">
        <Label htmlFor="phone">Teléfono</Label>
        <Input id="phone" name="phone" type="tel" placeholder="Tu número de teléfono" required pattern="[0-9]*" />
      </div>
      <div className="space-y-2">
        <Label htmlFor="message">Mensaje o requerimientos</Label>
        <Textarea id="message" name="message" placeholder="Describe tu proyecto o necesidades..." className="min-h-[120px]" required />
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

