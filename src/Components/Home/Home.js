import React from "react";

import About from "./../About/About";
import AboutMe from "./AboutMe/AboutMe";
import Contact from "./Contact/Contact";
import Footer from "./../Footer/Footer";
import MyServices from "./../MyServices/MyServices";
import Header from "./../Header/Header";

const Home = () => {
  return (
    <div>
      <Header></Header>
      <AboutMe></AboutMe>
      <div className="my-services">
        <MyServices></MyServices>
        <About> </About>
        <Contact></Contact>
        <Footer></Footer>
      </div>
    </div>
  );
};

export default Home;
