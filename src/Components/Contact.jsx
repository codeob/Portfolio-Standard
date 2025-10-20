import React, { useState } from 'react';
import { motion } from 'framer-motion';

const socialLinks = [
  { name: 'GitHub', icon: 'https://cdn.jsdelivr.net/npm/simple-icons@13.1.0/icons/github.svg', url: 'https://github.com/codeob', color: '#3B82F6' },
  { name: 'LinkedIn', icon: 'https://cdn.jsdelivr.net/npm/simple-icons@13.1.0/icons/linkedin.svg', url: 'https://www.linkedin.com/in/tawiah-obed-a8867b2b6/', color: '#0A66C2' },
  { name: 'Email', icon: 'https://cdn.jsdelivr.net/npm/simple-icons@13.1.0/icons/gmail.svg', url: 'mailto:your.email@example.com', color: '#EA4335' },
  { name: 'Twitter', icon: 'https://cdn.jsdelivr.net/npm/simple-icons@13.1.0/icons/x.svg', url: 'https://x.com/ObedTawiah83026/', color: '#06B6D4' },
];

const containerVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.8, ease: 'easeOut', staggerChildren: 0.2 },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: 'easeOut' } },
};

const socialVariants = {
  hidden: { opacity: 0, scale: 0.8 },
  visible: { opacity: 1, scale: 1, transition: { duration: 0.4 } },
  hover: { scale: 1.1, transition: { duration: 0.2, ease: 'easeOut' } },
};

