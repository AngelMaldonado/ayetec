"use client"

import Image from "next/image"
import { Code, Laptop, PenTool, Calendar, Mail, Github, Twitter, Linkedin, Check } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { ContactForm } from "@/components/contact-form"
import { Navigation } from "@/components/navigation"

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col">
      <Navigation />
      <main className="flex-1">
        {/* Hero Section */}
        <section className="w-full py-12 md:py-24 lg:py-32 xl:py-48">
          <div className="container px-4 md:px-6">
            <div className="grid gap-6 lg:grid-cols-[1fr_400px] lg:gap-12 xl:grid-cols-[1fr_600px]">
              <div className="flex flex-col justify-center space-y-4">
                <div className="space-y-2">
                  <h1 className="text-3xl font-bold tracking-tighter sm:text-5xl xl:text-6xl/none">
                    Tu página web lista en 48 horas
                  </h1>
                  <p className="max-w-[600px] text-muted-foreground md:text-xl">
                    Sitios web estáticos, rápidos y modernos para tu negocio o proyecto personal. Diseño personalizado,
                    entrega en tiempo récord, dominio gratis por 1 año y monitoreo continuo.
                  </p>
                </div>
                <div className="flex flex-col gap-2 min-[400px]:flex-row">
                  <Button asChild size="lg" className="px-8">
                    <a
                      href="#templates"
                      onClick={(e) => {
                        e.preventDefault()
                        const element = document.getElementById("templates")
                        if (element) {
                          window.scrollTo({
                            top: element.offsetTop - 80,
                            behavior: "smooth",
                          })
                        }
                      }}
                    >
                      Ver plantillas disponibles
                    </a>
                  </Button>
                </div>
              </div>
              <div className="flex items-center justify-center">
                <div className="relative h-[350px] w-[350px] rounded-full bg-muted p-4">
                  <Image
                    src="/placeholder.svg?height=350&width=350"
                    width={350}
                    height={350}
                    alt="Developer avatar"
                    className="rounded-full object-cover"
                  />
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Services Section */}
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
              <Card>
                <CardHeader className="flex flex-col items-center gap-2">
                  <div className="flex h-12 w-12 items-center justify-center rounded-full bg-primary/10">
                    <Laptop className="h-6 w-6 text-primary" />
                  </div>
                  <CardTitle>Landing Básica</CardTitle>
                </CardHeader>
                <CardContent className="text-center">
                  <p className="text-muted-foreground">
                    Página de aterrizaje simple y efectiva para tu negocio o proyecto.
                  </p>
                  <p className="mt-4 text-2xl font-bold">$99</p>
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
              <Card>
                <CardHeader className="flex flex-col items-center gap-2">
                  <div className="flex h-12 w-12 items-center justify-center rounded-full bg-primary/10">
                    <Code className="h-6 w-6 text-primary" />
                  </div>
                  <CardTitle>Sitio Empresarial</CardTitle>
                </CardHeader>
                <CardContent className="text-center">
                  <p className="text-muted-foreground">Sitio web completo para empresas con múltiples secciones.</p>
                  <p className="mt-4 text-2xl font-bold">$249</p>
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
              <Card>
                <CardHeader className="flex flex-col items-center gap-2">
                  <div className="flex h-12 w-12 items-center justify-center rounded-full bg-primary/10">
                    <PenTool className="h-6 w-6 text-primary" />
                  </div>
                  <CardTitle>Portafolio Personal</CardTitle>
                </CardHeader>
                <CardContent className="text-center">
                  <p className="text-muted-foreground">
                    Portafolio profesional para mostrar tus proyectos y habilidades.
                  </p>
                  <p className="mt-4 text-2xl font-bold">$149</p>
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
              <Card>
                <CardHeader className="flex flex-col items-center gap-2">
                  <div className="flex h-12 w-12 items-center justify-center rounded-full bg-primary/10">
                    <Calendar className="h-6 w-6 text-primary" />
                  </div>
                  <CardTitle>Evento o Campaña</CardTitle>
                </CardHeader>
                <CardContent className="text-center">
                  <p className="text-muted-foreground">Página para promocionar tu evento o campaña de marketing.</p>
                  <p className="mt-4 text-2xl font-bold">$179</p>
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
            </div>
          </div>
        </section>

        {/* Benefits Section */}
        <section className="w-full py-6 md:py-12">
          <div className="container px-4 md:px-6">
            <div className="mx-auto grid max-w-5xl gap-6 md:grid-cols-3">
              <div className="flex flex-col items-center space-y-2 text-center">
                <div className="flex h-12 w-12 items-center justify-center rounded-full bg-primary/10">
                  <Check className="h-6 w-6 text-primary" />
                </div>
                <h3 className="text-lg font-bold">Dominio Gratis</h3>
                <p className="text-sm text-muted-foreground">Incluye dominio gratuito por 1 año con tu proyecto.</p>
              </div>
              <div className="flex flex-col items-center space-y-2 text-center">
                <div className="flex h-12 w-12 items-center justify-center rounded-full bg-primary/10">
                  <Check className="h-6 w-6 text-primary" />
                </div>
                <h3 className="text-lg font-bold">Monitoreo Continuo</h3>
                <p className="text-sm text-muted-foreground">Estaré pendiente del funcionamiento de tu sitio web.</p>
              </div>
              <div className="flex flex-col items-center space-y-2 text-center">
                <div className="flex h-12 w-12 items-center justify-center rounded-full bg-primary/10">
                  <Check className="h-6 w-6 text-primary" />
                </div>
                <h3 className="text-lg font-bold">Entrega Rápida</h3>
                <p className="text-sm text-muted-foreground">Tu sitio web listo en solo 48 horas tras la aprobación.</p>
              </div>
            </div>
          </div>
        </section>

        {/* Templates Gallery */}
        <section id="templates" className="w-full py-12 md:py-24 lg:py-32">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <h2 className="text-3xl font-bold tracking-tighter md:text-4xl/tight">Plantillas Disponibles</h2>
                <p className="mx-auto max-w-[700px] text-muted-foreground md:text-xl">
                  Explora mis diseños y elige el que más te guste
                </p>
              </div>
            </div>
            <div className="mx-auto grid max-w-5xl gap-6 py-12 md:grid-cols-2 lg:grid-cols-3">
              {[1, 2, 3, 4, 5, 6].map((i) => (
                <Card key={i} className="overflow-hidden">
                  <div className="aspect-video w-full overflow-hidden">
                    <Image
                      src={`/placeholder.svg?height=200&width=400&text=Template ${i}`}
                      width={400}
                      height={200}
                      alt={`Template ${i}`}
                      className="object-cover transition-all hover:scale-105"
                    />
                  </div>
                  <CardHeader>
                    <CardTitle>Plantilla {i}</CardTitle>
                    <CardDescription>Diseño moderno y funcional</CardDescription>
                  </CardHeader>
                  <CardFooter>
                    <Button asChild variant="outline" className="w-full">
                      <a href="#" target="_blank" rel="noreferrer">
                        Ver demo
                      </a>
                    </Button>
                  </CardFooter>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Contact Form Section */}
        <section id="contact" className="w-full py-12 md:py-24 lg:py-32 bg-muted">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <h2 className="text-3xl font-bold tracking-tighter md:text-4xl/tight">Contacto</h2>
                <p className="mx-auto max-w-[700px] text-muted-foreground md:text-xl">
                  ¿Listo para comenzar? Envíame tus requerimientos
                </p>
              </div>
            </div>
            <div className="mx-auto max-w-lg py-12">
              <ContactForm />
            </div>
          </div>
        </section>

        {/* How I Work Section */}
        <section id="process" className="w-full py-12 md:py-24 lg:py-32">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <h2 className="text-3xl font-bold tracking-tighter md:text-4xl/tight">Cómo Trabajo</h2>
                <p className="mx-auto max-w-[700px] text-muted-foreground md:text-xl">
                  Un proceso simple y eficiente para tener tu sitio web listo en tiempo récord
                </p>
              </div>
            </div>
            <div className="mx-auto grid max-w-5xl gap-6 py-12 md:grid-cols-2 lg:grid-cols-4">
              <div className="flex flex-col items-center space-y-4 text-center">
                <div className="flex h-16 w-16 items-center justify-center rounded-full bg-primary text-white">
                  <span className="text-xl font-bold">1</span>
                </div>
                <h3 className="text-xl font-bold">Elige tu plantilla o describe tu idea</h3>
                <p className="text-muted-foreground">
                  Selecciona una de las plantillas disponibles o cuéntame tu idea para un diseño personalizado.
                </p>
              </div>
              <div className="flex flex-col items-center space-y-4 text-center">
                <div className="flex h-16 w-16 items-center justify-center rounded-full bg-primary text-white">
                  <span className="text-xl font-bold">2</span>
                </div>
                <h3 className="text-xl font-bold">Recibe propuesta y mockup</h3>
                <p className="text-muted-foreground">
                  Te enviaré una propuesta detallada y un mockup para que valides el diseño antes de proceder.
                </p>
              </div>
              <div className="flex flex-col items-center space-y-4 text-center">
                <div className="flex h-16 w-16 items-center justify-center rounded-full bg-primary text-white">
                  <span className="text-xl font-bold">3</span>
                </div>
                <h3 className="text-xl font-bold">Realiza el pago</h3>
                <p className="text-muted-foreground">
                  Una vez aprobado el diseño, procesa tu pago de forma segura a través de nuestra plataforma.
                </p>
              </div>
              <div className="flex flex-col items-center space-y-4 text-center">
                <div className="flex h-16 w-16 items-center justify-center rounded-full bg-primary text-white">
                  <span className="text-xl font-bold">4</span>
                </div>
                <h3 className="text-xl font-bold">En 2 días, tu sitio estará en línea</h3>
                <p className="text-muted-foreground">
                  Recibirás tu sitio web completamente funcional con dominio gratis por 1 año y monitoreo continuo.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Testimonials Section */}
        <section id="testimonials" className="w-full py-12 md:py-24 lg:py-32 bg-muted">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <h2 className="text-3xl font-bold tracking-tighter md:text-4xl/tight">Testimonios</h2>
                <p className="mx-auto max-w-[700px] text-muted-foreground md:text-xl">Lo que dicen mis clientes</p>
              </div>
            </div>
            <div className="mx-auto grid max-w-5xl gap-6 py-12 md:grid-cols-3">
              <Card>
                <CardHeader>
                  <div className="flex items-center gap-4">
                    <div className="h-12 w-12 rounded-full bg-primary/10 flex items-center justify-center">
                      <span className="text-lg font-bold text-primary">M</span>
                    </div>
                    <div>
                      <CardTitle>María García</CardTitle>
                      <CardDescription>Emprendedora</CardDescription>
                    </div>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">
                    &ldquo;Increíble servicio. Mi landing page quedó perfecta y en tiempo récord. Totalmente recomendado.&rdquo;
                  </p>
                </CardContent>
              </Card>
              <Card>
                <CardHeader>
                  <div className="flex items-center gap-4">
                    <div className="h-12 w-12 rounded-full bg-primary/10 flex items-center justify-center">
                      <span className="text-lg font-bold text-primary">J</span>
                    </div>
                    <div>
                      <CardTitle>Juan Pérez</CardTitle>
                      <CardDescription>Fotógrafo</CardDescription>
                    </div>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">
                    &ldquo;Mi portafolio quedó espectacular. El proceso fue muy sencillo y el resultado superó mis
                    expectativas.&rdquo;
                  </p>
                </CardContent>
              </Card>
              <Card>
                <CardHeader>
                  <div className="flex items-center gap-4">
                    <div className="h-12 w-12 rounded-full bg-primary/10 flex items-center justify-center">
                      <span className="text-lg font-bold text-primary">L</span>
                    </div>
                    <div>
                      <CardTitle>Laura Martínez</CardTitle>
                      <CardDescription>Consultora</CardDescription>
                    </div>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">
                    &ldquo;Profesionalismo y rapidez. Mi sitio web empresarial quedó exactamente como lo imaginaba.&rdquo;
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>
      </main>
      <footer className="w-full border-t py-6 md:py-0">
        <div className="container flex flex-col items-center justify-between gap-4 md:h-24 md:flex-row">
          <div className="flex items-center gap-2">
            <Code className="h-6 w-6" />
            <span className="text-lg font-bold">WebDev</span>
          </div>
          <div className="flex items-center gap-4">
            <a href="#" className="text-muted-foreground hover:text-foreground">
              <Twitter className="h-5 w-5" />
              <span className="sr-only">Twitter</span>
            </a>
            <a href="#" className="text-muted-foreground hover:text-foreground">
              <Github className="h-5 w-5" />
              <span className="sr-only">GitHub</span>
            </a>
            <a href="#" className="text-muted-foreground hover:text-foreground">
              <Linkedin className="h-5 w-5" />
              <span className="sr-only">LinkedIn</span>
            </a>
            <a href="mailto:contacto@webdev.com" className="text-muted-foreground hover:text-foreground">
              <Mail className="h-5 w-5" />
              <span className="sr-only">Email</span>
            </a>
          </div>
          <p className="text-sm text-muted-foreground">
            &copy; {new Date().getFullYear()} WebDev. Todos los derechos reservados.
          </p>
        </div>
      </footer>
    </div>
  )
}

