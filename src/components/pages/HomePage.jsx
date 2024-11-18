import { useEffect } from "react";
import Navbar from "./homepage-comps/Navbar";
import Home from "./homepage-comps/Home";
import About from "./homepage-comps/About";
import MyProjects from "./homepage-comps/MyProjects";
import Techs from "./homepage-comps/Techs";
import Contact from "./homepage-comps/Contact";
import CertificateSlider from "./homepage-comps/CertificateSlider";

const HomePage = () => {
  const certificates = [{ image: "/images/certificates/1.jpg" }];

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      <Navbar />
      <Home />
      <About />
      <MyProjects />
      <Techs />
      <CertificateSlider certificates={certificates} />
      <Contact />
    </>
  );
};

export default HomePage;