function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission (replace with actual API call)
    setTimeout(() => {
      alert(`Thank you, ${formData.name}! Your message has been received. I'll get back to you soon!`);
      setFormData({ name: '', email: '', message: '' });
      setIsSubmitting(false);
    }, 1000);
  };

  return (
    <section id="contact" className="py-20 relative overflow-hidden" style={{ background: '#0A0E27' }}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <motion.div 
            className="mb-4"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <span 
              className="text-sm font-mono uppercase tracking-wider"
              style={{ color: 'var(--accent-cyan)', fontFamily: 'var(--font-mono)' }}
            >
              // Let's connect
            </span>
          </motion.div>
          <motion.h2
            className="text-4xl sm:text-5xl md:text-6xl font-bold text-gradient mb-4"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            style={{ fontFamily: 'var(--font-heading)' }}
          >
            Let's Work Together
          </motion.h2>
          <motion.p 
            className="text-lg max-w-2xl mx-auto"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            style={{ color: 'var(--text-secondary)', fontFamily: 'var(--font-body)' }}
          >
            Ready to bring your ideas to life? Drop me a message and let's start building something extraordinary.
          </motion.p>
        </div>

        {/* Two Column Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-12">
          {/* Left Column - Contact Info */}
          <motion.div
            className="lg:col-span-2 space-y-8"
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div>
              <h3 
                className="text-3xl font-bold mb-4"
                style={{ 
                  fontFamily: 'var(--font-heading)',
                  color: 'var(--text-primary)'
                }}
              >
                Get in touch
              </h3>
              <p 
                className="text-base leading-relaxed mb-8"
                style={{ color: 'var(--text-secondary)', fontFamily: 'var(--font-body)' }}
              >
                I'm always open to discussing new projects, creative ideas, or opportunities to be part of your vision.
              </p>
            </div>

            {/* Contact Info Cards */}
            <div className="space-y-4">
              <motion.div
                className="p-4 rounded-xl flex items-center gap-4"
                style={{
                  background: 'var(--background-card)',
                  border: '1px solid var(--divider-border)'
                }}
                whileHover={{ x: 5 }}
              >
                <div className="w-12 h-12 rounded-lg flex items-center justify-center" style={{ background: 'rgba(59, 130, 246, 0.1)' }}>
                  <svg className="w-6 h-6" style={{ color: 'var(--primary-blue)' }} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                </div>
                <div>
                  <p className="text-xs" style={{ color: 'var(--text-secondary)' }}>Email</p>
                  <p className="text-sm font-medium" style={{ color: 'var(--text-primary)' }}>obed@example.com</p>
                </div>
              </motion.div>

              <motion.div
                className="p-4 rounded-xl flex items-center gap-4"
                style={{
                  background: 'var(--background-card)',
                  border: '1px solid var(--divider-border)'
                }}
                whileHover={{ x: 5 }}
              >
                <div className="w-12 h-12 rounded-lg flex items-center justify-center" style={{ background: 'rgba(59, 130, 246, 0.1)' }}>
                  <svg className="w-6 h-6" style={{ color: 'var(--primary-blue)' }} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                </div>
                <div>
                  <p className="text-xs" style={{ color: 'var(--text-secondary)' }}>Location</p>
                  <p className="text-sm font-medium" style={{ color: 'var(--text-primary)' }}>Available Remotely</p>
                </div>
              </motion.div>
            </div>

            {/* Social Links */}
            <div>
              <p className="text-sm font-medium mb-4" style={{ color: 'var(--text-secondary)' }}>Follow me on</p>
              <div className="flex gap-3">
                {socialLinks.map((link) => (
                  <motion.a
                    key={link.name}
                    href={link.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-12 h-12 rounded-lg flex items-center justify-center"
                    style={{
                      background: 'var(--background-card)',
                      border: '1px solid var(--divider-border)'
                    }}
                    whileHover={{ y: -4, borderColor: 'var(--primary-blue)' }}
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
            </div>
          </motion.div>

          {/* Right Column - Contact Form */}
          <motion.div
            className="lg:col-span-3"
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div
              className="p-8 rounded-2xl"
              style={{
                background: 'var(--background-card)',
                border: '1px solid var(--divider-border)'
              }}
            >
            <h3 
              className="text-2xl font-bold mb-6"
              style={{ 
                fontFamily: 'var(--font-heading)',
                color: 'var(--text-primary)'
              }}
            >
              Send me a message
            </h3>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label 
                  htmlFor="name" 
                  className="block text-sm font-medium mb-2"
                  style={{ 
                    fontFamily: 'var(--font-body)',
                    color: 'var(--text-secondary)'
                  }}
                >
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  className="w-full px-4 py-3 rounded-xl transition-all duration-300"
                  style={{ 
                    fontFamily: 'var(--font-body)',
                    background: 'rgba(10, 14, 39, 0.6)',
                    border: '1px solid var(--divider-border)',
                    color: 'var(--text-primary)'
                  }}
                  onFocus={(e) => e.target.style.borderColor = 'var(--primary-blue)'}
                  onBlur={(e) => e.target.style.borderColor = 'var(--divider-border)'}
                  required
                />
              </div>
              <div>
                <label 
                  htmlFor="email" 
                  className="block text-sm font-medium mb-2"
                  style={{ 
                    fontFamily: 'var(--font-body)',
                    color: 'var(--text-secondary)'
                  }}
                >
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  className="w-full px-4 py-3 rounded-xl transition-all duration-300"
                  style={{ 
                    fontFamily: 'var(--font-body)',
                    background: 'rgba(10, 14, 39, 0.6)',
                    border: '1px solid var(--divider-border)',
                    color: 'var(--text-primary)'
                  }}
                  onFocus={(e) => e.target.style.borderColor = 'var(--primary-blue)'}
                  onBlur={(e) => e.target.style.borderColor = 'var(--divider-border)'}
                  required
                />
              </div>
              <div>
                <label 
                  htmlFor="message" 
                  className="block text-sm font-medium mb-2"
                  style={{ 
                    fontFamily: 'var(--font-body)',
                    color: 'var(--text-secondary)'
                  }}
                >
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  rows={5}
                  className="w-full px-4 py-3 rounded-xl transition-all duration-300 resize-none"
                  style={{ 
                    fontFamily: 'var(--font-body)',
                    background: 'rgba(26, 26, 46, 0.6)',
                    border: '1px solid rgba(0, 255, 209, 0.3)',
                    color: 'var(--text-primary)'
                  }}
                  onFocus={(e) => e.target.style.borderColor = '#00FFD1'}
                  onBlur={(e) => e.target.style.borderColor = 'rgba(0, 255, 209, 0.3)'}
                  required
                ></textarea>
              </div>
              <motion.button
                type="submit"
                disabled={isSubmitting}
                className="w-full py-4 rounded-xl text-base font-semibold transition-all duration-300"
                variants={itemVariants}
                whileHover={{ scale: isSubmitting ? 1 : 1.02, y: isSubmitting ? 0 : -2 }}
                whileTap={{ scale: isSubmitting ? 1 : 0.98 }}
                style={{ 
                  fontFamily: 'var(--font-body)',
                  background: isSubmitting 
                    ? 'var(--text-muted)' 
                    : 'var(--primary-blue)',
                  color: '#FFFFFF',
                  boxShadow: '0 4px 20px rgba(59, 130, 246, 0.3)',
                  cursor: isSubmitting ? 'not-allowed' : 'pointer'
                }}
              >
                {isSubmitting ? 'Sending...' : 'Send Message'}
              </motion.button>
            </form>
            </div>
          </motion.div>


        </div>
      </div>
    </section>
  );
}

export default Contact;