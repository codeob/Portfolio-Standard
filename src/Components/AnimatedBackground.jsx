// import React, { useEffect, useRef, useContext } from 'react';
// import * as THREE from 'https://cdn.jsdelivr.net/npm/three@0.168.0/build/three.module.min.js';
// import { motion } from 'framer-motion';
// import { ThemeContext } from '../components/ThemeContext';

// const AnimatedBackground = () => {
//   const canvasRef = useRef(null);
//   const { theme } = useContext(ThemeContext);

//   useEffect(() => {
//     if (!canvasRef.current) {
//       console.error('AnimatedBackground: Canvas ref is null');
//       return;
//     }

//     const scene = new THREE.Scene();
//     const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
//     const renderer = new THREE.WebGLRenderer({ canvas: canvasRef.current, alpha: true });
//     if (!renderer) {
//       console.error('AnimatedBackground: Failed to initialize WebGL renderer');
//       return;
//     }
//     renderer.setSize(window.innerWidth, window.innerHeight);
//     renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));

//     const particleCount = window.innerWidth < 768 ? 3000 : 6000; // Fewer particles for small screens
//     const particlesGeometry = new THREE.BufferGeometry();
//     const posArray = new Float32Array(particleCount * 3);

//     for (let i = 0; i < particleCount * 3; i += 3) {
//       posArray[i] = (Math.random() - 0.5) * 30; // Wide spread
//       posArray[i + 1] = (Math.random() - 0.5) * 30;
//       posArray[i + 2] = (Math.random() - 0.5) * 30;
//     }

//     particlesGeometry.setAttribute('position', new THREE.BufferAttribute(posArray, 3));
//     const material = new THREE.PointsMaterial({
//       size: window.innerWidth < 768 ? 0.04 : 0.06, // Smaller particles on small screens
//       color: theme === 'light' ? '#3B82F6' : '#60A5FA',
//       blending: THREE.AdditiveBlending,
//       transparent: true,
//       sizeAttenuation: true,
//       opacity: 0.9,
//     });

//     const particlesMesh = new THREE.Points(particlesGeometry, material);
//     scene.add(particlesMesh);
//     camera.position.z = 5;

//     const animate = () => {
//       particlesMesh.rotation.y += 0.004; // Smooth rotation
//       particlesMesh.rotation.x += 0.002;
//       renderer.render(scene, camera);
//       requestAnimationFrame(animate);
//     };
//     animate();

//     const handleResize = () => {
//       camera.aspect = window.innerWidth / window.innerHeight;
//       camera.updateProjectionMatrix();
//       renderer.setSize(window.innerWidth, window.innerHeight);
//     };
//     window.addEventListener('resize', handleResize);

//     return () => {
//       window.removeEventListener('resize', handleResize);
//       renderer.dispose();
//     };
//   }, [theme]);

//   return (
//     <motion.div
//       className="fixed inset-0 z-0"
//       initial={{ opacity: 0 }}
//       animate={{ opacity: 1 }}
//       transition={{ duration: 1 }}
//     >
//       <canvas
//         ref={canvasRef}
//         className="w-full h-full"
//         style={{ position: 'fixed', top: 0, left: 0, width: '100vw', height: '100vh' }}
//       />
//     </motion.div>
//   );
// };

// export default AnimatedBackground;

import React, { useEffect, useRef, useContext } from 'react';
import * as THREE from 'https://cdn.jsdelivr.net/npm/three@0.168.0/build/three.module.min.js';
import { motion } from 'framer-motion';
import { ThemeContext } from '../components/ThemeContext';

const AnimatedBackground = () => {
  const canvasRef = useRef(null);
  const { theme } = useContext(ThemeContext);

  useEffect(() => {
    if (!canvasRef.current) {
      console.error('AnimatedBackground: Canvas ref is null');
      return;
    }

    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
    const renderer = new THREE.WebGLRenderer({ canvas: canvasRef.current, alpha: true });
    if (!renderer) {
      console.error('AnimatedBackground: Failed to initialize WebGL renderer');
      return;
    }
    renderer.setSize(window.innerWidth, window.innerHeight);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));

    const particleCount = window.innerWidth < 768 ? 3000 : 6000; // Fewer particles for small screens
    const particlesGeometry = new THREE.BufferGeometry();
    const posArray = new Float32Array(particleCount * 3);

    for (let i = 0; i < particleCount * 3; i += 3) {
      posArray[i] = (Math.random() - 0.5) * 30; // Wide spread
      posArray[i + 1] = (Math.random() - 0.5) * 30;
      posArray[i + 2] = (Math.random() - 0.5) * 30;
    }

    particlesGeometry.setAttribute('position', new THREE.BufferAttribute(posArray, 3));
    const material = new THREE.PointsMaterial({
      size: window.innerWidth < 768 ? 0.04 : 0.06, // Smaller particles on small screens
      color: theme === 'light' ? '#3B82F6' : '#60A5FA',
      blending: THREE.AdditiveBlending,
      transparent: true,
      sizeAttenuation: true,
      opacity: 0.9,
    });

    const particlesMesh = new THREE.Points(particlesGeometry, material);
    scene.add(particlesMesh);
    camera.position.z = 5;

    const animate = () => {
      particlesMesh.rotation.y += 0.004; // Smooth rotation
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
      renderer.dispose();
    };
  }, [theme]);

  return (
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
  );
};

export default AnimatedBackground;