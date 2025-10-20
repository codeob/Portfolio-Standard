import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { AiOutlineRuby } from 'react-icons/ai';

const navLinks = [
  { name: 'Home', href: '#hero' },
  { name: 'About', href: '#about' },
  { name: 'Skills', href: '#skills' },
  { name: 'Projects', href: '#projects' },
  { name: 'Contact', href: '#contact' },
];

const containerVariants = {
  hidden: { opacity: 0, y: -20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: 'easeOut' },
  },
};

const linkVariants = {
  hidden: { opacity: 0, y: -10 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.4 } },
  hover: {
    color: 'var(--accent-blue)',
    transition: { duration: 0.2, ease: 'easeOut' },
  },
};

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [activeLink, setActiveLink] = useState('Home');
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const handleLinkClick = (linkName) => {
    setActiveLink(linkName);
    setIsOpen(false);
  };

  return (
    <motion.nav
      className="fixed top-0 left-0 w-full backdrop-blur-lg z-50 transition-all duration-300"
      style={{
        background: scrolled ? 'rgba(10, 14, 39, 0.98)' : 'rgba(10, 14, 39, 0.8)',
        borderBottom: `1px solid ${scrolled ? 'var(--divider-border)' : 'rgba(59, 130, 246, 0.1)'}`,
        boxShadow: scrolled ? '0 4px 24px rgba(59, 130, 246, 0.1)' : 'none'
      }}
      variants={containerVariants}
      initial="hidden"
      animate="visible"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex justify-between items-center">
        <motion.a
          href="#hero"
          className="flex items-center gap-2 text-xl sm:text-2xl font-bold"
          variants={linkVariants}
          whileHover={{ scale: 1.05 }}
          style={{
            fontFamily: 'var(--font-heading)',
            color: 'var(--text-primary)'
          }}
        >
          <AiOutlineRuby style={{ color: 'var(--primary-blue)', fontSize: '2rem' }} />
          <span>Obed</span>
        </motion.a>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center space-x-8 lg:space-x-10">
          {navLinks.map((link) => (
            <motion.a
              key={link.name}
              href={link.href}
              className="relative text-base font-medium transition-all duration-200"
              variants={linkVariants}
              whileHover={{ scale: 1.1, y: -2 }}
              onClick={() => handleLinkClick(link.name)}
              style={{
                fontFamily: 'var(--font-body)',
                color: activeLink === link.name ? '#00FFD1' : '#B0B3B8'
              }}
            >
              {link.name}
              {activeLink === link.name && (
                <motion.div
                  className="absolute -bottom-1 left-0 right-0 h-0.5"
                  style={{ background: 'var(--primary-blue)' }}
                  layoutId="activeIndicator"
                  transition={{ type: "spring", stiffness: 300, damping: 30 }}
                />
              )}
            </motion.a>
          ))}
          <motion.a
            href="/resume.pdf"
            download
            className="px-5 py-2.5 rounded-lg font-semibold transition-all duration-300"
            whileHover={{ scale: 1.05, y: -2 }}
            whileTap={{ scale: 0.95 }}
            style={{
              fontFamily: 'var(--font-body)',
              background: 'var(--primary-blue)',
              color: '#FFFFFF',
              boxShadow: '0 2px 12px rgba(59, 130, 246, 0.3)'
            }}
          >
            Resume
          </motion.a>
        </div>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden focus:outline-none p-2"
          onClick={toggleMenu}
          aria-label="Toggle menu"
          style={{ color: 'var(--primary-blue)' }}
        >
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d={isOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16m-7 6h7"}></path>
          </svg>
        </button>
      </div>

      {/* Mobile Navigation */}
      <motion.div
        className={`md:hidden ${
          isOpen ? 'block' : 'hidden'
        }`}
        style={{
          background: 'rgba(10, 14, 39, 0.98)',
          borderTop: '1px solid var(--divider-border)',
          backdropFilter: 'blur(10px)'
        }}
        initial={{ opacity: 0, height: 0 }}
        animate={{ opacity: isOpen ? 1 : 0, height: isOpen ? 'auto' : 0 }}
        transition={{ duration: 0.3 }}
      >
        <div className="px-6 py-6 space-y-4">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="block text-base font-medium transition-colors duration-200 py-2"
              onClick={() => handleLinkClick(link.name)}
              style={{
                fontFamily: 'var(--font-body)',
                color: activeLink === link.name ? '#00FFD1' : '#B0B3B8'
              }}
            >
              {link.name}
            </a>
          ))}
          <a
            href="/resume.pdf"
            download
            className="block text-base font-medium py-2 px-4 rounded-lg text-center"
            style={{
              fontFamily: 'var(--font-body)',
              border: '2px solid var(--primary-blue)',
              color: 'var(--primary-blue)',
              background: 'transparent'
            }}
          >
            Download Resume
          </a>
        </div>
      </motion.div>
    </motion.nav>
  );
}

export default Navbar;