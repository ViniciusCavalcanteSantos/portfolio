import styled from "styled-components"
import Topic from "./Topic"
import port1 from "@/assets/portfolio/port1.jpg"
import port2 from "@/assets/portfolio/port2.jpg"
import port3 from "@/assets/portfolio/port3.jpg"
import port4 from "@/assets/portfolio/port4.jpg"
import port5 from "@/assets/portfolio/port5.jpg"
import port6 from "@/assets/portfolio/port6.jpg"
import Image from "next/image"
import { useEffect, useRef } from "react"
import { useGlobalContext } from "@/hooks/useGlobalContext"
import { useUpdateSection } from "@/hooks/useUpdateSection"

const Section = styled.section`
  padding: 96px 0;
  width: 100%;
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

  &.active {
    color: var(--primary);
  }
`

const CardsList = styled.ul`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
  gap: 2rem;
`

const CardsItem = styled.li`
  background-color: var(--bg-color-2);
  border-radius: 16px;
  box-shadow: 0 0 10px 0 rgba(0, 0, 0, 0.1);
  overflow: hidden;
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
`

const CardsTitle = styled.h3`
  height: 82px;
  padding: 1rem 1.5rem;
  font-size: 1rem;
  font-weight: 600;
  color: var(--text-primary);
`

export default function SectionProjects() {
  const imagesInfo = [
    {image: port1, title: "Projeto responsivo de dashboard feito para a escola ETE", type: "projects"},
    {image: port6, title: "Versão mobile da dashboard de controle ETE", type: "projects"},
    {image: port2, title: "Página de equipe com informações vindas do banco de dados", type: "projects"},
    {image: port3, title: "Site de notícias produzido em 2021, com dashboard interativa", type: "projects"},
    {image: port4, title: "Equipe de Desenvolvimento da ETE em que fiz parte em 2022", type: "people"},
    {image: port5, title: "Implementação de um design feito no figma ultilizando o Next JS", type: "people"},
  ];

  const CardsItemsList = imagesInfo.map((imageInfo, index) => {
    return(
      <CardsItem key={index}>
        <Figure>
          <ImagePortfolio src={imageInfo.image} alt={imageInfo.title} width={300} />
        </Figure>

        <CardsTitle>{imageInfo.title}</CardsTitle>
      </CardsItem>
    )
  })

  const { sectionRef } = useUpdateSection("portfolio");
  return(
    <Section id="portfolio" ref={sectionRef}>
      <Container>
        <Topic topic="Portifólio" title="Meus projetos" />

        <FilterButtons>
          <FilterButton className="active" data-filter="all">Tudo</FilterButton>
          <FilterButton data-filter=".projects">Projetos</FilterButton>
          <FilterButton data-filter=".people">Pessoas</FilterButton>
        </FilterButtons>

        <CardsList>
          {CardsItemsList}
        </CardsList>
      </Container>
    </Section>
  )
}