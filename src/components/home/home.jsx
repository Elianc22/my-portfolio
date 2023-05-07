import "./_homeStyle.scss";

const Home = () => {
  return (
    <div className="home-container">
      <div className="home-img">
        <img
          className="profile-image"
          alt="profile-image"
          src="/portfolio.png"
        ></img>
      </div>
      <section className="home-text-container">
        <div className="home-main-title">
          <p>ELIAN CHAVEZ</p>
        </div>
        <div className="home-subtitle">
          <p className="subtitle-phrase">I am a Front-end</p>
          <p className="subtitle-word">Developer</p>
        </div>
        <div className="home-icons">
          <a
            href="https://www.linkedin.com/in/elian-chavez-ferreyra-04758a238/"
            target="_blank"
            rel="noreferrer"
          >
            <i className="bi bi-linkedin" />
          </a>
          <a
            href="https://mail.google.com/mail/?view=cm&fs=1&tf=1&to=chavezelian2000@gmail.com"
            target="_blank"
            rel="noreferrer"
          >
            <i className="bi bi-envelope-at-fill" />
          </a>
          <a
            href="https://github.com/Elianc22?tab=repositories"
            target="_blank"
            rel="noreferrer"
          >
            <i className="bi bi-github" />
          </a>
        </div>
      </section>
    </div>
  );
};

export default Home;
