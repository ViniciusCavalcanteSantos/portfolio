import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Link, {LinkProps} from "next/link";
import { ReactNode } from "react";
import styled from "styled-components";


const LinkTag = styled(Link)`
  display: flex;
  align-items: center;
  color: var(--primary);
  font-size: 1.1rem;
  font-weight: 500;
  transition: color .3s;

  svg {
    font-size: 1rem;
    margin-left: 4px;
    transition: margin-left .3s;
  }

  &:hover {
    color: var(--primary-dark);

    svg {
      margin-left: 10px;
    }
  }
`

interface LinkPrimaryProps extends LinkProps {
  children: ReactNode
}

export default function LinkPrimary(props: LinkPrimaryProps) {
  return(
    <LinkTag {...props} target="_blank">
      {props.children}
      <FontAwesomeIcon icon={faArrowRight}/>
    </LinkTag>
  )
}
