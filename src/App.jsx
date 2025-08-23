import React, { useState } from 'react';
import Navbar from './components/Navbar';
import Home from './components/Home';
import About from './components/About';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Achievements from './components/Achievements';
import Contact from './components/Contact';
import Footer from './components/Footer';

function App() {
  const [activeSection, setActiveSection] = useState('Home');

  const renderSection = () => {
    switch (activeSection) {
      case 'About':
        return <About />;
      case 'Skills':
        return <Skills />;
      case 'Projects':
        return <Projects />;
      case 'Achievements':
        return <Achievements />;
      case 'Contact':
        return <Contact />;
      default:
        return <Home setActiveSection={setActiveSection} />;
    }
  };

  return (
    <div className="relative flex min-h-screen">
      <Navbar setActiveSection={setActiveSection} activeSection={activeSection} />
      <div className="flex-1 flex flex-col min-h-screen">
        <main className="flex-1 overflow-y-auto p-8">
          {renderSection()}
        </main>
        <Footer />
      </div>
    </div>
  );
}

export default App;