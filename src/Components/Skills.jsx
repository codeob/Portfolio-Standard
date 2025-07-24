import React from 'react';
import { motion } from 'framer-motion';

const skills = [
  { name: 'HTML', icon: 'https://cdn.jsdelivr.net/npm/simple-icons@13.1.0/icons/html5.svg', color: '#E34F26', subtitle: 'Frontend Markup', percentage: 90 },
  { name: 'CSS', icon: 'https://cdn.jsdelivr.net/npm/simple-icons@13.1.0/icons/css3.svg', color: '#1572B6', subtitle: 'Styling Framework', percentage: 85 },
  { name: 'Tailwind CSS', icon: 'https://cdn.jsdelivr.net/npm/simple-icons@13.1.0/icons/tailwindcss.svg', color: '#06B6D4', subtitle: 'Utility-First CSS', percentage: 75 },
  { name: 'JavaScript', icon: 'https://cdn.jsdelivr.net/npm/simple-icons@13.1.0/icons/javascript.svg', color: '#F7DF1E', subtitle: 'Dynamic Scripting', percentage: 80 },
  { name: 'React.js', icon: 'https://cdn.jsdelivr.net/npm/simple-icons@13.1.0/icons/react.svg', color: '#61DAFB', subtitle: 'Frontend Library', percentage: 80 },
  { name: 'Node.js', icon: 'https://cdn.jsdelivr.net/npm/simple-icons@13.1.0/icons/nodedotjs.svg', color: '#3C873A', subtitle: 'Backend Runtime', percentage: 75 },
  { name: 'MongoDB', icon: 'https://cdn.jsdelivr.net/npm/simple-icons@13.1.0/icons/mongodb.svg', color: '#47A248', subtitle: 'NoSQL Database', percentage: 70 },
  { name: 'Express.js', icon: 'https://cdn.jsdelivr.net/npm/simple-icons@13.1.0/icons/express.svg', color: '#000000', subtitle: 'Backend Framework', percentage: 70 },
  { name: 'Firebase', icon: 'https://cdn.jsdelivr.net/npm/simple-icons@13.1.0/icons/firebase.svg', color: '#FFCA28', subtitle: 'Real-Time Backend', percentage: 70 },
  { name: 'GitHub', icon: 'https://cdn.jsdelivr.net/npm/simple-icons@13.1.0/icons/github.svg', color: '#181717', subtitle: 'Version Control', percentage: 85 },
  { name: 'React Native', icon: 'https://cdn.jsdelivr.net/npm/simple-icons@13.1.0/icons/react.svg', color: '#61DAFB', subtitle: 'Mobile Development', percentage: 65 },
];

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
    transition: { duration: 0.8, ease: 'easeOut', staggerChildren: 0.1 },
  },
};

const cardVariants = {
  hidden: { opacity: 0, y: 30, scale: 0.9 },
  visible: { opacity: 1, y: 0, scale: 1, transition: { duration: 0.5, ease: 'easeOut' } },
  hover: {
    scale: 1.05,
    boxShadow: '0 0 20px rgba(37, 99, 235, 0.6)',
    transition: { duration: 0.3, ease: 'easeOut' },
  },
};

const titleVariants = {
  hidden: { opacity: 0, y: -30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: 'easeOut' } },
};

const socialVariants = {
  hidden: { opacity: 0, scale: 0.8 },
  visible: { opacity: 1, scale: 1, transition: { duration: 0.5 } },
  hover: { scale: 1.2, transition: { duration: 0.3, ease: 'easeOut' } },
};

function Skills() {
  return (
    <section id="skills" className="relative min-h-screen flex flex-col items-center justify-center px-4 sm:px-6 lg:px-8 py-12 z-10 bg-white">
      <motion.h2
        className="relative text-3xl sm:text-4xl lg:text-5xl font-bold font-sans mb-8 text-center text-[#D97706]"
        variants={titleVariants}
        initial="hidden"
        animate="visible"
      >
        Tech Stack Mastery
        <motion.div
          className="h-1 mt-2 mx-auto bg-gradient-to-r from-[#2563EB] to-[#D97706]"
          initial={{ width: 0 }}
          animate={{ width: '50%' }}
          transition={{ duration: 1, ease: 'easeOut', delay: 0.2 }}
        />
      </motion.h2>
      <motion.div className="relative grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8 max-w-7xl mx-auto z-10" variants={containerVariants} initial="hidden" animate="visible">
        {skills.map((skill) => (
          <motion.div
            key={skill.name}
            className="relative p-6 rounded-xl bg-[#E5E7EB] border border-[#9CA3AF] hover:scale-105 hover:shadow-lg transition-all duration-300"
            variants={cardVariants}
            whileHover="hover"
            style={{ pointerEvents: 'auto', zIndex: 10 }}
          >
            <div className="relative flex justify-center mb-4">
              <img
                src={skill.icon}
                alt={skill.name}
                className="w-16 h-16 sm:w-20 sm:h-20"
                style={{ filter: 'drop-shadow(0 0 10px rgba(37, 99, 235, 0.6)) brightness(1.2)' }}
              />
              <motion.div
                className="absolute inset-0 rounded-full"
                style={{ background: skill.color, opacity: 0.4, filter: 'blur(30px)' }}
                animate={{ scale: [1, 1.2, 1], opacity: [0.4, 0.6, 0.4] }}
                transition={{ duration: 1.8, repeat: Infinity, ease: 'easeInOut' }}
              />
            </div>
            <h3 className="text-lg sm:text-xl font-semibold font-sans text-center text-[#1F2937]">{skill.name}</h3>
            <p className="text-xs sm:text-sm font-sans text-center text-[#6B7280]">{skill.subtitle}</p>
            <div className="relative flex justify-center mt-4">
              <svg className="w-16 h-16" viewBox="0 0 36 36">
                <path
                  d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831"
                  fill="none"
                  stroke="#9CA3AF"
                  strokeWidth="2.5"
                />
                <motion.path
                  d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831"
                  fill="none"
                  stroke={skill.color}
                  strokeWidth="2.5"
                  strokeDasharray="100, 100"
                  strokeDashoffset={100 - skill.percentage}
                  initial={{ strokeDashoffset: 100 }}
                  animate={{ strokeDashoffset: 100 - skill.percentage }}
                  transition={{ duration: 1.5, ease: 'easeInOut' }}
                  style={{ filter: `drop-shadow(0 0 10px ${skill.color})` }}
                />
              </svg>
            </div>
          </motion.div>
        ))}
      </motion.div>
      <motion.div className="flex justify-center gap-6 mt-12" variants={containerVariants}>
        {socialLinks.map((link) => (
          <motion.a
            key={link.name}
            href={link.url}
            className="relative group hover:scale-125 hover:shadow-lg transition-all duration-300"
            variants={socialVariants}
            whileHover="hover"
            style={{ pointerEvents: 'auto', zIndex: 10 }}
          >
            <img
              src={link.icon}
              alt={link.name}
              className="w-8 h-8"
              style={{ filter: 'drop-shadow(0 0 8px rgba(37, 99, 235, 0.6))' }}
            />
            <motion.div
              className="absolute inset-0 rounded-full"
              style={{ background: link.color, opacity: 0.3, filter: 'blur(15px)' }}
              initial={{ scale: 0, opacity: 0 }}
              whileHover={{ scale: 1.5, opacity: 0.7, transition: { duration: 0.3, ease: 'easeOut' } }}
            />
          </motion.a>
        ))}
      </motion.div>
    </section>
  );
}

export default Skills;