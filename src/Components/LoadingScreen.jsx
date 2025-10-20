import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const LoadingScreen = ({ onComplete }) => {
  const [progress, setProgress] = useState(0);
  const [currentText, setCurrentText] = useState(0);

  const loadingTexts = [
    "Initializing Portfolio...",
    "Loading Components...",
    "Preparing Animations...",
    "Almost Ready..."
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setProgress(prev => {
        if (prev >= 100) {
          clearInterval(interval);
          setTimeout(() => onComplete(), 500);
          return 100;
        }
        return prev + 2;
      });
    }, 50);

    const textInterval = setInterval(() => {
      setCurrentText(prev => (prev + 1) % loadingTexts.length);
    }, 800);

    return () => {
      clearInterval(interval);
      clearInterval(textInterval);
    };
  }, [onComplete, loadingTexts.length]);

  return (
    <AnimatePresence>
      <motion.div
        className="fixed inset-0 bg-gradient-to-br from-white via-gray-50 to-blue-50 z-50 flex items-center justify-center overflow-hidden"
        initial={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.8, ease: [0.4, 0, 0.2, 1] }}
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
              className="absolute text-gray-400 font-medium text-xs opacity-20"
              style={{
                left: `${5 + (index * 7) % 90}%`,
                top: `${5 + (index * 9) % 85}%`,
              }}
              animate={{
                y: [0, -20, 0],
                x: [0, 15, 0],
                rotate: [0, 3, -3, 0],
                opacity: [0.1, 0.3, 0.1],
              }}
              transition={{
                duration: 12 + (index * 1.5),
                repeat: Infinity,
                ease: "easeInOut",
                delay: index * 0.3,
              }}
            >
              {lang}
            </motion.div>
          ))}
        </div>

        <div className="text-center relative z-10">
          {/* Modern Circular Progress */}
          <motion.div
            className="mb-8 relative"
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ duration: 0.8, ease: [0.4, 0, 0.2, 1] }}
          >
            <div className="w-24 h-24 mx-auto relative">
              <svg className="w-full h-full transform -rotate-90" viewBox="0 0 100 100">
                <circle
                  cx="50"
                  cy="50"
                  r="45"
                  stroke="currentColor"
                  strokeWidth="8"
                  fill="transparent"
                  className="text-gray-200"
                />
                <motion.circle
                  cx="50"
                  cy="50"
                  r="45"
                  stroke="url(#gradient)"
                  strokeWidth="8"
                  fill="transparent"
                  strokeLinecap="round"
                  initial={{ pathLength: 0 }}
                  animate={{ pathLength: progress / 100 }}
                  transition={{ duration: 0.5, ease: "easeOut" }}
                />
                <defs>
                  <linearGradient id="gradient" x1="0%" y1="0%" x2="100%" y2="100%">
                    <stop offset="0%" stopColor="#3B82F6" />
                    <stop offset="100%" stopColor="#14B8A6" />
                  </linearGradient>
                </defs>
              </svg>
              <div className="absolute inset-0 flex items-center justify-center">
                <motion.span
                  className="text-lg font-bold text-gray-700"
                  style={{ fontFamily: 'var(--font-heading)' }}
                  animate={{ scale: [1, 1.1, 1] }}
                  transition={{ duration: 2, repeat: Infinity }}
                >
                  {progress}%
                </motion.span>
              </div>
            </div>
          </motion.div>

          {/* Loading Text */}
          <motion.h2
            className="text-2xl font-bold text-gray-800 mb-4"
            style={{ fontFamily: 'var(--font-heading)' }}
            key={currentText}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.6 }}
          >
            {loadingTexts[currentText]}
          </motion.h2>

          {/* Subtle Progress Bar */}
          <div className="w-48 h-1 bg-gray-200 rounded-full overflow-hidden mx-auto mb-6">
            <motion.div
              className="h-full bg-gradient-to-r from-blue-600 to-teal-500 rounded-full"
              initial={{ width: 0 }}
              animate={{ width: `${progress}%` }}
              transition={{ duration: 0.4, ease: "easeOut" }}
            />
          </div>

          {/* Elegant Dots */}
          <div className="flex justify-center space-x-3">
            {[0, 1, 2].map((i) => (
              <motion.div
                key={i}
                className="w-3 h-3 bg-gradient-to-r from-blue-600 to-teal-500 rounded-full"
                animate={{
                  scale: [1, 1.3, 1],
                  opacity: [0.4, 1, 0.4]
                }}
                transition={{
                  duration: 1.5,
                  repeat: Infinity,
                  delay: i * 0.3
                }}
              />
            ))}
          </div>
        </div>
      </motion.div>
    </AnimatePresence>
  );
};

export default LoadingScreen;
