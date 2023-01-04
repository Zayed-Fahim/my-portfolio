import React from 'react';
import About from '../About/About';
import Banner from '../Banner/Banner';
import Contact from '../Contact/Contact';
import Experience from '../Experience/Experience';

const Home = () => {
    return (
      <div>
        <Banner></Banner>
        <Experience></Experience>
        <About></About>
        <Contact></Contact>
      </div>
    );
};

export default Home;