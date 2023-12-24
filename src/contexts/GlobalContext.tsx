"use client";

import { useCookies } from "next-client-cookies";
import { useState, createContext } from "react";

export const GlobalContext = createContext({
  theme: "dark",
  currentSection: "home",
  setTheme: (value: string) => {},
  setCurrentSection: (value: string) => {},
})

export function GlobalContextProvider({ children }: { children: React.ReactNode}) {
  const cookies = useCookies()
  const [theme, setTheme] = useState(cookies.get("theme") ?? "dark");
  const [currentSection, setCurrentSection] = useState("home")

  return(
    <GlobalContext.Provider value={{theme, setTheme, currentSection, setCurrentSection}}>
      {children}
    </GlobalContext.Provider>
  )
}