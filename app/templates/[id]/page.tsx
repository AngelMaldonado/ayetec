import { notFound } from "next/navigation"
import "./styles.css"

// This would typically come from a database or CMS
const templates = {
  1: {
    title: "E-commerce Template",
    description: "Perfect for online stores",
    html: `
            <div class="min-h-screen bg-white">
                <header class="bg-primary text-white p-4">
                    <nav class="container mx-auto flex justify-between items-center">
                        <h1 class="text-2xl font-bold">Mi Tienda</h1>
                        <div class="space-x-4">
                            <a href="#" class="hover:text-primary-foreground">Inicio</a>
                            <a href="#" class="hover:text-primary-foreground">Productos</a>
                            <a href="#" class="hover:text-primary-foreground">Contacto</a>
                        </div>
                    </nav>
                </header>
                <main class="container mx-auto p-4">
                    <section class="grid grid-cols-1 md:grid-cols-3 gap-6">
                        ${[1, 2, 3].map(i => `
                            <div class="border rounded-lg p-4">
                                <div class="aspect-video bg-muted mb-4"></div>
                                <h3 class="font-semibold">Producto ${i}</h3>
                                <p class="text-muted-foreground">$99.99</p>
                                <button class="mt-2 w-full bg-primary text-white p-2 rounded">
                                    Agregar al carrito
                                </button>
                            </div>
                        `).join('')}
                    </section>
                </main>
            </div>
        `
  },
  2: {
    title: "Portfolio Template",
    description: "Showcase your work",
    html: `
            <div class="min-h-screen bg-white">
                <header class="bg-background border-b p-4">
                    <nav class="container mx-auto flex justify-between items-center">
                        <h1 class="text-2xl font-bold">Mi Portfolio</h1>
                        <div class="space-x-4">
                            <a href="#" class="hover:text-primary">Proyectos</a>
                            <a href="#" class="hover:text-primary">Sobre mí</a>
                            <a href="#" class="hover:text-primary">Contacto</a>
                        </div>
                    </nav>
                </header>
                <main class="container mx-auto p-4">
                    <section class="grid grid-cols-1 md:grid-cols-2 gap-6">
                        ${[1, 2, 3, 4].map(i => `
                            <div class="border rounded-lg overflow-hidden">
                                <div class="aspect-video bg-muted"></div>
                                <div class="p-4">
                                    <h3 class="font-semibold">Proyecto ${i}</h3>
                                    <p class="text-muted-foreground">Descripción del proyecto</p>
                                </div>
                            </div>
                        `).join('')}
                    </section>
                </main>
            </div>
        `
  },
  // Add more templates as needed
} as const

// Use the correct type for Next.js 15 page props
export default async function TemplatePreview({
  params
}: {
  params: Promise<{ id: string }>
}) {
  // In Next.js 15, params is a Promise, but we can access it directly
  // The framework handles the Promise resolution for us
  const { id } = await params
  console.log(id)

  const template = templates[parseInt(id) as keyof typeof templates]

  if (!template) {
    notFound()
  }

  return (
    <div
      dangerouslySetInnerHTML={{ __html: template.html }}
      className="template-preview"
    />
  )
} 