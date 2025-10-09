import React from 'react';
import { motion } from 'framer-motion';

const skills = [
  { name: 'React', icon: 'https://cdn.jsdelivr.net/npm/simple-icons@13.1.0/icons/react.svg', color: '#61DAFB', bgColor: 'rgba(97, 218, 251, 0.1)' },
  { name: 'Node.js', icon: 'https://cdn.jsdelivr.net/npm/simple-icons@13.1.0/icons/nodedotjs.svg', color: '#339933', bgColor: 'rgba(51, 153, 51, 0.1)' },
  { name: 'JavaScript', icon: 'https://cdn.jsdelivr.net/npm/simple-icons@13.1.0/icons/javascript.svg', color: '#F7DF1E', bgColor: 'rgba(247, 223, 30, 0.1)' },
  { name: 'TypeScript', icon: 'https://cdn.jsdelivr.net/npm/simple-icons@13.1.0/icons/typescript.svg', color: '#3178C6', bgColor: 'rgba(49, 120, 198, 0.1)' },
  { name: 'Next.js', icon: 'https://cdn.jsdelivr.net/npm/simple-icons@13.1.0/icons/nextdotjs.svg', color: '#000000', bgColor: 'rgba(0, 0, 0, 0.1)' },
  { name: 'MongoDB', icon: 'https://cdn.jsdelivr.net/npm/simple-icons@13.1.0/icons/mongodb.svg', color: '#47A248', bgColor: 'rgba(71, 162, 72, 0.1)' },
  { name: 'PostgreSQL', icon: 'https://cdn.jsdelivr.net/npm/simple-icons@13.1.0/icons/postgresql.svg', color: '#336791', bgColor: 'rgba(51, 103, 145, 0.1)' },
  { name: 'Express.js', icon: 'https://cdn.jsdelivr.net/npm/simple-icons@13.1.0/icons/express.svg', color: '#000000', bgColor: 'rgba(0, 0, 0, 0.1)' },
  { name: 'Tailwind CSS', icon: 'https://cdn.jsdelivr.net/npm/simple-icons@13.1.0/icons/tailwindcss.svg', color: '#06B6D4', bgColor: 'rgba(6, 182, 212, 0.1)' },
  { name: 'Git', icon: 'https://cdn.jsdelivr.net/npm/simple-icons@13.1.0/icons/git.svg', color: '#F05032', bgColor: 'rgba(240, 80, 50, 0.1)' },
  { name: 'Firebase', icon: 'https://cdn.jsdelivr.net/npm/simple-icons@13.1.0/icons/firebase.svg', color: '#FFCA28', bgColor: 'rgba(255, 202, 40, 0.1)' },
  { name: 'Docker', icon: 'https://cdn.jsdelivr.net/npm/simple-icons@13.1.0/icons/docker.svg', color: '#2496ED', bgColor: 'rgba(36, 150, 237, 0.1)' },
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
  return (
    <section id="skills" className="py-20 bg-gray-50">
      <div className="max-w-6xl mx-auto px-6">
        <motion.h2
          className="text-3xl md:text-4xl font-bold text-center mb-16 text-gray-900"
          variants={titleVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          style={{ fontFamily: 'var(--font-heading)' }}
        >
          Skills & Technologies
        </motion.h2>
        
        <motion.div 
          className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-6"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
        >
          {skills.map((skill, index) => (
            <motion.div
              key={skill.name}
              className="card p-6 text-center group cursor-pointer relative overflow-hidden"
              variants={cardVariants}
              whileHover="hover"
              style={{
                background: `linear-gradient(135deg, ${skill.bgColor}, rgba(255, 255, 255, 0.8))`,
                borderColor: skill.color + '40'
              }}
            >
              {/* Animated background glow */}
              <motion.div
                className="absolute inset-0 opacity-0 group-hover:opacity-100"
                style={{
                  background: `radial-gradient(circle, ${skill.color}20 0%, transparent 70%)`,
                }}
                transition={{ duration: 0.3 }}
              />
              
              <div className="relative z-10">
                <motion.div 
                  className="flex justify-center mb-4"
                  variants={iconVariants}
                >
                  <motion.div
                    className="w-16 h-16 rounded-full flex items-center justify-center"
                    style={{ 
                      backgroundColor: skill.bgColor,
                      border: `2px solid ${skill.color}40`
                    }}
                    whileHover={{
                      scale: 1.1,
                      rotate: 5,
                      boxShadow: `0 0 20px ${skill.color}40`
                    }}
                    transition={{ duration: 0.3 }}
                  >
                    <img
                      src={skill.icon}
                      alt={skill.name}
                      className="w-8 h-8"
                      style={{ 
                        filter: `drop-shadow(0 2px 4px ${skill.color}40)`
                      }}
                    />
                  </motion.div>
                </motion.div>
                
                <motion.h3 
                  className="text-sm font-medium text-gray-700 group-hover:text-gray-900 transition-colors duration-200"
                  style={{ fontFamily: 'var(--font-body)' }}
                  whileHover={{ scale: 1.05 }}
                >
                  {skill.name}
                </motion.h3>
              </div>
              
              {/* Hover effect overlay */}
              <motion.div
                className="absolute inset-0 bg-gradient-to-br from-transparent via-white to-transparent opacity-0 group-hover:opacity-20"
                initial={{ x: '-100%' }}
                whileHover={{ x: '100%' }}
                transition={{ duration: 0.6, ease: 'easeInOut' }}
              />
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}

export default Skills;