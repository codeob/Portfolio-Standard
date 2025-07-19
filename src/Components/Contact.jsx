import React, { useEffect, useRef, useState, useContext } from 'react';
import { motion } from 'framer-motion';
import * as THREE from 'https://cdn.jsdelivr.net/npm/three@0.168.0/build/three.module.min.js';
import { Toaster, toast } from 'react-hot-toast';
import { ThemeContext } from './ThemeContext';

// Social links
const socialLinks = [
  { name: 'GitHub', icon: 'https://cdn.jsdelivr.net/npm/simple-icons@13.1.0/icons/github.svg', url: '#', color: '#181717' },
  { name: 'LinkedIn', icon: 'https://cdn.jsdelivr.net/npm/simple-icons@13.1.0/icons/linkedin.svg', url: '#', color: '#0A66C2' },
  { name: 'Email', icon: 'https://cdn.jsdelivr.net/npm/simple-icons@13.1.0/icons/gmail.svg', url: 'mailto:your.email@example.com', color: '#D14836' },
  { name: 'Phone', icon: 'https://cdn.jsdelivr.net/npm/simple-icons@13.1.0/icons/phone.svg', url: 'tel:+1234567890', color: '#25D366' },
];

// Animation variants
const containerVariants = {
  hidden: { opacity: 0, y: 60 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.8, ease: 'easeOut', staggerChildren: 0.15 },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: 'easeOut' } },
};

const buttonVariants = {
  hover: { scale: 1.05, boxShadow: '0 0 30px rgba(59, 130, 246, 1)', transition: { duration: 0.3 } },
};

