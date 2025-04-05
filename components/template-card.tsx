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
import Image from "next/image"
import { useState } from "react"

interface TemplateCardProps {
  index: number
  title?: string
  description?: string
  features?: string[]
}

export function TemplateCard({
  index,
  title = `Plantilla ${index}`,
  description = "Diseño moderno y funcional",
  features = [
    "Diseño responsive",
    "Optimizado para SEO",
    "Integración con redes sociales",
    "Panel de administración",
    "Soporte multilingüe"
  ]
}: TemplateCardProps) {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <Card className="overflow-hidden h-full flex flex-col">
      <div className="aspect-video w-full overflow-hidden">
        <Image
          src={`/placeholder.svg?height=200&width=400&text=Template ${index}`}
          width={400}
          height={200}
          alt={`Template ${index}`}
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
                      <li key={i} className="flex items-center space-x-2">
                        <svg
                          className="h-5 w-5 text-primary"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                        >
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
                  <h3 className="text-lg font-semibold">Vista previa</h3>
                  <div className="h-full lg:aspect-video w-full overflow-hidden rounded-lg border">
                    <iframe
                      src={`/templates/${index}`}
                      className="w-full h-full border-0"
                      title={`Preview of ${title}`}
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