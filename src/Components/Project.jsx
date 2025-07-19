import React, { useEffect, useRef, useState, useContext } from 'react';
import { motion } from 'framer-motion';
import * as THREE from 'https://cdn.jsdelivr.net/npm/three@0.168.0/build/three.module.min.js';
import Masonry from 'react-masonry-css';
import Tilt from 'react-parallax-tilt';
import { ThemeContext } from './ThemeContext';

// Project data
const projects = [
  {
    id: 1,
    title: 'E-commerce App',
    description: 'A scalable online store with secure payments and user authentication.',
    screenshot: 'https://i.pinimg.com/1200x/92/10/e6/9210e6e5e4f1da2a943715809248fff5.jpg',
    tech: ['React', 'Node.js', 'MongoDB', 'Tailwind'],
    category: 'Fullstack',
    liveLink: '#',
    githubLink: '#',
  },
  {
    id: 2,
    title: 'Game App',
    description: 'A real-time multiplayer 2D game with dynamic interactions.',
    screenshot: 'https://i.pinimg.com/1200x/04/36/f0/0436f0244990a805322a84f12a0182a5.jpg',
    tech: ['React', 'Firebase', 'JavaScript'],
    category: 'Games',
    liveLink: '#',
    githubLink: '#',
  },
  {
    id: 3,
    title: 'Todo List App',
    description: 'A productivity app with seamless task management and cloud sync.',
    screenshot: 'https://i.pinimg.com/1200x/db/28/57/db2857a5ebabfa68b4e6076f076dfd07.jpg',
    tech: ['React', 'Firebase', 'Tailwind'],
    category: 'Frontend',
    liveLink: '#',
    githubLink: '#',
  },
  {
    id: 4,
    title: 'Event Planner App',
    description: 'An event scheduling app with integrated calendar functionality.',
    screenshot: 'https://i.pinimg.com/1200x/eb/b8/8e/ebb88e6b4b1e1ac1971ffdde5c55aa66.jpg',
    tech: ['React', 'Node.js', 'MongoDB', 'Express'],
    category: 'Fullstack',
    liveLink: '#',
    githubLink: '#',
  },
];

// Tech color mapping
const techColors = {
  React: '#61DAFB',
  'Node.js': '#3C873A',
  MongoDB: '#47A248',
  Tailwind: '#06B6D4',
  Firebase: '#FFCA28',
  JavaScript: '#F7DF1E',
  Express: '#000000',
};

// Animation variants
const containerVariants = {
  hidden: { opacity: 0, y: 80 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 1, ease: 'easeOut', staggerChildren: 0.15 },
  },
};

const cardVariants = {
  hidden: { opacity: 0, scale: 0.85, rotateX: 10 },
  visible: { opacity: 1, scale: 1, rotateX: 0, transition: { duration: 0.6, ease: 'easeOut' } },
  hover: {
    scale: 1.03,
    rotateX: 5,
    boxShadow: '0 0 50px rgba(96, 165, 250, 0.9)',
    transition: { duration: 0.4 },
  },
};

const titleVariants = {
  hidden: { opacity: 0, y: -50 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: 'easeOut' } },
};

