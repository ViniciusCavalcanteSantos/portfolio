"use client";

import styled from "styled-components";

import { Abril_Fatface } from "next/font/google";
import Link from "next/link";
import Logo from "./Logo";
import { faBars, faMoon, faSun, faXmark } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useGlobalContext } from "@/hooks/useGlobalContext";
import { useCookies } from "next-client-cookies";
import { useState } from "react";
const AbrilFatface = Abril_Fatface({ weight: ["400"], subsets: ['latin'] });


const TagHeader = styled.header`
  position: fixed;
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 999;
  width: 100%;
  height: 80px;
  top: 0;
  background: var(--bg-color-transparent);
  box-shadow: 0 5px 20px 0.1px rgb(0 0 0 / 10%);
  backdrop-filter: blur(15px);
  color: var(--text-primary);

  &::after {
    content: "";
    position: absolute;
    pointer-events: none;
    width: 100%;
    height: 100%;
    top: 0;
    left: 0;
    box-shadow: 0 0.5rem 1rem rgb(0 0 0 / 15%);
  }
`

const Container = styled.div`
  width: 100%;
  display: flex;
  justify-content: flex-end;
  padding: 0 20px;
  align-items: center;
  max-width: var(--max-width);
`

const PageTitle = styled.h1`
  font-size: 1.5rem;
  ${AbrilFatface.style}
  margin-right: auto;

  @media (max-width: 400px) {
    span {
      display: none;
    }
  }
`

const NavTag = styled.nav`
  @media (max-width: 750px) {
    & {
      position: absolute;
      top: 80px;
      left: 0;
      width: 100%;
      overflow: hidden;
      pointer-events: none;
    }

    &.active {
      pointer-events: auto;
    }

    & ul {
      height: 100%;
      width: 100%;
      flex-direction: column;
      position: relative;
      top: 0;
      transform: translateY(-100%);
      text-align: center;
      padding: 2rem 3rem 4rem;
      border-radius: 0 0 2rem 2rem;
      background: var(--bg-color-2);
      pointer-events: none;
      transition: .3s;
    }

    &.active ul {
      transform: translateY(0%);
      pointer-events: auto;
    }
  }
`

const List = styled.ul`
  display: flex;
  align-items: center;
  gap: 2rem;
  list-style: none;
  color: var(--text-secondary);
`

const ListItem = styled.li`
  position: relative;
  transition: .3s;
  
  &::after {
    content: "";
    position: absolute;
    left: 50%;
    bottom: -10px;
    height: 6px;
    transform: translateX(-50%);
    width: 0;
    border-radius: 8px;
    background-color: var(--white);
    transition: .3s;
  }

  body.light &::after {
    background-color: var(--primary);
  }

  &.active,
  &:hover {
    color: var(--text-primary);

    &::after {
      width: 110%;
    }
  }
  
`

const ToggleMenu = styled.button`
  width: 21px;
  height: 21px;
  position: relative;
  display: none;
  justify-content: center;
  align-items: center;
  color: var(--text-primary);
  font-size: 1.5rem;
  border: none;
  outline: none;
  background: none;
  cursor: pointer;
  margin-left: 1.5rem;

  & svg {
    position: absolute;
    top: 0;
    left: 0;
  }

  & .open-icon {
    opacity: 1;
    transform: scale(1) rotate(0deg);
    transition: all .3s;
  }

  & .close-icon {
    opacity: 0;
    transform: scale(.5) rotate(-125deg);
    transition: all .3s;
  }

  &.active .open-icon {
    transform: scale(1) rotate(125deg);
    opacity: 0;
  }

  &.active .close-icon {
    transform: scale(1) rotate(0);
    opacity: 1;
  }

  @media (max-width: 750px) {
    & {
      display: flex;
    }
  }
`

const ToggleTheme = styled.button`
  color: var(--text-primary);
  min-width: 40px;
  height: 40px;
  background-color: var(--bg-color-2);
  border-radius: 50%;
  border: none;
  outline: none;
  cursor: pointer;
  box-shadow: 0 0 10px 0 rgba(0, 0, 0, 0.5);
  font-size: 1.1rem;
  display: flex;
  justify-content: center;
  align-items: center;
  transition: .3s;
  margin-left: 1.5rem;

  &:hover {
    filter: brightness(97%);
  }

  svg {
    position: absolute;
  }
`

export default function Header() {
    const [menuOpen, setMenuOpen] = useState(false);
    const { theme, setTheme, currentSection } = useGlobalContext();
    const cookies = useCookies();

    const handleTheme = () => {
      const newTheme = (theme === "light") ? "dark" : "light";
      setTheme(newTheme)
      cookies.set("theme", newTheme)
    }

    return (
      <TagHeader>
        <Container>
          <PageTitle>
            <Logo width={40} />

            <span>inicius C. Santos</span>
          </PageTitle>

          <NavTag className={menuOpen ? "active" : ""}>
            <List>
              <ListItem className={currentSection === "home" ? "active" : ""} onClick={() => setMenuOpen(false)}>
                <Link href="#home">Home</Link>
              </ListItem>
              <ListItem className={currentSection === "sobre" ? "active" : ""} onClick={() => setMenuOpen(false)}>
                <Link href="#sobre">Sobre</Link>
              </ListItem>
              <ListItem className={currentSection === "portfolio" ? "active" : ""} onClick={() => setMenuOpen(false)}>
                <Link href="#portfolio">Portfolio</Link>
              </ListItem>
              <ListItem className={currentSection === "contato" ? "active" : ""} onClick={() => setMenuOpen(false)}>
                <Link href="#contato">Contato</Link>
              </ListItem>
            </List>
          </NavTag>

          <ToggleMenu className={menuOpen ? "active" : ""} onClick={() => setMenuOpen(!menuOpen)}>
            <FontAwesomeIcon icon={faBars}  className="open-icon"/>
            <FontAwesomeIcon icon={faXmark} className="close-icon"/>
          </ToggleMenu>

          <ToggleTheme onClick={handleTheme}>
            {theme === "dark"  && <FontAwesomeIcon icon={faSun} />}
            {theme === "light" && <FontAwesomeIcon icon={faMoon} />}
          </ToggleTheme>
        </Container>
      </TagHeader>
    )
  }
  