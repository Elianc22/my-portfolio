import "./_homeStyle.scss";

const Home = () => {
  return (
    <div className="home-container">
      <div className="home-img">
        <img
          className="profile-image"
          alt="profile-image"
          src="/img-portfolio.png"
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
          <i className="bi bi-linkedin"></i>
          <i className="bi bi-envelope-at-fill"></i>
          <i className="bi bi-github"></i>
        </div>
      </section>
    </div>
  );
};

export default Home;
