// Import necessary React hooks and components
import React, { useEffect, useRef, useState, useMemo } from 'react';
// Import animation components from Framer Motion
import { motion, AnimatePresence } from 'framer-motion';
// Import all the component files for the portfolio sections
import Navbar from './Components/Navbar';
import HeroSection from './Components/HeroSection';
import About from './Components/About';
import Skills from './Components/Skills';
import Project from './Components/Project';
import Contact from './Components/Contact';
import Footer from './Components/Footer';
import ResumeModal from './Components/ResumeModal';

// Import global CSS styles
import ScrollProgress from './Components/ScrollProgress';
// Animation variants for the main container fade-in effect
import './index.css';

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { duration: 0.8, ease: 'easeInOut' },
// Main App component function
  },
// State to control whether the resume modal is open
};
// Array of section IDs for scroll-based animations, memoized to avoid re-creation

// Ref for the scroll container
function App() {
// Function to open the resume modal
  const [isResumeModalOpen, setIsResumeModalOpen] = useState(false);
  const sections = useMemo(() => ['hero', 'about', 'skills', 'projects', 'contact', 'footer'], []);
  const scrollRef = useRef(null);
// Function to close the resume modal

  const handleResumeClick = () => {
    setIsResumeModalOpen(true);
// useEffect hook to set up Intersection Observer for scroll animations
  };
// Create an Intersection Observer to detect when sections come into view

// Callback function for the observer: adds/removes 'in-view' class based on intersection
  const closeResumeModal = () => {
// Threshold of 0.2 means the animation triggers when 20% of the element is visible
    setIsResumeModalOpen(false);
  };

// Loop through each section ID and observe the corresponding element
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
// Cleanup function to disconnect the observer when component unmounts
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('in-view');
// Dependency array includes sections to re-run when sections change
          } else {
            entry.target.classList.remove('in-view');
          }
        });
      },
// Return JSX: Fragment to avoid unnecessary wrapper div
      { threshold: 0.2 }
// Motion div with animation variants for the main container
    );
// Inline style for background color

// Ref attached to the motion div for scroll reference
    sections.forEach((id) => {
// Scroll progress component for visual scroll indicator
      const element = document.getElementById(id);
// Navbar component with resume click handler passed as prop
      if (element) observer.observe(element);
// Main content area containing all portfolio sections
    });
// About section with resume click handler passed as prop

    return () => {
      observer.disconnect();
    };
  }, [sections]);
// AnimatePresence for modal animations, conditionally renders ResumeModal

// ResumeModal component with close handler passed as prop


  return (
// Export the App component as default
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