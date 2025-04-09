import { Button } from "@/components/ui/button"
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Box, Building, Calendar, Laptop, PenTool } from "lucide-react"

export function ServicesSection() {
  return (
    <section id="services" className="w-full py-12 md:py-24 lg:py-32 bg-muted">
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex flex-col items-center justify-center space-y-4 text-center">
          <div className="space-y-2">
            <h2 className="text-3xl font-bold tracking-tighter md:text-4xl/tight">
              <Box className="inline-block h-10 w-10 mr-2" />
              Paquetes
            </h2>
            <p className="mx-auto max-w-[700px] text-muted-foreground md:text-xl">
              Elige el paquete que mejor se adapte a tus necesidades
            </p>
          </div>
        </div>
        <div className="mx-auto grid max-w-5xl gap-6 py-12 grid-cols-1 sm:grid-cols-2 lg:grid-cols-4">
          <ServiceCard
            icon={<PenTool className="h-6 w-6 text-primary" />}
            title="Portafolio Personal"
            description="Portafolio profesional para mostrar tus proyectos y habilidades."
            price="900.00"
          />
          <ServiceCard
            icon={<Calendar className="h-6 w-6 text-primary" />}
            title="Evento o Campaña"
            description="Página para promocionar tu evento o campaña de marketing."
            price="1,500.00"
          />
          <ServiceCard
            icon={<Laptop className="h-6 w-6 text-primary" />}
            title="Landing Básica"
            description="Página de aterrizaje simple y efectiva para tu negocio o proyecto."
            price="2,500.00"
          />
          <ServiceCard
            icon={<Building className="h-6 w-6 text-primary" />}
            title="Sitio Empresarial"
            description="Sitio web completo para empresas con múltiples secciones."
            price="3,500.00"
          />
        </div>
      </div>
    </section>
  )
}

interface ServiceCardProps {
  icon: React.ReactNode
  title: string
  description: string
  price: string
}

function ServiceCard({ icon, title, description, price }: ServiceCardProps) {
  return (
    <Card className="h-full flex flex-col">
      <CardHeader className="flex flex-col items-center gap-2">
        <div className="flex h-12 w-12 items-center justify-center rounded-full bg-primary/15">
          {icon}
        </div>
        <CardTitle>{title}</CardTitle>
      </CardHeader>
      <CardContent className="text-center flex-grow">
        <p className="text-muted-foreground">{description}</p>
        <p className="mt-4 text-2xl font-bold">{price}</p>
        <p className="text-muted-foreground">MXN</p>
      </CardContent>
      <CardFooter className="flex justify-center">
        <Button asChild variant="outline" className="w-full">
          <a
            href="#contact"
            onClick={(e) => {
              e.preventDefault()
              const element = document.getElementById("contact")
              if (element) {
                window.scrollTo({
                  top: element.offsetTop - 80,
                  behavior: "smooth",
                })
              }
            }}
          >
            Seleccionar
          </a>
        </Button>
      </CardFooter>
    </Card>
  )
} 