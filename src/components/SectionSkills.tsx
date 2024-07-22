import styled from "styled-components"
import Topic from "./Topic"
import Skills from "./Skills"
import { useUpdateSection } from "@/hooks/useUpdateSection"

const Section = styled.section`
  padding: 6rem 0;
  width: 100%;

  @media (max-width: 850px) {
    & {
      padding: 4rem 0;
    }
  }
`

const Container = styled.div`
  width: 100%;
  background-color: var(--bg-color-2);
  padding: 5rem 6rem;
  border-radius: 20px;

  p {
    margin: 2rem 0;
  }

  @media (max-width: 850px) {
    & {
      padding: 4rem 2.5rem;
    }
  }
`

export default function SectionSkills() {
  const { sectionRef } = useUpdateSection("sobre");

  return(
    <Section id="sobre" ref={sectionRef}>
      <Container>
        <Topic topic="Minhas Habilidades" title="Deixe-me ajudá-lo" description="Trabalhei em diversos projetos escolares e freelancers e sou proficiente em várias linguagens de programação. Como desenvolvedor Full-Stack especializado em PHP para o back-end, estou atualmente disponível para novas oportunidades na área de desenvolvimento." />

        <Skills />
      </Container>
    </Section>
  )
}