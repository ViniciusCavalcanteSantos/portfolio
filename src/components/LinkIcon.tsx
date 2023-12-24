import Link, { LinkProps } from "next/link"
import { ReactNode } from "react"
import styled from "styled-components"

const LinkTag = styled(Link)`
  width: 40px;
  height: 40px;
  border-radius: 50%;
  background-color: var(--bg-color-1);
  color: var(--text-secondary);
  text-align: center;
  display: flex;
  justify-content: center;
  align-items: center;
  transition: color .3s;

  &:hover {
    color: var(--primary);
  }
`


interface LinkPrimaryProps extends LinkProps {
  children: ReactNode
}

export default function LinkIcon(props: LinkPrimaryProps) {
  return(
    <LinkTag {...props} target="_blank">
      {props.children}
    </LinkTag>
  )
}
