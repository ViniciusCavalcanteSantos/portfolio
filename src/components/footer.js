import { Link } from "react-router-dom";

import "./footer.css";

export default function Footer() {
  return (
    <footer>
      <div className="container">
        <Link to="/" className="logo">
          <i className="fa-brands fa-vuejs"></i>
          inicius C. Santos
        </Link>

        <div className="text">&#169; Copyright 2022. Todos os direitos garantidos</div>

        <div className="social-media">
            <a href="https://github.com/ViniciusCavalcanteSantos" target="_blank" rel="noreferrer">
              <i className="fa-brands fa-github"></i>
            </a>

            <a href="https://www.instagram.com/viniciuscsantosoficial" target="_blank" rel="noreferrer">
              <i className="fa-brands fa-instagram"></i>
            </a>
          </div>
      </div>
    </footer>
  );
}