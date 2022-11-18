import { Link } from "react-router-dom";

import "./header.css";

export default function Header({ activeLink }) {
  return (
    <header className="App-header">
      <div className="container">
        <Link to="/" className="logo">
          <i className="fa-brands fa-vuejs"></i>
          inicius C. Santos
        </Link>

        <ul className="links">
          <li>
            <Link to="/#home" className={(activeLink === "home") ? "active" : ""}>Home</Link>
          </li>
          <li>
            <Link to="/#sobre" className={(activeLink === "sobre") ? "active" : ""}>Sobre</Link>
          </li>
          <li>
            <Link to="/#portifolio" className={(activeLink === "portifolio") ? "active" : ""}>Portifolio</Link>
          </li>
          <li>
            <Link to="/#contato" className={(activeLink === "contato") ? "active" : ""}>Contato</Link>
          </li>
        </ul>
      </div>
    </header>
  )
}
