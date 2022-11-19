import { Link } from "react-router-dom";

import "./introduction.css";
import devPerson from "../assets/dev-person.svg";
import Button from "./Button";

export default function Introduction() {
  return (
    <section id="home" className="introduction">
      <div className="container">
        <div className="info">
          <h2 className="subtitle">Desenvolvedor Web</h2>
          <h1 className="title">Olá!, meu nome é Vinicius</h1>
          <p className="text">Este site foi feito com React. Eu sou um Desenvolvedor Web independente, vamos trabalhar juntos!</p>
          <div className="cta">
            <Button to="#contato">
              Contate-me
            </Button>

            <Button buttonStyle="btn-outline">
              Baixar curriculo
            </Button>
          </div>
        </div>
        <div className="img-container">
          <img src={devPerson} alt="" />
        </div>
      </div>
    </section>
  )
}
