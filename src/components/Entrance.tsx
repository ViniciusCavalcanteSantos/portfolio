import styled, { keyframes } from "styled-components";
import Logo from "./Logo";

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

export default function Entrance() {
  return (
    <Overlay>
      <Logo color1="#238ce8" color2="#ffffff" width={80} animated={true} />
    </Overlay>
  )
}