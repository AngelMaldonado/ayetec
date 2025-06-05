export function ProcessSection() {
  return (
    <section id="process" className="w-full py-12 md:py-24 lg:py-32">
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex flex-col items-center justify-center space-y-4 text-center">
          <div className="space-y-2">
            <h2 className="text-3xl font-bold tracking-tighter md:text-4xl/tight">Cómo trabajamos</h2>
            <p className="mx-auto max-w-[700px] text-muted-foreground md:text-xl">
              Un proceso simple y eficiente para tener tu sitio web listo en tiempo récord
            </p>
          </div>
        </div>
        <div className="mx-auto grid max-w-5xl gap-6 py-12 grid-cols-1 sm:grid-cols-2 lg:grid-cols-4">
          <ProcessStep
            number={1}
            title="Elige tu diseño o describe tu idea"
            description="Selecciona uno de los diseños disponibles o cuéntanos tu idea para un diseño personalizado."
          />
          <ProcessStep
            number={2}
            title="Recibe propuesta y mockup"
            description="Te enviaremos una propuesta detallada y un mockup para que valides el diseño antes de proceder."
          />
          <ProcessStep
            number={3}
            title="Realiza el pago"
            description="Una vez aprobado el diseño, procesaremos tu pago de forma segura a través de nuestra plataforma."
          />
          <ProcessStep
            number={4}
            title="Entre 5 y 10 días, tu sitio estará en línea"
            description="Recibirás tu sitio web completamente funcional con dominio gratis por 1 año y monitoreo continuo."
          />
        </div>
      </div>
    </section>
  )
}

interface ProcessStepProps {
  number: number
  title: string
  description: string
}

function ProcessStep({ number, title, description }: ProcessStepProps) {
  return (
    <div className="flex flex-col items-center space-y-4 text-center p-4">
      <div className="flex h-16 w-16 items-center justify-center rounded-full bg-primary text-white dark:bg-primary/5">
        <span className="text-xl font-bold">{number}</span>
      </div>
      <h3 className="text-xl font-bold">{title}</h3>
      <p className="text-muted-foreground">{description}</p>
    </div>
  )
} 