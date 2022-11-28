import { useState } from "react";
import { Link } from "react-router-dom";

import "./header.css";

export default function Header({ activeLink }) {
  const [menu, setMenu] = useState(false);

  const toggleMenu = () => setMenu(!menu);
  return (
    <header className={"App-header " + (menu ? "active" : "")}>
      <div className="container">
        <Link to="/" className="logo">
          <i className="fa-brands fa-vuejs"></i>
          inicius C. Santos
        </Link>

        <div className="links-container">
          <ul className="links">
            <li>
              <Link to="/#home" className={(activeLink === "home") ? "active" : ""} onClick={() => setMenu(false)}>Home</Link>
            </li>
            <li>
              <Link to="/#sobre" className={(activeLink === "sobre") ? "active" : ""} onClick={() => setMenu(false)}>Sobre</Link>
            </li>
            <li>
              <Link to="/#portifolio" className={(activeLink === "portifolio") ? "active" : ""} onClick={() => setMenu(false)}>Portifolio</Link>
            </li>
            <li>
              <Link to="/#contato" className={(activeLink === "contato") ? "active" : ""} onClick={() => setMenu(false)}>Contato</Link>
            </li>
          </ul>
        </div>

        <div className={"menu " + (menu ? "active" : "")} onClick={toggleMenu}>
          <i className="fa-solid fa-bars open"></i>

          <i className="fa-solid fa-xmark close"></i>
        </div>
      </div>
    </header>
  )
}
