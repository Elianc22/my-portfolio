import AOS from "aos";
import "aos/dist/aos.css";
import "./_projectsStyle.scss";
import { useEffect } from "react";
import { isMobile } from "react-device-detect";
import ProjectsMobile from "./ProjectsMobile";
import ProjectsDesktop from "./ProjectsDesktop";

// eslint-disable-next-line react/prop-types
const Projects = () => {
  useEffect(() => {
    AOS.init({
      duration: 800,
      delay: 100,
      offset: 200,
      easing: "ease-in-quad",
    });
  }, []);

  const projectsStyles = isMobile ? "project-mobile" : "project";

  return (
    <section className={projectsStyles} id="section-projects">
      <p className="project-title">My Projects 💻</p>
      {isMobile ? <ProjectsMobile /> : <ProjectsDesktop />}
    </section>
  );
};

export default Projects;
