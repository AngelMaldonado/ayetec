import { Laptop, Code, PenTool, Calendar } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"

export function ServicesSection() {
    return (
        <section id="services" className="w-full py-12 md:py-24 lg:py-32 bg-muted">
            <div className="container px-4 md:px-6">
                <div className="flex flex-col items-center justify-center space-y-4 text-center">
                    <div className="space-y-2">
                        <h2 className="text-3xl font-bold tracking-tighter md:text-4xl/tight">Servicios</h2>
                        <p className="mx-auto max-w-[700px] text-muted-foreground md:text-xl">
                            Elige el paquete que mejor se adapte a tus necesidades
                        </p>
                    </div>
                </div>
                <div className="mx-auto grid max-w-5xl gap-6 py-12 md:grid-cols-2 lg:grid-cols-4">
                    <ServiceCard
                        icon={<Laptop className="h-6 w-6 text-primary" />}
                        title="Landing Básica"
                        description="Página de aterrizaje simple y efectiva para tu negocio o proyecto."
                        price="$99"
                    />
                    <ServiceCard
                        icon={<Code className="h-6 w-6 text-primary" />}
                        title="Sitio Empresarial"
                        description="Sitio web completo para empresas con múltiples secciones."
                        price="$249"
                    />
                    <ServiceCard
                        icon={<PenTool className="h-6 w-6 text-primary" />}
                        title="Portafolio Personal"
                        description="Portafolio profesional para mostrar tus proyectos y habilidades."
                        price="$149"
                    />
                    <ServiceCard
                        icon={<Calendar className="h-6 w-6 text-primary" />}
                        title="Evento o Campaña"
                        description="Página para promocionar tu evento o campaña de marketing."
                        price="$179"
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
        <Card>
            <CardHeader className="flex flex-col items-center gap-2">
                <div className="flex h-12 w-12 items-center justify-center rounded-full bg-primary/10">
                    {icon}
                </div>
                <CardTitle>{title}</CardTitle>
            </CardHeader>
            <CardContent className="text-center">
                <p className="text-muted-foreground">{description}</p>
                <p className="mt-4 text-2xl font-bold">{price}</p>
            </CardContent>
            <CardFooter className="flex justify-center">
                <Button asChild variant="outline">
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