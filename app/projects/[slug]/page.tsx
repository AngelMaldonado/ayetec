import Image from "next/image"
import fs from "fs"
import path from "path"

async function getProject(slug: string) {
  const projectsData = fs.readFileSync(path.join(process.cwd(), 'data', 'projects.json'), 'utf8')
  const projectsJSON = JSON.parse(projectsData) as Project[]
  return projectsJSON.find((project) => project.slug === slug)
}

export default async function ProjectPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params
  const project = await getProject(slug)

  if (!project) {
    return <div>Project not found</div>
  }

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl font-bold mb-4">{project.title}</h1>
        <p className="text-lg text-muted-foreground mb-8">{project.description}</p>
        <Image className="rounded-lg mb-4 shadow-lg" src={project.image} alt={project.title} width={1000} height={1000} />
        <div className="grid gap-6">
          <div className="space-y-4">
            <div className="flex items-center gap-2">
              <span className="px-3 py-1 rounded-full text-sm font-medium bg-primary/10 text-primary">
                {project.category === "web" ? "Web" : project.category === "mobile" ? "Móvil" : "Desktop"}
              </span>
              <span className="text-sm text-muted-foreground">{project.client}</span>
            </div>
            <p>{project.longDescription}</p>
            <div className="space-y-2">
              <h2 className="text-2xl font-semibold">Resultados</h2>
              <ul className="space-y-2">
                {project.results && project.results.length > 0 && project.results.map((result: string, index: number) => (
                  <li key={index.toString()} className="flex items-start gap-2">
                    <span className="text-primary mt-1">•</span>
                    <span>{result}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
