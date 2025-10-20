import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const projects = [
  {
    id:1,
    title:'JobFinder',
    description:'A comprehensive job search platform featuring advanced filtering, user authentication, real-time job postings, and responsive design. Built with React for frontend, Node.js and Express for backend, and MongoDB for data storage.',
    screenshot:'https://i.pinimg.com/1200x/77/6b/a0/776ba0a6f16808a1621beb1197085ff5.jpg',
    tech:['React','Tailwind','Node.js','Express.js','Local Storage','MongoDB'],
    category:'Full Stack',
    liveLink:' https://carrier-finder.netlify.app/',
    githubLink:'https://github.com/codeob/JOB_Finder.git'
  },
  {
    id: 2,
    title: 'Event Planner',
    description: 'A dynamic event management application with real-time collaboration, calendar integration, and automated notifications. Features include event creation, participant management, and Firebase-powered backend for seamless data synchronization.',
    screenshot: 'https://i.pinimg.com/1200x/39/a5/33/39a533650d582306cc4911e46172693b.jpg',
    tech: ['React', 'Firebase', 'Node.js'],
    category: 'Full Stack',
    liveLink: 'https://effortless-sunshine-c5b87e.netlify.app/',
    githubLink: 'git@github.com:allianatenadu/Planner.git',
  },
  {
    id: 3,
    title: 'Guessing Game',
    description: 'An engaging interactive number guessing game with dynamic difficulty levels, score tracking, and responsive design. Implements game logic with JavaScript and features a clean, intuitive React-based user interface.',
    screenshot: 'https://i.pinimg.com/1200x/19/d8/88/19d888eafaf67437f6cab03f7f85bb7d.jpg',
    tech: ['JavaScript', 'React','Tailwind'],
    category: 'Game Development',
    liveLink: 'https://polite-cajeta-65e913.netlify.app/',
    githubLink: 'https://github.com/codeob/Game.git',
  },
  {
    id: 4,
    title: 'Movie App',
    description: 'A sophisticated movie browsing platform with search functionality, detailed movie information, and responsive grid layout. Built with React for smooth user interactions and optimized for performance across devices.',
    screenshot: 'https://i.pinimg.com/originals/dc/4f/c6/dc4fc66a552cd9570c3555790ced6b75.jpg',
    tech: ['React','Tailwind'],
    category: 'Frontend',
    liveLink: 'https://cozy-meringue-a0fdad.netlify.app/',
    githubLink: 'https://github.com/codeob/react-9-home-work.git',
  },
  {
    id: 5,
    title: 'Todo List',
    description: 'A robust task management application with full CRUD operations, local storage persistence, and drag-and-drop functionality. Features include task categorization, priority levels, and a clean, accessible user interface.',
    screenshot: 'https://i.pinimg.com/1200x/85/71/bd/8571bd1743df90f07075be5c80d76ae9.jpg',
    tech: ['React', 'Local Storage','Tailwind'],
    category: 'Frontend',
    liveLink: 'https://curious-marshmallow-8df031.netlify.app/',
    githubLink: 'git@github.com:codeob/TodoList.git',
  },
  {
    id: 6,
    title: 'E-commerce Website',
    description: 'A full-featured online marketplace with secure payment processing, product catalog management, and user authentication. Includes shopping cart functionality, order tracking, and admin dashboard for inventory management.',
    screenshot: 'https://i.pinimg.com/1200x/03/42/15/0342152dc7068df42f9eb386ed193b72.jpg',
    tech: ['React', 'Node.js', 'MongoDB'],
    category: 'Full Stack',
    liveLink: 'https://lustrous-rolypoly-7a6031.netlify.app/',
    githubLink: 'git@github.com:codeob/E-commerce.git',
  },
  {
    id: 7,
    title: 'Spices Store',
    description: 'A modern e-commerce platform specializing in spices with mobile-optimized design, product filtering, and secure checkout. Features include product reviews, wishlist functionality, and responsive design using Tailwind CSS.',
    screenshot: 'https://i.pinimg.com/1200x/6c/f7/1a/6cf71a421154d71781e2b6ea62a0a485.jpg',
    tech: ['React', 'Tailwind'],
    category: 'Full Stack',
    liveLink: 'https://startling-speculoos-5080dd.netlify.app/',
    githubLink: 'https://github.com/codeob/Spices-product.git',
  },
  {
    id: 8,
    title: `Artist Gallery (Kojo Cue)`,
    description: 'An interactive, map-based digital experience that takes users on a nostalgic journey through Ko-Jo Cue’s life, blending music, storytelling, and visuals across key childhood locations in Kumasi. The project combines exploration, reflection, and audio-visual immersion to celebrate his formative years and artistic evolution.',
    screenshot: 'https://i.pinimg.com/1200x/3d/3a/11/3d3a11114458e0099cb1e616e8c31d2f.jpg',
    tech: ['React', 'Tailwind'],
    category: 'Frontend',
    liveLink: 'https://kani-album.netlify.app/',
    githubLink: 'https://github.com/codeob/Spices-product.git',
  },
];

