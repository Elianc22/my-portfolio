import About from "./about/about";
import Header from "./header/header";
import Home from "./home/home";
import "./_layout.scss";
import Projects from "./projects/Projects";

const Layout = () => {
  return (
    <div className="layout-container">
      <Header />
      <Home />
      <Projects />
      <About />
    </div>
  );
};

export default Layout;
