"use client"

import { createContext, useContext } from "react"

const AppContext = createContext({
  templates: [] as Template[],
  projects: [] as Project[]
})

export function AppProvider({ children, templates, projects }: { children: React.ReactNode, templates: Template[], projects: Project[] }) {
  return (<AppContext.Provider value={{ templates, projects }}>{children}</AppContext.Provider>)
}

export function useAppContext() {
  return useContext(AppContext)
}