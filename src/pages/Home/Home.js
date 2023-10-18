import React from "react";
import About from "../About/About";
import Banner from "../Banner/Banner";
import Contact from "../Contact/Contact";
import Experience from "../Experience/Experience";
import Projects from "../Projects/Projects";

const Home = ({ projects, setProjects }) => {
  return (
    <div id="home">
      <Banner></Banner>
      <Experience></Experience>
      <About></About>
      <Projects projects={projects} setProjects={setProjects}></Projects>
      <Contact></Contact>
    </div>
  );
};

export default Home;
