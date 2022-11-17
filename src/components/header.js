import { Link } from "react-router-dom";

import "./header.css";

export default function Header() {
  return (
    <header className="App-header">
      <div className="container">
        <Link to="/" className="logo">
          <i className="fa-brands fa-vuejs"></i>
          inicius C. Santos
        </Link>

        <ul className="links">
          <li>
            <Link to="/#home">Home</Link>
          </li>
          <li>
            <Link to="/#sobre">Sobre</Link>
          </li>
          <li>
            <Link to="/#portifolio">Portifolio</Link>
          </li>
          <li>
            <Link to="/#contato">Contato</Link>
          </li>
        </ul>
      </div>
    </header>
  )
}
