import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const projects = [
  {
    id:1,
    title:'JobFinder',
    description:'A comprehensive job search platform featuring advanced filtering, user authentication, real-time job postings, and responsive design. Built with React for frontend, Node.js and Express for backend, and MongoDB for data storage.',
    screenshot:'https://via.placeholder.com/400x250/4A90E2/FFFFFF?text=JobFinder+Screenshot',
    tech:['React','Tailwind','Node.js','Express.js','Local Storage','MongoDB'],
    category:'Full Stack',
    liveLink:' http://localhost:5173/',
    github:'https://github.com/codeob/JOB_Finder.git'
  },
  {
    id: 2,
    title: 'Event Planner',
    description: 'A dynamic event management application with real-time collaboration, calendar integration, and automated notifications. Features include event creation, participant management, and Firebase-powered backend for seamless data synchronization.',
    screenshot: 'https://via.placeholder.com/400x250/50E3C2/FFFFFF?text=Event+Planner+Screenshot',
    tech: ['React', 'Firebase', 'Node.js'],
    category: 'Full Stack',
    liveLink: 'https://effortless-sunshine-c5b87e.netlify.app/',
    githubLink: 'git@github.com:allianatenadu/Planner.git',
  },
  {
    id: 3,
    title: 'Guessing Game',
    description: 'An engaging interactive number guessing game with dynamic difficulty levels, score tracking, and responsive design. Implements game logic with JavaScript and features a clean, intuitive React-based user interface.',
    screenshot: 'https://via.placeholder.com/400x250/FF6B6B/FFFFFF?text=Guessing+Game+Screenshot',
    tech: ['JavaScript', 'React'],
    category: 'Game Development',
    liveLink: 'https://polite-cajeta-65e913.netlify.app/',
    githubLink: 'https://github.com/codeob/Game.git',
  },
  {
    id: 4,
    title: 'Movie App',
    description: 'A sophisticated movie browsing platform with search functionality, detailed movie information, and responsive grid layout. Built with React for smooth user interactions and optimized for performance across devices.',
    screenshot: 'https://via.placeholder.com/400x250/9B59B6/FFFFFF?text=Movie+App+Screenshot',
    tech: ['React'],
    category: 'Frontend',
    liveLink: 'https://cozy-meringue-a0fdad.netlify.app/',
    githubLink: 'https://github.com/codeob/react-9-home-work.git',
  },
  {
    id: 5,
    title: 'Todo List',
    description: 'A robust task management application with full CRUD operations, local storage persistence, and drag-and-drop functionality. Features include task categorization, priority levels, and a clean, accessible user interface.',
    screenshot: 'https://via.placeholder.com/400x250/F39C12/FFFFFF?text=Todo+List+Screenshot',
    tech: ['React', 'Local Storage'],
    category: 'Frontend',
    liveLink: 'https://curious-marshmallow-8df031.netlify.app/',
    githubLink: 'git@github.com:codeob/TodoList.git',
  },
  {
    id: 6,
    title: 'E-commerce Website',
    description: 'A full-featured online marketplace with secure payment processing, product catalog management, and user authentication. Includes shopping cart functionality, order tracking, and admin dashboard for inventory management.',
    screenshot: 'https://via.placeholder.com/400x250/E74C3C/FFFFFF?text=E-commerce+Screenshot',
    tech: ['React', 'Node.js', 'MongoDB'],
    category: 'Full Stack',
    liveLink: 'https://lustrous-rolypoly-7a6031.netlify.app/',
    githubLink: 'git@github.com:codeob/E-commerce.git',
  },
  {
    id: 7,
    title: 'Spices Store',
    description: 'A modern e-commerce platform specializing in spices with mobile-optimized design, product filtering, and secure checkout. Features include product reviews, wishlist functionality, and responsive design using Tailwind CSS.',
    screenshot: 'https://via.placeholder.com/400x250/27AE60/FFFFFF?text=Spices+Store+Screenshot',
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
  hidden: { opacity: 0, y: 50 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { 
      duration: 1, 
      ease: [0.4, 0, 0.2, 1], 
      staggerChildren: 0.2,
      delayChildren: 0.3
    },
  },
};

const cardVariants = {
  hidden: { 
    opacity: 0, 
    y: 60, 
    scale: 0.8,
    rotateX: -15
  },
  visible: { 
    opacity: 1, 
    y: 0, 
    scale: 1,
    rotateX: 0,
    transition: { 
      duration: 0.8, 
      ease: [0.4, 0, 0.2, 1] 
    } 
  },
  hover: {
    scale: 1.05,
    y: -10,
    rotateX: 5,
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
      delay: 0.2
    } 
  },
};

