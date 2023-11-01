import React from "react";
import About from "../About/About";
import Banner from "../Banner/Banner";
import Contact from "../Contact/Contact";
import Experience from "../Experience/Experience";
import Projects from "../Projects/Projects";

const Home = ({ isLoading, setIsLoading }) => {
  return (
    <div id="home">
      <Banner />
      <Experience />
      <About />
      <Projects />
      <Contact />
    </div>
  );
};

export default Home;
