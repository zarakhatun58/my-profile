import React from "react";

import About from "./../About/About";
import AboutMe from "./AboutMe/AboutMe";
import MyServices from "./../MyServices/MyServices";
import Projects from "./../Projects/Projects";
import Contact from "./Contact/Contact";

const Home = () => {
  return (
    <div>
      <AboutMe></AboutMe>

      <MyServices></MyServices>
      <Projects></Projects>
      <About> </About>
      <Contact></Contact>
    </div>
  );
};

export default Home;
