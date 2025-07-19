import React, { useContext } from 'react';
import Navbar from './components/Navbar';
import HeroSection from './Components/HeroSection';
import Skills from './Components/Skills';
import Project from './Components/Project';
import Footer from './Components/Footer';
import AnimatedBackground from './Components/AnimatedBackground';
import { ThemeContext, ThemeProvider } from './Components/ThemeContext';
import Contact from './Components/Contact';

function AppContent() {
  const { theme } = useContext(ThemeContext);

  return (
    <div className={`relative min-h-screen overflow-hidden ${theme === 'light' ? 'bg-white' : 'bg-gray-900'}`}>
      <AnimatedBackground />
      <div className="relative z-10">
        <Navbar />
        <HeroSection />
        <Skills />
        <Project />
        <Contact />
        <Footer />
      </div>
    </div>
  );
}

function App() {
  return (
    <ThemeProvider>
      <AppContent />
    </ThemeProvider>
  );
}

export default App;