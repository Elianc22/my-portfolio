import AOS from "aos";
import "aos/dist/aos.css";
import "./_projectsStyle.scss";
import { useEffect } from "react";

// eslint-disable-next-line react/prop-types
const Projects = () => {
  useEffect(() => {
    AOS.init({
      duration: 800,
      delay: 100,
      offset: 200,
      easing: "ease-in-quad",
    });
  }, []);

  return (
    <section className="project" id="section-projects">
      <p className="project-title">My Projects 💻</p>
      <aside className="project-cards-container">
        <div data-aos="flip-right">
          <img src="/rick-and-morty-project.png" />
          <article>
            <p className="project-tags">JavaScript</p>
            <p className="project-tags">SCSS</p>
            <p className="project-tags">CSS</p>
            <p className="project-tags">HTML</p>
            <p className="project-tags">ReactJs</p>
          </article>
          <footer>
            <p className="title-card">WIKI RICK&MORTY</p>
            <p className="subtitle-card">
              Web con feature de login y signup que permite al usuario
              visualizar cards de los personajes una vez han iniciado sesión.
              Tambien incluye un feature de favoritos que añade tus cards
              favoritas a una lista personalizada.
            </p>
          </footer>
        </div>
        <div data-aos="flip-right">
          <img src="/tres-en-raya-project.png" />
          <article>
            <p className="project-tags">JavaScript</p>
            <p className="project-tags">CSS</p>
            <p className="project-tags">HTML</p>
            <p className="project-tags">ReactJs</p>
          </article>
          <footer>
            <p className="title-card">TIC TAC TOE</p>
            <p className="subtitle-card">
              Juego creado con React que deja saber al usuario de quien es el
              turno de jugar, permite resetear el juego y muestra un modal al
              finalizar el juego comunicando quien ha sido el ganador.
            </p>
          </footer>
        </div>
        <div data-aos="flip-right">
          <img src="/shopping-cart-project.png" />
          <article>
            <p className="project-tags">JavaScript</p>
            <p className="project-tags">CSS</p>
            <p className="project-tags">HTML</p>
            <p className="project-tags">ReactJs</p>
          </article>
          <footer>
            <p className="title-card">SHOPPING CART</p>
            <p className="subtitle-card">
              Pagina con lista de productos que permite añadirlos al carrito de
              la compra y filtrar por precio minimo y categoria.
            </p>
          </footer>
        </div>
      </aside>
    </section>
  );
};

export default Projects;
