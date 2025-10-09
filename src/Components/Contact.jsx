import React, { useState } from 'react';
import { motion } from 'framer-motion';

const socialLinks = [
  { name: 'GitHub', icon: 'https://cdn.jsdelivr.net/npm/simple-icons@13.1.0/icons/github.svg', url: 'https://github.com/codeob', color: '#333333' },
  { name: 'LinkedIn', icon: 'https://cdn.jsdelivr.net/npm/simple-icons@13.1.0/icons/linkedin.svg', url: 'https://www.linkedin.com/in/tawiah-obed-a8867b2b6/', color: '#0077B5' },
  { name: 'Email', icon: 'https://cdn.jsdelivr.net/npm/simple-icons@13.1.0/icons/gmail.svg', url: 'mailto:your.email@example.com', color: '#EA4335' },
  { name: 'Twitter', icon: 'https://cdn.jsdelivr.net/npm/simple-icons@13.1.0/icons/x.svg', url: 'https://x.com/ObedTawiah83026/', color: '#1DA1F2' },
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

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission here
    console.log('Form submitted:', formData);
  };

  return (
    <section id="contact" className="py-12 sm:py-16 lg:py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          className="text-center mb-8 sm:mb-12 lg:mb-16"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
        >
          <motion.h2
            className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-4 sm:mb-6 text-gray-900 px-4"
            variants={itemVariants}
            style={{ fontFamily: 'var(--font-heading)' }}
          >
            Get In Touch
          </motion.h2>
          <motion.p 
            className="text-base sm:text-lg lg:text-xl text-gray-600 max-w-xs sm:max-w-lg md:max-w-2xl mx-auto px-4"
            variants={itemVariants}
            style={{ fontFamily: 'var(--font-body)' }}
          >
            I'm always interested in new opportunities and exciting projects. 
            Let's discuss how we can work together to bring your ideas to life.
          </motion.p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-10 lg:gap-12">
          {/* Contact Form */}
          <motion.div
            className="card p-4 sm:p-6 lg:p-8"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
          >
            <h3 
              className="text-xl sm:text-2xl font-semibold mb-4 sm:mb-6 text-gray-900"
              style={{ fontFamily: 'var(--font-heading)' }}
            >
              Send me a message
            </h3>
            <form onSubmit={handleSubmit} className="space-y-4 sm:space-y-6">
              <div>
                <label 
                  htmlFor="name" 
                  className="block text-sm font-medium text-gray-700 mb-1 sm:mb-2"
                  style={{ fontFamily: 'var(--font-body)' }}
                >
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  className="w-full px-3 sm:px-4 py-2 sm:py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-colors duration-200 text-sm sm:text-base"
                  style={{ fontFamily: 'var(--font-body)' }}
                  required
                />
              </div>
              <div>
                <label 
                  htmlFor="email" 
                  className="block text-sm font-medium text-gray-700 mb-1 sm:mb-2"
                  style={{ fontFamily: 'var(--font-body)' }}
                >
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  className="w-full px-3 sm:px-4 py-2 sm:py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-colors duration-200 text-sm sm:text-base"
                  style={{ fontFamily: 'var(--font-body)' }}
                  required
                />
              </div>
              <div>
                <label 
                  htmlFor="message" 
                  className="block text-sm font-medium text-gray-700 mb-1 sm:mb-2"
                  style={{ fontFamily: 'var(--font-body)' }}
                >
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  rows={4}
                  className="w-full px-3 sm:px-4 py-2 sm:py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-colors duration-200 resize-none text-sm sm:text-base"
                  style={{ fontFamily: 'var(--font-body)' }}
                  required
                ></textarea>
              </div>
              <motion.button
                type="submit"
                className="btn-primary w-full py-2.5 sm:py-3 text-sm sm:text-base font-semibold"
                variants={itemVariants}
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                style={{ fontFamily: 'var(--font-body)' }}
              >
                Send Message
              </motion.button>
            </form>
          </motion.div>

          {/* Social Links */}
          <motion.div
            className="space-y-8"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
          >
            <div>
              <h3 
                className="text-2xl font-semibold mb-6 text-gray-900"
                style={{ fontFamily: 'var(--font-heading)' }}
              >
                Connect with me
              </h3>
              <div className="space-y-4">
          {socialLinks.map((link) => (
            <motion.a
              key={link.name}
              href={link.url}
                    className="flex items-center space-x-4 p-4 bg-white rounded-lg border border-gray-200 hover:border-blue-300 hover:shadow-md transition-all duration-200 group"
              variants={socialVariants}
              whileHover="hover"
                    whileTap={{ scale: 0.95 }}
                  >
                    <motion.div 
                      className="w-10 h-10 rounded-full flex items-center justify-center transition-colors duration-200"
                      style={{ 
                        backgroundColor: link.color + '20',
                        border: `2px solid ${link.color}40`
                      }}
                      whileHover={{
                        scale: 1.1,
                        backgroundColor: link.color + '30',
                        boxShadow: `0 0 20px ${link.color}40`
                      }}
            >
              <img
                src={link.icon}
                alt={link.name}
                        className="w-5 h-5"
                        style={{ 
                          filter: `drop-shadow(0 2px 4px ${link.color}40)`
                        }}
                      />
                    </motion.div>
                    <span 
                      className="text-gray-700 group-hover:text-gray-900 font-medium"
                      style={{ fontFamily: 'var(--font-body)' }}
                    >
                      {link.name}
                    </span>
            </motion.a>
          ))}
              </div>
            </div>

            <div className="bg-blue-50 p-6 rounded-lg">
              <h4 
                className="text-lg font-semibold mb-3 text-blue-900"
                style={{ fontFamily: 'var(--font-heading)' }}
              >
                Let's work together
              </h4>
              <p 
                className="text-blue-800 text-sm leading-relaxed"
                style={{ fontFamily: 'var(--font-body)' }}
              >
                I'm always excited to take on new challenges and collaborate on innovative projects. 
                Whether you have a specific project in mind or just want to chat about technology, 
                I'd love to hear from you!
              </p>
          </div>
        </motion.div>
        </div>
      </div>
    </section>
  );
}

export default Contact;