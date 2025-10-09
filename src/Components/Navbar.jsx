import React, { useState } from 'react';
import { motion } from 'framer-motion';

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
  
  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const handleLinkClick = (linkName) => {
    setActiveLink(linkName);
    setIsOpen(false);
  };

  return (
    <motion.nav
      className="fixed top-0 left-0 w-full bg-white/80 backdrop-blur-sm border-b border-gray-200 shadow-sm z-50"
      variants={containerVariants}
      initial="hidden"
      animate="visible"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-3 sm:py-4 flex justify-between items-center">
        <motion.div
          className="text-lg sm:text-xl font-bold text-gradient"
          variants={linkVariants}
          style={{ fontFamily: 'var(--font-heading)' }}
        >
          Tawiah Obed
        </motion.div>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center space-x-6 lg:space-x-8">
          {navLinks.map((link) => (
            <motion.a
              key={link.name}
              href={link.href}
              className={`relative text-sm font-medium transition-all duration-200 ${
                activeLink === link.name
                  ? 'text-blue-600'
                  : 'text-gray-700 hover:text-blue-600'
              }`}
              variants={linkVariants}
              whileHover="hover"
              onClick={() => handleLinkClick(link.name)}
              style={{ fontFamily: 'var(--font-body)' }}
            >
              {link.name}
              {activeLink === link.name && (
                <motion.div
                  className="absolute -bottom-1 left-0 right-0 h-0.5 bg-blue-600"
                  layoutId="activeIndicator"
                  transition={{ type: "spring", stiffness: 300, damping: 30 }}
                />
              )}
            </motion.a>
          ))}
        </div>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden text-gray-700 focus:outline-none p-2"
          onClick={toggleMenu}
          aria-label="Toggle menu"
        >
          <svg className="w-5 h-5 sm:w-6 sm:h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d={isOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16m-7 6h7"}></path>
          </svg>
        </button>
      </div>

      {/* Mobile Navigation */}
      <motion.div
        className={`md:hidden bg-white border-t border-gray-200 ${
          isOpen ? 'block' : 'hidden'
        }`}
        initial={{ opacity: 0, height: 0 }}
        animate={{ opacity: isOpen ? 1 : 0, height: isOpen ? 'auto' : 0 }}
        transition={{ duration: 0.3 }}
      >
        <div className="px-4 sm:px-6 py-4 space-y-3 sm:space-y-4">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className={`block text-sm sm:text-base font-medium transition-colors duration-200 py-2 ${
                activeLink === link.name
                  ? 'text-blue-600'
                  : 'text-gray-700 hover:text-blue-600'
              }`}
              onClick={() => handleLinkClick(link.name)}
              style={{ fontFamily: 'var(--font-body)' }}
            >
              {link.name}
            </a>
          ))}
        </div>
      </motion.div>
    </motion.nav>
  );
}

export default Navbar;