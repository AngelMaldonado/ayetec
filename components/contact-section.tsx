import { ContactForm } from "@/components/contact-form"
import { Phone } from "lucide-react"
import Link from "next/link"
import { Button } from "./ui/button"

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
        <div className="flex flex-col items-center justify-center space-y-4 text-center">
          <p className="mx-auto max-w-[700px] text-muted-foreground md:text-xl">
            O también puedes enviar un mensaje a través de WhatsApp:
          </p>
          <div className="flex flex-row items-center justify-center space-x-4">
            <Button asChild>
              <Link href="https://api.whatsapp.com/send?phone=5214181107571&text=Hola%2C%20quisiera%20pedir%20informes%20sobre%20la%20creaci%C3%B3n%20de%20una%20p%C3%A1gina%20web%20%F0%9F%98%81">
                <Phone className="h-5 w-5" />
                Abrir WhatsApp
              </Link>
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
} 