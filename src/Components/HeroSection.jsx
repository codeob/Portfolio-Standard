import React, { useContext, useEffect } from 'react';
import { motion, useAnimation } from 'framer-motion';
import { scroller } from 'react-scroll';
import { ThemeContext } from './ThemeContext';
import Profile from '../assets/Profile.jpeg';

function HeroSection() {
  const { theme } = useContext(ThemeContext);
  const controls = useAnimation();

  // Typewriter effect for name
  const name = "Tawiah Obed";
  const typewriterVariants = {
    hidden: { width: 0 },
    visible: {
      width: 'auto',
      transition: {
        duration: name.length * 0.08,
        ease: 'linear',
        staggerChildren: 0.08,
      },
    },
  };

  const letterVariants = {
    hidden: { opacity: 0, y: 15 },
    visible: { opacity: 1, y: 0 },
  };

  // Container animation
  const containerVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, ease: 'easeOut', staggerChildren: 0.2, delay: 0.5 }, // Delay for Navbar
    },
  };

  const childVariants = {
    hidden: { opacity: 0, y: 15 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
  };

  const imageVariants = {
    hidden: { opacity: 0, scale: 0.5, rotate: -30 },
    visible: {
      opacity: 1,
      scale: 1,
      rotate: 0,
      transition: { duration: 1, ease: 'easeOut', type: 'spring', stiffness: 120 },
    },
  };

  useEffect(() => {
    // Pulse animation for image
    controls.start({
      scale: [1, 1.03, 1],
      transition: { repeat: Infinity, duration: 2.5, ease: 'easeInOut' },
    });
  }, [controls]);

  return (
    <motion.section
      id="hero"
      className={`relative min-h-[70vh] flex items-center justify-center px-4 sm:px-6 lg:px-8 pt-20 sm:pt-24 lg:pt-28 ${
        theme === 'light' ? 'bg-transparent' : 'bg-transparent'
      }`} // Transparent to show background
      variants={containerVariants}
      initial="hidden"
      animate="visible"
    >
      <div className="container mx-auto flex flex-col lg:flex-row items-center justify-center gap-8 sm:gap-10 lg:gap-12">
        {/* Profile Image */}
        <motion.div
          className="relative w-40 h-40 sm:w-48 sm:h-48 lg:w-56 lg:h-56"
       
        >
          <motion.img
            src={Profile}
            alt="Tawiah Obed"
            className={`w-full h-full rounded-full object-cover shadow-2xl ${
              theme === 'light'
                ? 'border border-gradient-to-r from-blue-600 to-gold-500'
                : 'border border-gradient-to-r from-blue-500 to-silver-500'
            }`} // Gradient border
           
          />
          {/* Double Glow Effect */}
          <motion.div
            className={`absolute inset-0 rounded-full ${
              theme === 'light' ? 'bg-blue-300' : 'bg-blue-500'
            } opacity-30 blur-2xl`}
           
          />
          <motion.div
            className={`absolute inset-0 rounded-full ${
              theme === 'light' ? 'bg-gold-200' : 'bg-silver-200'
            } opacity-20 blur-3xl`}
            animate={{ scale: [1, 1.2, 1], opacity: [0.2, 0.4, 0.2] }}
            transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut', delay: 0.5 }}
          />
        </motion.div>

        {/* Text Content */}
        <motion.div
          className="text-center lg:text-left max-w-sm sm:max-w-md lg:max-w-lg"
          variants={childVariants}
        >
          <motion.h1
            className={`font-serif font-bold text-2xl sm:text-3xl lg:text-4xl mb-3 ${
              theme === 'light' ? 'text-blue-800' : 'text-blue-200'
            } overflow-hidden ${theme === 'light' ? 'text-shadow-sm' : 'text-shadow-sm-dark'}`}
            variants={typewriterVariants}
          >
            {name.split('').map((char, index) => (
              <motion.span key={index} variants={letterVariants}>
                {char}
              </motion.span>
            ))}
          </motion.h1>
          <motion.p
            className={`text-xs sm:text-sm lg:text-md leading-relaxed ${
              theme === 'light' ? 'text-gray-800' : 'text-gray-200'
            } mb-4`}
            variants={childVariants}
          >
            As a Full Stack Developer, I’ve gained hands-on experience building complete web and mobile applications from the ground up. I’ve worked with HTML, CSS, and Tailwind CSS to craft responsive, visually appealing user interfaces. On the frontend, I use JavaScript and React to build dynamic, interactive user experiences. For backend development, I work with Node.js, Express.js, and MongoDB to create secure, scalable APIs. I also use Firebase for real-time data and authentication. Additionally, I build cross-platform mobile apps using React Native. With this skillset, I can confidently bring your ideas to life — from design to deployment.
          </motion.p>
          <motion.button
            className={`px-4 py-2 sm:px-5 sm:py-2.5 rounded-lg font-medium text-white ${
              theme === 'light' ? 'bg-blue-600 hover:bg-blue-700' : 'bg-blue-500 hover:bg-blue-600'
            } transition-colors duration-300 shadow-lg`}
            whileHover={{
              scale: 1.05,
              boxShadow: theme === 'light' ? '0 0 20px rgba(59, 130, 246, 0.6)' : '0 0 20px rgba(96, 165, 250, 0.6)',
            }}
            whileTap={{ scale: 0.95 }}
            onClick={() =>
              scroller.scrollTo('projects', {
                duration: 800,
                delay: 0,
                smooth: 'easeInOutQuart',
              })
            }
            variants={childVariants}
          >
            Discover My Projects
          </motion.button>
        </motion.div>
      </div>
    </motion.section>
  );
}

export default HeroSection;