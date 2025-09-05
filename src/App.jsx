import React, { useEffect, useRef } from 'react';
import { motion, useViewportScroll, useTransform } from 'framer-motion';
import Navbar from './Components/Navbar';
import HeroSection from './Components/HeroSection';
import Skills from './Components/Skills';
import Project from './Components/Project';
import Contact from './Components/Contact';
import Footer from './Components/Footer';
import './index.css';

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { duration: 0.8, ease: 'easeInOut' },
  },
};

function App() {
  const sections = ['hero', 'skills', 'projects', 'contact', 'footer'];
  const scrollRef = useRef(null);
  const { scrollYProgress } = useViewportScroll();
  const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0.8]);

  useEffect(() => {
    let currentIndex = 0;
    let isScrolling = false;
    const hasScrolled = sessionStorage.getItem('autoScrollDone');

    const scrollToNext = () => {
      if (currentIndex >= sections.length || isScrolling) return;

      isScrolling = true;
      const element = document.getElementById(sections[currentIndex]);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }
      currentIndex++;
      if (currentIndex < sections.length) {
        setTimeout(scrollToNext, 3000);
      } else {
        sessionStorage.setItem('autoScrollDone', 'true');
      }
      setTimeout(() => (isScrolling = false), 1000);
    };

    if (!hasScrolled) {
      scrollToNext();
    }

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
      sessionStorage.removeItem('autoScrollDone');
    };
  }, []);

  return (
    <motion.div
      className="relative min-h-screen px-4 sm:px-6 lg:px-8 dark:bg-[var(--background)] dark:text-[var(--primary-text)]"
      variants={containerVariants}
      initial="hidden"
      animate="visible"
      style={{ opacity }}
      ref={scrollRef}
    >
      <Navbar />
      <main>
        <HeroSection />
        <Skills />
        <Project />
        <Contact />
      </main>
      <Footer />
    </motion.div>
  );
}

export default App;