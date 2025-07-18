import React, { useEffect, useRef, useContext } from 'react';
import { motion } from 'framer-motion';
import * as THREE from 'https://cdn.jsdelivr.net/npm/three@0.168.0/build/three.module.min.js';
import { ThemeContext } from './ThemeContext';

// Skill data with colors and subtitles
const skills = [
  { name: 'HTML', icon: 'https://cdn.jsdelivr.net/npm/simple-icons@13.1.0/icons/html5.svg', color: '#E34F26', subtitle: 'Frontend Markup' },
  { name: 'CSS', icon: 'https://cdn.jsdelivr.net/npm/simple-icons@13.1.0/icons/css3.svg', color: '#1572B6', subtitle: 'Styling Framework' },
  { name: 'Tailwind CSS', icon: 'https://cdn.jsdelivr.net/npm/simple-icons@13.1.0/icons/tailwindcss.svg', color: '#06B6D4', subtitle: 'Utility-First CSS' },
  { name: 'JavaScript', icon: 'https://cdn.jsdelivr.net/npm/simple-icons@13.1.0/icons/javascript.svg', color: '#F7DF1E', subtitle: 'Dynamic Scripting' },
  { name: 'React.js', icon: 'https://cdn.jsdelivr.net/npm/simple-icons@13.1.0/icons/react.svg', color: '#61DAFB', subtitle: 'Frontend Library' },
  { name: 'Node.js', icon: 'https://cdn.jsdelivr.net/npm/simple-icons@13.1.0/icons/nodedotjs.svg', color: '#3C873A', subtitle: 'Backend Runtime' },
  { name: 'MongoDB', icon: 'https://cdn.jsdelivr.net/npm/simple-icons@13.1.0/icons/mongodb.svg', color: '#47A248', subtitle: 'NoSQL Database' },
  { name: 'Express.js', icon: 'https://cdn.jsdelivr.net/npm/simple-icons@13.1.0/icons/express.svg', color: '#000000', subtitle: 'Backend Framework' },
  { name: 'Firebase', icon: 'https://cdn.jsdelivr.net/npm/simple-icons@13.1.0/icons/firebase.svg', color: '#FFCA28', subtitle: 'Real-Time Backend' },
  { name: 'GitHub', icon: 'https://cdn.jsdelivr.net/npm/simple-icons@13.1.0/icons/github.svg', color: '#181717', subtitle: 'Version Control' },
];

