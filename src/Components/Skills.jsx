import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const skills = [
  { name: 'React', icon: 'https://cdn.jsdelivr.net/npm/simple-icons@13.1.0/icons/react.svg', color: '#61DAFB', proficiency: '1/2 years', category: 'Frontend' },
  { name: 'HTML5', icon: 'https://cdn.jsdelivr.net/npm/simple-icons@13.1.0/icons/html5.svg', color: '#E34F26', proficiency: '1/2 years', category: 'Frontend' },
  { name: 'CSS3', icon: 'https://cdn.jsdelivr.net/npm/simple-icons@13.1.0/icons/css3.svg', color: '#1572B6', proficiency: '1/2 years', category: 'Frontend' },
  { name: 'JavaScript', icon: 'https://cdn.jsdelivr.net/npm/simple-icons@13.1.0/icons/javascript.svg', color: '#F7DF1E', proficiency: '1/2 years', category: 'Language' },
  { name: 'TypeScript', icon: 'https://cdn.jsdelivr.net/npm/simple-icons@13.1.0/icons/typescript.svg', color: '#3178C6', proficiency: '1/2 years', category: 'Language' },
  { name: 'Node.js', icon: 'https://cdn.jsdelivr.net/npm/simple-icons@13.1.0/icons/nodedotjs.svg', color: '#339933', proficiency: '1/2 years', category: 'Backend' },
  { name: 'Next.js', icon: 'https://cdn.jsdelivr.net/npm/simple-icons@13.1.0/icons/nextdotjs.svg', color: '#FFFFFF', proficiency: '1/2 years', category: 'Framework' },
  { name: 'Tailwind CSS', icon: 'https://cdn.jsdelivr.net/npm/simple-icons@13.1.0/icons/tailwindcss.svg', color: '#06B6D4', proficiency: '1/2 years', category: 'Styling' },
  { name: 'MongoDB', icon: 'https://cdn.jsdelivr.net/npm/simple-icons@13.1.0/icons/mongodb.svg', color: '#47A248', proficiency: '1/2 years', category: 'Database' },
  { name: 'PostgreSQL', icon: 'https://cdn.jsdelivr.net/npm/simple-icons@13.1.0/icons/postgresql.svg', color: '#4169E1', proficiency: '1/2 years', category: 'Database' },
  { name: 'Express.js', icon: 'https://cdn.jsdelivr.net/npm/simple-icons@13.1.0/icons/express.svg', color: '#FFFFFF', proficiency: '1/2 years', category: 'Backend' },
  { name: 'Git', icon: 'https://cdn.jsdelivr.net/npm/simple-icons@13.1.0/icons/git.svg', color: '#F05032', proficiency: '1/2 years', category: 'Tools' },
  { name: 'Firebase', icon: 'https://cdn.jsdelivr.net/npm/simple-icons@13.1.0/icons/firebase.svg', color: '#FFCA28', proficiency: '1/2 years', category: 'Backend' },
  { name: 'Docker', icon: 'https://cdn.jsdelivr.net/npm/simple-icons@13.1.0/icons/docker.svg', color: '#2496ED', proficiency: '1/2 years', category: 'DevOps' },
  { name: 'Python', icon: 'https://cdn.jsdelivr.net/npm/simple-icons@13.1.0/icons/python.svg', color: '#3776AB', proficiency: '2 weeks', category: 'Language' },
];

const containerVariants = {
  hidden: { opacity: 0, y: 50 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { 
      duration: 1, 
      ease: [0.4, 0, 0.2, 1], 
      staggerChildren: 0.15,
      delayChildren: 0.2
    },
  },
};

const cardVariants = {
  hidden: { 
    opacity: 0, 
    y: 50, 
    scale: 0.8,
    rotateY: -15
  },
  visible: { 
    opacity: 1, 
    y: 0, 
    scale: 1,
    rotateY: 0,
    transition: { 
      duration: 0.8, 
      ease: [0.4, 0, 0.2, 1] 
    } 
  },
  hover: {
    scale: 1.1,
    y: -10,
    rotateY: 5,
    transition: { 
      duration: 0.4, 
      ease: [0.4, 0, 0.2, 1] 
    },
  },
};

const titleVariants = {
  hidden: { 
    opacity: 0, 
    y: -30,
    scale: 0.9
  },
  visible: { 
    opacity: 1, 
    y: 0,
    scale: 1,
    transition: { 
      duration: 0.8, 
      ease: [0.4, 0, 0.2, 1],
      delay: 0.3
    } 
  },
};

const iconVariants = {
  hidden: { 
    opacity: 0, 
    scale: 0,
    rotate: -180
  },
  visible: { 
    opacity: 1, 
    scale: 1,
    rotate: 0,
    transition: { 
      duration: 0.6, 
      ease: [0.4, 0, 0.2, 1],
      delay: 0.5
    } 
  },
  hover: {
    scale: 1.2,
    rotate: 10,
    transition: { duration: 0.3 }
  }
};

