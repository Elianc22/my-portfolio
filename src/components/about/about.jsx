/* eslint-disable react/prop-types */
import "./_aboutStyle.scss";
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";
import { IoLogoReact } from "react-icons/io5";
import { MdOutlineHtml } from "react-icons/md";
import { SiBootstrap, SiJavascript, SiCss3 } from "react-icons/si";
import { BsGithub } from "react-icons/bs";

const About = () => {
  useEffect(() => {
    AOS.init();
  }, []);

  return (
    <div className="about-container" data-aos="zoom-in-up" id="section-about">
      <p className="about-title">About me 👨‍💻</p>
      <div className="about-content">
        <div className="about-img-container">
          <img src="/about-me-image.jpeg" />
          <div className="about-img-icons">
            <IoLogoReact className="icon-react" />
            <MdOutlineHtml className="icon-html" />
            <SiBootstrap className="icon-bootstrap" />
            <SiJavascript className="icon-javascript" />
            <BsGithub className="icon-github" />
            <SiCss3 className="icon-css" />
          </div>
        </div>
        <div className="about-my-info">
          <p>
            ¡Hola! Mi nombre es Elian Chavez, tengo 22 años y nací en Argentina.
            Hace aproximadamente un año decidí mudarme a Málaga, España en busca
            de nuevas oportunidades y experiencias. Fue aquí donde decidí que
            deseaba dejar de ver la programación como un hobby y tomarlo de
            forma profesional. En 2021 comencé a estudiar programación por
            curiosidad, pero rápidamente me di cuenta de que esto era algo que
            realmente disfrutaba y quería seguir aprendiendo.{" "}
          </p>
          <p>
            {" "}
            Aparte de mi amor por la programación, soy un gran fanático de los
            deportes. Siempre he sido muy activo y disfruto de todo tipo de
            deportes, especialmente el fútbol y el baloncesto. Me gusta
            mantenerme en forma y siempre trabajo en mejorar mi salud y estado
            físico.
          </p>
          <p>
            En mi tiempo libre, uno de mis pasatiempos favoritos es armar cubos
            Rubik. Es algo que me encanta hacer porque me ayuda a relajarme y
            concentrarme. De hecho, mi record personal para resolver un cubo
            Rubik es de 1 minuto.
          </p>
          <p>
            En resumen, soy una persona apasionada por la programación, amante
            de los deportes y siempre trabajando en mejorarme a mí mismo.
            Siempre estoy abierto a nuevas oportunidades y desafíos, y espero
            poder seguir aprendiendo y creciendo en el mundo de la programación
            y más allá.
          </p>
        </div>
      </div>
    </div>
  );
};

export default About;
