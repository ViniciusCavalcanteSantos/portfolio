import styled from "styled-components";
import Topic from "./Topic";

const Section = styled.section`
  padding: 80px 20px;
`

const Container = styled.div`
`

export default function Introduction() {
  return(
    <Section>
      <Container>
        <Topic topic="Desenvolvedor Full Stack" title="Olá, meu nome é Vinicius!" description="Este site foi feito com React. Eu sou um Desenvolvedor Full-Stack independente, vamos trabalhar juntos!" />

      </Container>
    </Section>
  )
}