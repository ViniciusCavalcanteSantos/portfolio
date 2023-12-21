import styled, { keyframes } from "styled-components"


function LogoPart1({ color }: {color: string}) {
  return(
    <svg
      className="logo-part-1"
      width="80"
      height="auto"
      viewBox="0 0 607.000000 463.000000"
      preserveAspectRatio="xMidYMid meet"
    >
      <g
        transform="translate(0.000000,463.000000) scale(0.100000,-0.100000)"
        fill="#000000"
        stroke="none"
      >
        <path
          d="M980 4555 c0 -4 189 -404 977 -2065 286 -602 659 -1388 829 -1747
      169 -359 310 -650 312 -648 5 4 116 237 383 799 l209 439 -479 1011 c-263 556
      -576 1218 -696 1471 -119 253 -248 524 -285 603 l-69 142 -590 0 c-325 0 -591
      -2 -591 -5z"
          fill={color}
        />
      </g>
    </svg>
  )
}

function LogoPart2({ color }: {color: string}) {
  return(
    <svg
      className="logo-part-2"
      width="80"
      height="auto"
      viewBox="0 0 607.000000 463.000000"
      preserveAspectRatio="xMidYMid meet"
    >
      <g
        transform="translate(0.000000,463.000000) scale(0.100000,-0.100000)"
        fill="#000000"
        stroke="none"
      >
        <path
          d="M4037 4538 c-14 -11 -142 -278 -679 -1418 -36 -77 -48 -113 -45 -135
      3 -16 45 -113 94 -215 49 -102 176 -371 283 -597 106 -227 196 -413 200 -413
      4 0 37 64 75 143 37 78 310 655 607 1282 297 627 564 1191 593 1253 l54 112
      -583 0 c-450 0 -586 -3 -599 -12z"
          fill={color}
        />
      </g>
    </svg>
  )
}

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

interface LogoContainerProps {width: number}
const LogoContainer = styled.div<LogoContainerProps>`
  display: inline-block;
  position: relative;
  width: ${props => props.width + "px"};
  height: ${props => (props.width * 61 / 80) + "px"};


  .logo-part-1 {
    position: absolute;
    width: ${props => props.width + "px"};
  }

  &.animate .logo-part-1 {
    animation: ${logoAnimationPart1} 700ms ease-out;
  }

  .logo-part-2 {
    position: absolute;
    width: ${props => props.width + "px"};
  }
  
  &.animate .logo-part-2 {
    animation: ${logoAnimationPart2} 700ms ease-out;
  }
`

interface LogoProps {
  color1: string,
  color2: string,
  width: number
  animated?: boolean
}

export default function Logo({color1, color2, width, animated = false}: LogoProps) {
  return(
    <LogoContainer className={animated ? "animate" : ""} width={width}>
      <LogoPart1 color={color1} />
      <LogoPart2 color={color2} />
    </LogoContainer>
  )
}