import { ContactForm } from "@/components/contact-form"

export function ContactSection() {
  return (
    <section id="contact" className="w-full py-12 md:py-24 lg:py-32 bg-muted">
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex flex-col items-center justify-center space-y-4 text-center">
          <div className="space-y-2">
            <h2 className="text-3xl font-bold tracking-tighter md:text-4xl/tight">Contacto</h2>
            <p className="mx-auto max-w-[700px] text-muted-foreground md:text-xl">
              ¿Listo para comenzar? Envíanos tus requerimientos:
            </p>
          </div>
        </div>
        <div className="mx-auto max-w-lg py-12 px-4 sm:px-0">
          <ContactForm />
        </div>
      </div>
    </section>
  )
} 