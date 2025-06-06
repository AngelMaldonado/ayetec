import { Button } from "@/components/ui/button"
import ParticlesBackground from "@/components/ui/particles"
import ModelViewer from "./model-viewer"
export function HeroSection() {

  return (
    <section className="w-full py-12 md:py-24 lg:py-32 xl:py-48 relative overflow-hidden text-center lg:text-start">
      <ParticlesBackground />
      <div className="container h-full mx-auto px-4 md:px-6 relative z-10">
        <div className="grid gap-6 lg:grid-cols-[1fr_400px] lg:gap-12 xl:grid-cols-[1fr_500px]">
          <div className="flex flex-col justify-center space-y-4">
            <div className="space-y-2">
              <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl xl:text-6xl/none">
                Tu <span className="text-rose-500">visión</span>, nuestra <span className="text-rose-500">misión</span>
              </h1>
              <p className="max-w-[600px] text-muted-foreground text-base sm:text-lg md:text-xl">
                Soluciones de software hechas a medida para tu negocio o proyecto personal.
              </p>
            </div>
            <div className="flex flex-col gap-2 min-[400px]:flex-row">
              <Button asChild size="lg" className="px-8 w-full lg:min-[400px]:w-auto">
                <a
                  href="#projects"
                  onClick={(e) => {
                    e.preventDefault()
                    const element = document.getElementById("projects")
                    if (element) {
                      window.scrollTo({
                        top: element.offsetTop - 80,
                        behavior: "smooth",
                      })
                    }
                  }}
                >
                  Ver Proyectos
                </a>
              </Button>
            </div>
          </div>
          <div className="flex items-center justify-center order-first lg:order-last">
            <div className="relative h-[250px] w-[250px] sm:h-[300px] sm:w-[300px] md:h-[350px] md:w-[350px] p-4">
              <div className="absolute w-3/4 h-3/4 left-1/2 bottom-0 -translate-x-1/2 rounded-full bg-primary/50 border-white border-5">
              </div>
              <ModelViewer />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
} 