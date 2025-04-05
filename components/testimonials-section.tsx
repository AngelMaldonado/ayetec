import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"

export function TestimonialsSection() {
  return (
    <section id="testimonials" className="w-full py-12 md:py-24 lg:py-32 bg-muted">
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex flex-col items-center justify-center space-y-4 text-center">
          <div className="space-y-2">
            <h2 className="text-3xl font-bold tracking-tighter md:text-4xl/tight">Testimonios</h2>
            <p className="mx-auto max-w-[700px] text-muted-foreground md:text-xl">Lo que dicen nuestros clientes</p>
          </div>
        </div>
        <div className="mx-auto grid max-w-5xl gap-6 py-12 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
          <TestimonialCard
            initial="M"
            name="María García"
            role="Emprendedora"
            quote="Increíble servicio. Mi landing page quedó perfecta y en tiempo récord. Totalmente recomendado."
          />
          <TestimonialCard
            initial="J"
            name="Juan Pérez"
            role="Fotógrafo"
            quote="Mi portafolio quedó espectacular. El proceso fue muy sencillo y el resultado superó mis expectativas."
          />
          <TestimonialCard
            initial="L"
            name="Laura Martínez"
            role="Consultora"
            quote="Profesionalismo y rapidez. Mi sitio web empresarial quedó exactamente como lo imaginaba."
          />
        </div>
      </div>
    </section>
  )
}

interface TestimonialCardProps {
  initial: string
  name: string
  role: string
  quote: string
}

function TestimonialCard({ initial, name, role, quote }: TestimonialCardProps) {
  return (
    <Card className="h-full">
      <CardHeader>
        <div className="flex items-center gap-4">
          <div className="h-12 w-12 rounded-full bg-primary/10 flex items-center justify-center">
            <span className="text-lg font-bold text-primary">{initial}</span>
          </div>
          <div>
            <CardTitle>{name}</CardTitle>
            <CardDescription>{role}</CardDescription>
          </div>
        </div>
      </CardHeader>
      <CardContent>
        <p className="text-muted-foreground">
          &ldquo;{quote}&rdquo;
        </p>
      </CardContent>
    </Card>
  )
} 