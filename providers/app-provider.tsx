"use client"

import { createContext, useContext } from "react"

const AppContext = createContext({
  templates: [] as Template[]
})

export function AppProvider({ children, templates }: { children: React.ReactNode, templates: Template[] }) {
  return (<AppContext.Provider value={{ templates }}>{children}</AppContext.Provider>)
}

export function useAppContext() {
  return useContext(AppContext)
}