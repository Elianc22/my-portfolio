const AboutMobile = () => {
  return (
    <div className="about-content">
      <div className="about-my-info">
        <p>
          ¡Hola! Mi nombre es Elian Chavez, tengo 22 años y nací en Argentina.
          Hace aproximadamente un año decidí mudarme a Málaga, España en busca
          de nuevas oportunidades y experiencias. Fue aquí donde decidí que
          deseaba dejar de ver la programación como un hobby y tomarlo de forma
          profesional. En 2021 comencé a estudiar programación por curiosidad,
          pero rápidamente me di cuenta de que esto era algo que realmente
          disfrutaba y quería seguir aprendiendo.{" "}
        </p>
        <p>
          {" "}
          Aparte de mi amor por la programación, soy un gran fanático de los
          deportes. Siempre he sido muy activo y disfruto de todo tipo de
          deportes, especialmente el fútbol y el baloncesto. Me gusta mantenerme
          en forma y siempre trabajo en mejorar mi salud y estado físico.
        </p>
        <p>
          En mi tiempo libre, uno de mis pasatiempos favoritos es armar cubos
          Rubik. Es algo que me encanta hacer porque me ayuda a relajarme y
          concentrarme. De hecho, mi record personal para resolver un cubo Rubik
          es de 1 minuto.
        </p>
        <p>
          En resumen, soy una persona apasionada por la programación, amante de
          los deportes y siempre trabajando en mejorarme a mí mismo. Siempre
          estoy abierto a nuevas oportunidades y desafíos, y espero poder seguir
          aprendiendo y creciendo en el mundo de la programación y más allá.
        </p>
      </div>
      <a
        href="./elian_chavez_cv.docx.pdf"
        download={"elian_chavez_cv.docx.pdf"}
      >
        <button className="cv-button" type="button">
          Download CV
        </button>
      </a>
    </div>
  );
};

export default AboutMobile;
