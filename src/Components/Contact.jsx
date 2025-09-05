import React from 'react';
import { motion } from 'framer-motion';
import { Toaster } from 'react-hot-toast';

const socialLinks = [
  { name: 'Instagram', icon: 'https://cdn.jsdelivr.net/npm/simple-icons@13.1.0/icons/instagram.svg', url: 'https://www.instagram.com/tawiah_full_stack_developer/', color: '#FFFFFF' },
  { name: 'LinkedIn', icon: 'https://cdn.jsdelivr.net/npm/simple-icons@13.1.0/icons/linkedin.svg', url: 'https://www.linkedin.com/in/tawiah-obed-a8867b2b6/', color: '#FFFFFF' },
  { name: 'X', icon: 'https://cdn.jsdelivr.net/npm/simple-icons@13.1.0/icons/x.svg', url: 'https://x.com/ObedTawiah83026/', color: '#FFFFFF' },
  { name: 'TikTok', icon: 'https://cdn.jsdelivr.net/npm/simple-icons@13.1.0/icons/tiktok.svg', url: 'https://www.tiktok.com/@tawiahcode', color: '#FFFFFF' },
  { name: 'WhatsApp', icon: 'https://cdn.jsdelivr.net/npm/simple-icons@13.1.0/icons/whatsapp.svg', url: 'https://wa.me/0539526814', color: '#FFFFFF' },
];

const containerVariants = {
  hidden: { opacity: 0, y: 50 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 1, ease: 'easeInOut', staggerChildren: 0.15 },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: 'easeInOut' } },
};

const socialVariants = {
  hidden: { opacity: 0, scale: 0.8 },
  visible: { opacity: 1, scale: 1, transition: { duration: 0.5 } },
  hover: { scale: 1.1, boxShadow: '0 0 12px #00FF88', transition: { duration: 0.3, ease: 'easeOut' } },
};

function Contact() {
  return (
    <section id="contact" className="relative min-h-screen flex flex-col items-center justify-center px-4 sm:px-6 lg:px-8 py-12 z-10 bg-[#000000] in-view">
      <Toaster position="top-right" />
      <motion.div className="max-w-4xl w-full z-10" variants={containerVariants} initial="hidden" whileInView="visible" viewport={{ once: false, amount: 0.3 }}>
        <motion.h2
          className="text-2xl sm:text-3xl lg:text-4xl font-bold font-sans mb-5 text-center"
          variants={itemVariants}
          style={{ background: 'linear-gradient(45deg, #00D4FF, #8A2BE2)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}
        >
          Get in Touch
          <motion.div
            className="h-1 mt-2 mx-auto bg-gradient-to-r from-[var(--accent-blue)] to-[var(--accent-purple)]"
            initial={{ width: 0 }}
            animate={{ width: '40%' }}
            transition={{ duration: 0.8, ease: 'easeInOut', delay: 0.2 }}
          />
        </motion.h2>
        <motion.p className="text-sm sm:text-base font-sans mb-6 text-center text-[var(--secondary-text)]" variants={itemVariants}>
          I’m Obed Tawiah, a passionate full-stack developer based in Accra, Ghana, dedicated to crafting innovative, high-quality digital solutions that drive success. With expertise in modern web technologies and a commitment to excellence, I transform ideas into seamless, user-focused applications that deliver real value. Whether you need a stunning website, a robust backend system, or a complete digital overhaul, I’m here to bring your vision to life with precision and creativity. Let’s collaborate to create something extraordinary that elevates your brand and captivates your audience.
        </motion.p>
        <motion.div className="flex flex-wrap justify-center gap-6 mt-10" variants={itemVariants}>
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
                className="w-8 h-8 sm:w-10 sm:h-10"
                style={{ filter: 'brightness(0) invert(1) drop-shadow(0 0 6px var(--accent-blue))' }}
              />
              <motion.div
                className="absolute inset-0 rounded-full"
                style={{ background: 'var(--accent-blue)', opacity: 0.3, filter: 'blur(10px)' }}
                initial={{ scale: 0, opacity: 0 }}
                whileHover={{ scale: 1.3, opacity: 0.6, transition: { duration: 0.3, ease: 'easeOut' } }}
              />
              <span className="mt-2 block text-center text-xs sm:text-sm font-sans text-[var(--primary-text)]">{link.name}</span>
            </motion.a>
          ))}
        </motion.div>
        <motion.div className="mt-10 w-full max-w-4xl p-5 rounded-lg bg-[var(--hover-bg)] border border-[var(--divider-border)] shadow-[0_0_10px_var(--accent-purple)]" variants={itemVariants}>
          <div className="w-full h-56 flex items-center justify-center">
            <img
              src="https://i.pinimg.com/1200x/a0/64/16/a064165ad78693bf0bd239712642a000.jpg"
              alt="Location: Accra, Ghana"
              className="w-full h-full object-cover rounded-lg"
              style={{ filter: 'drop-shadow(0 0 10px var(--accent-blue))' }}
            />
          </div>
        </motion.div>
        <motion.p className="text-center text-sm sm:text-base font-sans mt-8 text-[var(--accent-purple)] font-semibold" variants={itemVariants}>
          Let’s create something remarkable together.
        </motion.p>
      </motion.div>
    </section>
  );
}

export default Contact;