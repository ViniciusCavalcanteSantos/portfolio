import { ButtonHTMLAttributes } from "react"
import styled from "styled-components"

const TagButton = styled.button`
  display: inline-block;
  min-width: 125px;
  border-radius: 1rem;
  padding: .9rem 1.75rem;
  border: 0;
  outline: 0;
  /* background: linear-gradient(90deg, #398e52, #17D46C, #368b4f); */
  background: var(--primary);
  background-size: 200%;
  background-repeat: no-repeat;
  color: var(--white);
  font-family: inherit;
  font-size: .9rem;
  text-align: center;
  letter-spacing: .5px;
  cursor: pointer;
  transition: .3s;

  &:hover {
    background-color: var(--primary-dark);
  }

  &.outlined {
    position: relative;
    font-weight: 500;
    border-bottom: 3px solid var(--primary);
    border-radius: 0;
    padding: 0.15rem 0;
    background: transparent;
    min-width: revert;

    &::before {
      content: "";
      position: absolute;
      height: 3px;
      width: 0;
      left: 0;
      bottom: -3px;
      background-color: var(--primary-dark);
      transition: .3s ease-in-out;
    }

    &:hover::before {
      width: 100%;
    }
  }
`
interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode,
  background?: string
}

export default function BtnPrimary({children, background = "", ...props}: ButtonProps) {
  return(
      <TagButton {...props} className={background}>
        {children}
      </TagButton>
  )
}