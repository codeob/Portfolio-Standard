import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import MyProfile from '../assets/MyProfile.jpg';

const socialLinks = [
  { name: 'GitHub', icon: 'https://cdn.jsdelivr.net/npm/simple-icons@13.1.0/icons/github.svg', url: 'https://github.com/codeob', color: '#FFFFFF' },
  { name: 'LinkedIn', icon: 'https://cdn.jsdelivr.net/npm/simple-icons@13.1.0/icons/linkedin.svg', url: 'https://linkedin.com/in/yourusername', color: '#FFFFFF' },
  { name: 'CV', icon: 'https://cdn.jsdelivr.net/npm/simple-icons@13.1.0/icons/adobeacrobatreader.svg', url: '/path/to/your-cv.pdf', color: '#FFFFFF' },
];

const taglines = ['Web Developer', 'Problem Solver', 'Innovator'];

const containerVariants = {
  hidden: { opacity: 0, y: 50 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 1.2, ease: 'easeInOut', staggerChildren: 0.3 },
  },
};

const childVariants = {
  hidden: { opacity: 0, y: 30, scale: 0.95 },
  visible: { opacity: 1, y: 0, scale: 1, transition: { duration: 0.8, ease: 'easeInOut' } },
};

const buttonVariants = {
  hover: { scale: 1.1, boxShadow: '0 0 15px #00FF88', transition: { duration: 0.3, ease: 'easeOut' } },
};

const socialVariants = {
  hidden: { opacity: 0, scale: 0.8 },
  visible: { opacity: 1, scale: 1, transition: { duration: 0.5 } },
  hover: { scale: 1.2, rotate: 5, boxShadow: '0 0 12px #00FF88', transition: { duration: 0.3, ease: 'easeOut' } },
};

function HeroSection() {
  const [currentTagline, setCurrentTagline] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentTagline((prev) => (prev + 1) % taglines.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  return (
    <motion.section
      id="hero"
      className="relative min-h-screen flex items-center justify-center px-4 sm:px-6 lg:px-8 py-16 bg-[#000000]"
      variants={containerVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: false, amount: 0.3 }}
      style={{ zIndex: 10 }}
    >
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute w-64 h-64 bg-[var(--accent-blue)]/10 rounded-full filter blur-3xl top-10 left-10 animate-pulse" />
        <div className="absolute w-64 h-64 bg-[var(--accent-purple)]/10 rounded-full filter blur-3xl bottom-10 right-10 animate-pulse" />
      </div>
      <div className="container mx-auto flex flex-col lg:flex-row items-center justify-between gap-12">
        <motion.div className="max-w-lg lg:w-3/5" variants={childVariants}>
          <h1 className="text-3xl sm:text-5xl font-bold font-sans mb-4" style={{ background: 'linear-gradient(45deg, #00D4FF, #8A2BE2)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}>
            Hi, I’m Tawiah Obed
          </h1>
          <motion.h2
            className="text-lg sm:text-xl font-semibold font-sans text-[var(--secondary-text)] mb-6"
            key={currentTagline}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.5, ease: 'easeInOut' }}
          >
            Your <span className="text-[var(--accent-blue)]">{taglines[currentTagline]}</span>
          </motion.h2>
          <p className="text-base sm:text-lg font-sans text-[var(--secondary-text)] mb-8">
            I’m a passionate Full Stack Developer crafting seamless, scalable web and mobile solutions to elevate your business. With expertise in React, Node.js, and MongoDB, I turn ideas into impactful digital experiences.
          </p>
          <div className="flex gap-4">
            <motion.a
              href="#projects"
              className="inline-block px-6 py-3 rounded-lg font-sans text-sm sm:text-base font-semibold text-[var(--primary-text)] bg-[var(--accent-blue)] border border-[var(--accent-blue)] shadow-[0_0_10px_var(--accent-blue)]"
              variants={buttonVariants}
              whileHover="hover"
              whileTap={{ scale: 0.95 }}
              style={{ pointerEvents: 'auto', zIndex: 10 }}
              aria-label="Explore my projects"
            >
              Explore My Work
            </motion.a>
            <motion.a
              href="#contact"
              className="inline-block px-6 py-3 rounded-lg font-sans text-sm sm:text-base font-semibold text-[var(--primary-text)] bg-[var(--accent-green)] border border-[var(--accent-green)] shadow-[0_0_10px_var(--accent-green)]"
              variants={buttonVariants}
              whileHover="hover"
              whileTap={{ scale: 0.95 }}
              style={{ pointerEvents: 'auto', zIndex: 10 }}
              aria-label="Contact me"
            >
              Contact Me
            </motion.a>
          </div>
          <motion.div className="flex gap-4 mt-8" variants={childVariants}>
            {socialLinks.map((link) => (
              <motion.a
                key={link.name}
                href={link.url}
                className="relative group"
                variants={socialVariants}
                whileHover="hover"
                style={{ pointerEvents: 'auto', zIndex: 10 }}
                aria-label={`Visit my ${link.name} profile`}
              >
                <img
                  src={link.icon}
                  alt={link.name}
                  className="w-8 h-8"
                  style={{ filter: 'brightness(0) invert(1) drop-shadow(0 0 6px var(--accent-blue))' }}
                />
                <motion.div
                  className="absolute inset-0 rounded-full"
                  style={{ background: 'var(--accent-blue)', opacity: 0.3, filter: 'blur(12px)' }}
                  initial={{ scale: 0, opacity: 0 }}
                  whileHover={{ scale: 1.4, opacity: 0.6, transition: { duration: 0.3, ease: 'easeOut' } }}
                />
                <motion.span
                  className="absolute left-1/2 -translate-x-1/2 bottom-10 bg-[var(--hover-bg)] text-[var(--primary-text)] text-xs font-sans px-2 py-1 rounded opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                  initial={{ y: 10, opacity: 0 }}
                  whileHover={{ y: 0, opacity: 1 }}
                >
                  {link.name}
                </motion.span>
              </motion.a>
            ))}
          </motion.div>
          <motion.div
            className="mt-8 p-6 rounded-lg bg-[var(--hover-bg)] border border-[var(--divider-border)] shadow-[0_0_10px_var(--accent-purple)]"
            variants={childVariants}
          >
            <h3 className="text-lg font-semibold font-sans text-[var(--accent-purple)] mb-4">
              About Me
            </h3>
            <p className="text-sm sm:text-base font-sans text-[var(--secondary-text)]">
              As a Full Stack Developer, I thrive on turning complex challenges into elegant solutions. With a strong foundation in React, Node.js, and MongoDB, I specialize in building responsive, user-friendly applications that drive business success. My mission is to deliver innovative, high-quality projects that exceed client expectations while embracing the latest technologies.
            </p>
          </motion.div>
        </motion.div>
        <motion.div
          className="w-64 sm:w-80 h-64 sm:h-80"
          variants={childVariants}
          whileHover={{ scale: 1.05, rotate: 3, transition: { duration: 0.3, ease: 'easeOut' } }}
        >
          <img
            src={MyProfile}
            alt="Tawiah Obed"
            className="w-full h-full rounded-full object-cover border-4 border-[var(--accent-blue)] shadow-[0_0_15px_var(--accent-blue)] transition-all duration-300"
          />
        </motion.div>
      </div>
    </motion.section>
  );
}

export default HeroSection;