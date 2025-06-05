import projects from "@/data/projects.json"
import { NextResponse } from "next/server"

export async function GET(request: Request): Promise<Response> {
  const url = new URL(request.url)
  const slug = url.pathname.split("/").pop()
  const project = projects.find((project) => project.slug === slug)

  if (!project) {
    return NextResponse.json({ error: "Project not found" }, { status: 404 })
  }

  return NextResponse.json(project, { status: 200 })
}