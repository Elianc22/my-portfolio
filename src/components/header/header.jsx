import "./_headerStyle.scss";

const Header = () => {
  return (
    <header className="header-container">
      <div className="header-logo">
        <div className="header-logo-circle" />
        <p className="header-logo-name">EC</p>
      </div>
      <div className="header-nav">
        <a>HOME</a>
        <a>ABOUT</a>
        <a>PROYECTS</a>
        <a>CONTACT</a>
      </div>
    </header>
  );
};

export default Header;
