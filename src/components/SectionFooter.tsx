import styled from "styled-components"
import Logo from "./Logo"
import { Abril_Fatface } from "next/font/google";
import { faGithub, faInstagram, faLinkedin } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import LinkIcon from "./LinkIcon";
import { useEffect, useState } from "react";
import { useTranslations } from "next-intl";
import Loading from "@/app/[locale]/loading";
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

  @media (max-width: 850px) {
    & {
      display: none;
    }
  }
`

const Copyright = styled.p`
  color: var(--text-secondary);
  font-size: .9rem;
  font-weight: 400;
  text-align: center;
  margin: 0 auto;
`

const IconsContainer = styled.div`
  display: flex;
  gap: 16px;

  @media (max-width: 850px) {
    & {
      display: none;
    }
  }
`

export default function SectionFooter() {
  const t = useTranslations("footer");
  const [year, setYear] = useState((new Date()).getFullYear())

  useEffect(() => {
    fetch("/api/getYear", {method: "GET"})
      .then(res => res.json())
      .then(res => {
        if(res.status) setYear(res.year)
      })
  }, [])

  return(
    <Footer>
      <Container>
        <Loading />
        <PageTitle>
          <Logo width={40} />

          inicius C. Santos
        </PageTitle>

        <Copyright>©Copyright {year}. {t('rightsReserved')}</Copyright>

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