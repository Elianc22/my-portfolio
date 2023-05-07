import "./_projectsStyle.scss";

const Projects = () => {
  return (
    <section className="project">
      <p className="project-title">My Projects 💻</p>
      <aside className="project-cards-container">
        <div>
          <img src="/rick-and-morty-project.png" />
          <article>
            <p className="project-tags">JavaScript</p>
            <p className="project-tags">SCSS</p>
            <p className="project-tags">CSS</p>
            <p className="project-tags">HTML</p>
            <p className="project-tags">ReactJs</p>
          </article>
        </div>
        <div>
          <img src="/tres-en-raya-project.png" />
          <article>
            <p className="project-tags">JavaScript</p>
            <p className="project-tags">CSS</p>
            <p className="project-tags">HTML</p>
            <p className="project-tags">ReactJs</p>
          </article>
        </div>
        <div>
          <img src="/shopping-cart-project.png" />
          <article>
            <p className="project-tags">JavaScript</p>
            <p className="project-tags">CSS</p>
            <p className="project-tags">HTML</p>
            <p className="project-tags">ReactJs</p>
          </article>
        </div>
      </aside>
    </section>
  );
};

export default Projects;
