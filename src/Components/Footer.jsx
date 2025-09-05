import React from 'react';
import { motion } from 'framer-motion';

const socialLinks = [
  { name: 'GitHub', icon: 'https://cdn.jsdelivr.net/npm/simple-icons@13.1.0/icons/github.svg', url: 'https://github.com/codeob', color: '#FFFFFF' },
  { name: 'LinkedIn', icon: 'https://cdn.jsdelivr.net/npm/simple-icons@13.1.0/icons/linkedin.svg', url: 'https://linkedin.com/in/yourusername', color: '#FFFFFF' },
  { name: 'CV', icon: 'https://cdn.jsdelivr.net/npm/simple-icons@13.1.0/icons/adobeacrobatreader.svg', url: '/path/to/your-cv.pdf', color: '#FFFFFF' },
];

const containerVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.8, ease: 'easeInOut', staggerChildren: 0.2 },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 15 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: 'easeInOut' } },
};

const socialVariants = {
  hidden: { opacity: 0, scale: 0.8 },
  visible: { opacity: 1, scale: 1, transition: { duration: 0.5 } },
  hover: { scale: 1.1, boxShadow: '0 0 12px #00FF88', transition: { duration: 0.3, ease: 'easeOut' } },
};

function Footer() {
  return (
    <footer id="footer" className="bg-[#000000] text-[var(--primary-text)] py-5 z-10 in-view">
      <motion.div className="container mx-auto px-4 text-center" variants={containerVariants} initial="hidden" whileInView="visible" viewport={{ once: false, amount: 0.3 }}>
        <motion.p className="mb-3 text-sm font-sans text-[var(--secondary-text)]" variants={itemVariants}>
          © 2025 Tawiah Obed. All rights reserved.
        </motion.p>
        <motion.div className="flex justify-center gap-4" variants={itemVariants}>
          {socialLinks.map((link) => (
            <motion.a
              key={link.name}
              href={link.url}
              className="relative group"
              variants={socialVariants}
              whileHover="hover"
              style={{ pointerEvents: 'auto', zIndex: 10 }}
            >
              <img
                src={link.icon}
                alt={link.name}
                className="w-5 h-5 sm:w-6 sm:h-6"
                style={{ filter: 'brightness(0) invert(1) drop-shadow(0 0 6px var(--accent-blue))' }}
              />
              <motion.div
                className="absolute inset-0 rounded-full"
                style={{ background: 'var(--accent-blue)', opacity: 0.3, filter: 'blur(10px)' }}
                initial={{ scale: 0, opacity: 0 }}
                whileHover={{ scale: 1.3, opacity: 0.6, transition: { duration: 0.3, ease: 'easeOut' } }}
              />
            </motion.a>
          ))}
        </motion.div>
      </motion.div>
    </footer>
  );
}

export default Footer;