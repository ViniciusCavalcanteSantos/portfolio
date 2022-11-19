import { useEffect } from "react";
import "./about.css";

export default function About() {

  useEffect(() => {
    const intersectionObserver = new IntersectionObserver((entries) => {
      if(entries.some(entry => entry.isIntersecting)) {
        skillsCounterHandler();
      }
    });

    intersectionObserver.observe(document.querySelector(".skills"))
  }, []);

  return (
    <section id="sobre" className="about">
      <div className="container">
        <div className="skills-box">
          <div className="box-heading">
            <h2 className="subtitle">Minhas Habilidades</h2>
            <h1 className="title">Deixe-me ajudá-lo</h1>
            <p className="text">Lorem ipsum dolor sit amet consectetur adipisicing elit. Soluta, qui officiis excepturi labore explicabo reprehenderit, possimus blanditiis nostrum ducimus inventore suscipit repudiandae id accusantium eligendi deserunt maxime. Quo, nisi magnam!</p>
          </div>

          <ul className="skills">
            <li className="skill-item">
              <div className="skill-progress">
                <svg>
                  <circle cx="75" cy="75" r="68"></circle>
                </svg>
                <h2 className="counter">
                  <span data-target="100">0</span>%
                </h2>
              </div>
              <div className="skill-title">HTML</div>
            </li>
            <li className="skill-item">
              <div className="skill-progress">
                <svg>
                  <circle cx="75" cy="75" r="68"></circle>
                </svg>
                <h2 className="counter">
                  <span data-target="80">0</span>%
                </h2>
              </div>
              <div className="skill-title">CSS</div>
            </li>
            <li className="skill-item">
              <div className="skill-progress">
                <svg>
                  <circle cx="75" cy="75" r="68"></circle>
                </svg>
                <h2 className="counter">
                  <span data-target="94">0</span>%
                </h2>
              </div>
              <div className="skill-title">Javascript</div>
            </li>
            <li className="skill-item">
              <div className="skill-progress">
                <svg>
                  <circle cx="75" cy="75" r="68"></circle>
                </svg>
                <h2 className="counter">
                  <span data-target="77">0</span>%
                </h2>
              </div>
              <div className="skill-title">PHP</div>
            </li>
          </ul>
        </div>
      </div>
    </section>
  )
}

function skillsCounterHandler() {
  const counters = document.querySelectorAll(".about .skills .counter span");
  const circles = document.querySelectorAll(".about .skills .skill-progress svg circle");

  counters.forEach((counter, i) => {
    const target = +counter.dataset.target; // Obtém o valor a ser atingido pelo contador
    const strokeValue = 427 - 427 * (target / 100); // Calcula a porcentagem da circunfência a ser preenchida

    circles[i].style.setProperty("stroke-dashoffset", strokeValue);
    setTimeout(() => updateCount(counter, target), 400);
  });
}

/**
 * Incrementa o valor do contador
 * 
 * @param {Element} counter
 * @param {Number} maxNum
 */
function updateCount(counter, maxNum) {
  let currentNum = +counter.innerText;

  if(currentNum < maxNum) {
    counter.innerText = `${currentNum + 1}`;

    setTimeout(() => updateCount(counter, maxNum), 12);
  }
}
