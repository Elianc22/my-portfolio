import About from "./about/about";
import Header from "./header/header";
import Home from "./home/home";
import "./_layout.scss";
import Projects from "./projects/Projects";
import Contact from "../contact/Contact";

const Layout = () => {
  return (
    <div className="layout-container">
      <Header />
      <Home />
      <Projects />
      <About />
      <Contact />
    </div>
  );
};

export default Layout;
