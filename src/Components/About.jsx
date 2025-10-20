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

const skillsData = [
  { name: 'React & Next.js', level: 95, color: '#3B82F6' },
  { name: 'Node.js & Express', level: 90, color: '#10B981' },
  { name: 'TypeScript', level: 85, color: '#06B6D4' },
  { name: 'MongoDB & PostgreSQL', level: 88, color: '#3B82F6' },
  { name: 'Tailwind CSS', level: 92, color: '#06B6D4' },
];

function About() {
  return (
    <section id="about" className="py-20 relative overflow-hidden" style={{ background: '#0A0E27' }}>


      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
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
              // About me
            </span>
          </motion.div>
          <motion.h2
            className="text-4xl sm:text-5xl md:text-6xl font-bold text-gradient mb-4"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            style={{ fontFamily: 'var(--font-heading)' }}
          >
            Who I Am
          </motion.h2>
        </div>

        <motion.div
          className="grid grid-cols-1 lg:grid-cols-3 gap-12 items-start"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
        >
          {/* Image Section - Smaller */}
          <motion.div 
            className="lg:col-span-1 flex justify-center lg:justify-start"
            variants={childVariants}
          >
            <div className="relative">
              <div 
                className="absolute -inset-1 rounded-2xl opacity-50"
                style={{
                  background: 'var(--primary-blue)',
                  filter: 'blur(12px)'
                }}
              />
              <img
                src={MyProfile}
                alt="Obed Tawiah"
                className="relative w-48 h-48 sm:w-56 sm:h-56 rounded-2xl object-cover shadow-xl"
                style={{
                  border: '2px solid var(--divider-border)'
                }}
              />
            </div>
          </motion.div>

          {/* Content Section */}
          <motion.div 
            className="lg:col-span-2"
            variants={childVariants}
          >
            <motion.h3 
              className="text-2xl sm:text-3xl font-bold mb-4"
              variants={childVariants}
              style={{ 
                fontFamily: 'var(--font-heading)',
                color: 'var(--text-primary)'
              }}
            >
              Full Stack Developer & Problem Solver
            </motion.h3>
            
            <motion.p
              className="text-lg mb-6 leading-relaxed"
              variants={childVariants}
              style={{ 
                fontFamily: 'var(--font-body)',
                color: 'var(--text-secondary)'
              }}
            >
              I'm a full-stack developer passionate about creating exceptional digital experiences. 
              With expertise in modern web technologies, I build scalable applications that solve real-world problems.
            </motion.p>

            <motion.p
              className="text-base mb-8 leading-relaxed"
              variants={childVariants}
              style={{ 
                fontFamily: 'var(--font-body)',
                color: 'var(--text-secondary)'
              }}
            >
              My approach combines technical excellence with creative problem-solving. Whether it's designing 
              intuitive interfaces or architecting robust backend systems, I'm committed to delivering 
              high-quality solutions that exceed expectations.
            </motion.p>

            {/* Skills Grid */}
            <motion.div className="grid grid-cols-2 gap-4 mb-8" variants={childVariants}>
              {skillsData.map((skill, index) => (
                <motion.div
                  key={skill.name}
                  className="flex items-center gap-3 p-3 rounded-xl"
                  style={{
                    background: 'var(--background-card)',
                    border: '1px solid var(--divider-border)'
                  }}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  whileHover={{ 
                    borderColor: skill.color,
                    scale: 1.02
                  }}
                >
                  <div 
                    className="w-2 h-2 rounded-full"
                    style={{ background: skill.color }}
                  />
                  <span 
                    className="text-sm font-medium"
                    style={{ color: 'var(--text-primary)', fontFamily: 'var(--font-body)' }}
                  >
                    {skill.name}
                  </span>
                </motion.div>
              ))}
            </motion.div>

            <motion.div className="flex gap-4" variants={childVariants}>
              <motion.a
                href="#contact"
                className="inline-flex items-center px-6 py-3 text-base font-semibold rounded-xl"
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.95 }}
                style={{ 
                  fontFamily: 'var(--font-body)',
                  background: 'var(--primary-blue)',
                  color: '#FFFFFF',
                  boxShadow: '0 4px 20px rgba(59, 130, 246, 0.3)'
                }}
              >
                Get In Touch
              </motion.a>
              <motion.a
                href="/resume.pdf"
                download
                className="inline-flex items-center px-6 py-3 text-base font-semibold rounded-xl"
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.95 }}
                style={{ 
                  fontFamily: 'var(--font-body)',
                  background: 'transparent',
                  color: 'var(--text-primary)',
                  border: '2px solid var(--primary-blue)'
                }}
              >
                Download CV
              </motion.a>
            </motion.div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}

export default About;
