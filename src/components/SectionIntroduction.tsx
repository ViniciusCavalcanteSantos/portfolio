import styled from "styled-components";
import Topic from "./Topic";
import Image from "next/image";
import devPerson from "@/assets/dev-person.svg"
import Link from "next/link";
import BtnPrimary from "./BtnPrimary";
import { useUpdateSection } from "@/hooks/useUpdateSection";

const Section = styled.section`
  padding: 96px 0;
`

const Container = styled.div`
  height: 100vh;
  max-height: 600px;
  display: grid;
  grid-template-columns: 1.2fr minmax(350px, 1fr);
  align-items: center;
  gap: 1rem;

  h2 {
    font-size: 3.5rem;
  }
`

const LinksContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 24px;
  margin-top: 3.5rem;
`

const DevImage = styled(Image)`
  && {
    width: 100%;
    height: auto;
  }
`

export default function SectionIntroduction() {
  const { sectionRef } = useUpdateSection("home");

  return(
    <Section id="home" ref={sectionRef}>
      <Container>
        <div>
          <Topic topic="Desenvolvedor Full Stack" title="Olá!, meu nome é Vinicius!" description="Este site foi feito com React. Eu sou um Desenvolvedor Full-Stack independente, vamos trabalhar juntos!" />

          <LinksContainer>
            <Link href="/#contato">
              <BtnPrimary>Contate-me</BtnPrimary>
            </Link>
            <Link href="/" download>
              <BtnPrimary background="outlined">Baixar curriculo</BtnPrimary>
            </Link>
          </LinksContainer>
        </div>

        <DevImage src={devPerson} alt="Ilustração de um desenvolvedor" width={300} height={261} />
      </Container>
    </Section>
  )
}