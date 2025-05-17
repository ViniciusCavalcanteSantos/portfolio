"use client"

import Entrance from "@/components/Entrance"
import SectionContact from "@/components/SectionContact"
import SectionFooter from "@/components/SectionFooter"
import SectionIntroduction from "@/components/SectionIntroduction"
import SectionProjects from "@/components/SectionProjects"
import SectionSkills from "@/components/SectionSkills"
import { useGlobalContext } from "@/hooks/useGlobalContext"
import { useEffect } from "react"
import styled from "styled-components"

const Main = styled.main`
  display: flex;
  flex-direction: column;
  align-items: center;
  min-height: 100vh;
  max-width: var(--max-width);
  padding: 0 20px;
  margin: 0 auto;
`

export default function Page() {
  const { theme } = useGlobalContext();
  useEffect(() => {
    document.body.classList.remove("light")
    document.body.classList.remove("dark")
    document.body.classList.add(theme)
  }, [theme])

  return (
    <Main>
      <SectionIntroduction />
      <SectionSkills />
      <SectionProjects />
      <SectionContact />
      <SectionFooter />

      <Entrance />
    </Main>
  )
}
