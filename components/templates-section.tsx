import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"

export function TemplatesSection() {
    return (
        <section id="templates" className="w-full py-12 md:py-24 lg:py-32">
            <div className="container px-4 md:px-6">
                <div className="flex flex-col items-center justify-center space-y-4 text-center">
                    <div className="space-y-2">
                        <h2 className="text-3xl font-bold tracking-tighter md:text-4xl/tight">Plantillas Disponibles</h2>
                        <p className="mx-auto max-w-[700px] text-muted-foreground md:text-xl">
                            Explora mis diseños y elige el que más te guste
                        </p>
                    </div>
                </div>
                <div className="mx-auto grid max-w-5xl gap-6 py-12 md:grid-cols-2 lg:grid-cols-3">
                    {[1, 2, 3, 4, 5, 6].map((i) => (
                        <TemplateCard key={i} index={i} />
                    ))}
                </div>
            </div>
        </section>
    )
}

interface TemplateCardProps {
    index: number
}

function TemplateCard({ index }: TemplateCardProps) {
    return (
        <Card className="overflow-hidden">
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
                <CardTitle>Plantilla {index}</CardTitle>
                <CardDescription>Diseño moderno y funcional</CardDescription>
            </CardHeader>
            <CardFooter>
                <Button asChild variant="outline" className="w-full">
                    <a href="#" target="_blank" rel="noreferrer">
                        Ver demo
                    </a>
                </Button>
            </CardFooter>
        </Card>
    )
} 