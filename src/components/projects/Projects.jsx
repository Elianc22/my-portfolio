import AOS from "aos";
import "aos/dist/aos.css";
import "./_projectsStyle.scss";
import { useEffect } from "react";

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
    <section className="project">
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
        </div>
        <div data-aos="flip-right">
          <img src="/tres-en-raya-project.png" />
          <article>
            <p className="project-tags">JavaScript</p>
            <p className="project-tags">CSS</p>
            <p className="project-tags">HTML</p>
            <p className="project-tags">ReactJs</p>
          </article>
        </div>
        <div data-aos="flip-right">
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
