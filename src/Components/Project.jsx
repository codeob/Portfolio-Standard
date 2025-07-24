import React, { useState } from 'react';
import { motion } from 'framer-motion';

const projects = [
  {
    id: 1,
    title: 'Event Planner',
    description: 'A web app for organizing events with real-time updates.',
    screenshot: 'https://i.pinimg.com/1200x/d1/56/0d/d1560d593e2839a644c74c54a05f77aa.jpg',
    tech: ['React', 'Firebase', 'Node.js'],
    category: 'Full Stack',
    liveLink: 'https://effortless-sunshine-c5b87e.netlify.app/',
    githubLink: 'git@github.com:allianatenadu/Planner.git',
  },
  {
    id: 2,
    title: 'Guessing Game',
    description: 'An interactive number guessing game.',
    screenshot: 'https://i.pinimg.com/1200x/42/ec/85/42ec856b3dba1595c7be4cff23965c34.jpg',
    tech: ['JavaScript', 'React'],
    category: 'Frontend',
    liveLink: 'https://polite-cajeta-65e913.netlify.app/',
    githubLink: 'https://github.com/codeob/Game.git',
  },
  {
    id: 3,
    title: 'Movie',
    description: 'An interactive movie browsing platform.',
    screenshot: 'https://i.pinimg.com/1200x/2b/30/67/2b30679ede227a620636d13f4c2ec013.jpg',
    tech: ['React'],
    category: 'Frontend',
    liveLink: 'https://cozy-meringue-a0fdad.netlify.app/',
    githubLink: 'https://github.com/codeob/react-9-home-work.git',
  },
  {
    id: 4,
    title: 'Todo List',
    description: 'A task management app with CRUD functionality.',
    screenshot: 'https://i.pinimg.com/1200x/c5/78/1d/c5781d72c1298dc869b74702b4ee42a0.jpg',
    tech: ['React', 'Local Storage'],
    category: 'Frontend',
    liveLink: 'https://curious-marshmallow-8df031.netlify.app/',
    githubLink: 'git@github.com:codeob/TodoList.git',
  },
  {
    id: 5,
    title: 'E-commerce Website',
    description: 'A full-featured online store with payment integration.',
    screenshot: 'https://i.pinimg.com/1200x/53/00/63/5300630244e710970b63eac76570c343.jpg',
    tech: ['React', 'Node.js', 'MongoDB'],
    category: 'Full Stack',
    liveLink: 'https://lustrous-rolypoly-7a6031.netlify.app/',
    githubLink: 'git@github.com:codeob/E-commerce.git',
  },
  {
    id: 6,
    title: 'Spices Store',
    description: 'A mobile-friendly spices store platform.',
    screenshot: 'https://i.pinimg.com/1200x/e9/81/e1/e981e186761b7955be31f9d9cfe8c9f1.jpg',
    tech: ['React', 'Tailwind'],
    category: 'Full Stack',
    liveLink: 'https://startling-speculoos-5080dd.netlify.app/',
    githubLink: 'https://github.com/codeob/Spices-product.git',
  },
];

const techColors = {
  React: '#61DAFB',
  'Node.js': '#3C873A',
  MongoDB: '#47A248',
  Tailwind: '#06B6D4',
  Firebase: '#FFCA28',
  JavaScript: '#FFCA28',
  Express: '#000000',
  'Local Storage': '#6B7280',
  'React Native': '#61DAFB',
  'Express.js': '#000000',
};

const containerVariants = {
  hidden: { opacity: 0, y: 60 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 1, ease: 'easeInOut', staggerChildren: 0.15 },
  },
};

const cardVariants = {
  hidden: { opacity: 0, y: 20, scale: 0.9 },
  visible: { opacity: 1, y: 0, scale: 1, transition: { duration: 0.6, ease: 'easeInOut' } },
  hover: {
    scale: 1.05,
    rotate: 1,
    boxShadow: '0 0 15px rgba(37, 99, 235, 0.6)',
    transition: { duration: 0.3, ease: 'easeOut' },
  },
};

const titleVariants = {
  hidden: { opacity: 0, y: -20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: 'easeInOut' } },
};

const buttonVariants = {
  hover: { scale: 1.05, boxShadow: '0 0 12px rgba(37, 99, 235, 0.6)', transition: { duration: 0.3, ease: 'easeOut' } },
};

