import Image from "next/image"
import { Button } from "@/components/ui/button"

export function HeroSection() {
    return (
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
    )
} 