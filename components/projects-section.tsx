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

export function ProjectsSection() {
  const caseStudies: CaseStudy[] = [
    {
      id: "1",
      title: "ATodaVenta",
      description: "Aplicación móvil para gestión de ventas con inteligencia artificial",
      image: "/projects/atodaventa.jpg",
      category: "mobile",
      client: "Software as a Service",
      results: [
        "Ayuda a los vendedores a tomar decisiones",
        "Mejora la eficiencia de las ventas",
        "Chat con IA experta en los negocios de los clientes"
      ],
      slug: "atodaventa"
    },
    {
      id: "2",
      title: "Mugs and Designs",
      description: "E-commerce para la venta de productos de diseños personalizados",
      image: "/projects/mugsanddesigns.jpg",
      category: "web",
      client: "Mugs and Designs",
      results: [
        "Nuevo canal de ventas para la empresa",
        "Pagos integrados con Stripe",
        "Panel de administración para el manejo de productos y ventas"
      ],
      slug: "mugsanddesigns"
    },
    {
      id: "3",
      title: "SMFotomark",
      description: "Página web para la muestra de productos y servicios de la empresa",
      image: "/projects/smfotomark.jpg",
      category: "web",
      client: "SMFotomark",
      results: [
        "Muestra de productos y servicios de la empresa",
        "Múltiples páginas y CMS para el manejo de contenido",
        "Galería de fotos"
      ],
      slug: "smfotomark"
    },
  ]

  return (
    <section id="projects" className="w-full py-12 md:py-24 lg:py-32">
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex flex-col items-center justify-center space-y-4 text-center">
          <div className="space-y-2">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
              Nuestros Proyectos
            </h2>
            <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
              Estos son algunos de los proyectos que hemos realizado.
            </p>
          </div>
        </div>
        <div className="mx-auto grid max-w-5xl gap-8 py-12 grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
          {caseStudies.map((project) => (
            <Link
              href={`/projects/${project.slug}`}
              key={project.id}
              className="group"
            >
              <div className="relative overflow-hidden rounded-lg border bg-background p-2">
                <div className="aspect-video overflow-hidden rounded-md">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="object-cover w-full h-full"
                  />
                </div>
                <div className="p-4 space-y-4">
                  <div className="space-y-2">
                    <div className="flex items-center gap-2">
                      <span className={cn(
                        "text-xs font-medium px-2 py-1 rounded-full",
                        project.category === "web" && "bg-blue-100 text-blue-700",
                        project.category === "mobile" && "bg-green-100 text-green-700",
                        project.category === "desktop" && "bg-purple-100 text-purple-700"
                      )}>
                        {project.category === "web" && "Web"}
                        {project.category === "mobile" && "Móvil"}
                        {project.category === "desktop" && "Desktop"}
                      </span>
                      <span className="text-sm text-muted-foreground">{project.client}</span>
                    </div>
                    <h3 className="text-xl font-bold">{project.title}</h3>
                    <p className="text-sm text-muted-foreground">{project.description}</p>
                  </div>
                  <div className="space-y-2">
                    <ul className="text-sm space-y-1">
                      {project.results.map((result, index) => (
                        <li key={index.toString()} className="flex items-center gap-2">
                          <span className="text-primary">•</span>
                          {result}
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div className="flex items-center gap-2 text-primary font-medium">
                    Ver más
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