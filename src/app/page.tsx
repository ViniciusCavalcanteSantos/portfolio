"use client"

import SectionIntroduction from "@/components/SectionIntroduction"
import SectionSkills from "@/components/SectionSkills"
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
  return (
    <Main>
      <SectionIntroduction />
      <SectionSkills />
    </Main>
  )
}
