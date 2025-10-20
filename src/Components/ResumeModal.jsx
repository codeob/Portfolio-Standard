import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';

// eslint-disable-next-line no-unused-vars
const MotionDiv = motion.div;

const ResumeModal = ({ isOpen, onClose }) => {
  const resumeContent = `
    <!DOCTYPE html>
    <html lang="en">
    <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>Obed Tawiah - Full Stack Developer Resume</title>
        <script src="https://cdn.tailwindcss.com"></script>
        <style>
            @import url('https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700&display=swap');
            body { font-family: 'Inter', sans-serif; }
        </style>
    </head>
    <body class="bg-gradient-to-br from-slate-50 to-white text-gray-900 max-w-[8.5in] mx-auto p-10 shadow-2xl print:shadow-none print:p-6 print:bg-white">
        <!-- Header Section -->
        <header class="text-center mb-10 pb-6 border-b-4 border-indigo-600">
            <h1 class="text-4xl font-bold text-gray-900 mb-2 tracking-tight">Obed Tawiah</h1>
            <h2 class="text-2xl text-indigo-600 font-medium mb-4">Full Stack Developer</h2>
            <div class="flex flex-col sm:flex-row justify-center items-center gap-2 text-sm text-gray-600">
                <span class="flex items-center gap-1">
                    <svg class="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                        <path fill-rule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clip-rule="evenodd" />
                    </svg>
                    Accra, Ghana
                </span>
                <span class="hidden sm:block">|</span>
                <span class="flex items-center gap-1">
                    <svg class="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                        <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" />
                        <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" />
                    </svg>
                    tawiaho858@gmail.com
                </span>
            </div>
            <div class="flex justify-center gap-4 mt-3 text-sm">
                <a href="https://www.linkedin.com/in/tawiah-obed-a8867b2b6/" class="text-indigo-600 hover:text-indigo-800 transition-colors flex items-center gap-1">
                    <svg class="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                    </svg>
                    LinkedIn
                </a>
                <a href="https://github.com/codeob" class="text-gray-700 hover:text-gray-900 transition-colors flex items-center gap-1">
                    <svg class="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                    </svg>
                    GitHub
                </a>
                <a href="https://x.com/ObedTawiah83026/" class="text-blue-500 hover:text-blue-700 transition-colors flex items-center gap-1">
                    <svg class="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z"/>
                    </svg>
                    Twitter
                </a>
            </div>
        </header>

        <!-- Profile Summary -->
        <section class="mb-8">
            <h3 class="text-2xl font-semibold text-gray-900 mb-4 border-b-2 border-indigo-200 pb-2">Profile Summary</h3>
            <p class="text-gray-700 leading-relaxed text-justify">Experienced Full Stack Developer skilled in React.js, Next.js, Node.js, Express.js, Tailwind CSS, MongoDB, PostgreSQL, TypeScript, JavaScript, Git, Firebase, and Docker. Proficient in building scalable web applications, managing backend APIs, implementing responsive UI with Tailwind CSS, and deploying full-stack solutions on Vercel and Render. Passionate problem-solver dedicated to creating efficient, scalable applications with exceptional UI/UX, leveraging modern technologies for optimal performance and user engagement.</p>
        </section>

        <!-- Technical Skills -->
        <section class="mb-8">
            <h3 class="text-2xl font-semibold text-gray-900 mb-4 border-b-2 border-indigo-200 pb-2">Technical Skills</h3>
            <div class="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3">
                <div class="bg-indigo-50 text-indigo-800 px-4 py-2 rounded-lg text-sm font-medium text-center shadow-sm">React (95%)</div>
                <div class="bg-indigo-50 text-indigo-800 px-4 py-2 rounded-lg text-sm font-medium text-center shadow-sm">HTML (100%)</div>
                <div class="bg-indigo-50 text-indigo-800 px-4 py-2 rounded-lg text-sm font-medium text-center shadow-sm">CSS (90%)</div>
                <div class="bg-indigo-50 text-indigo-800 px-4 py-2 rounded-lg text-sm font-medium text-center shadow-sm">Next.js (95%)</div>
                <div class="bg-indigo-50 text-indigo-800 px-4 py-2 rounded-lg text-sm font-medium text-center shadow-sm">Tailwind CSS (100%)</div>
                <div class="bg-indigo-50 text-indigo-800 px-4 py-2 rounded-lg text-sm font-medium text-center shadow-sm">Node.js (79%)</div>
                <div class="bg-indigo-50 text-indigo-800 px-4 py-2 rounded-lg text-sm font-medium text-center shadow-sm">Express.js (80%)</div>
                <div class="bg-indigo-50 text-indigo-800 px-4 py-2 rounded-lg text-sm font-medium text-center shadow-sm">Firebase (70%)</div>
                <div class="bg-indigo-50 text-indigo-800 px-4 py-2 rounded-lg text-sm font-medium text-center shadow-sm">MongoDB (80%)</div>
                <div class="bg-indigo-50 text-indigo-800 px-4 py-2 rounded-lg text-sm font-medium text-center shadow-sm">PostgreSQL (70%)</div>
                <div class="bg-indigo-50 text-indigo-800 px-4 py-2 rounded-lg text-sm font-medium text-center shadow-sm">JavaScript (70%)</div>
                <div class="bg-indigo-50 text-indigo-800 px-4 py-2 rounded-lg text-sm font-medium text-center shadow-sm">TypeScript (70%)</div>
                <div class="bg-indigo-50 text-indigo-800 px-4 py-2 rounded-lg text-sm font-medium text-center shadow-sm">Python (50%)</div>
                <div class="bg-indigo-50 text-indigo-800 px-4 py-2 rounded-lg text-sm font-medium text-center shadow-sm">Git (100%)</div>
                <div class="bg-indigo-50 text-indigo-800 px-4 py-2 rounded-lg text-sm font-medium text-center shadow-sm">Docker (50%)</div>
            </div>
        </section>

        <!-- Professional Experience -->
        <section class="mb-8">
            <h3 class="text-2xl font-semibold text-gray-900 mb-4 border-b-2 border-indigo-200 pb-2">Professional Experience</h3>
            <div class="bg-white p-6 rounded-lg shadow-md border border-gray-100">
                <h4 class="text-xl font-semibold text-gray-900 mb-2">Full Stack Developer</h4>
                <p class="text-indigo-600 font-medium mb-4"><strong>Freelance/Independent Projects</strong> | 2023 - Present</p>
                <ul class="space-y-3 text-gray-700">
                    <li class="flex items-start gap-2">
                        <span class="text-indigo-500 mt-1">•</span>
                        <span>Led the development of end-to-end web applications using React.js, Node.js, Express.js, and MongoDB, improving overall system performance and user satisfaction.</span>
                    </li>
                    <li class="flex items-start gap-2">
                        <span class="text-indigo-500 mt-1">•</span>
                        <span>Built and optimized RESTful APIs and integrated PostgreSQL and MongoDB databases to handle thousands of daily transactions efficiently.</span>
                    </li>
                    <li class="flex items-start gap-2">
                        <span class="text-indigo-500 mt-1">•</span>
                        <span>Designed scalable UI components with Next.js and Tailwind CSS, resulting in a 30% increase in load speed and better user engagement.</span>
                    </li>
                    <li class="flex items-start gap-2">
                        <span class="text-indigo-500 mt-1">•</span>
                        <span>Implemented JWT authentication and secure user sessions, strengthening data privacy and reducing unauthorized access incidents by 40%.</span>
                    </li>
                    <li class="flex items-start gap-2">
                        <span class="text-indigo-500 mt-1">•</span>
                        <span>Collaborated with cross-functional teams (UI/UX, product design, and QA) to deliver high-quality features on schedule using Agile/Scrum methodologies.</span>
                    </li>
                    <li class="flex items-start gap-2">
                        <span class="text-indigo-500 mt-1">•</span>
                        <span>Deployed full-stack solutions to Vercel (frontend) and Render (backend) with continuous integration pipelines for smooth updates.</span>
                    </li>
                    <li class="flex items-start gap-2">
                        <span class="text-indigo-500 mt-1">•</span>
                        <span>Integrated Docker for containerized development environments, ensuring consistent performance across different machines.</span>
                    </li>
                    <li class="flex items-start gap-2">
                        <span class="text-indigo-500 mt-1">•</span>
                        <span>Utilized Git and GitHub for version control, peer code reviews, and continuous deployment, reducing merge conflicts by 25%.</span>
                    </li>
                    <li class="flex items-start gap-2">
                        <span class="text-indigo-500 mt-1">•</span>
                        <span>Resolved complex bugs and optimized backend logic, reducing API latency by 35% and improving database query efficiency.</span>
                    </li>
                    <li class="flex items-start gap-2">
                        <span class="text-indigo-500 mt-1">•</span>
                        <span>Contributed to the development of an AI-driven module prototype to enhance user analytics and product recommendations.</span>
                    </li>
                </ul>
            </div>
        </section>

        <!-- Projects -->
        <section class="mb-8">
            <h3 class="text-2xl font-semibold text-gray-900 mb-4 border-b-2 border-indigo-200 pb-2">Projects</h3>
            <div class="space-y-6">
                <div class="bg-white p-5 rounded-lg shadow-md border border-gray-100 hover:shadow-lg transition-shadow">
                    <h4 class="text-lg font-semibold text-gray-900 mb-2">JobFinder - Full Stack Job Search Platform</h4>
                    <p class="text-gray-700 mb-3">A comprehensive job search platform with advanced filtering, user authentication, and real-time job postings.</p>
                    <p class="text-sm text-indigo-600 font-medium italic">Technologies: React, Tailwind CSS, Node.js, Express.js, MongoDB</p>
                </div>
                <div class="bg-white p-5 rounded-lg shadow-md border border-gray-100 hover:shadow-lg transition-shadow">
                    <h4 class="text-lg font-semibold text-gray-900 mb-2">Event Planner - Event Management Application</h4>
                    <p class="text-gray-700 mb-3">Dynamic event management app with real-time collaboration, calendar integration, and automated notifications.</p>
                    <p class="text-sm text-indigo-600 font-medium italic">Technologies: React, Firebase, Node.js</p>
                </div>
                <div class="bg-white p-5 rounded-lg shadow-md border border-gray-100 hover:shadow-lg transition-shadow">
                    <h4 class="text-lg font-semibold text-gray-900 mb-2">E-commerce Website - Online Marketplace</h4>
                    <p class="text-gray-700 mb-3">Full-featured online marketplace with secure payment processing, product catalog management, and user authentication.</p>
                    <p class="text-sm text-indigo-600 font-medium italic">Technologies: React, Node.js, MongoDB</p>
                </div>
                <div class="bg-white p-5 rounded-lg shadow-md border border-gray-100 hover:shadow-lg transition-shadow">
                    <h4 class="text-lg font-semibold text-gray-900 mb-2">Spices Store - E-commerce Platform</h4>
                    <p class="text-gray-700 mb-3">Modern e-commerce platform specializing in spices with mobile-optimized design and secure checkout.</p>
                    <p class="text-sm text-indigo-600 font-medium italic">Technologies: React, Tailwind CSS</p>
                </div>
                <div class="bg-white p-5 rounded-lg shadow-md border border-gray-100 hover:shadow-lg transition-shadow">
                    <h4 class="text-lg font-semibold text-gray-900 mb-2">Artist Gallery (Kojo Cue) - Interactive Digital Experience</h4>
                    <p class="text-gray-700 mb-3">Map-based digital experience combining music, storytelling, and visuals for artistic exploration.</p>
                    <p class="text-sm text-indigo-600 font-medium italic">Technologies: React, Tailwind CSS</p>
                </div>
                <div class="bg-white p-5 rounded-lg shadow-md border border-gray-100 hover:shadow-lg transition-shadow">
                    <h4 class="text-lg font-semibold text-gray-900 mb-2">Movie App - Movie Browsing Platform</h4>
                    <p class="text-gray-700 mb-3">Movie browsing platform with search functionality and detailed movie information.</p>
                    <p class="text-sm text-indigo-600 font-medium italic">Technologies: React, Tailwind CSS</p>
                </div>
                <div class="bg-white p-5 rounded-lg shadow-md border border-gray-100 hover:shadow-lg transition-shadow">
                    <h4 class="text-lg font-semibold text-gray-900 mb-2">Todo List - Task Management Application</h4>
                    <p class="text-gray-700 mb-3">Task management app with CRUD operations, local storage persistence, and drag-and-drop functionality.</p>
                    <p class="text-sm text-indigo-600 font-medium italic">Technologies: React, Local Storage, Tailwind CSS</p>
                </div>
                <div class="bg-white p-5 rounded-lg shadow-md border border-gray-100 hover:shadow-lg transition-shadow">
                    <h4 class="text-lg font-semibold text-gray-900 mb-2">Guessing Game - Interactive Number Guessing Game</h4>
                    <p class="text-gray-700 mb-3">Engaging number guessing game with dynamic difficulty levels and score tracking.</p>
                    <p class="text-sm text-indigo-600 font-medium italic">Technologies: JavaScript, React, Tailwind CSS</p>
                </div>
            </div>
        </section>

        <!-- Education -->
        <section>
            <h3 class="text-2xl font-semibold text-gray-900 mb-4 border-b-2 border-indigo-200 pb-2">Education</h3>
            <div class="bg-white p-6 rounded-lg shadow-md border border-gray-100">
                <h4 class="text-lg font-semibold text-gray-900 mb-2">Codetrain Africa Full Stack Developer</h4>
                <p class="text-gray-700">Continuous learning through online platforms, documentation, and hands-on project development</p>
            </div>
        </section>
    </body>
    </html>
  `;

  const downloadResume = () => {
    const blob = new Blob([resumeContent], { type: 'text/html' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = 'Tawiah_Obed_Resume.html';
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    URL.revokeObjectURL(url);
  };

  const printResume = () => {
    const printWindow = window.open('', '_blank');
    printWindow.document.write(resumeContent);
    printWindow.document.close();
    printWindow.print();
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          <MotionDiv
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black bg-opacity-50 z-50 flex items-center justify-center p-4"
            onClick={onClose}
          >
            <MotionDiv
              initial={{ opacity: 0, scale: 0.9, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.9, y: 20 }}
              transition={{ duration: 0.3 }}
              className="bg-white rounded-2xl shadow-2xl max-w-4xl w-full max-h-[90vh] overflow-hidden"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="flex items-center justify-between p-6 border-b border-gray-200">
                <h2 className="text-2xl font-bold text-gray-800">Resume Preview</h2>
                <div className="flex gap-3">
                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    onClick={downloadResume}
                    className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
                  >
                    Download HTML
                  </motion.button>
                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    onClick={printResume}
                    className="px-4 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700 transition-colors"
                  >
                    Print PDF
                  </motion.button>
                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    onClick={onClose}
                    className="px-4 py-2 bg-gray-600 text-white rounded-lg hover:bg-gray-700 transition-colors"
                  >
                    Close
                  </motion.button>
                </div>
              </div>
              <div className="p-6 overflow-y-auto max-h-[calc(90vh-120px)]">
                <div dangerouslySetInnerHTML={{ __html: resumeContent }} />
              </div>
            </MotionDiv>
          </MotionDiv>
        </>
      )}
    </AnimatePresence>
  );
};

export default ResumeModal;