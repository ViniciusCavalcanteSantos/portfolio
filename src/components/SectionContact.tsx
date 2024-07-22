import styled from "styled-components";
import Topic from "./Topic";
import InputPrimary, { TextareaPrimary } from "./InputPrimary";
import BtnPrimary from "./BtnPrimary";
import { useUpdateSection } from "@/hooks/useUpdateSection";
import LinkPrimary from "./LinkPrimary";
import LinkIcon from "./LinkIcon";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub, faInstagram, faLinkedin } from "@fortawesome/free-brands-svg-icons";

const Section = styled.section`
  padding: 6rem 0;

  @media (max-width: 850px) {
    & {
      padding: 4rem 0;
    }
  }
`

const Container = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  justify-items: center;
  gap: 4rem;

  p {
    margin: 2rem 0;
  }

  & > div > a {
    margin-bottom: 1rem;
  }

  @media (max-width: 1024px) {
    & {
      grid-template-columns: 1fr;
    }
  }
`

const IconsContainer = styled.div`
  display: flex;
  gap: 16px;
  margin-top: 2rem;
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
`

export default function SectionContact() {
  const { sectionRef } = useUpdateSection("contato");

  return(
    <Section id="contato" ref={sectionRef}>
      <Container>
        <div>
          <Topic topic="Contate-me" title="Vamos trabalhar juntos" description="Eae pronto pra começar? é só me contatar enviando um email ou me ligando no número abaixo, também respondo por whatsapp, estou a espera!" />

          <LinkPrimary href="mailto:viniciuscsantosoficial@gmail.com">
            viniciuscsantosoficial@gmail.com 
          </LinkPrimary>

          <LinkPrimary href="https://wa.me/5581991180837?text=Ol%C3%A1%2C+Vinicius+aqui%21">
            +55 81 99118-0837
          </LinkPrimary>

          <IconsContainer>
            <LinkIcon href="https://github.com/ViniciusCavalcanteSantos">
              <FontAwesomeIcon icon={faGithub}/>
            </LinkIcon>
            <LinkIcon href="https://www.instagram.com/viniciuscsantosoficial">
              <FontAwesomeIcon icon={faInstagram}/>
            </LinkIcon>
            <LinkIcon href="https://www.linkedin.com/in/vinicius-cavalcante-santos-55776425a/">
              <FontAwesomeIcon icon={faLinkedin}/>
            </LinkIcon>
          </IconsContainer>
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