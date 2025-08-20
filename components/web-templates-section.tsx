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
import { ChevronDown, Eye } from "lucide-react"
import { useAppContext } from "@/providers/app-provider"
import Link from "next/link"

export function WebTemplatesSection() {
  const { templates } = useAppContext()
  const [selectedCategory, setSelectedCategory] = useState<string>("Todas")

  // Get unique categories
  const categories = useMemo(() => {
    const cats = Array.from(new Set(templates.map(template => template.category)))
    return ["Todas", ...cats.sort()]
  }, [templates])

  // Filter templates by category and show only first 6
  const filteredTemplates = useMemo(() => {
    let filtered = templates
    if (selectedCategory !== "Todas") {
      filtered = templates.filter(template => template.category === selectedCategory)
    }
    return filtered.slice(0, 6) // Show only first 6 templates
  }, [templates, selectedCategory])

  return (
    <section id="templates" className="w-full py-12 md:py-24 lg:py-32">
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex flex-col items-center justify-center space-y-4 text-center">
          <div className="space-y-2">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
              Diseños Web
            </h2>
            <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
              Para nuestras soluciones web, tenemos una serie de diseños que puedes elegir y personalizar de acuerdo a tus necesidades.
            </p>
          </div>
        </div>

        {/* Category Filter */}
        <div className="flex justify-center py-8">
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button variant="outline" className="w-48 justify-between">
                {selectedCategory}
                <ChevronDown className="h-4 w-4" />
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="center" className="w-48">
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
        </div>

        {/* Templates Grid */}
        <div className="mx-auto grid max-w-5xl gap-6 pb-8 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
          {filteredTemplates.map((template, index) => (
            <div key={index.toString()} className="relative group">
              <TemplateCard template={template} />
              {/* Category Badge */}
              <div className="absolute top-4 right-4 z-10">
                <span className="inline-block px-2 py-1 text-xs font-medium bg-black/70 text-white rounded-full backdrop-blur-sm">
                  {template.category}
                </span>
              </div>
            </div>
          ))}
        </div>

        {/* View All Gallery Button */}
        <div className="text-center mt-8">
          <Link href="/galeria" className="cursor-pointer">
            <Button size="lg" className="gap-2">
              <Eye className="h-4 w-4" />
              Ver galería completa
            </Button>
          </Link>
          <p className="text-sm text-muted-foreground mt-2">
            Explora todos nuestros {templates.length} diseños disponibles
          </p>
        </div>
      </div>
    </section>
  )
} 