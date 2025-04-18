import { ArrowRight } from "lucide-react"
import Link from "next/link"
import { cn } from "@/lib/utils"

interface CaseStudy {
  id: string
  title: string
  description: string
  image: string
  category: "web" | "mobile" | "desktop"
  client: string
  results: string[]
  slug: string
}

export function CaseStudiesSection() {
  const caseStudies: CaseStudy[] = [
    {
      id: "1",
      title: "E-commerce Platform",
      description: "Plataforma de comercio electrónico con integración de pagos y gestión de inventario.",
      image: "/case-studies/ecommerce.jpg",
      category: "web",
      client: "TechStore",
      results: [
        "Aumento del 150% en ventas online",
        "Reducción del 30% en costos operativos",
        "Mejora del 40% en tiempo de carga"
      ],
      slug: "techstore-ecommerce"
    },
    {
      id: "2",
      title: "App de Delivery",
      description: "Aplicación móvil para gestión de entregas y seguimiento en tiempo real.",
      image: "/case-studies/delivery.jpg",
      category: "mobile",
      client: "QuickDelivery",
      results: [
        "50,000+ descargas en 3 meses",
        "4.8/5 calificación en Play Store",
        "Reducción del 25% en tiempos de entrega"
      ],
      slug: "quickdelivery-app"
    },
    {
      id: "3",
      title: "Sistema de Gestión",
      description: "Software de escritorio para gestión empresarial y contabilidad.",
      image: "/case-studies/erp.jpg",
      category: "desktop",
      client: "BusinessPro",
      results: [
        "Automatización del 80% de procesos",
        "Ahorro del 40% en tiempo administrativo",
        "Integración con 5 sistemas existentes"
      ],
      slug: "businesspro-erp"
    },
    {
      id: "4",
      title: "Sistema de Gestión",
      description: "Software de escritorio para gestión empresarial y contabilidad.",
      image: "/case-studies/erp.jpg",
      category: "desktop",
      client: "BusinessPro",
      results: [
        "Automatización del 80% de procesos",
        "Ahorro del 40% en tiempo administrativo",
        "Integración con 5 sistemas existentes"
      ],
      slug: "businesspro-erp"
    },
    {
      id: "5",
      title: "Sistema de Gestión",
      description: "Software de escritorio para gestión empresarial y contabilidad.",
      image: "/case-studies/erp.jpg",
      category: "desktop",
      client: "BusinessPro",
      results: [
        "Automatización del 80% de procesos",
        "Ahorro del 40% en tiempo administrativo",
        "Integración con 5 sistemas existentes"
      ],
      slug: "businesspro-erp"
    },
    {
      id: "6",
      title: "Sistema de Gestión",
      description: "Software de escritorio para gestión empresarial y contabilidad.",
      image: "/case-studies/erp.jpg",
      category: "desktop",
      client: "BusinessPro",
      results: [
        "Automatización del 80% de procesos",
        "Ahorro del 40% en tiempo administrativo",
        "Integración con 5 sistemas existentes"
      ],
      slug: "businesspro-erp"
    }
  ]

  return (
    <section id="case-studies" className="w-full py-12 md:py-24 lg:py-32">
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex flex-col items-center justify-center space-y-4 text-center">
          <div className="space-y-2">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
              Casos de Éxito
            </h2>
            <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
              Descubre cómo hemos ayudado a empresas a alcanzar sus objetivos con nuestras soluciones tecnológicas.
            </p>
          </div>
        </div>
        <div className="mx-auto grid max-w-5xl gap-8 py-12 grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
          {caseStudies.map((study) => (
            <Link
              href={`/case-studies/${study.slug}`}
              key={study.id}
              className="group"
            >
              <div className="relative overflow-hidden rounded-lg border bg-background p-2">
                <div className="aspect-video overflow-hidden rounded-md">
                  <img
                    src={study.image}
                    alt={study.title}
                    className="object-cover w-full h-full"
                  />
                </div>
                <div className="p-4 space-y-4">
                  <div className="space-y-2">
                    <div className="flex items-center gap-2">
                      <span className={cn(
                        "text-xs font-medium px-2 py-1 rounded-full",
                        study.category === "web" && "bg-blue-100 text-blue-700",
                        study.category === "mobile" && "bg-green-100 text-green-700",
                        study.category === "desktop" && "bg-purple-100 text-purple-700"
                      )}>
                        {study.category === "web" && "Web"}
                        {study.category === "mobile" && "Móvil"}
                        {study.category === "desktop" && "Desktop"}
                      </span>
                      <span className="text-sm text-muted-foreground">{study.client}</span>
                    </div>
                    <h3 className="text-xl font-bold">{study.title}</h3>
                    <p className="text-sm text-muted-foreground">{study.description}</p>
                  </div>
                  <div className="space-y-2">
                    <h4 className="text-sm font-semibold">Resultados:</h4>
                    <ul className="text-sm space-y-1">
                      {study.results.map((result, index) => (
                        <li key={index} className="flex items-center gap-2">
                          <span className="text-primary">•</span>
                          {result}
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div className="flex items-center gap-2 text-primary font-medium">
                    Ver caso completo
                    <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                  </div>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  )
} 