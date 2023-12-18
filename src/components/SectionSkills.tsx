import styled from "styled-components"
import Topic from "./Topic"
import Skills from "./Skills"

const Section = styled.section`
  padding: 96px 0;
  width: 100%;
`

const Container = styled.div`
  width: 100%;
  background-color: var(--bg-color-2);
  padding: 5rem 6rem;
  border-radius: 20px;

  p {
    margin: 2rem 0;
  }
`

export default function SectionSkills() {
  return(
    <Section>
      <Container>
        <Topic topic="Minhas Habilidades" title="Deixe-me ajudá-lo" description="Já trabalhei em diversos projetos e acúmulo experiência com diversas linguagens de programação, sou um desenvolvedor Full-Stack com especialização em PHP no back-end. Atualmente estou disponível para trabalho na área de desenvolvimento." />

        <Skills />
      </Container>
    </Section>
  )
}