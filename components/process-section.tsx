export function ProcessSection() {
    return (
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
                    <ProcessStep
                        number={1}
                        title="Elige tu plantilla o describe tu idea"
                        description="Selecciona una de las plantillas disponibles o cuéntame tu idea para un diseño personalizado."
                    />
                    <ProcessStep
                        number={2}
                        title="Recibe propuesta y mockup"
                        description="Te enviaré una propuesta detallada y un mockup para que valides el diseño antes de proceder."
                    />
                    <ProcessStep
                        number={3}
                        title="Realiza el pago"
                        description="Una vez aprobado el diseño, procesa tu pago de forma segura a través de nuestra plataforma."
                    />
                    <ProcessStep
                        number={4}
                        title="En 2 días, tu sitio estará en línea"
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
        <div className="flex flex-col items-center space-y-4 text-center">
            <div className="flex h-16 w-16 items-center justify-center rounded-full bg-primary text-white">
                <span className="text-xl font-bold">{number}</span>
            </div>
            <h3 className="text-xl font-bold">{title}</h3>
            <p className="text-muted-foreground">{description}</p>
        </div>
    )
} 