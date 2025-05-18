import styled from "styled-components"
import Topic from "./Topic"
import port1 from "@/assets/portfolio/port1.jpg"
import port2 from "@/assets/portfolio/port2.jpg"
import port3 from "@/assets/portfolio/port3.jpg"
import port4 from "@/assets/portfolio/port4.jpg"
import port5 from "@/assets/portfolio/port5.jpg"
import port6 from "@/assets/portfolio/port6.jpg"
import Image from "next/image"
import { useUpdateSection } from "@/hooks/useUpdateSection"
import { useEffect, useState } from "react"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faFile, faMagnifyingGlassPlus } from "@fortawesome/free-solid-svg-icons"
import Link from "next/link"
import CardsModal from "./CardsModal"
import { useTranslations } from "next-intl"

const mixitupImport = () => require('mixitup');

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
`

const FilterButtons = styled.div`
  display: flex;
  justify-content: flex-end;
  gap: 24px;
  margin: 32px 0 64px;
`

const FilterButton = styled.button`
  display: inline-block;
  background: none;
  outline: none;
  border: none;
  cursor: pointer;
  font-family: inherit;
  font-size: .9rem;
  font-weight: 600;
  letter-spacing: .5px;
  text-transform: uppercase;
  color: var(--text-primary);
  transition: color .3s;

  &.mixitup-control-active {
    color: var(--primary);
  }
`

const CardsList = styled.ul`
  display: grid;
  justify-items: center;
  grid-template-columns: repeat(auto-fill, minmax(340px, 1fr));
  gap: 2rem;

  @media (max-width: 400px) {
    & {
      grid-template-columns: 1fr;
    }

    h3 {
      height: auto;
    }
  }
`

const CardsItem = styled.li`
  background-color: var(--bg-color-2);
  border-radius: 16px;
  box-shadow: 0 0 10px 0 rgba(0, 0, 0, 0.1);
  max-width: 400px;
  width: 100%;
`

const Figure = styled.figure`
  position: relative;
  width: 100%;
  padding-top: 60%;
`

const ImagePortfolio = styled(Image)`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  object-fit: cover;
  border-radius: 16px 16px 0 0;
`

const IconContainer = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: transparent;
  -webkit-backdrop-filter: blur(0px);
  backdrop-filter: blur(0px);
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 10px;
  transition: .5s;
  border-radius: 16px 16px 0 0;

  &:hover {
    background: rgba(43, 37, 60, 0.6);
    -webkit-backdrop-filter: blur(10px);
    backdrop-filter: blur(10px);

    svg {
      transform: translateY(0px);
      opacity: 1;
      transition: .3s var(--i);
    }
  }

  svg {
    font-size: 1rem;
    background-color: var(--primary);
    color: hsl(257, 61%, 24%);
    padding: 12px;
    border-radius: 40%;
    text-align: center;
    transform: translateY(15px);
    cursor: pointer;
    transition: .3s;
    opacity: 0;

    &:hover {
      background-color: var(--primary-dark);
    }
  }
`

const CardsTitle = styled.h3`
  height: 82px;
  padding: 1rem 1.5rem;
  font-size: 1rem;
  font-weight: 600;
  color: var(--text-primary);
`

export default function SectionProjects() {
  const t = useTranslations("home.projects");
  const [currentSlide, setCurrentSlide] = useState(0);
  const [open, setOpen] = useState(false);
  const imagesInfo = [
    {image: port5, title: t('port5'), type: "projects"},
    {image: port1, title: t('port1'), type: "projects"},
    {image: port6, title: t('port6'), type: "projects"},
    {image: port2, title: t('port2'), type: "projects"},
    {image: port4, title: t('port4'), type: "people"},
    {image: port3, title: t('port3'), type: "projects"},
  ];

  const handleClick = (index: number) => {
    setCurrentSlide(index);
    setOpen(true);
  }

  const CardsItemsList = imagesInfo.map((imageInfo, index) => {
    return(
      <CardsItem key={index} className={"mix portfolio-item " + imageInfo.type}>
        <Figure>
          <ImagePortfolio src={imageInfo.image} alt={imageInfo.title} width={500} />

          <IconContainer>
            <FontAwesomeIcon icon={faMagnifyingGlassPlus}  style={{"--i": "0s"} as React.CSSProperties} onClick={() => handleClick(index)}/>

            <Link href={imageInfo.image.src} target="_blank">
              <FontAwesomeIcon icon={faFile} style={{"--i": ".15s"} as React.CSSProperties}/>
            </Link>
          </IconContainer>
        </Figure>

        <CardsTitle>{imageInfo.title}</CardsTitle>
      </CardsItem>
    )
  })

  useEffect(() => {
      if (typeof window === 'undefined') return;
      const mixitup = mixitupImport();
      
      mixitup(".portfolio-gallery", {
        selectors: {
          target: ".portfolio-item"
        },
        animation: {
          duration: 500
        }
      });
  }, []);

  const { sectionRef } = useUpdateSection("portfolio");
  return(
    <Section id="portfolio" ref={sectionRef}>
      <Container>
        <Topic topic={t('topic')} title={t('title')} />

        <FilterButtons>
          <FilterButton data-filter="all">{t('all')}</FilterButton>
          <FilterButton data-filter=".projects">{t('projects')}</FilterButton>
          <FilterButton data-filter=".people">{t('people')}</FilterButton>
        </FilterButtons>

        <CardsList className="portfolio-gallery">
          {CardsItemsList}
        </CardsList>

        <CardsModal imagesInfo={imagesInfo} currentSlide={currentSlide} open={open} setOpen={setOpen} />
      </Container>
    </Section>
  )
}