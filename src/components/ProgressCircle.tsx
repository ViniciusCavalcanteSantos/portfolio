import { useRef, useState } from "react"
import styled from "styled-components"
import { useIntersectionObserver } from "usehooks-ts"

const Container = styled.div`
  margin: 0 auto;
`

const CounterContainer = styled.div`
  width: 150px;
  height: 150px;
  position: relative;
`

const Svg = styled.svg`
  position: absolute;
  width: 100%;
  height: 100%;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%) rotate(-90deg);
`

const Circle = styled.circle`
  fill: var(--bg-color-3);
  stroke: var(--primary);
  stroke-dasharray: 427;
  stroke-dashoffset: 427;
  stroke-linecap: round;
  stroke-width: 5px;
  transition: stroke-dashoffset 2s ease-in-out 0s;
`

const Counter = styled.h4`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  color: var(--text-primary);
  font-size: 2.4rem;
  font-weight: 400;
`

const Title = styled.h3`
  color: var(--text-primary);
  margin-top: .75rem;
  text-align: center;
  font-size: 1rem;
  font-weight: 400;
`

interface ProgressCircleProps {
  percentage: number,
  title?: string
}

export default function ProgressCircle({ percentage, title }: ProgressCircleProps) {
  const [currentPercentage, setCurrentPercentage] = useState(0); 
  const [strokeValue, setStrokeValue] = useState(427);

  const updatePercentage = () => {
    setStrokeValue(427 - 427 * (percentage / 100))

    const interval = setInterval(() => {
      setCurrentPercentage(prevPercentage => {
        // Para o contador
        if(prevPercentage >= percentage) {
          clearInterval(interval)
          return percentage;
        }

        return(prevPercentage + 1);
      })
    }, 12);
  }

  const ref = useRef<HTMLDivElement | null>(null)
  const entry = useIntersectionObserver(ref, {})
  if(entry?.isIntersecting) {
    if(currentPercentage === 0) {
      setTimeout(updatePercentage, 400)
    }
  }

  return(
    <Container ref={ref}>
      <CounterContainer>
        <Svg>
          <Circle cx="75" cy="75" r="68" style={{strokeDashoffset: `${strokeValue}px`}}></Circle>
        </Svg>

        <Counter>
          <span>{currentPercentage}</span>%
        </Counter>
      </CounterContainer>
      
      {title && <Title>{title}</Title>}
    </Container>
  )
}