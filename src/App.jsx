import React, { useRef } from "react";
import Header from "./components/Header";
import Home from "./pages/Home";
import Ourservices from "./pages/Ourservices";
import About from "./pages/About";
import Ourrecentprojects from "./pages/Ourrecentprojects";
import Contactus from "./pages/Contactus";
import Footer from "./components/Footer";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

function App() {
  const homeRef = useRef(null);
  const servicesRef = useRef(null);
  const aboutRef = useRef(null);
  const projectsRef = useRef(null);
  const contactRef = useRef(null);

  return (
    <div>
      <Header
        homeRef={homeRef}
        servicesRef={servicesRef}
        aboutRef={aboutRef}
        projectsRef={projectsRef}
        contactRef={contactRef}
      />
      <div ref={homeRef}>
        <Home />
      </div>
      <div ref={servicesRef}>
        <Ourservices />
      </div>
      <div ref={aboutRef}>
        <About />
      </div>
      <div ref={projectsRef}>
        <Ourrecentprojects />
      </div>
      <div ref={contactRef}>
        <Contactus />
      </div>
      <Footer />
    </div>
  );
}

export default App;
