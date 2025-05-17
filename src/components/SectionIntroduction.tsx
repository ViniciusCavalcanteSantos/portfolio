import styled from "styled-components";
import Topic from "./Topic";
import Image from "next/image";
import devPerson from "@/assets/dev-person.svg"
import Link from "next/link";
import BtnPrimary from "./BtnPrimary";
import { useUpdateSection } from "@/hooks/useUpdateSection";
import { useTranslations } from "next-intl";

const Section = styled.section`
  padding: 6rem 0;

  @media (max-width: 850px) {
    & {
      padding: 4rem 0;
    }
  }
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

  @media (max-width: 850px) {
    & {
      grid-template-columns: 1fr;
      justify-content: center;
    }
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

  @media (max-width: 850px) {
    & {
      display: none;
    }
  }
`

export default function SectionIntroduction() {
  const { sectionRef } = useUpdateSection("home");
  const t = useTranslations("home.introduction");

  return(
    <Section id="home" ref={sectionRef}>
      <Container>
        <div>
          <Topic topic={t('topic')} title={t('title')} description={t('description')} />

          <LinksContainer>
            <Link href="/#contato">
              <BtnPrimary>{t('contactme')}</BtnPrimary>
            </Link>
            <Link href="/curriculo.pdf" download>
              <BtnPrimary background="outlined">{t('downloadcv')}</BtnPrimary>
            </Link>
          </LinksContainer>
        </div>

        <DevImage src={devPerson} alt={t('devIllustration')} width={300} height={261} priority/>
      </Container>
    </Section>
  )
}