const buttonVariants = {
  hidden: { 
    opacity: 0, 
    scale: 0.8,
    y: 20
  },
  visible: { 
    opacity: 1, 
    scale: 1,
    y: 0,
    transition: { 
      duration: 0.6, 
      ease: [0.4, 0, 0.2, 1],
      delay: 0.5
    } 
  },
  hover: { 
    scale: 1.05,
    y: -2,
    transition: { duration: 0.3, ease: [0.4, 0, 0.2, 1] } 
  },
  tap: {
    scale: 0.95,
    transition: { duration: 0.1 }
  }
};

const imageVariants = {
  hidden: { 
    opacity: 0, 
    scale: 1.1
  },
  visible: { 
    opacity: 1, 
    scale: 1,
    transition: { 
      duration: 0.8, 
      ease: [0.4, 0, 0.2, 1],
      delay: 0.3
    } 
  },
  hover: {
    scale: 1.1,
    transition: { duration: 0.4 }
  }
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
      className="py-12 sm:py-16 lg:py-20 bg-white relative overflow-hidden"
      onKeyDown={handleKeyDown}
      tabIndex={0}
    >
      {/* Floating Programming Languages Background */}
      <div className="absolute inset-0 pointer-events-none">
        {[
          'React', 'Node.js', 'JavaScript', 'TypeScript', 'Next.js',
          'MongoDB', 'PostgreSQL', 'Express.js', 'Tailwind CSS',
          'Git', 'Firebase', 'Docker', 'HTML', 'CSS', 'React Native'
        ].map((lang, index) => (
          <motion.div
            key={lang}
            className="absolute text-gray-300 font-medium text-xs opacity-15"
            style={{
              left: `${6 + (index * 6) % 88}%`,
              top: `${8 + (index * 8) % 75}%`,
            }}
            animate={{
              y: [0, -20, 0],
              x: [0, 12, 0],
              rotate: [0, 1.5, -1.5, 0],
              opacity: [0.1, 0.2, 0.1],
            }}
            transition={{
              duration: 16 + (index * 1.3),
              repeat: Infinity,
              ease: "easeInOut",
              delay: index * 0.5,
            }}
          >
            {lang}
          </motion.div>
        ))}
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
      <motion.h2
          className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-center mb-8 sm:mb-12 lg:mb-16 text-gray-900 px-4"
        variants={titleVariants}
        initial="hidden"
        whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          style={{ fontFamily: 'var(--font-heading)' }}
      >
          Featured Projects
        </motion.h2>
        
        <motion.div
          className="flex flex-wrap justify-center gap-2 sm:gap-3 lg:gap-4 mb-8 sm:mb-10 lg:mb-12 px-4"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
      >
        {categories.map((category) => (
          <motion.button
            key={category}
            onClick={() => setFilter(category)}
              className={`px-3 sm:px-4 lg:px-6 py-1.5 sm:py-2 rounded-full text-xs sm:text-sm font-medium transition-all duration-200 ${
              filter === category
                  ? 'bg-blue-600 text-white'
                  : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
              }`}
            variants={buttonVariants}
            whileHover="hover"
              style={{ fontFamily: 'var(--font-body)' }}
          >
            {category}
          </motion.button>
        ))}
      </motion.div>

      <motion.div
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-3 sm:gap-4 lg:gap-6"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
        >
          {filteredProjects.map((project, index) => (
              <motion.div
                key={project.id}
              className="overflow-hidden group relative min-h-[250px] sm:min-h-[280px] lg:min-h-[300px] bg-blue-200 border border-blue-400 rounded-lg shadow-md sm:bg-gray-100 sm:border-gray-300"
                variants={cardVariants}
              whileHover="hover"
              style={{
                animationDelay: `${index * 0.1}s`
              }}
            >
              {/* Animated background gradient */}
              <motion.div
                className="absolute inset-0 opacity-0 group-hover:opacity-100"
                style={{
                  background: 'linear-gradient(135deg, rgba(37, 99, 235, 0.1), rgba(20, 184, 166, 0.1))'
                }}
                transition={{ duration: 0.3 }}
              />
              
              <div className="relative z-10">
                <div className="relative overflow-hidden">
                <motion.img
                  src={project.screenshot}
                  alt={project.title}
                    className="w-full h-32 sm:h-40 lg:h-48 object-cover"
                    variants={imageVariants}
                    whileHover="hover"
                  />
                  <motion.div 
                    className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-30 transition-all duration-300"
                    whileHover={{ opacity: 0.3 }}
                  />
                  
                  {/* Overlay with project info - hidden on mobile */}
                  <motion.div
                    className="absolute inset-0 hidden sm:flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                    initial={{ scale: 0.8 }}
                    whileHover={{ scale: 1 }}
                  >
                    <motion.div
                      className="bg-white/90 backdrop-blur-sm rounded-lg p-3 lg:p-4 text-center"
                      initial={{ y: 20, opacity: 0 }}
                      whileHover={{ y: 0, opacity: 1 }}
                      transition={{ duration: 0.3 }}
                    >
                      <h4 className="font-semibold text-gray-900 mb-1 lg:mb-2 text-sm lg:text-base">Quick Preview</h4>
                      <p className="text-xs lg:text-sm text-gray-600">Click to explore</p>
                    </motion.div>
                  </motion.div>
                </div>
                
                <div className="p-3 sm:p-4 lg:p-5">
                  <motion.h3
                    className="text-base sm:text-lg font-semibold mb-1.5 sm:mb-2 text-gray-900"
                    style={{ fontFamily: 'var(--font-heading)' }}
                    whileHover={{ scale: 1.02 }}
                  >
                    {project.title}
                  </motion.h3>

                  <motion.p
                    className="text-gray-600 mb-2 sm:mb-3 text-xs sm:text-sm leading-relaxed"
                    style={{ fontFamily: 'var(--font-body)' }}
                    initial={{ opacity: 0.8 }}
                    whileHover={{ opacity: 1 }}
                  >
                    {project.description || 'A modern web application built with cutting-edge technologies.'}
                  </motion.p>

                  <motion.div
                    className="flex flex-wrap gap-1 sm:gap-1.5 mb-3 sm:mb-4"
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    transition={{ duration: 0.5, delay: 0.3 }}
                  >
                    {project.tech.map((tech, techIndex) => (
                      <motion.span
                        key={tech}
                        className="px-1.5 sm:px-2 py-0.5 sm:py-1 bg-gray-100 text-gray-700 text-xs font-medium rounded-full hover:bg-blue-100 hover:text-blue-700 transition-colors duration-200"
                        style={{ fontFamily: 'var(--font-body)' }}
                        initial={{ scale: 0, opacity: 0 }}
                        whileInView={{ scale: 1, opacity: 1 }}
                        whileHover={{ scale: 1.05 }}
                        transition={{
                          duration: 0.3,
                          delay: techIndex * 0.1
                        }}
                      >
                        {tech}
                      </motion.span>
                    ))}
                  </motion.div>

                  <motion.div
                    className="flex flex-col sm:flex-row gap-1.5 sm:gap-2"
                    variants={buttonVariants}
                  >
                    <motion.a
                      href={project.liveLink}
                      className="btn-primary flex-1 flex items-center justify-center text-center py-1.5 sm:py-2 text-xs font-semibold"
                      whileHover="hover"
                      whileTap="tap"
                      style={{ fontFamily: 'var(--font-body)' }}
                  >
                    View Project
                  </motion.a>
                    <motion.a
                      href={project.githubLink || project.github}
                      className="btn-outline flex-1 flex items-center justify-center text-center py-1.5 sm:py-2 text-xs font-semibold"
          whileHover="hover"
                      whileTap="tap"
                      style={{ fontFamily: 'var(--font-body)' }}
                    >
                      GitHub
                    </motion.a>
                  </motion.div>
                </div>
              </div>
              
              {/* Shimmer effect */}
              <motion.div
                className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent opacity-0 group-hover:opacity-100"
                initial={{ x: '-100%' }}
                whileHover={{ x: '100%' }}
                transition={{ duration: 0.8, ease: 'easeInOut' }}
              />
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}

export default Project;