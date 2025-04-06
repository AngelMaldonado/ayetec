import { Github, Linkedin, Mail, Phone, Rocket } from "lucide-react"
import Link from "next/link"

export function Footer() {
  return (
    <footer className="w-full border-t py-6 md:py-0">
      <div className="container mx-auto flex flex-col items-center justify-between gap-4 md:h-24 md:flex-row">
        <div className="flex items-center gap-2">
          <Rocket className="h-6 w-6" />
          <span className="text-lg font-bold">AyE</span>
        </div>
        <div className="flex items-center gap-4">
          <SocialLink href="https://github.com/AngelMaldonado" icon={<Github className="h-5 w-5" />} label="GitHub" />
          <SocialLink href="https://www.linkedin.com/in/angelmaldonadojz/" icon={<Linkedin className="h-5 w-5" />} label="LinkedIn" />
          <SocialLink href="mailto:amaldonadojuarez@gmail.com" icon={<Mail className="h-5 w-5" />} label="Email" />
          <SocialLink href="https://api.whatsapp.com/send?phone=5214181107571&text=Hola%2C%20quisiera%20pedir%20informes%20sobre%20la%20creaci%C3%B3n%20de%20una%20p%C3%A1gina%20web%20%F0%9F%98%81" icon={<Phone className="h-5 w-5" />} label="WhatsApp" />
        </div>
        <p className="text-sm text-muted-foreground text-center md:text-left">
          {new Date().getFullYear()}
        </p>
      </div>
    </footer>
  )
}

interface SocialLinkProps {
  href: string
  icon: React.ReactNode
  label: string
}

export function SocialLink({ href, icon, label }: SocialLinkProps) {
  return (
    <Link href={href} target="_blank" className="text-muted-foreground hover:text-foreground">
      {icon}
      <span className="sr-only">{label}</span>
    </Link>
  )
} 