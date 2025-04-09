import { cn } from "@/lib/utils"
import { Check } from "lucide-react"

export function BenefitsSection() {
  return (
    <section className="w-full py-6 md:py-12">
      <div className="container mx-auto px-4 md:px-6">
        <div className="mx-auto grid max-w-5xl gap-6 grid-cols-1 lg:grid-cols-3">
          <BenefitItem
            title="Dominio Gratis"
            description="Incluye dominio gratuito por 1 año con tu proyecto."
          />
          <BenefitItem
            title="Monitoreo Continuo"
            description="Estaremos pendientes del correcto funcionamiento de tu sitio web."
          />
          <BenefitItem
            title="Entrega Rápida"
            description="Tu sitio web listo de 5 a 10 días hábiles dependiendo la complejidad de tu proyecto."
          />
        </div>
      </div>
    </section>
  )
}

interface BenefitItemProps {
  title: string
  description: string
  className?: string
}

function BenefitItem({ title, description, className }: BenefitItemProps) {
  return (
    <div className={cn("flex flex-col items-center space-y-2 text-center p-4", className)}>
      <div className="flex h-12 w-12 items-center justify-center rounded-full bg-secondary">
        <Check className="h-6 w-6 text-primary" />
      </div>
      <h3 className="text-lg font-bold">{title}</h3>
      <p className="text-sm text-muted-foreground">{description}</p>
    </div>
  )
} 