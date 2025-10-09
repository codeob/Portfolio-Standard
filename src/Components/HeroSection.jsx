import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

const socialLinks = [
  { name: 'GitHub', icon: 'https://cdn.jsdelivr.net/npm/simple-icons@13.1.0/icons/github.svg', url: 'https://github.com/codeob' },
  { name: 'LinkedIn', icon: 'https://cdn.jsdelivr.net/npm/simple-icons@13.1.0/icons/linkedin.svg', url: 'https://linkedin.com/in/yourusername' },
  { name: 'Email', icon: 'https://cdn.jsdelivr.net/npm/simple-icons@13.1.0/icons/gmail.svg', url: 'mailto:your.email@example.com' },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { 
      duration: 1.2, 
      ease: [0.4, 0, 0.2, 1], 
      staggerChildren: 0.3,
      delayChildren: 0.2
    },
  },
};

const childVariants = {
  hidden: { 
    opacity: 0, 
    y: 50,
    scale: 0.9
  },
  visible: { 
    opacity: 1, 
    y: 0,
    scale: 1,
    transition: { 
      duration: 0.8, 
      ease: [0.4, 0, 0.2, 1] 
    } 
  },
};

const titleVariants = {
  hidden: { 
    opacity: 0, 
    y: 100,
    rotateX: -90
  },
  visible: { 
    opacity: 1, 
    y: 0,
    rotateX: 0,
    transition: { 
      duration: 1.2, 
      ease: [0.4, 0, 0.2, 1],
      delay: 0.3
    } 
  },
};

const buttonVariants = {
  hidden: { 
    opacity: 0, 
    scale: 0.8,
    y: 30
  },
  visible: { 
    opacity: 1, 
    scale: 1,
    y: 0,
    transition: { 
      duration: 0.6, 
      ease: [0.4, 0, 0.2, 1],
      delay: 0.8
    } 
  },
  hover: { 
    scale: 1.05,
    y: -2,
    transition: { duration: 0.3, ease: [0.4, 0, 0.2, 1] } 
  },
  tap: {
    scale: 0.95,
    transition: { duration: 0.1 }
  }
};

const socialVariants = {
  hidden: { 
    opacity: 0, 
    scale: 0.5,
    rotate: -180
  },
  visible: { 
    opacity: 1, 
    scale: 1,
    rotate: 0,
    transition: { 
      duration: 0.8, 
      ease: [0.4, 0, 0.2, 1],
      delay: 1.2
    } 
  },
  hover: { 
    scale: 1.2,
    rotate: 5,
    y: -5,
    transition: { duration: 0.3, ease: [0.4, 0, 0.2, 1] } 
  },
};

function HeroSection() {

  return (
    <motion.section
      id="hero"
      className="relative min-h-screen flex items-center justify-center bg-white overflow-hidden"
      variants={containerVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.3 }}
    >
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <motion.div
          className="absolute top-20 left-10 w-72 h-72 bg-blue-100 rounded-full opacity-20"
          animate={{
            y: [0, -20, 0],
            rotate: [0, 180, 360],
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            ease: "linear"
          }}
        />
        <motion.div
          className="absolute bottom-20 right-10 w-96 h-96 bg-teal-100 rounded-full opacity-20"
          animate={{
            y: [0, 20, 0],
            rotate: [360, 180, 0],
          }}
          transition={{
            duration: 25,
            repeat: Infinity,
            ease: "linear"
          }}
        />
        <motion.div
          className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-purple-100 rounded-full opacity-10"
          animate={{
            scale: [1, 1.2, 1],
            rotate: [0, 90, 180, 270, 360],
          }}
          transition={{
            duration: 15,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16 lg:py-20 relative z-10">
        <div className="text-center">
          <motion.h1 
            className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-extrabold mb-4 sm:mb-6 text-gradient text-reveal"
            variants={titleVariants}
            style={{ fontFamily: 'var(--font-heading)' }}
          >
            <motion.span
              initial={{ opacity: 0, y: 100 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.5 }}
              className="block sm:inline"
            >
              Hello, I'm{' '}
            </motion.span>
            <motion.span 
              className="text-blue-600 block sm:inline"
              initial={{ opacity: 0, scale: 0.5 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: 1 }}
            >
              Obed
            </motion.span>
          </motion.h1>
          
          <motion.h2 
            className="text-lg sm:text-xl md:text-2xl lg:text-3xl font-medium text-gray-600 mb-6 sm:mb-8 px-4"
            variants={childVariants}
            style={{ fontFamily: 'var(--font-body)' }}
          >
            <motion.span
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 1.2 }}
              className="block sm:inline"
            >
              Full Stack Developer
            </motion.span>
            <motion.span
              className="mx-1 sm:mx-2 block sm:inline"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: 1.5 }}
            >
              &
            </motion.span>
            <motion.span
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 1.4 }}
              className="block sm:inline"
            >
              Problem Solver
            </motion.span>
          </motion.h2>
          
          <motion.p 
            className="text-base sm:text-lg lg:text-xl text-gray-600 mb-8 sm:mb-10 lg:mb-12 max-w-xs sm:max-w-lg md:max-w-2xl mx-auto leading-relaxed px-4"
            variants={childVariants}
            style={{ fontFamily: 'var(--font-body)' }}
          >
            I craft seamless, scalable web and mobile solutions that elevate your business. 
            With expertise in React, Node.js, and MongoDB, I turn ideas into impactful digital experiences.
          </motion.p>
          
          <motion.div 
            className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center mb-8 sm:mb-10 lg:mb-12 px-4"
            variants={buttonVariants}
          >
            <motion.a
              href="#projects"
              className="btn-primary inline-flex items-center justify-center px-6 sm:px-8 py-3 sm:py-4 text-base sm:text-lg font-semibold glow w-full sm:w-auto"
              variants={buttonVariants}
              whileHover="hover"
              whileTap="tap"
              style={{ fontFamily: 'var(--font-body)' }}
            >
              <motion.span
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: 1.8 }}
              >
                View My Work
              </motion.span>
            </motion.a>
            <motion.a
              href="#contact"
              className="btn-outline inline-flex items-center justify-center px-6 sm:px-8 py-3 sm:py-4 text-base sm:text-lg font-semibold w-full sm:w-auto"
              variants={buttonVariants}
              whileHover="hover"
              whileTap="tap"
              style={{ fontFamily: 'var(--font-body)' }}
            >
              <motion.span
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: 2 }}
              >
                Get In Touch
              </motion.span>
            </motion.a>
          </motion.div>
          
          <motion.div 
            className="flex justify-center space-x-4 sm:space-x-6 px-4"
            variants={socialVariants}
          >
            {socialLinks.map((link, index) => (
              <motion.a
                key={link.name}
                href={link.url}
                className="w-10 h-10 sm:w-12 sm:h-12 bg-gray-100 rounded-full flex items-center justify-center hover:bg-blue-50 transition-colors duration-200 icon-hover"
                variants={socialVariants}
                whileHover="hover"
                aria-label={`Visit my ${link.name} profile`}
                style={{
                  animationDelay: `${2.2 + index * 0.2}s`
                }}
              >
                <img
                  src={link.icon}
                  alt={link.name}
                  className="w-5 h-5 sm:w-6 sm:h-6"
                />
              </motion.a>
            ))}
          </motion.div>
        </div>
      </div>
    </motion.section>
  );
}

export default HeroSection;