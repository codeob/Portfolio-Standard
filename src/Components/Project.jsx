import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

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
    category: 'Game Development',
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
  React: '#00D4FF',
  'Node.js': '#00FF88',
  MongoDB: '#8A2BE2',
  Tailwind: '#00D4FF',
  Firebase: '#00FF88',
  JavaScript: '#00D4FF',
  'Local Storage': '#8A2BE2',
  'React Native': '#00D4FF',
  'Express.js': '#00FF88',
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
  hidden: { opacity: 0, scale: 0.8, y: 50 },
  visible: { opacity: 1, scale: 1, y: 0, transition: { duration: 0.6, ease: 'easeInOut' } },
  hover: {
    scale: 1.05,
    boxShadow: '0 0 20px #00FF88',
    transition: { duration: 0.3, ease: 'easeOut' },
  },
};

const titleVariants = {
  hidden: { opacity: 0, y: -20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: 'easeInOut' } },
};

const buttonVariants = {
  hover: { scale: 1.1, boxShadow: '0 0 12px #00FF88', transition: { duration: 0.3, ease: 'easeOut' } },
};

function Project() {
  const [filter, setFilter] = useState('All');
  const [currentIndex, setCurrentIndex] = useState(0);
  const carouselRef = useRef(null);

  const categories = ['All', 'Frontend', 'Full Stack', 'Game Development'];
  const filteredProjects = filter === 'All' ? projects : projects.filter((project) => project.category === filter);

  const handleDragEnd = (event, info) => {
    if (info.offset.x < -100) {
      setCurrentIndex((prev) => (prev + 1) % filteredProjects.length);
    } else if (info.offset.x > 100) {
      setCurrentIndex((prev) => (prev - 1 + filteredProjects.length) % filteredProjects.length);
    }
  };

  const handleKeyDown = (event) => {
    if (event.key === 'ArrowRight') {
      setCurrentIndex((prev) => (prev + 1) % filteredProjects.length);
    } else if (event.key === 'ArrowLeft') {
      setCurrentIndex((prev) => (prev - 1 + filteredProjects.length) % filteredProjects.length);
    }
  };

  useEffect(() => {
    setCurrentIndex(0);
  }, [filter]);

  return (
    <section
      id="projects"
      className="relative min-h-screen flex flex-col items-center justify-center px-4 sm:px-6 lg:px-8 py-12 z-10"
      onKeyDown={handleKeyDown}
      tabIndex={0}
    >
      <motion.h2
        className="relative text-2xl sm:text-3xl lg:text-4xl font-bold font-sans mb-8 text-center"
        variants={titleVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: false, amount: 0.3 }}
        style={{ background: 'linear-gradient(45deg, #00D4FF, #8A2BE2)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}
      >
        My Projects
        <motion.div
          className="h-1 mt-2 mx-auto bg-gradient-to-r from-[var(--accent-blue)] to-[var(--accent-purple)]"
          initial={{ width: 0 }}
          animate={{ width: '50%' }}
          transition={{ duration: 0.8, ease: 'easeInOut', delay: 0.2 }}
        />
      </motion.h2>
      <motion.div
        className="flex flex-wrap justify-center gap-2 mb-10"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: false, amount: 0.3 }}
      >
        {categories.map((category) => (
          <motion.button
            key={category}
            onClick={() => setFilter(category)}
            className={`px-3 py-1 rounded-full font-sans text-sm font-semibold border border-[var(--divider-border)] shadow-[0_0_8px_var(--accent-blue)] ${
              filter === category
                ? 'bg-[var(--accent-blue)] text-[var(--primary-text)]'
                : 'bg-[var(--hover-bg)] text-[var(--secondary-text)] hover:bg-[var(--accent-green)] hover:text-[var(--primary-text)]'
            } transition-all duration-300`}
            variants={buttonVariants}
            whileHover="hover"
            style={{ pointerEvents: 'auto', zIndex: 10, background: filter === category ? 'linear-gradient(45deg, #00D4FF, #8A2BE2)' : '' }}
          >
            {category}
          </motion.button>
        ))}
      </motion.div>
      <motion.div
        className="absolute top-4 right-4 sm:top-6 sm:right-6 px-2 py-1 rounded-full font-sans text-xs font-semibold bg-[var(--hover-bg)] text-[var(--accent-purple)] border border-[var(--divider-border)] shadow-[0_0_8px_var(--accent-purple)]"
        initial={{ opacity: 0, x: 50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.6, delay: 0.5 }}
      >
        {filteredProjects.length} Projects
      </motion.div>

      <div className="hidden lg:flex w-full max-w-5xl mx-auto h-[550px] justify-center items-center relative">
        <AnimatePresence>
          {filteredProjects.map((project, index) => {
            const offset = (index - currentIndex + filteredProjects.length) % filteredProjects.length;
            const isCenter = offset === 0;
            const isSide = offset === 1 || offset === filteredProjects.length - 1;
            const zIndex = isCenter ? 20 : isSide ? 10 : 0;
            const xPosition = isCenter ? 0 : offset === 1 ? 200 : -200;
            const scale = isCenter ? 1 : isSide ? 0.85 : 0;
            const opacity = isCenter ? 1 : isSide ? 0.7 : 0;

            return (
              <motion.div
                key={project.id}
                className="absolute w-[320px] rounded-2xl bg-[var(--hover-bg)] border border-[var(--divider-border)] shadow-[0_0_10px_var(--accent-blue)]"
                variants={cardVariants}
                initial="hidden"
                animate={{ x: xPosition, scale, opacity, zIndex, y: 0 }}
                transition={{ duration: 0.6, ease: 'easeInOut' }}
                whileHover={{ scale: isCenter ? 1.05 : scale, zIndex: zIndex + 10, transition: { duration: 0.3 } }}
                drag="x"
                dragConstraints={{ left: 0, right: 0 }}
                dragElastic={0.2}
                onDragEnd={handleDragEnd}
                style={{ pointerEvents: isCenter || isSide ? 'auto' : 'none', transformPerspective: 1000 }}
              >
                <motion.img
                  src={project.screenshot}
                  alt={project.title}
                  className="w-full h-56 object-cover rounded-t-2xl"
                  style={{ filter: 'drop-shadow(0_0_10px_var(--accent-blue))' }}
                  whileHover={{ y: -10, transition: { duration: 0.3, ease: 'easeOut' } }}
                />
                <div className="p-4">
                  <h3 className="text-lg font-bold font-sans text-[var(--accent-purple)] mb-2">{project.title}</h3>
                  <p className="text-sm font-sans text-[var(--secondary-text)] mb-3 line-clamp-2">{project.description}</p>
                  <div className="flex flex-wrap gap-1 mb-4">
                    {project.tech.map((tech) => (
                      <motion.span
                        key={tech}
                        className="px-2 py-0.5 rounded-full text-xs font-sans font-medium"
                        style={{
                          background: `rgba(${parseInt(techColors[tech].slice(1,3),16)}, ${parseInt(techColors[tech].slice(3,5),16)}, ${parseInt(techColors[tech].slice(5,7),16)}, 0.2)`,
                          color: techColors[tech],
                          border: `1px solid ${techColors[tech]}`,
                        }}
                        whileHover={{ scale: 1.1, boxShadow: `0 0 8px ${techColors[tech]}80`, transition: { duration: 0.3 } }}
                      >
                        {tech}
                      </motion.span>
                    ))}
                  </div>
                  <motion.a
                    href={project.liveLink}
                    className="block text-center px-4 py-2 rounded-full font-sans text-sm font-semibold bg-[var(--accent-blue)] text-[var(--primary-text)] shadow-[0_0_8px_var(--accent-blue)]"
                    variants={buttonVariants}
                    whileHover="hover"
                    whileTap={{ scale: 0.95 }}
                    style={{ pointerEvents: 'auto', zIndex: 10 }}
                    aria-label={`View ${project.title} project`}
                  >
                    View Project
                  </motion.a>
                </div>
              </motion.div>
            );
          })}
        </AnimatePresence>
        <motion.button
          className="absolute left-12 top-1/2 -translate-y-1/2 bg-[var(--accent-blue)] text-[var(--primary-text)] p-3 rounded-full shadow-[0_0_10px_var(--accent-blue)]"
          onClick={() => setCurrentIndex((prev) => (prev - 1 + filteredProjects.length) % filteredProjects.length)}
          variants={buttonVariants}
          whileHover="hover"
          aria-label="Previous project"
        >
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 19l-7-7 7-7" />
          </svg>
        </motion.button>
        <motion.button
          className="absolute right-12 top-1/2 -translate-y-1/2 bg-[var(--accent-blue)] text-[var(--primary-text)] p-3 rounded-full shadow-[0_0_10px_var(--accent-blue)]"
          onClick={() => setCurrentIndex((prev) => (prev + 1) % filteredProjects.length)}
          variants={buttonVariants}
          whileHover="hover"
          aria-label="Next project"
        >
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7" />
          </svg>
        </motion.button>
      </div>

      <div className="lg:hidden w-full max-w-[600px] mx-auto grid grid-cols-1 sm:grid-cols-2 gap-4 justify-items-center">
        <AnimatePresence>
          {filteredProjects.map((project) => (
            <motion.div
              key={project.id}
              className="w-[280px] rounded-2xl bg-[var(--hover-bg)] border border-[var(--divider-border)] shadow-[0_0_10px_var(--accent-blue)]"
              variants={cardVariants}
              initial="hidden"
              animate="visible"
              exit={{ opacity: 0, scale: 0.8, transition: { duration: 0.4 } }}
            >
              <motion.img
                src={project.screenshot}
                alt={project.title}
                className="w-full h-44 object-cover rounded-t-2xl"
                style={{ filter: 'drop-shadow(0_0_10px_var(--accent-blue))' }}
                whileHover={{ y: -10, transition: { duration: 0.3, ease: 'easeOut' } }}
              />
              <div className="p-4">
                <h3 className="text-lg font-bold font-sans text-[var(--accent-purple)] mb-2">{project.title}</h3>
                <p className="text-sm font-sans text-[var(--secondary-text)] mb-3 line-clamp-2">{project.description}</p>
                <div className="flex flex-wrap gap-1 mb-4">
                  {project.tech.map((tech) => (
                    <motion.span
                      key={tech}
                      className="px-2 py-0.5 rounded-full text-xs font-sans font-medium"
                      style={{
                        background: `rgba(${parseInt(techColors[tech].slice(1,3),16)}, ${parseInt(techColors[tech].slice(3,5),16)}, ${parseInt(techColors[tech].slice(5,7),16)}, 0.2)`,
                        color: techColors[tech],
                        border: `1px solid ${techColors[tech]}`,
                      }}
                      whileHover={{ scale: 1.1, boxShadow: `0 0 8px ${techColors[tech]}80`, transition: { duration: 0.3 } }}
                    >
                      {tech}
                    </motion.span>
                  ))}
                </div>
                <motion.a
                  href={project.liveLink}
                  className="block text-center px-4 py-2 rounded-full font-sans text-sm font-semibold bg-[var(--accent-blue)] text-[var(--primary-text)] shadow-[0_0_8px_var(--accent-blue)]"
                  variants={buttonVariants}
                  whileHover="hover"
                  whileTap={{ scale: 0.95 }}
                  style={{ pointerEvents: 'auto', zIndex: 10 }}
                  aria-label={`View ${project.title} project`}
                >
                  View Project
                </motion.a>
              </div>
            </motion.div>
          ))}
        </AnimatePresence>
      </div>
    </section>
  );
}

export default Project;