const Contact = () => {
  const { theme } = useContext(ThemeContext);
  const canvasRef = useRef(null);
  const [formData, setFormData] = useState({ name: '', email: '', subject: '', message: '' });

  // 3D Animation
  useEffect(() => {
    if (!canvasRef.current) {
      console.error('Contact: Canvas ref is null');
      return;
    }

    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
    const renderer = new THREE.WebGLRenderer({ canvas: canvasRef.current, alpha: true });
    if (!renderer) {
      console.error('Contact: Failed to initialize WebGL renderer');
      return;
    }
    renderer.setSize(window.innerWidth, window.innerHeight);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));

    const particleCount = window.innerWidth < 768 ? 3000 : 6000;
    const particlesGeometry = new THREE.BufferGeometry();
    const posArray = new Float32Array(particleCount * 3);
    const velocityArray = new Float32Array(particleCount * 3);
    const colorArray = new Float32Array(particleCount * 3);

    for (let i = 0; i < particleCount * 3; i += 3) {
      posArray[i] = (Math.random() - 0.5) * 40;
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
      size: window.innerWidth < 768 ? 0.05 : 0.08,
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

        if (Math.abs(positions[i]) > 20) velocities[i] *= -0.9;
        if (Math.abs(positions[i + 1]) > 20) velocities[i + 1] *= -0.9;
        if (Math.abs(positions[i + 2]) > 20) velocities[i + 2] *= -0.9;

        const distance = Math.sqrt(positions[i] ** 2 + positions[i + 1] ** 2 + positions[i + 2] ** 2);
        const pulse = Math.sin(Date.now() * 0.001 + distance * 0.1) * 0.02;
        velocities[i] += pulse * mouseX * 0.005;
        velocities[i + 1] += pulse * mouseY * 0.005;

        const colorShift = Math.sin(Date.now() * 0.0005 + i) * 0.2 + 0.8;
        colors[i] = (theme === 'light' ? 59/255 : 96/255) * colorShift;
        colors[i + 1] = (theme === 'light' ? 130/255 : 165/255) * colorShift;
        colors[i + 2] = (theme === 'light' ? 246/255 : 250/255) * colorShift;
      }

      particlesGeometry.attributes.position.needsUpdate = true;
      particlesGeometry.attributes.color.needsUpdate = true;
      particlesMesh.rotation.y += 0.004;
      particlesMesh.rotation.x += 0.002;
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

  // Form handling
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (formData.name && formData.email && formData.subject && formData.message) {
      toast.success('Message sent successfully!', {
        style: {
          background: theme === 'light' ? '#ffffff' : '#0A1122',
          color: theme === 'light' ? '#0A1122' : '#F3F4F6',
          border: `1px solid ${theme === 'light' ? '#3B82F6' : '#60A5FA'}`,
          boxShadow: '0 4px 15px rgba(0, 0, 0, 0.4)',
          borderRadius: '8px',
          padding: '12px 20px',
        },
      });
      setFormData({ name: '', email: '', subject: '', message: '' });
    } else {
      toast.error('Please fill out all fields.', {
        style: {
          background: theme === 'light' ? '#ffffff' : '#0A1122',
          color: theme === 'light' ? '#0A1122' : '#F3F4F6',
          border: `1px solid ${theme === 'light' ? '#EF4444' : '#F87171'}`,
          boxShadow: '0 4px 15px rgba(0, 0, 0, 0.4)',
          borderRadius: '8px',
          padding: '12px 20px',
        },
      });
    }
  };

  return (
    <section
      id="contact"
      className="relative min-h-screen flex flex-col items-center justify-center px-4 sm:px-6 lg:px-8 py-16 z-10 bg-transparent"
    >
      <Toaster position="top-right" />
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
      <motion.div
        className="max-w-4xl w-full"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        <motion.h2
          className={`text-4xl sm:text-5xl lg:text-6xl font-bold font-inter mb-6 text-center ${
            theme === 'light' ? 'text-blue-900 text-shadow-xl' : 'text-blue-100 text-shadow-xl-dark'
          }`}
          variants={itemVariants}
        >
          Contact Me
          <motion.div
            className={`h-1 mt-3 mx-auto ${theme === 'light' ? 'bg-gradient-to-r from-blue-600 to-yellow-400' : 'bg-gradient-to-r from-blue-500 to-yellow-500'}`}
            initial={{ width: 0 }}
            animate={{ width: '40%', scale: [1, 1.05, 1] }}
            transition={{ duration: 0.8, ease: 'easeOut', repeat: Infinity, repeatType: 'reverse', delay: 0.2 }}
          />
        </motion.h2>
        <motion.p
          className={`text-base sm:text-lg font-inter mb-12 text-center ${
            theme === 'light' ? 'text-gray-700' : 'text-gray-300'
          }`}
          variants={itemVariants}
        >
          Have a project idea, collaboration, or just want to say hi? I’m ready to make it happen.
        </motion.p>

        {/* Contact Form */}
        <motion.div
          className={`p-8 sm:p-10 rounded-2xl backdrop-blur-2xl ${
            theme === 'light' ? 'bg-white/30 border border-white/60' : 'bg-gray-900/30 border border-gray-700/60'
          } shadow-3xl`}
          variants={itemVariants}
        >
          <div className="space-y-6">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleInputChange}
                placeholder="Your Name"
                className={`w-full p-4 rounded-lg font-inter text-sm sm:text-base ${
                  theme === 'light' ? 'bg-white/20 text-gray-900' : 'bg-gray-800/20 text-gray-200'
                } border ${theme === 'light' ? 'border-white/50' : 'border-gray-700/50'} focus:border-blue-500 focus:ring-2 focus:ring-blue-500/80 focus:bg-opacity-50 transition-all duration-500`}
              />
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleInputChange}
                placeholder="Your Email"
                className={`w-full p-4 rounded-lg font-inter text-sm sm:text-base ${
                  theme === 'light' ? 'bg-white/20 text-gray-900' : 'bg-gray-800/20 text-gray-200'
                } border ${theme === 'light' ? 'border-white/50' : 'border-gray-700/50'} focus:border-blue-500 focus:ring-2 focus:ring-blue-500/80 focus:bg-opacity-50 transition-all duration-500`}
              />
            </div>
            <input
              type="text"
              name="subject"
              value={formData.subject}
              onChange={handleInputChange}
              placeholder="Subject"
              className={`w-full p-4 rounded-lg font-inter text-sm sm:text-base ${
                theme === 'light' ? 'bg-white/20 text-gray-900' : 'bg-gray-800/20 text-gray-200'
              } border ${theme === 'light' ? 'border-white/50' : 'border-gray-700/50'} focus:border-blue-500 focus:ring-2 focus:ring-blue-500/80 focus:bg-opacity-50 transition-all duration-500`}
            />
            <textarea
              name="message"
              value={formData.message}
              onChange={handleInputChange}
              placeholder="Your Message"
              rows="6"
              className={`w-full p-4 rounded-lg font-inter text-sm sm:text-base ${
                theme === 'light' ? 'bg-white/20 text-gray-900' : 'bg-gray-800/20 text-gray-200'
              } border ${theme === 'light' ? 'border-white/50' : 'border-gray-700/50'} focus:border-blue-500 focus:ring-2 focus:ring-blue-500/80 focus:bg-opacity-50 transition-all duration-500`}
            />
            <motion.button
              onClick={handleSubmit}
              className={`w-full py-3.5 rounded-lg font-inter text-base sm:text-lg font-semibold ${
                theme === 'light' ? 'bg-blue-600 text-white hover:bg-blue-700' : 'bg-blue-500 text-gray-900 hover:bg-blue-400'
              } transition-all duration-400 bg-gradient-to-r from-blue-500 to-blue-600 shadow-lg`}
              variants={buttonVariants}
              whileHover="hover"
            >
              Send Message
            </motion.button>
          </div>
        </motion.div>

        {/* Social Icons */}
        <motion.div className="flex justify-center gap-10 mt-12" variants={itemVariants}>
          {socialLinks.map((link) => (
            <a
              key={link.name}
              href={link.url}
              className="relative group"
            >
              <img
                src={link.icon}
                alt={link.name}
                className="w-14 h-14 sm:w-16 sm:h-16"
                style={{ filter: theme === 'light' ? 'drop-shadow(0 0 15px rgba(255,255,255,1))' : 'drop-shadow(0 0 15px rgba(96,165,250,1))' }}
              />
              <motion.div
                className="absolute inset-0 rounded-full"
                style={{ background: link.color, opacity: 0.5, filter: 'blur(30px)' }}
                initial={{ scale: 0, opacity: 0 }}
                whileHover={{ scale: 1.8, opacity: 0.9 }}
                transition={{ duration: 0.3 }}
              />
            </a>
          ))}
        </motion.div>

        {/* Google Maps Placeholder */}
        <motion.div
          className={`mt-12 w-full max-w-4xl p-8 rounded-2xl backdrop-blur-2xl ${
            theme === 'light' ? 'bg-white/30 border border-white/60' : 'bg-gray-900/30 border border-gray-700/60'
          } shadow-3xl`}
          variants={itemVariants}
        >
          <div
            className="w-full h-72 flex items-center justify-center"
          >
            <span className={`text-lg sm:text-xl font-inter font-medium ${theme === 'light' ? 'text-gray-700' : 'text-gray-300'}`}>
              My Location: [Your City, Country]
            </span>
          </div>
        </motion.div>

        {/* Call-to-Action */}
        <motion.p
          className={`text-center text-base sm:text-lg font-inter mt-10 ${
            theme === 'light' ? 'text-yellow-400' : 'text-yellow-500'
          } font-semibold`}
          variants={itemVariants}
        >
          Let’s innovate and build the future together.
        </motion.p>
      </motion.div>
    </section>
  );
};

export default Contact;