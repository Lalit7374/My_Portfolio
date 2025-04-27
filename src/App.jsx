import React from 'react';
import './App.css';
import Header from './components/Header';
import Banner from './components/Banner';
import About from './components/About';
import Projects from './components/Projects';
import Expertise from './components/Expertise';
import Email from './components/Email';
import Footer from './components/Footer';

function App() {
  return (
    <>
      <Header />
      <div id="home">
        <Banner />
      </div>
      <div id="about">
        <About />
      </div>
      <div id="projects">
        <Projects />
      </div>
      <div id="expertise">
        <Expertise />
      </div>
      <div id="contact">
        <Email />
      </div>
      <Footer></Footer>
    </>
  );
}

export default App;
