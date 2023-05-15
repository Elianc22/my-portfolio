/* eslint-disable react/prop-types */
import "./_aboutStyle.scss";
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";
import { isMobile } from "react-device-detect";
import AboutMobile from "./AboutMobile";
import AboutDesktop from "./AboutDesktop";

const About = () => {
  useEffect(() => {
    AOS.init();
  }, []);

  const aboutContainerStyles = isMobile
    ? "about-container-mobile"
    : "about-container";

  return (
    <div
      className={aboutContainerStyles}
      data-aos="zoom-in-up"
      id="section-about"
    >
      <p className="about-title">About me 👨‍💻</p>
      {isMobile ? <AboutMobile /> : <AboutDesktop />}
    </div>
  );
};

export default About;
