import React from 'react';
import { motion } from 'framer-motion';

const socialLinks = [
  { name: 'GitHub', icon: 'https://cdn.jsdelivr.net/npm/simple-icons@13.1.0/icons/github.svg', url: 'https://github.com/codeob' },
  { name: 'LinkedIn', icon: 'https://cdn.jsdelivr.net/npm/simple-icons@13.1.0/icons/linkedin.svg', url: 'https://linkedin.com/in/yourusername' },
  { name: 'Email', icon: 'https://cdn.jsdelivr.net/npm/simple-icons@13.1.0/icons/gmail.svg', url: 'mailto:your.email@example.com' },
];

const containerVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: 'easeOut', staggerChildren: 0.1 },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 10 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.4, ease: 'easeOut' } },
};

const socialVariants = {
  hidden: { opacity: 0, scale: 0.8 },
  visible: { opacity: 1, scale: 1, transition: { duration: 0.4 } },
  hover: { scale: 1.1, transition: { duration: 0.2, ease: 'easeOut' } },
};

function Footer() {
  return (
    <footer id="footer" className="bg-white border-t border-gray-200 py-8 sm:py-10 lg:py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          className="text-center"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
        >
          <motion.div
            className="flex justify-center space-x-4 sm:space-x-6 mb-6 sm:mb-8"
            variants={itemVariants}
          >
            {socialLinks.map((link) => (
              <motion.a
                key={link.name}
                href={link.url}
                className="w-8 h-8 sm:w-10 sm:h-10 bg-gray-100 rounded-full flex items-center justify-center hover:bg-blue-50 transition-colors duration-200"
                variants={socialVariants}
                whileHover="hover"
                aria-label={`Visit my ${link.name} profile`}
              >
                <img
                  src={link.icon}
                  alt={link.name}
                  className="w-4 h-4 sm:w-5 sm:h-5"
                  style={{ filter: 'brightness(0) saturate(100%) invert(27%) sepia(51%) saturate(2878%) hue-rotate(346deg) brightness(104%) contrast(97%)' }}
                />
              </motion.a>
            ))}
          </motion.div>

          <motion.div
            className="border-t border-gray-200 pt-6 sm:pt-8"
            variants={itemVariants}
          >
            <p
              className="text-gray-600 text-xs sm:text-sm"
              style={{ fontFamily: 'var(--font-body)' }}
            >
              © 2025 Tawiah Obed. All rights reserved.
            </p>
            <p
              className="text-gray-500 text-xs sm:text-sm mt-1 sm:mt-2"
              style={{ fontFamily: 'var(--font-body)' }}
            >
              Built with ❤️ by Obed
            </p>
          </motion.div>
        </motion.div>
      </div>
    </footer>
  );
}

export default Footer;