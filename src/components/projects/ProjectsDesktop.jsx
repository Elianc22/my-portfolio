const ProjectsDesktop = () => {
  return (
    <aside className="project-cards-container">
      <div data-aos="flip-right">
        <a
          href="https://github.com/Elianc22/Rick-and-Morty-Project"
          target="_blank"
          rel="noreferrer"
        >
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
        </a>
      </div>
      <div data-aos="flip-right">
        <a
          href="https://github.com/Elianc22/tres-en-raya"
          target="_blank"
          data-aos="flip-right"
          rel="noreferrer"
        >
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
        </a>
      </div>
      <div data-aos="flip-right">
        <a
          href="https://github.com/Elianc22/carrito-de-la-compra"
          target="_blank"
          data-aos="flip-right"
          rel="noreferrer"
        >
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
        </a>
      </div>
    </aside>
  );
};

export default ProjectsDesktop;
