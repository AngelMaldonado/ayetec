"use client"

import { useState, useMemo } from "react"
import { TemplateCard } from "@/components/template-card"
import { Button } from "@/components/ui/button"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { ChevronDown, Grid3X3, LayoutGrid, Eye } from "lucide-react"
import { useAppContext } from "@/providers/app-provider"
import Link from "next/link"

type ViewMode = "grid" | "compact" | "list"

export function TemplatesGallery() {
  const { templates } = useAppContext()
  const [selectedCategory, setSelectedCategory] = useState<string>("Todas")
  const [viewMode, setViewMode] = useState<ViewMode>("grid")

  // Get unique categories
  const categories = useMemo(() => {
    const cats = Array.from(new Set(templates.map(template => template.category)))
    return ["Todas", ...cats.sort()]
  }, [templates])

  // Filter templates by category
  const filteredTemplates = useMemo(() => {
    if (selectedCategory === "Todas") {
      return templates
    }
    return templates.filter(template => template.category === selectedCategory)
  }, [templates, selectedCategory])

  const getGridClasses = () => {
    switch (viewMode) {
      case "compact":
        return "grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4"
      case "list":
        return "grid-cols-1 gap-6"
      default: // grid
        return "grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6"
    }
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-background to-muted/50">
      <div className="container mx-auto px-4 py-8">
        {/* Header */}
        <div className="text-center mb-8">
          <h1 className="text-4xl font-bold tracking-tight mb-4">
            Galería de Diseños Web
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Explora nuestra colección completa de diseños web profesionales. 
            Cada plantilla está cuidadosamente diseñada para diferentes tipos de negocios.
          </p>
        </div>

        {/* Controls */}
        <div className="flex flex-col sm:flex-row gap-4 mb-8 items-start sm:items-center justify-between">
          <div className="flex items-center gap-4">
            {/* Category Filter */}
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button variant="outline" className="w-48 justify-between">
                  {selectedCategory}
                  <ChevronDown className="h-4 w-4" />
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent align="start" className="w-48">
                {categories.map((category) => (
                  <DropdownMenuItem
                    key={category}
                    onClick={() => setSelectedCategory(category)}
                    className={selectedCategory === category ? "bg-accent" : ""}
                  >
                    {category}
                  </DropdownMenuItem>
                ))}
              </DropdownMenuContent>
            </DropdownMenu>

            {/* Results count */}
            <span className="text-sm text-muted-foreground">
              {filteredTemplates.length} diseño{filteredTemplates.length !== 1 ? "s" : ""}
            </span>
          </div>

          {/* View Mode Controls */}
          <div className="flex items-center gap-2">
            <Button
              variant={viewMode === "grid" ? "default" : "outline"}
              size="sm"
              onClick={() => setViewMode("grid")}
              className="h-9 w-9 p-0"
            >
              <LayoutGrid className="h-4 w-4" />
            </Button>
            <Button
              variant={viewMode === "compact" ? "default" : "outline"}
              size="sm"
              onClick={() => setViewMode("compact")}
              className="h-9 w-9 p-0"
            >
              <Grid3X3 className="h-4 w-4" />
            </Button>
            <Button
              variant={viewMode === "list" ? "default" : "outline"}
              size="sm"
              onClick={() => setViewMode("list")}
              className="h-9 w-9 p-0"
            >
              <Eye className="h-4 w-4" />
            </Button>
          </div>
        </div>

        {/* Templates Grid */}
        {filteredTemplates.length > 0 ? (
          <div className={`grid ${getGridClasses()}`}>
            {filteredTemplates.map((template, index) => (
              <div
                key={index}
                className={`
                  ${viewMode === "list" ? "flex gap-6 p-6 rounded-lg border bg-card" : ""}
                  transition-all duration-200 hover:scale-[1.02]
                `}
              >
                {viewMode === "list" ? (
                  <>
                    <div className="flex-shrink-0 w-80">
                      <TemplateCard template={template} />
                    </div>
                    <div className="flex-1 space-y-4">
                      <div>
                        <h3 className="text-2xl font-bold">{template.title}</h3>
                        <p className="text-muted-foreground mt-2">{template.description}</p>
                        <span className="inline-block mt-2 px-3 py-1 text-xs font-medium bg-primary/10 text-primary rounded-full">
                          {template.category}
                        </span>
                      </div>
                      <div>
                        <h4 className="font-semibold mb-2">Características principales:</h4>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
                          {template.features.map((feature, i) => (
                            <div key={i} className="flex items-center gap-2 text-sm">
                              <div className="w-1.5 h-1.5 bg-primary rounded-full flex-shrink-0" />
                              {feature}
                            </div>
                          ))}
                        </div>
                      </div>
                    </div>
                  </>
                ) : (
                  <TemplateCard template={template} />
                )}
              </div>
            ))}
          </div>
        ) : (
          <div className="text-center py-12">
            <h3 className="text-lg font-semibold mb-2">No se encontraron diseños</h3>
            <p className="text-muted-foreground mb-4">
              No hay diseños disponibles en la categoría &ldquo;{selectedCategory}&rdquo;
            </p>
            <Button onClick={() => setSelectedCategory("Todas")}>
              Ver todos los diseños
            </Button>
          </div>
        )}

        {/* Back to Home */}
        <div className="text-center mt-12">
          <Link href="/#templates" className="cursor-pointer">
            <Button variant="outline" size="lg">
              Volver a la página principal
            </Button>
          </Link>
        </div>
      </div>
    </div>
  )
}