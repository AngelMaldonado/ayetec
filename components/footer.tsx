import { Code, Twitter, Github, Linkedin, Mail } from "lucide-react"

export function Footer() {
    return (
        <footer className="w-full border-t py-6 md:py-0">
            <div className="container flex flex-col items-center justify-between gap-4 md:h-24 md:flex-row">
                <div className="flex items-center gap-2">
                    <Code className="h-6 w-6" />
                    <span className="text-lg font-bold">WebDev</span>
                </div>
                <div className="flex items-center gap-4">
                    <SocialLink href="#" icon={<Twitter className="h-5 w-5" />} label="Twitter" />
                    <SocialLink href="#" icon={<Github className="h-5 w-5" />} label="GitHub" />
                    <SocialLink href="#" icon={<Linkedin className="h-5 w-5" />} label="LinkedIn" />
                    <SocialLink href="mailto:contacto@webdev.com" icon={<Mail className="h-5 w-5" />} label="Email" />
                </div>
                <p className="text-sm text-muted-foreground">
                    &copy; {new Date().getFullYear()} WebDev. Todos los derechos reservados.
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

function SocialLink({ href, icon, label }: SocialLinkProps) {
    return (
        <a href={href} className="text-muted-foreground hover:text-foreground">
            {icon}
            <span className="sr-only">{label}</span>
        </a>
    )
} 