const Project = () => {
  const { theme } = useContext(ThemeContext);
  const canvasRef = useRef(null);
  const [filter, setFilter] = useState('All');

  // 3D Animation
  useEffect(() => {
    if (!canvasRef.current) {
      console.error('Project: Canvas ref is null');
      return;
    }

    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
    const renderer = new THREE.WebGLRenderer({ canvas: canvasRef.current, alpha: true });
    if (!renderer) {
      console.error('Project: Failed to initialize WebGL renderer');
      return;
    }
    renderer.setSize(window.innerWidth, window.innerHeight);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));

    const particleCount = window.innerWidth < 768 ? 5000 : 10000; // Increased for massive effect
    const particlesGeometry = new THREE.BufferGeometry();
    const posArray = new Float32Array(particleCount * 3);
    const velocityArray = new Float32Array(particleCount * 3);
    const colorArray = new Float32Array(particleCount * 3);

    for (let i = 0; i < particleCount * 3; i += 3) {
      posArray[i] = (Math.random() - 0.5) * 50; // Wider spread
      posArray[i + 1] = (Math.random() - 0.5) * 50;
      posArray[i + 2] = (Math.random() - 0.5) * 50;
      velocityArray[i] = (Math.random() - 0.5) * 0.04; // Faster movement
      velocityArray[i + 1] = (Math.random() - 0.5) * 0.04;
      velocityArray[i + 2] = (Math.random() - 0.5) * 0.04;
      colorArray[i] = theme === 'light' ? 59/255 : 96/255;
      colorArray[i + 1] = theme === 'light' ? 130/255 : 165/255;
      colorArray[i + 2] = theme === 'light' ? 246/255 : 250/255;
    }

    particlesGeometry.setAttribute('position', new THREE.BufferAttribute(posArray, 3));
    particlesGeometry.setAttribute('velocity', new THREE.BufferAttribute(velocityArray, 3));
    particlesGeometry.setAttribute('color', new THREE.BufferAttribute(colorArray, 3));

    const material = new THREE.PointsMaterial({
      size: window.innerWidth < 768 ? 0.06 : 0.1, // Larger particles
      vertexColors: true,
      blending: THREE.AdditiveBlending,
      transparent: true,
      sizeAttenuation: true,
      opacity: 0.97,
    });

    const particlesMesh = new THREE.Points(particlesGeometry, material);
    scene.add(particlesMesh);
    camera.position.z = 7;

    let mouseX = 0;
    let mouseY = 0;
    const handleMouseMove = (event) => {
      mouseX = (event.clientX / window.innerWidth) * 2 - 1;
      mouseY = -(event.clientY / window.innerHeight) * 2 + 1;
    };
    window.addEventListener('mousemove', handleMouseMove);

    const animate = () => {
      const positions = particlesGeometry.attributes.position.array;
      const velocities = particlesGeometry.attributes.velocity.array;
      const colors = particlesGeometry.attributes.color.array;

      for (let i = 0; i < particleCount * 3; i += 3) {
        positions[i] += velocities[i];
        positions[i + 1] += velocities[i + 1];
        positions[i + 2] += velocities[i + 2];

        if (Math.abs(positions[i]) > 25) velocities[i] *= -1;
        if (Math.abs(positions[i + 1]) > 25) velocities[i + 1] *= -1;
        if (Math.abs(positions[i + 2]) > 25) velocities[i + 2] *= -1;

        const distance = Math.sqrt(positions[i] ** 2 + positions[i + 1] ** 2 + positions[i + 2] ** 2);
        const pulse = Math.sin(Date.now() * 0.002 + distance * 0.2) * 0.05;
        velocities[i] += pulse * mouseX * 0.015;
        velocities[i + 1] += pulse * mouseY * 0.015;

        const colorShift = Math.sin(Date.now() * 0.0008 + i) * 0.4 + 0.6;
        colors[i] = (theme === 'light' ? 59/255 : 96/255) * colorShift;
        colors[i + 1] = (theme === 'light' ? 130/255 : 165/255) * colorShift;
        colors[i + 2] = (theme === 'light' ? 246/255 : 250/255) * colorShift;
      }

      particlesGeometry.attributes.position.needsUpdate = true;
      particlesGeometry.attributes.color.needsUpdate = true;
      particlesMesh.rotation.y += 0.008; // Faster rotation
      particlesMesh.rotation.x += 0.005;
      renderer.render(scene, camera);
      requestAnimationFrame(animate);
    };
    animate();

    const handleResize = () => {
      camera.aspect = window.innerWidth / window.innerHeight;
      camera.updateProjectionMatrix();
      renderer.setSize(window.innerWidth, window.innerHeight);
    };
    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
      window.removeEventListener('mousemove', handleMouseMove);
      renderer.dispose();
    };
  }, [theme]);

  // Filter logic
  const categories = ['All', 'Frontend', 'Fullstack', 'Games'];
  const filteredProjects = filter === 'All' ? projects : projects.filter((project) => project.category === filter);

  // Masonry breakpoints
  const breakpointColumnsObj = {
    default: 3, // Tighter grid for premium feel
    1100: 2,
    700: 1,
  };

  return (
    <section
      id="projects"
      className="relative min-h-screen flex flex-col items-center px-4 sm:px-6 lg:px-8 py-16 z-10 bg-transparent"
    >
      <motion.div
        className="fixed inset-0 z-0"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1.2 }}
      >
        <canvas
          ref={canvasRef}
          className="w-full h-full"
          style={{ position: 'fixed', top: 0, left: 0, width: '100vw', height: '100vh' }}
        />
      </motion.div>
      <motion.h2
        className={`relative text-4xl sm:text-5xl lg:text-7xl font-extrabold font-sora mb-16 text-center ${
          theme === 'light' ? 'text-blue-900 text-shadow-xl' : 'text-blue-100 text-shadow-xl-dark'
        }`}
        variants={titleVariants}
        initial="hidden"
        animate="visible"
      >
        Projects I’m Proud Of ✨
        <motion.div
          className={`h-1.5 mt-3 mx-auto ${theme === 'light' ? 'bg-gradient-to-r from-blue-600 to-yellow-500' : 'bg-gradient-to-r from-blue-500 to-blue-300'}`}
          initial={{ width: 0 }}
          animate={{ width: '60%', scale: [1, 1.1, 1] }}
          transition={{ duration: 1.2, ease: 'easeOut', repeat: Infinity, repeatType: 'reverse', delay: 0.3 }}
        />
      </motion.h2>

      {/* Filter Buttons */}
      <motion.div
        className="flex flex-wrap justify-center gap-3 mb-12"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, delay: 0.3 }}
      >
        {categories.map((category) => (
          <button
            key={category}
            onClick={() => setFilter(category)}
            className={`px-5 py-2.5 rounded-full font-sora text-sm sm:text-base font-semibold ${
              filter === category
                ? theme === 'light'
                  ? 'bg-blue-600 text-white shadow-lg'
                  : 'bg-blue-500 text-gray-900 shadow-lg'
                : theme === 'light'
                ? 'bg-white/20 text-gray-900 hover:bg-blue-200/30'
                : 'bg-gray-800/20 text-gray-200 hover:bg-blue-600/30'
            } backdrop-blur-sm border border-white/20 transition-all duration-400`}
          >
            {category}
          </button>
        ))}
      </motion.div>

      {/* Project Count */}
      <motion.div
        className={`absolute top-6 right-6 sm:top-10 sm:right-10 px-5 py-2.5 rounded-full font-sora text-sm sm:text-base font-semibold ${
          theme === 'light' ? 'bg-white/10 text-blue-900 border border-white/20' : 'bg-gray-900/10 text-blue-100 border border-gray-700/20'
        } shadow-xl backdrop-blur-sm`}
        initial={{ opacity: 0, x: 50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.7, delay: 0.5 }}
      >
        {projects.length} Projects Completed
      </motion.div>

      {/* Masonry Grid */}
      <motion.div
        className="max-w-6xl mx-auto w-full"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        <Masonry
          breakpointCols={breakpointColumnsObj}
          className="flex w-auto -ml-3"
          columnClassName="pl-3"
        >
          {filteredProjects.map((project) => (
            <motion.div
              key={project.id}
              className="mb-6"
              variants={cardVariants}
            >
              <Tilt
                tiltMaxAngleX={10}
                tiltMaxAngleY={10}
                perspective={1000}
                scale={1.02}
                transitionSpeed={400}
                glareEnable={true}
                glareMaxOpacity={0.3}
                glareColor={theme === 'light' ? '#ffffff' : '#60A5FA'}
                glarePosition="all"
              >
                <div
                  className={`relative p-6 rounded-2xl backdrop-blur-lg ${
                    theme === 'light'
                      ? 'bg-white/15 border border-white/30'
                      : 'bg-gray-900/15 border border-gray-700/30'
                  } shadow-2xl`}
                >
                  <img
                    src={project.screenshot}
                    alt={project.title}
                    className="w-full h-56 sm:h-72 object-cover rounded-lg mb-5"
                    style={{ filter: theme === 'light' ? 'drop-shadow(0 0 20px rgba(255,255,255,0.9))' : 'drop-shadow(0 0 20px rgba(96,165,250,0.9))' }}
                  />
                  <h3 className={`text-xl sm:text-2xl font-bold font-sora mb-3 ${theme === 'light' ? 'text-gray-900' : 'text-gray-100'}`}>
                    {project.title}
                  </h3>
                  <p className={`text-sm sm:text-base font-sora mb-4 ${theme === 'light' ? 'text-gray-700' : 'text-gray-300'}`}>
                    {project.description}
                  </p>
                  <div className="flex flex-wrap gap-2 mb-5">
                    {project.tech.map((tech) => (
                      <span
                        key={tech}
                        className="px-3 py-1.5 rounded-full text-xs sm:text-sm font-sora font-medium"
                        style={{
                          background: `rgba(${parseInt(techColors[tech].slice(1,3),16), parseInt(techColors[tech].slice(3,5),16), parseInt(techColors[tech].slice(5,7),16)}, 0.25)`,
                          color: techColors[tech],
                          border: `1px solid ${techColors[tech]}`,
                          boxShadow: `0 0 10px ${techColors[tech]}40`,
                        }}
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                  <div className="flex gap-4">
                    <a
                      href={project.liveLink}
                      className={`flex-1 text-center px-5 py-2.5 rounded-full font-sora text-sm sm:text-base font-semibold ${
                        theme === 'light' ? 'bg-blue-600 text-white hover:bg-blue-700' : 'bg-blue-500 text-gray-900 hover:bg-blue-400'
                      } transition-all duration-400 shadow-lg`}
                    >
                      View Live
                    </a>
                    <a
                      href={project.githubLink}
                      className={`flex-1 text-center px-5 py-2.5 rounded-full font-sora text-sm sm:text-base font-semibold ${
                        theme === 'light' ? 'bg-white/20 text-gray-900 hover:bg-white/30' : 'bg-gray-800/20 text-gray-200 hover:bg-gray-700/30'
                      } transition-all duration-400 shadow-lg`}
                    >
                      GitHub Code
                    </a>
                  </div>
                </div>
              </Tilt>
            </motion.div>
          ))}
        </Masonry>
      </motion.div>
    </section>
  );
};

export default Project;