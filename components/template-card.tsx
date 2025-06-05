import { Button } from "@/components/ui/button"
import {
  Card,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle
} from "@/components/ui/card"
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"
import { ExternalLink, Fullscreen } from "lucide-react"
import { useState } from "react"
import Image from "next/image"

interface TemplateCardProps {
  template: Template
}

export function TemplateCard({ template }: TemplateCardProps) {
  const { title, description, features, name } = template
  const [isOpen, setIsOpen] = useState(false)

  return (
    <Card className="overflow-hidden h-full flex flex-col pt-0">
      <div className="aspect-video w-full overflow-hidden">
        <Image
          src={`/templates/${name}/screenshot.png`}
          width={400}
          height={200}
          alt={`Template ${name}`}
          className="object-cover transition-all hover:scale-105"
        />
      </div>
      <CardHeader>
        <CardTitle>{title}</CardTitle>
        <CardDescription>{description}</CardDescription>
      </CardHeader>
      <CardFooter className="mt-auto">
        <Dialog open={isOpen} onOpenChange={setIsOpen}>
          <DialogTrigger asChild>
            <Button variant="outline" className="w-full">
              Ver demo
            </Button>
          </DialogTrigger>
          <DialogContent className="min-w-[90vw] max-w-[90vw] h-[90vh] flex flex-col">
            <DialogHeader>
              <DialogTitle>{title}</DialogTitle>
              <DialogDescription>{description}</DialogDescription>
            </DialogHeader>
            <div className="flex-1 w-full h-full relative">
              <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 w-full h-full">
                <div className="hidden lg:block space-y-4">
                  <h3 className="text-lg font-semibold">Características principales</h3>
                  <ul className="space-y-2">
                    {features.map((feature, i) => (
                      <li key={i.toString()} className="flex items-center space-x-2">
                        <svg
                          className="h-5 w-5 text-primary"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                          aria-hidden="true"
                        >
                          <title>Checkmark</title>
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M5 13l4 4L19 7"
                          />
                        </svg>
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                <div className="space-y-4 w-full h-full flex flex-col justify-center items-center lg:col-span-2">
                  <div className="flex items-center justify-between w-full">
                    <h3 className="text-lg font-semibold">Vista previa</h3>
                    <Button
                      variant="outline"
                      size="sm"
                      onClick={() => {
                        const iframe = document.querySelector(`iframe[title="Preview of ${title}"]`) as HTMLIFrameElement;
                        if (iframe) {
                          if (iframe.requestFullscreen) {
                            iframe.requestFullscreen();
                          } else if ('webkitRequestFullscreen' in iframe) {
                            (iframe as unknown as { webkitRequestFullscreen: () => Promise<void> }).webkitRequestFullscreen();
                          } else if ('msRequestFullscreen' in iframe) {
                            (iframe as unknown as { msRequestFullscreen: () => Promise<void> }).msRequestFullscreen();
                          }
                        }
                      }}
                      className="flex items-center gap-2"
                    >
                      <Fullscreen className="h-4 w-4" />
                      Pantalla completa
                    </Button>
                    {/* button to open template in new tab */}
                    <Button variant="outline" size="sm" onClick={() => {
                      window.open(`/templates/${name}/index.html`, "_blank");
                    }}>
                      <ExternalLink className="h-4 w-4" />
                      Abrir en nueva pestaña
                    </Button>
                  </div>
                  <div className="h-full lg:aspect-video w-full overflow-hidden rounded-lg border relative group">
                    <iframe
                      src={`/templates/${name}/index.html`}
                      className="w-full h-full border-0"
                      title={`Vista previa de ${title}`}
                    />
                  </div>
                </div>
              </div>
            </div>
          </DialogContent>
        </Dialog>
      </CardFooter>
    </Card>
  )
} 