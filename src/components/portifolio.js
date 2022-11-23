import { useRef, useEffect } from "react";
import mixitup from "mixitup";

import Modal, { openModal } from "./modal";
import port1 from "../assets/port1.jpg";
import port2 from "../assets/port2.jpg";
import port3 from "../assets/port3.jpg";
import port4 from "../assets/port4.jpg";
import port5 from "../assets/port5.jpg";
import port6 from "../assets/port6.jpg";
import "./portifolio.css";

export default function Portifolio() {
  const images = [port1, port2, port3, port4, port5, port6];
  
  useEffect(() => {
    setTimeout(() => {
      mixitup(".portifolio-gallery", {
        selectors: {
          target: ".portifolio-item"
        },
        animation: {
          duration: 500
        }
      });
    }, 0);
  }, []);

  return (
    <section id="portifolio" className="portifolio">
      <Modal images={images} />

      <div className="container">
        <div className="portifolio-header">
          <div className="box-heading">
            <h2 className="subtitle">Portifólio</h2>
            <h1 className="title">Meus projetos</h1>
          </div>

          <div className="filter-btns">
            <button className="filter-btn" data-filter="all">Tudo</button>
            <button className="filter-btn" data-filter=".projects">Projetos</button>
            <button className="filter-btn" data-filter=".people">Pessoas</button>
          </div>
        </div>

        <div className="portifolio-gallery" id="MixItUp56E572">
          <div className="mix portifolio-item projects">
            <figure>
              <img src={port1} alt="" />

              <div className="port-overlay">
                <i className="fa-solid fa-magnifying-glass-plus" style={{"--i" : "0s"}} onClick={() => openModal(0)}></i>

                <a href={port1} target="_blank">
                  <i className="fa-solid fa-file" style={{"--i" : ".15s"}}></i>
                </a>
              </div>
            </figure>
          
            <h3 className="desc">
              Projeto responsivo de dashboard feito para a escola ETE
            </h3>
          </div>
          <div className="mix portifolio-item projects">
            <figure>
              <img src={port2} alt="" />

              <div className="port-overlay">
                <i className="fa-solid fa-magnifying-glass-plus" style={{"--i" : "0s"}} onClick={() => openModal(1)}></i>

                <a href={port1} target="_blank">
                  <i className="fa-solid fa-file" style={{"--i" : ".15s"}}></i>
                </a>
              </div>
            </figure>

            <h3 className="desc">
              Página de equipe com informações vindas do banco de dados
            </h3>
          </div>
          <div className="mix portifolio-item projects">
            <figure>
              <img src={port3} alt="" />

              <div className="port-overlay">
                <i className="fa-solid fa-magnifying-glass-plus" style={{"--i" : "0s"}} onClick={() => openModal(2)}></i>

                <a href={port3} target="_blank">
                  <i className="fa-solid fa-file" style={{"--i" : ".15s"}}></i>
                </a>
              </div>
            </figure>

            <h3 className="desc">
              Site de notícias produzido em 2021, com dashboard interativa
            </h3>
          </div>
          <div className="mix portifolio-item people">
            <figure>
              <img src={port4} alt="" />

              <div className="port-overlay">
                <i className="fa-solid fa-magnifying-glass-plus" style={{"--i" : "0s"}} onClick={() => openModal(3)}></i>

                <a href={port4} target="_blank">
                  <i className="fa-solid fa-file" style={{"--i" : ".15s"}}></i>
                </a>
              </div>
            </figure>

            <h3 className="desc">
              Equipe de Desenvolvimento Web ETEEM, da qual fiz parte em 2022
            </h3>
          </div>
          <div className="mix portifolio-item people">
            <figure>
              <img src={port5} alt="" />

              <div className="port-overlay">
                <i className="fa-solid fa-magnifying-glass-plus" style={{"--i" : "0s"}} onClick={() => openModal(4)}></i>

                <a href={port5} target="_blank">
                  <i className="fa-solid fa-file" style={{"--i" : ".15s"}}></i>
                </a>
              </div>
            </figure>

            <h3 className="desc">
              Um descrição padráo um descrição padráo
            </h3>
          </div>
          <div className="mix portifolio-item projects">
            <figure>
              <img src={port6} alt="" />

              <div className="port-overlay">
                <i className="fa-solid fa-magnifying-glass-plus" style={{"--i" : "0s"}} onClick={() => openModal(5)}></i>

                <a href={port6} target="_blank">
                  <i className="fa-solid fa-file" style={{"--i" : ".15s"}}></i>
                </a>
              </div>
            </figure>

            <h3 className="desc">
              Um descrição padráo um descrição padráo
            </h3>
          </div>
        </div>
      </div>
    </section>
  )
}