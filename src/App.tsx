import React, { useState } from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import About from './components/About';
import Services from './components/Services';
import ProjectCarousel from './components/ProjectCarousel';
import Contact from './components/Contact';
import Footer from './components/Footer';

function App() {
  const [activeSection, setActiveSection] = useState('home');

  const scrollToSection = (sectionId: string) => {
    setActiveSection(sectionId);
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="min-h-screen font-sans">
      <Header 
        activeSection={activeSection} 
        setActiveSection={scrollToSection} 
      />
      
      <main>
        <div id="home">
          <Hero setActiveSection={scrollToSection} />
        </div>
        
        <div id="about">
          <About />
        </div>
        
        <div id="services">
          <Services />
        </div>
        
        <div id="projects">
          <ProjectCarousel />
        </div>
        
        <div id="contact">
          <Contact />
        </div>
      </main>
      
      <Footer />
    </div>
  );
}

export default App;