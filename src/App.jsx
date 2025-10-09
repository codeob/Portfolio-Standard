import React, { useEffect, useRef, useState } from 'react';
import { motion, useViewportScroll, useTransform } from 'framer-motion';
import Navbar from './Components/Navbar';
import HeroSection from './Components/HeroSection';
import About from './Components/About';
import Skills from './Components/Skills';
import Project from './Components/Project';
import Contact from './Components/Contact';
import Footer from './Components/Footer';
import LoadingScreen from './Components/LoadingScreen';
import ScrollProgress from './Components/ScrollProgress';
import './index.css';

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { duration: 0.8, ease: 'easeInOut' },
  },
};

function App() {
  const [isLoading, setIsLoading] = useState(true);
  const sections = ['hero', 'about', 'skills', 'projects', 'contact', 'footer'];
  const scrollRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('in-view');
          } else {
            entry.target.classList.remove('in-view');
          }
        });
      },
      { threshold: 0.2 }
    );

    sections.forEach((id) => {
      const element = document.getElementById(id);
      if (element) observer.observe(element);
    });

    return () => {
      observer.disconnect();
    };
  }, []);

  const handleLoadingComplete = () => {
    setIsLoading(false);
  };

  return (
    <>
      {isLoading && <LoadingScreen onComplete={handleLoadingComplete} />}
      
      <motion.div
        className="relative min-h-screen bg-white"
        variants={containerVariants}
        initial="hidden"
        animate={isLoading ? "hidden" : "visible"}
        ref={scrollRef}
      >
        <ScrollProgress />
        <Navbar />
        <main>
          <HeroSection />
          <About />
          <Skills />
          <Project />
          <Contact />
        </main>
        <Footer />
      </motion.div>
    </>
  );
}

export default App;