function Skills() {
  const { theme } = useContext(ThemeContext);
  const canvasRef = useRef(null);

  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, ease: 'easeOut', staggerChildren: 0.1 },
    },
  };

  const cardVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: { opacity: 1, scale: 1, transition: { duration: 0.5 } },
    hover: {
      scale: 1.1,
      boxShadow: theme === 'light' ? '0 0 30px rgba(59, 130, 246, 0.8)' : '0 0 30px rgba(96, 165, 250, 0.8)',
      transition: { duration: 0.3 },
    },
  };

  const titleVariants = {
    hidden: { opacity: 0, y: -20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
  };

  useEffect(() => {
    if (!canvasRef.current) {
      console.error('Skills: Canvas ref is null');
      return;
    }

    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
    const renderer = new THREE.WebGLRenderer({ canvas: canvasRef.current, alpha: true });
    if (!renderer) {
      console.error('Skills: Failed to initialize WebGL renderer');
      return;
    }
    renderer.setSize(window.innerWidth, window.innerHeight);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));

    const particleCount = window.innerWidth < 768 ? 4000 : 8000; // Massive particle density
    const particlesGeometry = new THREE.BufferGeometry();
    const posArray = new Float32Array(particleCount * 3);
    const velocityArray = new Float32Array(particleCount * 3);
    const colorArray = new Float32Array(particleCount * 3);

    for (let i = 0; i < particleCount * 3; i += 3) {
      posArray[i] = (Math.random() - 0.5) * 40; // Wide spread
      posArray[i + 1] = (Math.random() - 0.5) * 40;
      posArray[i + 2] = (Math.random() - 0.5) * 40;
      velocityArray[i] = (Math.random() - 0.5) * 0.02;
      velocityArray[i + 1] = (Math.random() - 0.5) * 0.02;
      velocityArray[i + 2] = (Math.random() - 0.5) * 0.02;
      colorArray[i] = theme === 'light' ? 59/255 : 96/255;
      colorArray[i + 1] = theme === 'light' ? 130/255 : 165/255;
      colorArray[i + 2] = theme === 'light' ? 246/255 : 250/255;
    }

    particlesGeometry.setAttribute('position', new THREE.BufferAttribute(posArray, 3));
    particlesGeometry.setAttribute('velocity', new THREE.BufferAttribute(velocityArray, 3));
    particlesGeometry.setAttribute('color', new THREE.BufferAttribute(colorArray, 3));

    const material = new THREE.PointsMaterial({
      size: window.innerWidth < 768 ? 0.05 : 0.08, // Larger particles
      vertexColors: true,
      blending: THREE.AdditiveBlending,
      transparent: true,
      sizeAttenuation: true,
      opacity: 0.95,
    });

    const particlesMesh = new THREE.Points(particlesGeometry, material);
    scene.add(particlesMesh);
    camera.position.z = 6;

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

        // Bounce off boundaries
        if (Math.abs(positions[i]) > 20) velocities[i] *= -1;
        if (Math.abs(positions[i + 1]) > 20) velocities[i + 1] *= -1;
        if (Math.abs(positions[i + 2]) > 20) velocities[i + 2] *= -1;

        // Pulsating effect
        const distance = Math.sqrt(positions[i] ** 2 + positions[i + 1] ** 2 + positions[i + 2] ** 2);
        const pulse = Math.sin(Date.now() * 0.001 + distance * 0.1) * 0.02;
        velocities[i] += pulse * mouseX * 0.005;
        velocities[i + 1] += pulse * mouseY * 0.005;

        // Color transition
        const colorShift = Math.sin(Date.now() * 0.0005 + i) * 0.2 + 0.8;
        colors[i] = (theme === 'light' ? 59/255 : 96/255) * colorShift;
        colors[i + 1] = (theme === 'light' ? 130/255 : 165/255) * colorShift;
        colors[i + 2] = (theme === 'light' ? 246/255 : 250/255) * colorShift;
      }

      particlesGeometry.attributes.position.needsUpdate = true;
      particlesGeometry.attributes.color.needsUpdate = true;
      particlesMesh.rotation.y += 0.006; // Fast rotation
      particlesMesh.rotation.x += 0.003;
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

  return (
    <section
      id="skills"
      className="relative min-h-screen flex flex-col items-center justify-center px-4 sm:px-6 lg:px-8 py-12 z-10 bg-transparent"
    >
      <motion.div
        className="fixed inset-0 z-0"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
      >
        <canvas
          ref={canvasRef}
          className="w-full h-full"
          style={{ position: 'fixed', top: 0, left: 0, width: '100vw', height: '100vh' }}
        />
      </motion.div>
      <motion.h2
        className={`relative text-3xl sm:text-4xl lg:text-5xl font-bold font-inter mb-8 text-center ${
          theme === 'light' ? 'text-blue-900 text-shadow-lg' : 'text-blue-100 text-shadow-lg-dark'
        }`}
        variants={titleVariants}
        initial="hidden"
        animate="visible"
      >
        Tech Stack Mastery
        <motion.div
          className={`h-1 mt-2 mx-auto ${theme === 'light' ? 'bg-gradient-to-r from-blue-600 to-yellow-500' : 'bg-gradient-to-r from-blue-500 to-gray-400'}`}
          initial={{ width: 0 }}
          animate={{ width: '50%', scale: [1, 1.05, 1] }}
          transition={{ duration: 1, ease: 'easeOut', repeat: Infinity, repeatType: 'reverse', delay: 0.2 }}
        />
      </motion.h2>
      <motion.div
        className="relative grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8 max-w-7xl mx-auto"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        {skills.map((skill) => (
          <motion.div
            key={skill.name}
            className="relative p-6 rounded-xl bg-transparent"
            variants={cardVariants}
            whileHover="hover"
          >
            <div className="relative flex justify-center mb-4">
              <img
                src={skill.icon}
                alt={skill.name}
                className="w-16 h-16 sm:w-20 sm:h-20"
                style={{ filter: theme === 'light' ? 'drop-shadow(0 0 15px rgba(255,255,255,1))' : 'drop-shadow(0 0 15px rgba(96,165,250,1)) brightness(1.6)' }}
              />
              <motion.div
                className="absolute inset-0 rounded-full"
                style={{ background: skill.color, opacity: 0.6, filter: 'blur(40px)' }}
                animate={{ scale: [1, 1.3, 1], opacity: [0.6, 0.8, 0.6] }}
                transition={{ duration: 1.8, repeat: Infinity, ease: 'easeInOut' }}
              />
            </div>
            <h3 className={`text-lg sm:text-xl font-semibold font-inter text-center ${theme === 'light' ? 'text-gray-900' : 'text-gray-100'}`}>
              {skill.name}
            </h3>
            <p className={`text-xs sm:text-sm font-inter text-center ${theme === 'light' ? 'text-gray-700' : 'text-gray-300'}`}>
              {skill.subtitle}
            </p>
            <div className="relative flex justify-center mt-4">
              <svg className="w-16 h-16" viewBox="0 0 36 36">
                <path
                  d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831"
                  fill="none"
                  stroke={theme === 'light' ? '#D1D5DB' : '#6B7280'}
                  strokeWidth="2.5"
                />
                <motion.path
                  d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831"
                  fill="none"
                  stroke={skill.color}
                  strokeWidth="2.5"
                  strokeDasharray="100, 100"
                  strokeDashoffset="10"
                  initial={{ strokeDashoffset: 100 }}
                  animate={{ strokeDashoffset: 10 }}
                  transition={{ duration: 1.5, ease: 'easeInOut' }}
                  style={{ filter: `drop-shadow(0 0 15px ${skill.color})` }}
                />
              </svg>
            </div>
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
}

export default Skills;