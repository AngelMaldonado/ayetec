import { cn } from "@/lib/utils"
import { Check, Globe, Smartphone, Monitor } from "lucide-react"

export function BenefitsSection() {
  return (
    <section className="w-full py-6 md:py-12">
      <div className="container mx-auto px-4 md:px-6">
        <div className="mx-auto max-w-5xl space-y-12">
          {/* Web Development Benefits */}
          <div className="space-y-6">
            <div className="flex items-center gap-2 rotate-2 w-max">
              <Globe className="h-6 w-6 text-primary" />
              <h2 className="text-2xl font-bold">Páginas y Aplicaciones <span className="text-rose-500">Web</span></h2>
            </div>
            <div className="grid gap-6 grid-cols-1 lg:grid-cols-3">
              <BenefitItem
                title="Dominio Gratis"
                description="Incluye dominio gratuito por 1 año con tu proyecto web."
              />
              <BenefitItem
                title="Hosting Optimizado"
                description="Servidores optimizados para máximo rendimiento y seguridad."
              />
              <BenefitItem
                title="SEO Incluido"
                description="Optimización para motores de búsqueda incluida en tu proyecto."
              />
            </div>
          </div>

          {/* Mobile Development Benefits */}
          <div className="space-y-6">
            <div className="flex items-center gap-2 rotate-2 w-max">
              <Smartphone className="h-6 w-6" />
              <h2 className="text-2xl font-bold">Aplicaciones <span className="text-rose-500">Móviles</span></h2>
            </div>
            <div className="grid gap-6 grid-cols-1 lg:grid-cols-3">
              <BenefitItem
                title="Desarrollo en Android"
                description="Desde la idea hasta la publicación en Google Play."
              />
              <BenefitItem
                title="Seguridad y Privacidad"
                description="Implementación de autenticación y protección de datos."
              />
              <BenefitItem
                title="Actualizaciones"
                description="Mantenimiento y actualizaciones regulares de tu aplicación."
              />
            </div>
          </div>

          {/* Desktop Development Benefits */}
          <div className="space-y-4">
            <div className="flex items-center gap-2 rotate-2 w-max">
              <Monitor className="h-6 w-6" />
              <h2 className="text-2xl font-bold">Aplicaciones de <span className="text-rose-500">Escritorio</span></h2>
            </div>
            <div className="grid gap-6 grid-cols-1 lg:grid-cols-3">
              <BenefitItem
                title="Multiplataforma"
                description="Aplicaciones para Windows, macOS y Linux."
              />
              <BenefitItem
                title="Instalación Simple"
                description="Proceso de instalación sencillo."
              />
              <BenefitItem
                title="Integración de Pagos"
                description="Integración de pagos 100% segura."
              />
            </div>
          </div>
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
    <div className={cn(
      "flex flex-col items-center space-y-2 text-center p-4 bg-secondary/50 rounded-lg",
      "transition-all duration-300 ease-in-out hover:scale-105 hover:rotate-1",
      "hover:shadow-[0_0_15px_rgba(var(--primary),0.5)]",
      className
    )}>
      <div className="flex h-12 w-12 items-center justify-center rounded-full bg-secondary">
        <Check className="h-6 w-6 text-primary" />
      </div>
      <h3 className="text-lg font-bold">{title}</h3>
      <p className="text-sm text-muted-foreground">{description}</p>
    </div>
  )
} 