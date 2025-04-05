import { Check } from "lucide-react"

export function BenefitsSection() {
    return (
        <section className="w-full py-6 md:py-12">
            <div className="container px-4 md:px-6">
                <div className="mx-auto grid max-w-5xl gap-6 md:grid-cols-3">
                    <BenefitItem
                        title="Dominio Gratis"
                        description="Incluye dominio gratuito por 1 año con tu proyecto."
                    />
                    <BenefitItem
                        title="Monitoreo Continuo"
                        description="Estaré pendiente del funcionamiento de tu sitio web."
                    />
                    <BenefitItem
                        title="Entrega Rápida"
                        description="Tu sitio web listo en solo 48 horas tras la aprobación."
                    />
                </div>
            </div>
        </section>
    )
}

interface BenefitItemProps {
    title: string
    description: string
}

function BenefitItem({ title, description }: BenefitItemProps) {
    return (
        <div className="flex flex-col items-center space-y-2 text-center">
            <div className="flex h-12 w-12 items-center justify-center rounded-full bg-primary/10">
                <Check className="h-6 w-6 text-primary" />
            </div>
            <h3 className="text-lg font-bold">{title}</h3>
            <p className="text-sm text-muted-foreground">{description}</p>
        </div>
    )
} 