const techColors = {
  React: '#61DAFB',
  'Node.js': '#339933',
  MongoDB: '#47A248',
  Tailwind: '#06B6D4',
  Firebase: '#FFCA28',
  JavaScript: '#F7DF1E',
  'Local Storage': '#3B82F6',
  'React Native': '#61DAFB',
  'Express.js': '#FFFFFF',
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

function Project() {
  const [filter, setFilter] = useState('All');

  const categories = ['All', 'Frontend', 'Full Stack', 'Game Development'];
  const filteredProjects = filter === 'All' ? projects : projects.filter((project) => project.category === filter);

  return (
    <section
      id="projects"
      className="py-20 relative overflow-hidden"
      style={{ background: '#0A0E27' }}
    >
      {/* Decorative background elements */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <motion.div
          className="absolute w-96 h-96 rounded-full"
          style={{
            background: 'radial-gradient(circle, rgba(255, 111, 97, 0.08) 0%, transparent 70%)',
            top: '20%',
            right: '10%',
            filter: 'blur(60px)'
          }}
          animate={{
            y: [0, 40, 0],
            scale: [1, 1.2, 1]
          }}
          transition={{
            duration: 12,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
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
              // My work
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
            Featured Projects
          </motion.h2>
          <motion.p
            className="text-lg max-w-2xl mx-auto"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            style={{ color: 'var(--text-secondary)', fontFamily: 'var(--font-body)' }}
          >
            Explore my latest work and creative solutions
          </motion.p>
        </div>
        
        <motion.div
          className="flex flex-wrap justify-center gap-3 mb-12 px-4"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
        >
          {categories.map((category) => (
            <motion.button
              key={category}
              onClick={() => setFilter(category)}
              className="px-6 py-3 rounded-xl text-sm font-semibold transition-all duration-300"
              variants={buttonVariants}
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.95 }}
              style={{
                fontFamily: 'var(--font-body)',
                background: filter === category 
                  ? 'var(--primary-blue)' 
                  : 'var(--background-card)',
                color: filter === category ? '#FFFFFF' : 'var(--text-secondary)',
                border: '1px solid ' + (filter === category ? 'var(--primary-blue)' : 'var(--divider-border)'),
                boxShadow: filter === category 
                  ? '0 4px 20px rgba(59, 130, 246, 0.3)' 
                  : 'none'
              }}
            >
              {category}
            </motion.button>
          ))}
        </motion.div>

        <AnimatePresence mode="wait">
          <motion.div
            key={filter}
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6"
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            exit={{ opacity: 0, y: 20 }}
            viewport={{ once: true, amount: 0.2 }}
          >
            {filteredProjects.map((project) => {
              return (
              <motion.div
                key={project.id}
                className="group relative overflow-hidden rounded-2xl"
                variants={cardVariants}
                whileHover="hover"
                layout
                style={{
                  background: 'var(--background-card)',
                  border: '1px solid rgba(59, 130, 246, 0.15)',
                  boxShadow: '0 4px 12px rgba(0, 0, 0, 0.08)'
                }}
              >

                
                <div className="relative z-10">
                  {/* Project Image with enhanced hover effect */}
                  <div className="relative overflow-hidden h-56">
                    <motion.img
                      src={project.screenshot}
                      alt={project.title}
                      className="w-full h-full object-cover"
                      style={{
                        transition: 'transform 0.5s ease'
                      }}
                      whileHover={{ scale: 1.05 }}
                    />
                    
                    {/* Gradient overlay */}
                    <div 
                      className="absolute inset-0"
                      style={{
                        background: 'linear-gradient(to top, rgba(10, 14, 39, 0.9) 0%, transparent 60%)'
                      }}
                    />
                    
                    {/* Tech stack on image */}
                    <div className="absolute bottom-4 left-4 flex flex-wrap gap-2">
                      {project.tech.slice(0, 3).map((tech) => (
                        <span
                          key={tech}
                          className="px-2.5 py-1 text-xs font-semibold rounded-md backdrop-blur-md"
                          style={{
                            background: 'rgba(10, 14, 39, 0.8)',
                            color: techColors[tech] || '#3B82F6',
                            border: `1px solid ${techColors[tech] || '#3B82F6'}40`
                          }}
                        >
                          {tech}
                        </span>
                      ))}
                      {project.tech.length > 3 && (
                        <span 
                          className="px-2.5 py-1 text-xs font-semibold rounded-md backdrop-blur-md"
                          style={{
                            background: 'rgba(10, 14, 39, 0.8)',
                            color: 'var(--primary-blue)',
                            border: '1px solid rgba(59, 130, 246, 0.4)'
                          }}
                        >
                          +{project.tech.length - 3}
                        </span>
                      )}
                    </div>
                  </div>
                  
                  {/* Content Section */}
                  <div className="p-6">
                    {/* Title */}
                    <motion.h3
                      className="text-xl font-bold mb-2 group-hover:text-primary-blue transition-colors"
                      style={{ 
                        fontFamily: 'var(--font-heading)',
                        color: 'var(--text-primary)'
                      }}
                    >
                      {project.title}
                    </motion.h3>

                    {/* Description */}
                    <motion.p
                      className="text-sm leading-relaxed mb-6"
                      style={{ 
                        fontFamily: 'var(--font-body)',
                        color: 'var(--text-secondary)',
                        display: '-webkit-box',
                        WebkitLineClamp: 2,
                        WebkitBoxOrient: 'vertical',
                        overflow: 'hidden'
                      }}
                    >
                      {project.description || 'A modern web application built with cutting-edge technologies.'}
                    </motion.p>

                    {/* Action Buttons */}
                    <motion.div
                      className="flex gap-3"
                      variants={buttonVariants}
                    >
                      <motion.a
                        href={project.liveLink}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex-1 flex items-center justify-center gap-2 py-3 rounded-lg text-sm font-semibold transition-all"
                        whileHover={{ y: -2 }}
                        whileTap={{ scale: 0.98 }}
                        style={{ 
                          fontFamily: 'var(--font-body)',
                          background: 'var(--primary-blue)',
                          color: '#FFFFFF',
                          boxShadow: '0 4px 12px rgba(59, 130, 246, 0.25)'
                        }}
                      >
                        <span>View Project</span>
                        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                        </svg>
                      </motion.a>
                      <motion.a
                        href={project.githubLink}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center justify-center w-12 h-12 rounded-lg transition-all"
                        whileHover={{ y: -2 }}
                        whileTap={{ scale: 0.98 }}
                        style={{ 
                          background: 'rgba(59, 130, 246, 0.1)',
                          color: 'var(--primary-blue)',
                          border: '1px solid rgba(59, 130, 246, 0.2)'
                        }}
                      >
                        <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                          <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"></path>
                        </svg>
                      </motion.a>
                    </motion.div>
                  </div>
                </div>
              </motion.div>
              );
            })}
          </motion.div>
        </AnimatePresence>
      </div>
    </section>
  );
}

export default Project;