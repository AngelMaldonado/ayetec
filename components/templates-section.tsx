import { TemplateCard } from "@/components/template-card"
import { useAppContext } from "@/providers/app-provider"

export function TemplatesSection() {
  const { templates } = useAppContext()

  return (
    <section id="templates" className="w-full py-12 md:py-24 lg:py-32">
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex flex-col items-center justify-center space-y-4 text-center">
          <div className="space-y-2">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
              Plantillas Disponibles
            </h2>
            <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
              Elige entre nuestras plantillas profesionales o solicita un diseño personalizado para tu negocio.
            </p>
          </div>
        </div>
        <div className="mx-auto grid max-w-5xl gap-6 py-12 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
          {templates.map((template, index) => (
            <TemplateCard key={index} template={template} />
          ))}
        </div>
      </div>
    </section>
  )
} 