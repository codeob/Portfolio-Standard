import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Toaster, toast } from 'react-hot-toast';

const socialLinks = [
  { name: 'GitHub', icon: 'https://cdn.jsdelivr.net/npm/simple-icons@13.1.0/icons/github.svg', url: 'https://github.com/codeob', color: '#181717' },
  { name: 'LinkedIn', icon: 'https://cdn.jsdelivr.net/npm/simple-icons@13.1.0/icons/linkedin.svg', url: 'https://linkedin.com/in/yourusername', color: '#0A66C2' },
  { name: 'CV', icon: 'https://cdn.jsdelivr.net/npm/simple-icons@13.1.0/icons/adobeacrobatreader.svg', url: '/path/to/your-cv.pdf', color: '#D97706' },
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

const buttonVariants = {
  hover: { scale: 1.05, boxShadow: '0 0 12px rgba(37, 99, 235, 0.6)', transition: { duration: 0.3, ease: 'easeOut' } },
};

const socialVariants = {
  hidden: { opacity: 0, scale: 0.8 },
  visible: { opacity: 1, scale: 1, transition: { duration: 0.5 } },
  hover: { scale: 1.1, transition: { duration: 0.3, ease: 'easeOut' } },
};

function Contact() {
  const [formData, setFormData] = useState({ name: '', email: '', subject: '', message: '' });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (formData.name && formData.email && formData.subject && formData.message) {
      toast.success('Message sent successfully!', {
        style: {
          background: '#E5E7EB',
          color: '#1F2937',
          border: '1px solid #2563EB',
          boxShadow: '0 4px 10px rgba(0, 0, 0, 0.2)',
          borderRadius: '8px',
          padding: '10px 16px',
        },
      });
      setFormData({ name: '', email: '', subject: '', message: '' });
    } else {
      toast.error('Please fill out all fields.', {
        style: {
          background: '#E5E7EB',
          color: '#1F2937',
          border: '1px solid #EF4444',
          boxShadow: '0 4px 10px rgba(0, 0, 0, 0.2)',
          borderRadius: '8px',
          padding: '10px 16px',
        },
      });
    }
  };

  return (
    <section id="contact" className="relative min-h-screen flex flex-col items-center justify-center px-4 sm:px-6 lg:px-8 py-12 z-10 bg-white in-view">
      <Toaster position="top-right" />
      <motion.div className="max-w-4xl w-full z-10" variants={containerVariants} initial="hidden" whileInView="visible" viewport={{ once: false, amount: 0.3 }}>
        <motion.h2
          className="text-2xl sm:text-3xl lg:text-4xl font-bold font-sans mb-5 text-center text-[#D97706]"
          variants={itemVariants}
        >
          Get in Touch
          <motion.div
            className="h-1 mt-2 mx-auto bg-gradient-to-r from-[#2563EB] to-[#D97706]"
            initial={{ width: 0 }}
            animate={{ width: '40%' }}
            transition={{ duration: 0.8, ease: 'easeInOut', delay: 0.2 }}
          />
        </motion.h2>
        <motion.p className="text-sm sm:text-base font-sans mb-10 text-center text-[#6B7280]" variants={itemVariants}>
          Have a project in mind? Let’s connect and make it happen.
        </motion.p>
        <motion.div className="p-5 sm:p-6 rounded-lg bg-[#E5E7EB] border border-[#9CA3AF] shadow-md" variants={itemVariants}>
          <div className="space-y-5">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleInputChange}
                placeholder="Your Name"
                className="w-full p-3 rounded-lg font-sans text-xs sm:text-sm bg-white text-[#1F2937] border border-[#9CA3AF] focus:border-[#2563EB] focus:ring-2 focus:ring-[#2563EB]/50 transition-all duration-300"
              />
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleInputChange}
                placeholder="Your Email"
                className="w-full p-3 rounded-lg font-sans text-xs sm:text-sm bg-white text-[#1F2937] border border-[#9CA3AF] focus:border-[#2563EB] focus:ring-2 focus:ring-[#2563EB]/50 transition-all duration-300"
              />
            </div>
            <input
              type="text"
              name="subject"
              value={formData.subject}
              onChange={handleInputChange}
              placeholder="Subject"
              className="w-full p-3 rounded-lg font-sans text-xs sm:text-sm bg-white text-[#1F2937] border border-[#9CA3AF] focus:border-[#2563EB] focus:ring-2 focus:ring-[#2563EB]/50 transition-all duration-300"
            />
            <textarea
              name="message"
              value={formData.message}
              onChange={handleInputChange}
              placeholder="Your Message"
              rows="5"
              className="w-full p-3 rounded-lg font-sans text-xs sm:text-sm bg-white text-[#1F2937] border border-[#9CA3AF] focus:border-[#2563EB] focus:ring-2 focus:ring-[#2563EB]/50 transition-all duration-300"
            />
            <motion.button
              onClick={handleSubmit}
              className="w-full py-2 rounded-lg font-sans text-sm sm:text-base font-semibold bg-[#2563EB] text-white transition-all duration-300 shadow-md hover:scale-105 hover:shadow-lg"
              variants={buttonVariants}
              whileHover="hover"
              style={{ pointerEvents: 'auto', zIndex: 10 }}
            >
              Send Message
            </motion.button>
          </div>
        </motion.div>
        <motion.div className="flex justify-center gap-4 mt-10" variants={itemVariants}>
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
        <motion.div className="mt-10 w-full max-w-4xl p-5 rounded-lg bg-[#E5E7EB] border border-[#9CA3AF] shadow-md" variants={itemVariants}>
          <div className="w-full h-56 flex items-center justify-center">
            <span className="text-base sm:text-lg font-sans font-medium text-[#1F2937]">
              Location: Accra, Ghana
            </span>
          </div>
        </motion.div>
        <motion.p className="text-center text-sm sm:text-base font-sans mt-8 text-[#D97706] font-semibold" variants={itemVariants}>
          Let’s create something remarkable together.
        </motion.p>
      </motion.div>
    </section>
  );
}

export default Contact;