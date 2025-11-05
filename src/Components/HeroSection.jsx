import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

const socialLinks = [
  { name: 'GitHub', icon: 'https://cdn.jsdelivr.net/npm/simple-icons@13.1.0/icons/github.svg', url: 'https://github.com/codeob' },
  { name: 'LinkedIn', icon: 'https://cdn.jsdelivr.net/npm/simple-icons@13.1.0/icons/linkedin.svg', url: 'https://linkedin.com/in/yourusername' },
  { name: 'Twitter', icon: 'https://cdn.jsdelivr.net/npm/simple-icons@13.1.0/icons/x.svg', url: 'https://twitter.com/yourusername' },
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
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
      style={{ background: '#0A0E27' }}
      variants={containerVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.3 }}
    >

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          
          {/* Left Column - Text Content */}
          <motion.div
            className="text-left lg:pr-8"
            variants={containerVariants}
          >
            {/* Professional Badge */}
            <motion.div
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full mb-6"
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              style={{
                background: 'rgba(59, 130, 246, 0.1)',
                border: '1px solid rgba(59, 130, 246, 0.3)'
              }}
            >
              <span className="w-2 h-2 rounded-full" style={{ background: '#10B981' }}></span>
              <span 
                className="text-sm font-medium"
                style={{ color: 'var(--text-secondary)', fontFamily: 'var(--font-body)' }}
              >
                Available for new opportunities
              </span>
            </motion.div>

            {/* Name */}
            <motion.h1 
              className="text-5xl sm:text-6xl lg:text-7xl font-bold mb-4"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              style={{ 
                fontFamily: 'var(--font-heading)',
                color: 'var(--text-primary)',
                lineHeight: '1.1'
              }}
            >
              Obed Tawiah
            </motion.h1>

            {/* Title with Gradient */}
            <motion.div
              className="mb-6"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
            >
              <h2 
                className="text-3xl sm:text-4xl lg:text-5xl font-bold"
                style={{ 
                  fontFamily: 'var(--font-heading)',
                  color: 'var(--primary-blue)'
                }}
              >
                Full Stack Developer
              </h2>
              <p
                className="text-xl sm:text-2xl mt-2"
                style={{ 
                  fontFamily: 'var(--font-heading)',
                  color: 'var(--text-secondary)',
                  fontWeight: 500
                }}
              >
                Crafting Digital Excellence
              </p>
            </motion.div>
            
            {/* Professional Description */}
            <motion.p
              className="text-base sm:text-lg mb-8 leading-relaxed"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.5 }}
              style={{ 
                fontFamily: 'var(--font-body)',
                color: 'var(--text-secondary)',
                maxWidth: '540px'
              }}
            >
              Specializing in building scalable web applications with modern JavaScript frameworks. 
              Passionate about creating intuitive user experiences and writing clean, maintainable code 
              that drives business value.
            </motion.p>

            {/* Stats */}
            <motion.div
              className="flex flex-wrap gap-8 mb-8"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.6 }}
            >
              {[
                { number: '1/2+', label: 'Years Experience' },
                { number: '9+', label: 'Projects Completed' },
                { number: '20+', label: 'Technologies' }
              ].map((stat, index) => (
                <div key={index}>
                  <div 
                    className="text-3xl font-bold"
                    style={{ 
                      fontFamily: 'var(--font-heading)',
                      color: 'var(--primary-blue)'
                    }}
                  >
                    {stat.number}
                  </div>
                  <div 
                    className="text-sm"
                    style={{ 
                      fontFamily: 'var(--font-body)',
                      color: 'var(--text-secondary)'
                    }}
                  >
                    {stat.label}
                  </div>
                </div>
              ))}
            </motion.div>

            {/* CTA Buttons */}
            <motion.div 
              className="flex flex-col sm:flex-row gap-4 mb-8"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.7 }}
            >
              <motion.a
                href="#projects"
                className="inline-flex items-center justify-center gap-2 px-8 py-4 text-base font-semibold rounded-xl"
                whileHover={{ y: -2 }}
                whileTap={{ scale: 0.98 }}
                style={{ 
                  fontFamily: 'var(--font-body)',
                  background: 'var(--primary-blue)',
                  color: '#FFFFFF',
                  boxShadow: '0 4px 20px rgba(59, 130, 246, 0.3)'
                }}
              >
                <span>Explore My Work</span>
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </motion.a>
              <motion.a
                href="#contact"
                className="inline-flex items-center justify-center gap-2 px-8 py-4 text-base font-semibold rounded-xl"
                whileHover={{ y: -2 }}
                whileTap={{ scale: 0.98 }}
                style={{ 
                  fontFamily: 'var(--font-body)',
                  background: 'rgba(59, 130, 246, 0.1)',
                  color: 'var(--primary-blue)',
                  border: '1px solid var(--primary-blue)'
                }}
              >
                <span>Let's Connect</span>
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
              </motion.a>
            </motion.div>

            {/* Social Links with Labels */}
            <motion.div 
              className="flex items-center gap-6"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.8 }}
            >
              <span 
                className="text-sm font-medium"
                style={{ color: 'var(--text-secondary)', fontFamily: 'var(--font-body)' }}
              >
                Connect:
              </span>
              <div className="flex space-x-3">
                {socialLinks.map((link, index) => (
                  <motion.a
                    key={link.name}
                    href={link.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-10 h-10 rounded-lg flex items-center justify-center"
                    whileHover={{ 
                      y: -3,
                      borderColor: 'var(--primary-blue)',
                      background: 'rgba(59, 130, 246, 0.1)'
                    }}
                    aria-label={`Visit my ${link.name} profile`}
                    style={{
                      background: 'var(--background-card)',
                      border: '1px solid var(--divider-border)',
                      transition: 'all 0.3s'
                    }}
                  >
                    <img
                      src={link.icon}
                      alt={link.name}
                      className="w-5 h-5"
                      style={{ filter: 'brightness(0) saturate(100%) invert(56%) sepia(93%) saturate(4366%) hue-rotate(201deg) brightness(97%) contrast(97%)' }}
                    />
                  </motion.a>
                ))}
              </div>
            </motion.div>
          </motion.div>

          {/* Right Column - Visual Element */}
          <motion.div
            className="hidden lg:flex items-center justify-center"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            <div className="relative">
              {/* Decorative circles */}
              <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
                <motion.div
                  className="w-80 h-80 rounded-full"
                  style={{
                    background: 'radial-gradient(circle, rgba(59, 130, 246, 0.12) 0%, transparent 70%)',
                    filter: 'blur(40px)'
                  }}
                  animate={{
                    scale: [1, 1.2, 1],
                    opacity: [0.4, 0.6, 0.4]
                  }}
                  transition={{
                    duration: 4,
                    repeat: Infinity,
                    ease: "easeInOut"
                  }}
                />
              </div>
              <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
                <motion.div
                  className="w-64 h-64 rounded-full"
                  style={{
                    background: 'radial-gradient(circle, rgba(6, 182, 212, 0.15) 0%, transparent 70%)',
                    filter: 'blur(30px)'
                  }}
                  animate={{
                    scale: [1.2, 1, 1.2],
                    opacity: [0.2, 0.4, 0.2]
                  }}
                  transition={{
                    duration: 5,
                    repeat: Infinity,
                    ease: "easeInOut"
                  }}
                />
              </div>

              {/* Tech Stack Floating Elements */}
              <div className="relative w-96 h-96 flex items-center justify-center">
                {['React', 'Node.js', 'TypeScript', 'MongoDB', 'Next.js', 'Tailwind'].map((tech, index) => (
                  <motion.div
                    key={tech}
                    className="absolute px-4 py-2 rounded-lg text-sm font-mono"
                    style={{
                      background: 'var(--background-card)',
                      border: '1px solid var(--divider-border)',
                      color: 'var(--primary-blue)',
                      backdropFilter: 'blur(10px)',
                      left: `${50 + 40 * Math.cos((index * Math.PI * 2) / 6 - Math.PI / 2)}%`,
                      top: `${50 + 40 * Math.sin((index * Math.PI * 2) / 6 - Math.PI / 2)}%`,
                      transform: 'translate(-50%, -50%)'
                    }}
                    animate={{
                      y: [0, -10, 0],
                      opacity: [0.7, 1, 0.7]
                    }}
                    transition={{
                      duration: 3,
                      repeat: Infinity,
                      delay: index * 0.3,
                      ease: "easeInOut"
                    }}
                  >
                    {tech}
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </motion.section>
  );
}

export default HeroSection;