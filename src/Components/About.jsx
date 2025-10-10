import React from 'react';
import { motion } from 'framer-motion';
import MyProfile from '../assets/MyProfile.jpg';

const containerVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.8, ease: 'easeOut', staggerChildren: 0.2 },
  },
};

const childVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: 'easeOut' } },
};

function About() {
  return (
    <section id="about" className="py-12 sm:py-16 lg:py-20 bg-white relative overflow-hidden">
      {/* Floating Programming Languages Background */}
      <div className="absolute inset-0 pointer-events-none">
        {[
          'React', 'Node.js', 'JavaScript', 'TypeScript', 'Next.js',
          'MongoDB', 'PostgreSQL', 'Express.js', 'Tailwind CSS',
          'Git', 'Firebase', 'Docker', 'HTML', 'CSS', 'React Native'
        ].map((lang, index) => (
          <motion.div
            key={lang}
            className="absolute text-gray-300 font-medium text-xs opacity-20"
            style={{
              left: `${8 + (index * 5) % 85}%`,
              top: `${10 + (index * 7) % 80}%`,
            }}
            animate={{
              y: [0, -25, 0],
              x: [0, 15, 0],
              rotate: [0, 2, -2, 0],
              opacity: [0.15, 0.25, 0.15],
            }}
            transition={{
              duration: 18 + (index * 1.2),
              repeat: Infinity,
              ease: "easeInOut",
              delay: index * 0.4,
            }}
          >
            {lang}
          </motion.div>
        ))}
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          className="grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-10 lg:gap-12 items-center"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
        >
          {/* Image Section */}
          <motion.div 
            className="order-2 lg:order-1"
            variants={childVariants}
          >
            <div className="relative">
              <img
                src={MyProfile}
                alt="Tawiah Obed"
                className="w-full max-w-xs sm:max-w-sm md:max-w-md mx-auto rounded-2xl shadow-lg"
              />
              <div className="absolute inset-0 bg-gradient-to-r from-blue-500/20 to-teal-500/20 rounded-2xl"></div>
            </div>
          </motion.div>

          {/* Content Section */}
          <motion.div 
            className="order-1 lg:order-2"
            variants={childVariants}
          >
            <motion.h2 
              className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-4 sm:mb-6 text-gray-900"
              variants={childVariants}
              style={{ fontFamily: 'var(--font-heading)' }}
            >
              About Me
            </motion.h2>
            
            <motion.p
              className="text-base sm:text-lg text-gray-600 mb-4 sm:mb-6 leading-relaxed"
              variants={childVariants}
              style={{ fontFamily: 'var(--font-body)' }}
            >
              As a committed full-stack developer with comprehensive expertise in contemporary web technologies,
              I specialize in architecting scalable, high-performance applications that drive organizational objectives.
            </motion.p>

            <motion.p
              className="text-base sm:text-lg text-gray-600 mb-6 sm:mb-8 leading-relaxed"
              variants={childVariants}
              style={{ fontFamily: 'var(--font-body)' }}
            >
              Utilizing advanced proficiency in React, Node.js, MongoDB, and cutting-edge technologies,
              I transform intricate technical challenges into efficient, robust solutions. My dedication lies in delivering
              pioneering, premium-quality projects that consistently exceed stakeholder expectations.
            </motion.p>

            <motion.div
              className="flex flex-wrap gap-2 sm:gap-3 lg:gap-4 mb-6 sm:mb-8"
              variants={childVariants}
            >
              <div className="bg-blue-50 px-3 sm:px-4 py-1.5 sm:py-2 rounded-full">
                <span className="text-blue-700 font-medium text-xs sm:text-sm" style={{ fontFamily: 'var(--font-body)' }}>
                  React & Next.js
                </span>
              </div>
              <div className="bg-green-50 px-3 sm:px-4 py-1.5 sm:py-2 rounded-full">
                <span className="text-green-700 font-medium text-xs sm:text-sm" style={{ fontFamily: 'var(--font-body)' }}>
                  Node.js & Express
                </span>
              </div>
              <div className="bg-purple-50 px-3 sm:px-4 py-1.5 sm:py-2 rounded-full">
                <span className="text-purple-700 font-medium text-xs sm:text-sm" style={{ fontFamily: 'var(--font-body)' }}>
                  MongoDB & PostgreSQL
                </span>
              </div>
              <div className="bg-orange-50 px-3 sm:px-4 py-1.5 sm:py-2 rounded-full">
                <span className="text-orange-700 font-medium text-xs sm:text-sm" style={{ fontFamily: 'var(--font-body)' }}>
                  TypeScript
                </span>
              </div>
              <div className="bg-red-50 px-3 sm:px-4 py-1.5 sm:py-2 rounded-full">
                <span className="text-red-700 font-medium text-xs sm:text-sm" style={{ fontFamily: 'var(--font-body)' }}>
                  HTML
                </span>
              </div>
              <div className="bg-indigo-50 px-3 sm:px-4 py-1.5 sm:py-2 rounded-full">
                <span className="text-indigo-700 font-medium text-xs sm:text-sm" style={{ fontFamily: 'var(--font-body)' }}>
                  CSS
                </span>
              </div>
              <div className="bg-cyan-50 px-3 sm:px-4 py-1.5 sm:py-2 rounded-full">
                <span className="text-cyan-700 font-medium text-xs sm:text-sm" style={{ fontFamily: 'var(--font-body)' }}>
                  Tailwind CSS
                </span>
              </div>
              <div className="bg-yellow-50 px-3 sm:px-4 py-1.5 sm:py-2 rounded-full">
                <span className="text-yellow-700 font-medium text-xs sm:text-sm" style={{ fontFamily: 'var(--font-body)' }}>
                  JavaScript
                </span>
              </div>
            </motion.div>

            <motion.a
              href="#contact"
              className="btn-primary inline-flex items-center px-4 sm:px-6 py-2.5 sm:py-3 text-sm sm:text-base font-semibold w-full sm:w-auto justify-center"
              variants={childVariants}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              style={{ fontFamily: 'var(--font-body)' }}
            >
              Learn More
            </motion.a>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}

export default About;
