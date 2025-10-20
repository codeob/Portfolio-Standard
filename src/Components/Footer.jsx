import React from 'react';
import { motion } from 'framer-motion';

const socialLinks = [
  { name: 'GitHub', icon: 'https://cdn.jsdelivr.net/npm/simple-icons@13.1.0/icons/github.svg', url: 'https://github.com/codeob' },
  { name: 'LinkedIn', icon: 'https://cdn.jsdelivr.net/npm/simple-icons@13.1.0/icons/linkedin.svg', url: 'https://www.linkedin.com/in/tawiah-obed-a8867b2b6/' },
  { name: 'Twitter', icon: 'https://cdn.jsdelivr.net/npm/simple-icons@13.1.0/icons/x.svg', url: 'https://x.com/ObedTawiah83026/' },
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
    <footer id="footer" className="relative overflow-hidden" style={{ background: '#0A0E27' }}>
      {/* Decorative top border */}
      <div className="h-px w-full" style={{ background: 'linear-gradient(90deg, transparent, var(--primary-blue), transparent)' }} />
      
      <div className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Main Footer Content */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
            {/* Brand Column */}
            <motion.div
              className="lg:col-span-2"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <h3
                className="text-3xl font-bold mb-3 flex items-center gap-2"
                style={{ 
                  fontFamily: 'var(--font-heading)',
                  color: 'var(--text-primary)'
                }}
              >
                <span style={{ color: 'var(--primary-blue)', fontSize: '2rem' }}>◆</span>
                Obed Tawiah
              </h3>
              <p 
                className="text-base leading-relaxed mb-6"
                style={{ 
                  fontFamily: 'var(--font-body)',
                  color: 'var(--text-secondary)'
                }}
              >
                Full Stack Developer crafting exceptional digital experiences with modern technologies and creative solutions.
              </p>
              <div className="flex gap-3">
                {socialLinks.map((link) => (
                  <motion.a
                    key={link.name}
                    href={link.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-10 h-10 rounded-lg flex items-center justify-center transition-all"
                    style={{
                      background: 'var(--background-card)',
                      border: '1px solid var(--divider-border)'
                    }}
                    whileHover={{ 
                      y: -4,
                      borderColor: 'var(--primary-blue)',
                      background: 'rgba(59, 130, 246, 0.1)'
                    }}
                    whileTap={{ scale: 0.95 }}
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
            {/* Navigation Column */}
            <motion.div
              className="lg:col-span-1"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <h4
                className="text-lg font-bold mb-3"
                style={{ 
                  fontFamily: 'var(--font-heading)',
                  color: 'var(--text-primary)'
                }}
              >
                Navigation
              </h4>
              <ul>
                <li>
                  <a
                    href="#"
                    className="text-base leading-relaxed mb-2"
                    style={{ 
                      fontFamily: 'var(--font-body)',
                      color: 'var(--text-secondary)'
                    }}
                  >
                    Home
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="text-base leading-relaxed mb-2"
                    style={{ 
                      fontFamily: 'var(--font-body)',
                      color: 'var(--text-secondary)'
                    }}
                  >
                    About
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="text-base leading-relaxed mb-2"
                    style={{ 
                      fontFamily: 'var(--font-body)',
                      color: 'var(--text-secondary)'
                    }}
                  >
                    Contact
                  </a>
                </li>
              </ul>
            </motion.div>
            {/* Newsletter Column */}
            <motion.div
              className="lg:col-span-1"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.4 }}
            >
              <h4
                className="text-lg font-bold mb-3"
                style={{ 
                  fontFamily: 'var(--font-heading)',
                  color: 'var(--text-primary)'
                }}
              >
                Newsletter
              </h4>
              <p 
                className="text-base leading-relaxed mb-6"
                style={{ 
                  fontFamily: 'var(--font-body)',
                  color: 'var(--text-secondary)'
                }}
              >
                Stay up to date with the latest news and updates.
              </p>
              <form>
                <input
                  type="email"
                  placeholder="Your email address"
                  className="w-full py-2 pl-10 text-base leading-relaxed mb-2"
                  style={{ 
                    fontFamily: 'var(--font-body)',
                    color: 'var(--text-secondary)',
                    background: 'var(--background-card)',
                    border: '1px solid var(--divider-border)'
                  }}
                />
                <button
                  type="submit"
                  className="w-full py-2 text-base leading-relaxed"
                  style={{ 
                    fontFamily: 'var(--font-body)',
                    color: 'var(--text-primary)',
                    background: 'var(--primary-blue)',
                    border: 'none'
                  }}
                >
                  Subscribe
                </button>
              </form>
            </motion.div>
          </div>
          {/* Copyright */}
          <motion.div
            variants={itemVariants}
          >
            <p 
              className="text-sm mb-2"
              style={{ 
                fontFamily: 'var(--font-body)',
                color: 'var(--text-secondary)'
              }}
            >
              {new Date().getFullYear()} <span className="text-gradient font-semibold">Obed Tawiah</span>. Crafted with passion.
            </p>
            <p
              className="text-xs"
              style={{ 
                fontFamily: 'var(--font-mono)',
                color: 'var(--text-secondary)',
                opacity: 0.7
              }}
            >
              Built with React, Tailwind CSS, Framer Motion & Three.js
            </p>
          </motion.div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;