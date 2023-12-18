import Image from "next/image";
import styled, { keyframes } from "styled-components";
import logoPart1 from "@/assets/logo-part-1.svg"
import logoPart2 from "@/assets/logo-part-2.svg"

const fadeOut = keyframes`
  from {
    opacity: 1;
  }

  to {
    opacity: 0;
  }
`

const Overlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: var(--bg-color-2);
  z-index: 1000;
  display: flex;
  justify-content: center;
  align-items: center;
  pointer-events: none;
  animation: ${fadeOut} 300ms linear forwards 1000ms;
`

const Logo = styled.div`
  position: relative;
  width: 80px;
  height: 61px;
`

const logoAnimationPart1 = keyframes`
  from {
    transform: translate(-200%, 200%);
    opacity: 0;
  }

  to {
    transform: translate(0, 0);
    opacity: 1;
  }
`

const logoAnimationPart2 = keyframes`
  from {
    transform: translate(200%, -200%);
    opacity: 0;
  }

  to {
    transform: translate(0, 0);
    opacity: 1;
  }
`

const LogoPart1 = styled(Image)`
  position: absolute;
  animation: ${logoAnimationPart1} 700ms ease-out;
`

const LogoPart2 = styled(Image)`
  position: absolute;
  animation: ${logoAnimationPart2} 700ms ease-out;
  color: red;
`

export default function Entrance() {
  return (
    <Overlay>
      <Logo>
        <LogoPart1 src={logoPart1} alt="" width={80}/>
        <LogoPart2 src={logoPart2} alt="" width={80}/>
      </Logo>
    </Overlay>
  )
}