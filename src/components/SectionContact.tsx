import styled from "styled-components";
import Topic from "./Topic";
import InputPrimary, { TextareaPrimary } from "./InputPrimary";
import BtnPrimary from "./BtnPrimary";
import { useUpdateSection } from "@/hooks/useUpdateSection";

const Section = styled.section`
  padding: 96px 0;
`

const Container = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  justify-items: center;
  gap: 4rem;
`

const FormContact = styled.form`
  display: grid;
  gap: 1.5rem;
  width: 100%;
  max-width: 600px;
  padding: 3.5rem 3rem;
  border-radius: 20px;
  background-color: var(--bg-color-2);
`

const FormTitle = styled.h3`
  font-size: 1.3rem;
  font-weight: 500;
  color: var(--text-primary);
  margin-bottom: 1.6rem;
`

export default function SectionContact() {
  const { sectionRef } = useUpdateSection("contato");

  return(
    <Section id="contato" ref={sectionRef}>
      <Container>
        <div>
          <Topic topic="Contate-me" title="Vamos trabalhar juntos" description="Meu nome é Vinicius, eu programo há 5 anos e já trabalhei em diversos projetos pessoais e profissionais, contate-me." />

        </div>

        <FormContact>
          <FormTitle>Envie-me uma mensagem!</FormTitle>

          <InputPrimary placeholder="Seu nome"/>
          <InputPrimary placeholder="Seu email" type="email"/>
          <TextareaPrimary placeholder="Detalhes do projeto" />

          <BtnPrimary>
            Enviar
          </BtnPrimary>
        </FormContact>
      </Container>
    </Section>
  )
}