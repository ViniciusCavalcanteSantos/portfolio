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
  const imagesInfo = [
    {title: "Projeto responsivo de dashboard feito para a escola ETE", type: "projects"},
    {title: "Página de equipe com informações vindas do banco de dados", type: "projects"},
    {title: "Site de notícias produzido em 2021, com dashboard interativa", type: "projects"},
    {title: "Equipe de Desenvolvimento Web ETEEM, da qual fiz parte em 2022", type: "people"},
    {title: "Uma descrição padráo um descrição padráo", type: "people"},
    {title: "Uma descrição padráo um descrição padráo", type: "projects"}
  ];

  const imagesElement = imagesInfo.map((imageInfo, i) => {
    return (
      <div className={"mix portifolio-item " + imageInfo.type} key={i}>
        <figure>
          <img src={images[i]} alt="" />

          <div className="port-overlay">
            <i className="fa-solid fa-magnifying-glass-plus" style={{"--i" : "0s"}} onClick={() => openModal(i)}></i>

            <a href={images[i]} target="_blank">
              <i className="fa-solid fa-file" style={{"--i" : ".15s"}}></i>
            </a>
          </div>
        </figure>
      
        <h3 className="desc">
          {imageInfo.title}
        </h3>
      </div>
    )
  })

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
          {imagesElement}
        </div>
      </div>
    </section>
  )
}