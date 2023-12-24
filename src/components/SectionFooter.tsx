import styled from "styled-components"
import Logo from "./Logo"
import { Abril_Fatface } from "next/font/google";
import { faGithub, faInstagram, faLinkedin } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import LinkIcon from "./LinkIcon";
const AbrilFatface = Abril_Fatface({ weight: ["400"], subsets: ['latin'] });

const Footer = styled.footer`
  padding: 64px 0;
  width: 100%;
`

const Container = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`

const PageTitle = styled.h1`
  color: var(--text-primary);
  font-size: 1.5rem;
  ${AbrilFatface.style}
`

const Copyright = styled.p`
  color: var(--text-secondary);
  font-size: .9rem;
  font-weight: 400;
`

const IconsContainer = styled.div`
  display: flex;
  gap: 16px;
`

export default function SectionFooter() {
  return(
    <Footer>
      <Container>
        <PageTitle>
          <Logo width={40} />

          inicius C. Santos
        </PageTitle>

        <Copyright>© Copyright 2022. Todos os direitos garantidos</Copyright>

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
      </Container>
    </Footer>
  )
}