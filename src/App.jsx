import React, { useEffect, useRef, useState, useMemo } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Navbar from './Components/Navbar';
import HeroSection from './Components/HeroSection';
import About from './Components/About';
import Skills from './Components/Skills';
import Project from './Components/Project';
import Contact from './Components/Contact';
import Footer from './Components/Footer';
import ResumeModal from './Components/ResumeModal';

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
  const [isResumeModalOpen, setIsResumeModalOpen] = useState(false);
  const sections = useMemo(() => ['hero', 'about', 'skills', 'projects', 'contact', 'footer'], []);
  const scrollRef = useRef(null);

  const handleResumeClick = () => {
    setIsResumeModalOpen(true);
  };

  const closeResumeModal = () => {
    setIsResumeModalOpen(false);
  };

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
  }, [sections]);



  return (
    <>
      <motion.div
        className="relative min-h-screen"
        style={{ background: '#0A0E27' }}
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        ref={scrollRef}
      >
        <ScrollProgress />
        <Navbar onResumeClick={handleResumeClick} />
        <main>
          <HeroSection />
          <About onResumeClick={handleResumeClick} />
          <Skills />
          <Project />
          <Contact />
        </main>
        <Footer />
        <AnimatePresence>
          {isResumeModalOpen && <ResumeModal key="resume-modal" onClose={closeResumeModal} />}
        </AnimatePresence>
      </motion.div>
    </>
  );
}

export default App;