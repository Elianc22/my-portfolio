import Header from "./header/header";
import Home from "./home/home";
import "./_layout.scss";

const Layout = () => {
  return (
    <div className="layout-container">
      <Header />
      <Home />
    </div>
  );
};

export default Layout;
