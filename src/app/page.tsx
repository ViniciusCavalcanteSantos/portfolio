"use client"

import Introduction from "@/components/Introduction"
import styled from "styled-components"

const Main = styled.main`
  display: flex;
  flex-direction: column;
  align-items: center;
  min-height: 100vh;
`

export default function Page() {
  return (
    <Main>
      <Introduction />
    </Main>
  )
}
