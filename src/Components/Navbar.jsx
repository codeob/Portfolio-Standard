import React, { useState } from 'react';
import { motion } from 'framer-motion';

const navLinks = [
  { name: 'Home', href: '#hero' },
  { name: 'Skills', href: '#skills' },
  { name: 'Projects', href: '#projects' },
  { name: 'Contact', href: '#contact' },
];

const socialLinks = [
  { name: 'GitHub', icon: 'https://cdn.jsdelivr.net/npm/simple-icons@13.1.0/icons/github.svg', url: 'https://github.com/codeob', color: '#181717' },
  { name: 'LinkedIn', icon: 'https://cdn.jsdelivr.net/npm/simple-icons@13.1.0/icons/linkedin.svg', url: 'https://linkedin.com/in/yourusername', color: '#0A66C2' },
  { name: 'CV', icon: 'https://cdn.jsdelivr.net/npm/simple-icons@13.1.0/icons/adobeacrobatreader.svg', url: '/path/to/your-cv.pdf', color: '#D97706' },
];

const containerVariants = {
  hidden: { opacity: 0, y: -50 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.8, ease: 'easeInOut', staggerChildren: 0.1 },
  },
};

const linkVariants = {
  hidden: { opacity: 0, y: -20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
  hover: {
    scale: 1.05,
    color: '#2563EB',
    transition: { duration: 0.3, ease: 'easeOut' },
  },
};

const socialVariants = {
  hidden: { opacity: 0, scale: 0.8 },
  visible: { opacity: 1, scale: 1, transition: { duration: 0.5 } },
  hover: { scale: 1.1, transition: { duration: 0.3, ease: 'easeOut' } },
};

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <motion.nav
      className="fixed top-0 left-0 w-full bg-[#E5E7EB] border-b border-[#9CA3AF] shadow-md z-20"
      variants={containerVariants}
      initial="hidden"
      animate="visible"
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-2 flex justify-between items-center">
        <motion.div
          className="text-lg sm:text-xl lg:text-2xl font-bold font-sans text-[#D97706]"
          variants={linkVariants}
        >
          Tawiah Obed
        </motion.div>

        <button
          className="lg:hidden text-[#1F2937] focus:outline-none"
          onClick={toggleMenu}
          aria-label="Toggle menu"
        >
          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d={isOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16m-7 6h7"}></path>
          </svg>
        </button>

        <div
          className={`${
            isOpen ? 'flex' : 'hidden'
          } lg:flex flex-col lg:flex-row absolute lg:static top-12 left-0 w-full lg:w-auto bg-[#E5E7EB] lg:bg-transparent shadow-lg lg:shadow-none z-10 lg:items-center gap-3 lg:gap-4 p-4 lg:p-0 transition-all duration-300`}
        >
          <div className="flex flex-col lg:flex-row gap-2 lg:gap-3">
            {navLinks.map((link) => (
              <motion.a
                key={link.name}
                href={link.href}
                className="text-xs sm:text-sm font-sans font-medium text-[#1F2937] hover:text-[#2563EB] transition-all duration-300 hover:scale-105 hover:shadow-md"
                variants={linkVariants}
                whileHover="hover"
                style={{ pointerEvents: 'auto', zIndex: 20 }}
                onClick={() => setIsOpen(false)}
              >
                {link.name}
              </motion.a>
            ))}
          </div>
          <div className="flex flex-col lg:flex-row gap-2 mt-3 lg:mt-0">
            {socialLinks.map((link) => (
              <motion.a
                key={link.name}
                href={link.url}
                className="relative group hover:scale-110 hover:shadow-md transition-all duration-300"
                variants={socialVariants}
                whileHover="hover"
                style={{ pointerEvents: 'auto', zIndex: 20 }}
                onClick={() => setIsOpen(false)}
              >
                <img
                  src={link.icon}
                  alt={link.name}
                  className="w-4 h-4 sm:w-5 sm:h-5"
                  style={{ filter: 'drop-shadow(0 0 4px rgba(37, 99, 235, 0.6))' }}
                />
                <motion.div
                  className="absolute inset-0 rounded-full"
                  style={{ background: link.color, opacity: 0.3, filter: 'blur(10px)' }}
                  initial={{ scale: 0, opacity: 0 }}
                  whileHover={{ scale: 1.3, opacity: 0.6, transition: { duration: 0.3, ease: 'easeOut' } }}
                />
              </motion.a>
            ))}
          </div>
        </div>
      </div>
    </motion.nav>
  );
}

export default Navbar;