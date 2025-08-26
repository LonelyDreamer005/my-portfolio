import React from 'react';
import Navbar from './components/Navbar';
import Home from './components/Home';
import About from './components/About';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Achievements from './components/Achievements';
import Contact from './components/Contact';
import Footer from './components/Footer';

function App() {
  // Create refs for each section for smooth scrolling
  const homeRef = React.useRef(null);
  const aboutRef = React.useRef(null);
  const skillsRef = React.useRef(null);
  const projectsRef = React.useRef(null);
  const achievementsRef = React.useRef(null);
  const contactRef = React.useRef(null);

  const scrollToSection = (sectionId) => {
    const sectionRefs = {
      'Home': homeRef,
      'About': aboutRef,
      'Skills': skillsRef,
      'Projects': projectsRef,
      'Achievements': achievementsRef,
      'Contact': contactRef
    };
    
    const ref = sectionRefs[sectionId];
    if (ref && ref.current) {
      // Add offset for fixed navbar
      const yOffset = -80; 
      const element = ref.current;
      const y = element.getBoundingClientRect().top + window.pageYOffset + yOffset;
      
      window.scrollTo({top: y, behavior: 'smooth'});
    }
  };

  return (
    <div className="relative min-h-screen bg-[#FAFAFA]">
      <Navbar scrollToSection={scrollToSection} />
      <main className="pt-16">  {/* Add padding for fixed navbar */}
        <div ref={homeRef} id="home">
          <Home scrollToSection={scrollToSection} />
        </div>
        <div ref={aboutRef} id="about">
          <About />
        </div>
        <div ref={skillsRef} id="skills">
          <Skills />
        </div>
        <div ref={projectsRef} id="projects">
          <Projects />
        </div>
        <div ref={achievementsRef} id="achievements">
          <Achievements />
        </div>
        <div ref={contactRef} id="contact">
          <Contact />
        </div>
      </main>
      <Footer />
    </div>
  );
}

export default App;