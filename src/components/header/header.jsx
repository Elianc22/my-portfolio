/* eslint-disable no-undef */
/* eslint-disable react/prop-types */
import { isMobile } from "react-device-detect";
import "./_headerStyle.scss";

const Header = () => {
  const headerContainerStyles = isMobile
    ? "header-container-mobile"
    : "header-container";

  return (
    <header className={headerContainerStyles}>
      {isMobile ? (
        ""
      ) : (
        <div className="header-logo">
          <div className="header-logo-circle" />
          <p className="header-logo-name">EC</p>
        </div>
      )}

      <div className="header-nav">
        <a href="#section-home">HOME</a>
        <a href="#section-projects">PROJECTS</a>
        <a href="#section-about">ABOUT</a>
        <a href="#section-contact">CONTACT</a>
      </div>
    </header>
  );
};

export default Header;
