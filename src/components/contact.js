import "./contact.css";

export default function Contact() {

  return (
    <section id="contato" className="contact">
      <div className="container">
        <div className="box-heading">
          <h2 className="subtitle">Contate-me</h2>
          <h1 className="title">Vamos trabalhar juntos</h1>
          <p className="text">Meu nome é Vinicius, eu programo há 5 anos e já trabalhei em diversos projetos pessoais e profissionais, contate-me.</p>

          <a href="mailto:viniciuscsantosoficial@gmail.com" className="mail">viniciuscsantosoficial@gmail.com <i className="fa-solid fa-arrow-right"></i></a>

          <div className="social-media">
            <a href="https://github.com/ViniciusCavalcanteSantos" target="_blank" rel="noreferrer">
              <i className="fa-brands fa-github"></i>
            </a>

            <a href="https://www.instagram.com/viniciuscsantosoficial" target="_blank" rel="noreferrer">
              <i className="fa-brands fa-instagram"></i>
            </a>
          </div>
        </div>

        <form className="form-contact">
          <h3>Envie-me uma mensagem!</h3>

          <input type="text" className="form-input" placeholder="Seu nome" required maxLength="80" />
          <input type="email" className="form-input" placeholder="Seu email" required maxLength="80" />
          <textarea className="form-input" placeholder="Detalhes do projeto" required maxLength="260" />
          <input type="submit" value="Enviar" className="btn"/>
        </form>
      </div>
    </section>
  );
}