function Project() {
  const [filter, setFilter] = useState('All');

  const categories = ['All', 'Frontend', 'Full Stack', 'Game Development'];
  const filteredProjects = filter === 'All' ? projects : projects.filter((project) => project.category === filter);

  return (
    <section id="projects" className="relative min-h-screen flex flex-col items-center px-4 sm:px-6 lg:px-8 py-12 z-10 bg-white in-view">
      <motion.h2
        className="relative text-2xl sm:text-3xl lg:text-4xl font-bold font-sans mb-8 text-center text-[#D97706]"
        variants={titleVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: false, amount: 0.3 }}
      >
        My Projects
        <motion.div
          className="h-1 mt-2 mx-auto bg-gradient-to-r from-[#2563EB] to-[#D97706]"
          initial={{ width: 0 }}
          animate={{ width: '50%' }}
          transition={{ duration: 0.8, ease: 'easeInOut', delay: 0.2 }}
        />
      </motion.h2>
      <motion.div className="flex flex-wrap justify-center gap-2 mb-10" variants={containerVariants} initial="hidden" whileInView="visible" viewport={{ once: false, amount: 0.3 }}>
        {categories.map((category) => (
          <motion.button
            key={category}
            onClick={() => setFilter(category)}
            className={`px-2 py-1 rounded-full font-sans text-xs sm:text-sm font-semibold ${
              filter === category ? 'bg-[#2563EB] text-white shadow-md' : 'bg-[#E5E7EB] text-[#1F2937] hover:bg-[#2563EB]/20'
            } border border-[#9CA3AF] transition-all duration-300 hover:scale-105 hover:shadow-md`}
            variants={buttonVariants}
            whileHover="hover"
            style={{ pointerEvents: 'auto', zIndex: 10 }}
          >
            {category}
          </motion.button>
        ))}
      </motion.div>
      <motion.div
        className="absolute top-4 right-4 sm:top-6 sm:right-6 px-2 py-1 rounded-full font-sans text-xs font-semibold bg-[#E5E7EB] text-[#D97706] border border-[#9CA3AF] shadow-md"
        initial={{ opacity: 0, x: 50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.6, delay: 0.5 }}
      >
        {projects.length} Projects
      </motion.div>
      <motion.div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 max-w-6xl mx-auto w-full z-10" variants={containerVariants} initial="hidden" whileInView="visible" viewport={{ once: false, amount: 0.3 }}>
        {filteredProjects.map((project) => (
          <motion.div
            key={project.id}
            className="relative p-3 rounded-lg bg-[#E5E7EB] border border-[#9CA3AF] hover:scale-105 hover:shadow-md transition-all duration-300"
            variants={cardVariants}
            whileHover="hover"
            style={{ pointerEvents: 'auto', zIndex: 10 }}
          >
            <motion.img
              src={project.screenshot}
              alt={project.title}
              className="w-full h-32 sm:h-36 object-cover rounded-md mb-3"
              style={{ filter: 'drop-shadow(0 0 8px rgba(37, 99, 235, 0.6))' }}
              whileHover={{ scale: 1.05, transition: { duration: 0.3, ease: 'easeOut' } }}
            />
            <h3 className="text-base font-bold font-sans mb-2 text-[#D97706]">{project.title}</h3>
            <p className="text-xs font-sans mb-2 text-[#6B7280]">{project.description}</p>
            <div className="flex flex-wrap gap-1 mb-3">
              {project.tech.map((tech) => (
                <motion.span
                  key={tech}
                  className="px-1 py-0.5 rounded-full text-xs font-sans font-medium hover:scale-110 hover:shadow-md transition-all duration-300"
                  style={{
                    background: `rgba(${parseInt(techColors[tech].slice(1,3),16)}, ${parseInt(techColors[tech].slice(3,5),16)}, ${parseInt(techColors[tech].slice(5,7),16)}, 0.2)`,
                    color: techColors[tech],
                    border: `1px solid ${techColors[tech]}`,
                    pointerEvents: 'auto',
                    zIndex: 10,
                  }}
                  whileHover={{ scale: 1.1, boxShadow: `0 0 8px ${techColors[tech]}80`, transition: { duration: 0.3, ease: 'easeOut' } }}
                >
                  {tech}
                </motion.span>
              ))}
            </div>
            <div className="flex gap-2">
              <motion.a
                href={project.liveLink}
                className="flex-1 text-center px-2 py-1 rounded-full font-sans text-xs font-semibold bg-[#2563EB] text-white transition-all duration-300 shadow-md hover:scale-105 hover:shadow-lg"
                variants={buttonVariants}
                whileHover="hover"
                style={{ pointerEvents: 'auto', zIndex: 10 }}
              >
                View Live
              </motion.a>
              <motion.a
                href={project.githubLink}
                className="flex-1 text-center px-2 py-1 rounded-full font-sans text-xs font-semibold bg-[#E5E7EB] text-[#1F2937] hover:bg-[#2563EB]/20 transition-all duration-300 shadow-md hover:scale-105 hover:shadow-lg"
                variants={buttonVariants}
                whileHover="hover"
                style={{ pointerEvents: 'auto', zIndex: 10 }}
              >
                GitHub Code
              </motion.a>
            </div>
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
}

export default Project;