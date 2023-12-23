"use client";

import { ProjectsFilterType } from "@/types/ProjectsFilterType";
import { useCookies } from "next-client-cookies";
import { useState, createContext } from "react";

export const GlobalContext = createContext({
  theme: "dark",
  type: ProjectsFilterType.ALL,
  currentSection: "home",
  setTheme: (value: string) => {},
  setType: (value: ProjectsFilterType) => {},
  setCurrentSection: (value: string) => {},
})

export function GlobalContextProvider({ children }: { children: React.ReactNode}) {
  const cookies = useCookies()
  const [theme, setTheme] = useState(cookies.get("theme") ?? "dark");
  const [type, setType] = useState(ProjectsFilterType.ALL);
  const [currentSection, setCurrentSection] = useState("home")

  return(
    <GlobalContext.Provider value={{theme, setTheme, type, setType, currentSection, setCurrentSection}}>
      {children}
    </GlobalContext.Provider>
  )
}