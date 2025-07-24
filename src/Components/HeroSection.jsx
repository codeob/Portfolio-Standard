import React from 'react';
import { motion } from 'framer-motion';

const socialLinks = [
  { name: 'GitHub', icon: 'https://cdn.jsdelivr.net/npm/simple-icons@13.1.0/icons/github.svg', url: 'https://github.com/codeob', color: '#181717' },
  { name: 'LinkedIn', icon: 'https://cdn.jsdelivr.net/npm/simple-icons@13.1.0/icons/linkedin.svg', url: 'https://linkedin.com/in/yourusername', color: '#0A66C2' },
  { name: 'CV', icon: 'https://cdn.jsdelivr.net/npm/simple-icons@13.1.0/icons/adobeacrobatreader.svg', url: '/path/to/your-cv.pdf', color: '#D97706' },
];

const containerVariants = {
  hidden: { opacity: 0, scale: 0.9 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: { duration: 1, ease: 'easeInOut', staggerChildren: 0.2 },
  },
};

const childVariants = {
  hidden: { opacity: 0, y: 20, scale: 0.9 },
  visible: { opacity: 1, y: 0, scale: 1, transition: { duration: 0.6, ease: 'easeInOut' } },
};

const buttonVariants = {
  hover: { scale: 1.05, boxShadow: '0 0 12px rgba(37, 99, 235, 0.6)', transition: { duration: 0.3, ease: 'easeOut' } },
};

const socialVariants = {
  hidden: { opacity: 0, scale: 0.8 },
  visible: { opacity: 1, scale: 1, transition: { duration: 0.5 } },
  hover: { scale: 1.1, transition: { duration: 0.3, ease: 'easeOut' } },
};

function HeroSection() {
  return (
    <motion.section
      id="hero"
      className="relative min-h-screen flex items-center justify-center px-4 sm:px-6 lg:px-8 pt-16 sm:pt-20 bg-white in-view"
      variants={containerVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: false, amount: 0.3 }}
      style={{ zIndex: 10 }}
    >
      <div className="container mx-auto flex flex-col lg:flex-row items-center justify-between gap-8">
        <motion.div className="max-w-md" variants={childVariants}>
          <h1 className="text-4xl sm:text-5xl font-bold font-sans text-[#D97706] mb-3">
            Tawiah Obed
          </h1>
          <h2 className="text-lg sm:text-xl font-semibold font-sans text-[#6B7280] mb-4">
            Full Stack Developer
          </h2>
          <p className="text-sm sm:text-base font-sans text-[#1F2937] mb-5">
            Crafting responsive web and mobile applications with React, Node.js, and MongoDB to bring innovative solutions to life.
          </p>
          <motion.a
            href="#projects"
            className="inline-block px-6 py-2 rounded-lg font-sans text-sm sm:text-base font-semibold text-white bg-[#2563EB] transition-all duration-300 shadow-md hover:scale-105 hover:shadow-lg"
            variants={buttonVariants}
            whileHover="hover"
            whileTap={{ scale: 0.95 }}
            style={{ pointerEvents: 'auto', zIndex: 10 }}
          >
            Explore My Work
          </motion.a>
          <motion.div className="flex gap-3 mt-5" variants={childVariants}>
            {socialLinks.map((link) => (
              <motion.a
                key={link.name}
                href={link.url}
                className="relative group hover:scale-110 hover:shadow-md transition-all duration-300"
                variants={socialVariants}
                whileHover="hover"
                style={{ pointerEvents: 'auto', zIndex: 10 }}
              >
                <img
                  src={link.icon}
                  alt={link.name}
                  className="w-5 h-5 sm:w-6 sm:h-6"
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
          </motion.div>
          <motion.div className="mt-6 bg-[#E5E7EB] p-5 rounded-lg shadow-md border border-[#9CA3AF]" variants={childVariants}>
            <h3 className="text-lg font-semibold font-sans text-[#D97706] mb-3">About Me</h3>
            <p className="text-sm font-sans text-[#1F2937]">
              I’m a dedicated full stack developer focused on delivering high-quality, scalable digital experiences using modern technologies.
            </p>
          </motion.div>
        </motion.div>
        <motion.div
          className="w-64 h-64 sm:w-80 sm:h-80"
          variants={childVariants}
          whileHover={{ scale: 1.05, rotate: 2, transition: { duration: 0.3, ease: 'easeOut' } }}
        >
          <img
            src="https://source.unsplash.com/400x400/?portrait"
            alt="Tawiah Obed"
            className="w-full h-full rounded-lg object-cover shadow-md border-2 border-[#2563EB] transition-all duration-300 hover:scale-105"
          />
        </motion.div>
      </div>
    </motion.section>
  );
}

export default HeroSection;