function Skills() {
  const [hoveredSkill, setHoveredSkill] = useState(null);
  const [selectedCategory, setSelectedCategory] = useState('All');

  // Group skills by category
  const categories = ['All', 'Frontend', 'Backend', 'Language', 'Database', 'Tools', 'DevOps'];
  const filteredSkills = selectedCategory === 'All' 
    ? skills 
    : skills.filter(skill => skill.category === selectedCategory);

  return (
    <section id="skills" className="py-20 relative overflow-hidden" style={{ background: '#0A0E27' }}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12">
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
              // My expertise
            </span>
          </motion.div>
          <motion.h2
            className="text-4xl sm:text-5xl md:text-6xl font-bold text-gradient mb-4"
            variants={titleVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            style={{ fontFamily: 'var(--font-heading)' }}
          >
            Technical Arsenal
          </motion.h2>
          <motion.p
            className="text-lg max-w-2xl mx-auto"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            style={{ color: 'var(--text-secondary)', fontFamily: 'var(--font-body)' }}
          >
            Building powerful solutions with modern technologies
          </motion.p>
        </div>

        {/* Category Filter */}
        <motion.div 
          className="flex flex-wrap justify-center gap-3 mb-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          {categories.map((category) => (
            <motion.button
              key={category}
              onClick={() => setSelectedCategory(category)}
              className="px-5 py-2.5 rounded-lg font-medium transition-all"
              whileHover={{ y: -2 }}
              whileTap={{ scale: 0.98 }}
              style={{
                fontFamily: 'var(--font-body)',
                background: selectedCategory === category ? 'var(--primary-blue)' : 'var(--background-card)',
                color: selectedCategory === category ? '#FFFFFF' : 'var(--text-secondary)',
                border: `1px solid ${selectedCategory === category ? 'var(--primary-blue)' : 'rgba(59, 130, 246, 0.2)'}`,
                boxShadow: selectedCategory === category ? '0 4px 12px rgba(59, 130, 246, 0.3)' : 'none'
              }}
            >
              {category}
            </motion.button>
          ))}
        </motion.div>
        
        {/* Skills Grid */}
        <AnimatePresence mode="wait">
          <motion.div 
            key={selectedCategory}
            className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
          >
            {filteredSkills.map((skill, index) => (
            <motion.div
              key={skill.name}
              className="relative group"
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.3, delay: index * 0.05 }}
              whileHover={{ y: -8 }}
              onHoverStart={() => setHoveredSkill(skill.name)}
              onHoverEnd={() => setHoveredSkill(null)}
            >
              {/* Modern card design */}
              <div 
                className="relative p-6 rounded-2xl transition-all duration-300 h-full flex flex-col items-center"
                style={{
                  background: `linear-gradient(135deg, ${skill.color}08 0%, ${skill.color}12 100%)`,
                  border: `2px solid ${skill.color}30`,
                  boxShadow: hoveredSkill === skill.name ? `0 12px 32px ${skill.color}40` : `0 4px 16px ${skill.color}15`
                }}
              >

                {/* Icon with glow effect */}
                <motion.div 
                  className="relative mb-4"
                  whileHover={{ scale: 1.1, rotate: 5 }}
                  transition={{ duration: 0.3 }}
                >
                  <div 
                    className="absolute inset-0 rounded-2xl"
                    style={{
                      background: skill.color,
                      filter: 'blur(20px)',
                      opacity: hoveredSkill === skill.name ? 0.4 : 0.2
                    }}
                  />
                  <div
                    className="relative w-24 h-24 rounded-2xl flex items-center justify-center"
                    style={{ 
                      background: `${skill.color}20`
                    }}
                  >
                    <div style={{ 
                      width: '56px',
                      height: '56px',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center'
                    }}>
                      <img
                        src={skill.icon}
                        alt={skill.name}
                        style={{ 
                          width: '100%',
                          height: '100%',
                          filter: `brightness(0) saturate(100%)`,
                          WebkitMaskImage: `url(${skill.icon})`,
                          WebkitMaskSize: 'contain',
                          WebkitMaskRepeat: 'no-repeat',
                          WebkitMaskPosition: 'center',
                          backgroundColor: skill.color,
                          maskImage: `url(${skill.icon})`,
                          maskSize: 'contain',
                          maskRepeat: 'no-repeat',
                          maskPosition: 'center'
                        }}
                      />
                    </div>
                  </div>
                </motion.div>
                
                {/* Skill name */}
                <motion.h3 
                  className="text-lg font-bold mb-1 text-center"
                  style={{ 
                    fontFamily: 'var(--font-heading)',
                    color: 'var(--text-primary)'
                  }}
                >
                  {skill.name}
                </motion.h3>
                
                {/* Proficiency */}
                <p 
                  className="text-xs mb-3 text-center"
                  style={{
                    color: 'var(--text-secondary)',
                    fontFamily: 'var(--font-mono)'
                  }}
                >
                  {skill.proficiency}
                </p>
                
                {/* Progress bar */}
                <div className="w-full h-1.5 rounded-full overflow-hidden" style={{ background: 'rgba(59, 130, 246, 0.1)' }}>
                  <motion.div
                    className="h-full rounded-full"
                    style={{ background: skill.color }}
                    initial={{ width: 0 }}
                    whileInView={{ width: '100%' }}
                    viewport={{ once: true }}
                    transition={{ duration: 1, delay: index * 0.05 }}
                  />
                </div>
              </div>
              
              {/* Tooltip on hover */}
              <motion.div
                className="absolute -top-14 left-1/2 transform -translate-x-1/2 px-4 py-2 rounded-lg whitespace-nowrap pointer-events-none"
                style={{
                  backdropFilter: 'blur(10px)',
                  border: `1px solid ${skill.color}40`,
                  color: 'var(--text-primary)',
                  fontFamily: 'var(--font-body)',
                  fontSize: '0.875rem',
                  zIndex: 50,
                  opacity: hoveredSkill === skill.name ? 1 : 0,
                  transition: 'opacity 0.2s',
                  boxShadow: `0 4px 12px ${skill.color}30`
                }}
              >
                <span style={{ color: skill.color, fontWeight: 600 }}>{skill.category}</span> • {skill.proficiency}
              </motion.div>
            </motion.div>
          ))}
        </motion.div>
      </AnimatePresence>
      </div>
    </section>
  );
}

export default Skills;