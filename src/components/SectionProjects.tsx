import styled from "styled-components"
import Topic from "./Topic"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFaceAngry, faMoon, faSun } from "@fortawesome/free-solid-svg-icons"

const Section = styled.section`
  padding: 96px 0;
  width: 100%;
`

const Container = styled.div`
  height: 100vh;
  max-height: 600px;
  gap: 1rem;

`

export default function SectionProjects() {
  return(
    <Section>
      <Container>
        <Topic topic="Portifólio" title="Meus projetos" />

      </Container>
    </Section>
  )
}