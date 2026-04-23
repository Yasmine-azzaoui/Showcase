import React from 'react';
import Header from './components/Header';
import About from './components/About';
import Projects from './components/Projects';
import Skills from './components/Skills';
import Contact from './components/Contact';
import Footer from './components/Footer';
import Section from './components/Section';

function App() {
  return (
    <>
      <Header />
      <main id="main-content">
        {/* About – default (cream) background */}
        <Section id="about" title="About Me">
          <About />
        </Section>

        {/* Projects – alternate (off-white) background */}
        <Section id="projects" title="My Projects" altBackground>
          <Projects />
        </Section>

        {/* Skills – default (cream) background */}
        <Section id="skills" title="Skills &amp; Expertise">
          <Skills />
        </Section>

        {/* Contact – alternate (off-white) background */}
        <Section id="contact" title="Get In Touch" altBackground>
          <Contact />
        </Section>
      </main>
      <Footer />
    </>
  );
}

export default App;
