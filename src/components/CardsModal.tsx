import { useCallback, useEffect } from "react"
import styled from "styled-components"
import useEmblaCarousel from 'embla-carousel-react'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faAngleLeft, faAngleRight } from "@fortawesome/free-solid-svg-icons"
import Image, { StaticImageData } from "next/image"

const Modal = styled.div`
  position: fixed;
  z-index: 1000;
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
  pointer-events: none;

  &.active {
    pointer-events: auto;

    & > div:nth-child(1) {
      opacity: 1;
    }

    & > div:nth-child(2) {
      opacity: 1;
      transform: translate(-50%, calc(-50%));
    }
  }
`

const ModalOverlay = styled.div`
  position: relative;
  z-index: 1000;
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
  background-color: rgba(0, 0, 0, .85);
  opacity: 0;
  transition: .3s;
`

const ModalSlide = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  width: 100%;
  max-width: 900px;
  padding: 0 100px;
  z-index: 1001;
  transform: translate(-50%, calc(-50% + 400px));
  opacity: 0;
  transition: .3s;

  @media (max-width: 850px) {
    & {
      max-width: 700px;
      padding: 0;

      button {
        color: var(--primary);
      }
    }
  }
`

const Embla = styled.div`
  position: relative;
  overflow: hidden;
  padding-top: 67%;
`

const EmblaContainer = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  display: flex;
`

const EmblaSlide = styled.div`
  flex: 0 0 100%;  
  min-width: 0;
  margin-right: 20px;

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    border-radius: 10px;
  }
`

const EmblaButton = styled.button`
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  font-size: 2rem;
  padding: 2rem;
  color: var(--white);
  background-color: transparent;
  border: none;
  outline: none;
  cursor: pointer;

  &:nth-child(2) {
    left: 0;
  }

  &:nth-child(3) {
    right: 0;
  }
`
type ImageInfo = {
  image: StaticImageData;
  title: string;
  type: string;
};

interface CardsModalProps {
  imagesInfo: ImageInfo[],
  currentSlide: number,
  open: boolean,
  setOpen: Function
}

export default function CardsModal({ imagesInfo, currentSlide = 1, open = true, setOpen }: CardsModalProps) {
  const [emblaRef, emblaApi] = useEmblaCarousel({
    containScroll: "trimSnaps",
    loop: true
  })
  useEffect(() => {    
    if(emblaApi) {
      emblaApi.scrollTo(currentSlide, true)  
    }  
  }, [currentSlide])

  const scrollPrev = useCallback(() => {    
    if(emblaApi) emblaApi.scrollPrev()  
  }, [emblaApi])

  const scrollNext = useCallback(() => {    
    if(emblaApi) emblaApi.scrollNext()  
  }, [emblaApi])

  const emblaSlides = imagesInfo.map((imageInfo, index) => {
    return(
      <EmblaSlide key={index}>
        <Image src={imageInfo.image} alt={imageInfo.title} width={1200} />
      </EmblaSlide>        
    )
  }) 

  return(
    <Modal className={open ? "active" : ""}>
      <ModalOverlay onClick={() => setOpen(false)} />

      <ModalSlide>
        <Embla ref={emblaRef}>      
          <EmblaContainer>        
            {emblaSlides}
          </EmblaContainer>    
        </Embla>

        <EmblaButton onClick={scrollPrev}>
          <FontAwesomeIcon icon={faAngleLeft}/>  
        </EmblaButton>      
        <EmblaButton onClick={scrollNext}>
          <FontAwesomeIcon icon={faAngleRight}/>  
        </EmblaButton>
      </ModalSlide>
    </Modal>
  )
}