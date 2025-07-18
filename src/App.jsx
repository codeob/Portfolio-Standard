import React, { useContext } from 'react';
import Navbar from './components/Navbar';
import HeroSection from './components/HeroSection';
import Skills from './components/Skills';
import Project from './components/Project';
import Footer from './components/Footer';
import AnimatedBackground from './components/AnimatedBackground';
import { ThemeContext, ThemeProvider } from './components/ThemeContext';

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