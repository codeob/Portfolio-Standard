import React, { useState, useEffect, useContext } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { scroller } from 'react-scroll';
import { ThemeContext } from './ThemeContext';

function Navbar() {
  const { theme, toggleTheme } = useContext(ThemeContext);
  const [showIntro, setShowIntro] = useState(true);
  const [activeSection, setActiveSection] = useState('hero');
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobile, setIsMobile] = useState(window.innerWidth < 768);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowIntro(false);
    }, 3000); // Shortened to 3s for faster load

    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
      const sections = ['hero', 'skills', 'projects', 'footer'];
      const current = sections.find((section) => {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          return rect.top <= 100 && rect.bottom >= 100;
        }
        return false;
      });
      if (current) setActiveSection(current);
    };

    const handleResize = () => {
      setIsMobile(window.innerWidth < 768);
      if (window.innerWidth >= 768) setIsMobileMenuOpen(false);
    };

    window.addEventListener('scroll', handleScroll);
    window.addEventListener('resize', handleResize);
    return () => {
      clearTimeout(timer);
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  const scrollToSection = (sectionId) => {
    scroller.scrollTo(sectionId, {
      duration: 800,
      delay: 0,
      smooth: 'easeInOutQuart',
    });
    if (isMobile) setIsMobileMenuOpen(false);
  };

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  // Massive Airplane Intro Animation
  const AirplaneIntro = () => (
    <AnimatePresence>
      {showIntro && (
        <motion.div
          initial={{ opacity: 0, scale: isMobile ? 0.5 : 0.7, x: '50vw', y: '50vh' }}
          animate={{
            opacity: 1,
            scale: isMobile ? 1 : 1.5,
            rotate: [0, 360, 0],
            x: isMobile ? ['50vw', '40vw', '20vw', '10vw'] : ['50vw', '60vw', '30vw', '5vw'],
            y: isMobile ? ['50vh', '30vh', '15vh', '5vh'] : ['50vh', '20vh', '10vh', '5vh'],
            transition: {
              duration: 3,
              times: [0, 0.5, 0.8, 1],
              ease: 'easeInOut',
              rotate: { duration: 2.5, ease: 'linear' },
            },
          }}
          exit={{ opacity: 0, scale: 0, transition: { duration: 0.5 } }}
          className="fixed z-50 flex items-center justify-center pointer-events-none"
        >
          <div className="relative">
            <svg width={isMobile ? 48 : 72} height={isMobile ? 48 : 72} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path
                d="M2.5 12L21 3.5L15.5 20.5L10 16L12 13L7 14L3.5 9L2.5 12Z"
                fill={theme === 'light' ? '#3B82F6' : '#60A5FA'}
              />
            </svg>
            {/* Particle Trail */}
            {[0, 0.2, 0.4, 0.6].map((delay, i) => (
              <motion.div
                key={i}
                animate={{
                  x: [-10, -30],
                  y: [5, 15],
                  opacity: [0.8, 0],
                  scale: [1, 0.5],
                  transition: { repeat: Infinity, duration: 0.6, delay, ease: 'easeOut' },
                }}
                className={`absolute w-3 h-3 rounded-full ${
                  theme === 'light' ? 'bg-blue-300' : 'bg-blue-400'
                }`}
              />
            ))}
            {/* Glow Effect */}
            <motion.div
              className={`absolute inset-0 rounded-full ${
                theme === 'light' ? 'bg-blue-300' : 'bg-blue-500'
              } opacity-20 blur-xl`}
              animate={{ scale: [1, 1.2, 1], opacity: [0.2, 0.3, 0.2] }}
              transition={{ duration: 1.5, repeat: Infinity, ease: 'easeInOut' }}
            />
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );

  // Logo Animation
  const Logo = () => (
    <motion.div
      className="flex items-center space-x-3"
      initial={{ opacity: 0, scale: 0, rotate: -45 }}
      animate={{ opacity: 1, scale: 1, rotate: 0 }}
      transition={{ duration: 0.8, type: 'spring', stiffness: 100 }}
    >
      <div className="relative">
        <svg width={isMobile ? 36 : 48} height={isMobile ? 36 : 48} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path
            d="M2.5 12L21 3.5L15.5 20.5L10 16L12 13L7 14L3.5 9L2.5 12Z"
            fill={theme === 'light' ? '#3B82F6' : '#60A5FA'}
          />
        </svg>
        <motion.div
          className={`absolute inset-0 rounded-full ${
            theme === 'light' ? 'bg-blue-300' : 'bg-blue-500'
          } opacity-20 blur-lg`}
          animate={{ scale: [1, 1.1, 1], opacity: [0.2, 0.3, 0.2] }}
          transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' }}
        />
      </div>
      <motion.span
        className={`font-bold ${theme === 'light' ? 'text-blue-800' : 'text-blue-200'} ${
          isMobile ? 'text-lg' : 'text-xl'
        } ${theme === 'light' ? 'text-shadow-sm' : 'text-shadow-sm-dark'}`}
        initial={{ opacity: 0, x: -20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.6, delay: 0.2 }}
      >
        TAWIAH OBED
      </motion.span>
    </motion.div>
  );

  // Nav Link Animation
  const navLinkVariants = {
    hidden: { opacity: 0, y: -20 },
    visible: (i) => ({
      opacity: 1,
      y: 0,
      transition: { duration: 0.5, delay: i * 0.1, type: 'spring', stiffness: 120 },
    }),
  };

  // Theme Toggle Animation
  const themeToggleVariants = {
    hidden: { opacity: 0, scale: 0 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: { duration: 0.5, delay: 0.6, type: 'spring', stiffness: 150 },
    },
  };

  return (
    <div>
      <AirplaneIntro />
      <motion.nav
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }} // Immediate load
        className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 backdrop-blur-md shadow-lg ${
          theme === 'light' ? 'bg-white/80' : 'bg-gray-900/80'
        }`}
      >
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-3 sm:py-4">
          <div className="flex items-center justify-between">
            <Logo />
            <div className="hidden md:flex items-center space-x-4 lg:space-x-6">
              {[
                { id: 'hero', label: 'Home' },
                { id: 'skills', label: 'Skills' },
                { id: 'projects', label: 'Projects' },
                { id: 'footer', label: 'Contact' },
                { id: 'cv', label: 'CV', href: '/cv.pdf' },
                { id: 'github', label: 'GitHub', href: 'https://github.com' },
              ].map((item, index) => (
                <motion.button
                  key={item.id}
                  custom={index}
                  variants={navLinkVariants}
                  initial="hidden"
                  animate="visible"
                  onClick={() => (item.href ? window.open(item.href, '_blank') : scrollToSection(item.id))}
                  className={`relative px-2 sm:px-3 py-2 font-medium transition-all duration-300 ${
                    activeSection === item.id && !item.href
                      ? theme === 'light' ? 'text-blue-600' : 'text-blue-400'
                      : theme === 'light' ? 'text-gray-700 hover:text-blue-500' : 'text-gray-300 hover:text-blue-400'
                  } ${isMobile ? 'text-sm' : 'text-base'}`}
                  whileHover={{
                    scale: 1.1,
                    textShadow: theme === 'light' ? '0 0 8px rgba(59, 130, 246, 0.5)' : '0 0 8px rgba(96, 165, 250, 0.5)',
                  }}
                  whileTap={{ scale: 0.95 }}
                >
                  {item.label}
                  {activeSection === item.id && !item.href && (
                    <motion.div
                      layoutId="activeSection"
                      className={`absolute bottom-0 left-0 right-0 h-0.5 ${
                        theme === 'light' ? 'bg-gradient-to-r from-blue-600 to-gold-500' : 'bg-gradient-to-r from-blue-400 to-silver-500'
                      }`}
                      initial={{ scaleX: 0 }}
                      animate={{ scaleX: 1 }}
                      transition={{ duration: 0.3 }}
                    />
                  )}
                </motion.button>
              ))}
              <motion.button
                variants={themeToggleVariants}
                initial="hidden"
                animate="visible"
                onClick={toggleTheme}
                className={`p-2 rounded-full ${
                  theme === 'light' ? 'bg-gray-100 text-gray-700' : 'bg-gray-800 text-gray-300'
                } relative overflow-hidden`}
                whileHover={{
                  scale: 1.1,
                  boxShadow: theme === 'light' ? '0 0 12px rgba(59, 130, 246, 0.5)' : '0 0 12px rgba(96, 165, 250, 0.5)',
                }}
                whileTap={{ scale: 0.95 }}
              >
                <motion.div
                  className={`absolute inset-0 ${
                    theme === 'light' ? 'bg-blue-300' : 'bg-blue-500'
                  } opacity-0`}
                  animate={{ opacity: [0, 0.3, 0], scale: [1, 1.5, 1] }}
                  transition={{ duration: 1.5, repeat: Infinity, ease: 'easeOut' }}
                />
                {theme === 'light' ? (
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <circle cx="12" cy="12" r="5" />
                    <line x1="12" y1="1" x2="12" y2="3" />
                    <line x1="12" y1="21" x2="12" y2="23" />
                    <line x1="4.22" y1="4.22" x2="5.64" y2="5.64" />
                    <line x1="18.36" y1="18.36" x2="19.78" y2="19.78" />
                    <line x1="1" y1="12" x2="3" y2="12" />
                    <line x1="21" y1="12" x2="23" y2="12" />
                    <line x1="4.22" y1="19.78" x2="5.64" y2="18.36" />
                    <line x1="18.36" y1="5.64" x2="19.78" y2="4.22" />
                  </svg>
                ) : (
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z" />
                  </svg>
                )}
              </motion.button>
            </div>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={toggleMobileMenu}
              className={`md:hidden ${theme === 'light' ? 'text-gray-700' : 'text-gray-300'} p-2`}
              variants={themeToggleVariants}
              initial="hidden"
              animate="visible"
            >
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                {isMobileMenuOpen ? (
                  <>
                    <line x1="3" y1="3" x2="21" y2="21" />
                    <line x1="3" y1="21" x2="21" y2="3" />
                  </>
                ) : (
                  <>
                    <line x1="3" y1="6" x2="21" y2="6" />
                    <line x1="3" y1="12" x2="21" y2="12" />
                    <line x1="3" y1="18" x2="21" y2="18" />
                  </>
                )}
              </svg>
            </motion.button>
          </div>
          <AnimatePresence>
            {isMobile && isMobileMenuOpen && (
              <motion.div
                initial={{ height: 0, opacity: 0 }}
                animate={{ height: 'auto', opacity: 1 }}
                exit={{ height: 0, opacity: 0 }}
                transition={{ duration: 0.3 }}
                className={`md:hidden ${theme === 'light' ? 'bg-white' : 'bg-gray-900'} mt-2 rounded-lg overflow-hidden shadow-lg`}
              >
                {[
                  { id: 'hero', label: 'Home' },
                  { id: 'skills', label: 'Skills' },
                  { id: 'projects', label: 'Projects' },
                  { id: 'footer', label: 'Contact' },
                  { id: 'cv', label: 'CV', href: '/cv.pdf' },
                  { id: 'github', label: 'GitHub', href: 'https://github.com' },
                ].map((item, index) => (
                  <motion.button
                    key={item.id}
                    custom={index}
                    variants={navLinkVariants}
                    initial="hidden"
                    animate="visible"
                    onClick={() => (item.href ? window.open(item.href, '_blank') : scrollToSection(item.id))}
                    className={`block w-full text-left px-4 py-3 text-sm font-medium ${
                      activeSection === item.id && !item.href
                        ? theme === 'light' ? 'text-blue-600' : 'text-blue-400'
                        : theme === 'light' ? 'text-gray-700 hover:text-blue-500' : 'text-gray-300 hover:text-blue-400'
                    }`}
                    whileHover={{
                      backgroundColor: theme === 'light' ? 'rgba(59, 130, 246, 0.1)' : 'rgba(96, 165, 250, 0.1)',
                      scale: 1.05,
                    }}
                  >
                    {item.label}
                  </motion.button>
                ))}
                <motion.button
                  variants={themeToggleVariants}
                  initial="hidden"
                  animate="visible"
                  onClick={toggleTheme}
                  className={`block w-full text-left px-4 py-3 text-sm font-medium ${
                    theme === 'light' ? 'text-gray-700 hover:text-blue-500' : 'text-gray-300 hover:text-blue-400'
                  }`}
                  whileHover={{
                    backgroundColor: theme === 'light' ? 'rgba(59, 130, 246, 0.1)' : 'rgba(96, 165, 250, 0.1)',
                    scale: 1.05,
                  }}
                >
                  {theme === 'light' ? 'Dark Mode' : 'Light Mode'}
                </motion.button>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </motion.nav>
    </div>
  );
}

export default Navbar;