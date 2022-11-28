import { useState, useEffect } from "react";
import { useLocation } from 'react-router-dom';

import Header from "./components/header";
import Introduction from "./components/introduction";
import About from "./components/about";
import Portifolio from "./components/portifolio";
import Contact from "./components/contact";
import Footer from "./components/footer";
import './App.css';

function App() {
  const [activeLink, setActiveLink] = useState("home");

  // Lida com a ativação e desativação dos Links
  useEffect(() => {
    activeLinkHandler(setActiveLink)
    window.addEventListener("scroll", () => activeLinkHandler(setActiveLink));
  }, [])

  // Lida com o scroll da página feita pelos links
  const { pathname, hash, key } = useLocation();
  useEffect(() => {
    if(hash === "") {
      window.scrollTo(0, 0);
    } else {
      setTimeout(() => {
        const id = hash.replace("#", "");
        const element = document.getElementById(id);

        if(element) {
          element.scrollIntoView();
        }
      }, 0);
    }
  }, [ pathname, hash, key ]);

  return (
    <div className="App">
      <Header activeLink={activeLink} />
      <main>
        <Introduction/>
        <About />
        <Portifolio />
        <Contact />
        <Footer />
      </main>
    </div>
  );
}

function activeLinkHandler(setActiveLink) {
  const sections = document.querySelectorAll("section[id]");
  const passedSection = Array.from(sections).filter((section) => {
    return section.getBoundingClientRect().top - 160 <= 0;
  }).at(-1);

  setActiveLink(passedSection.id);
}

export default App;
