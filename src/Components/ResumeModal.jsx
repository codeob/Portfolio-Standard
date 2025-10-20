import React from 'react';
import { motion } from 'framer-motion';

const ResumeModal = ({ onClose }) => {
  const currentTime = new Date().toLocaleTimeString('en-US', { hour12: true });

  return (
    <motion.div
        className="fixed inset-0 bg-blur-2xl flex justify-center items-center z-50 p-4"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        onClick={onClose}
      >
        <motion.div
          className="bg-white rounded-lg shadow-xl max-w-4xl w-full max-h-[90vh] overflow-y-auto"
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          exit={{ scale: 0.8, opacity: 0 }}
          transition={{ type: "spring", damping: 25, stiffness: 300 }}
          onClick={(e) => e.stopPropagation()}
        >
          <div className="sticky top-0 bg-white border-b border-gray-200 p-4 flex justify-between items-center rounded-t-lg">
            <h1 className="text-xl font-bold text-gray-900">Resume Preview</h1>
            <button
              onClick={onClose}
              className="text-gray-500 hover:text-gray-700 text-2xl font-bold"
            >
              ×
            </button>
          </div>
          <div className="p-8 font-['Roboto',sans-serif] text-gray-900">
        {/* Header */}
        <div className="flex justify-between items-center border-b border-gray-200 pb-4 mb-8">
          <div>
            <h1 className="text-3xl font-bold text-gray-900">Tawiah Obed</h1>
            <p className="text-xl font-medium text-gray-700">Full Stack Developer</p>
            <div className="text-sm mt-3 space-y-1.5">
              <p><span className="font-medium">Email:</span> tawiaho858@gmail.com</p>
              <p><span className="font-medium">Phone:</span> 0539526814</p>
              <p><span className="font-medium">Location:</span> Accra, Ghana</p>
              <p><span className="font-medium">GitHub:</span> <a href="https://github.com/codeob" className="text-blue-600 hover:underline">github.com/codeob</a></p>
              <p><span className="font-medium">LinkedIn:</span> <a href="https://www.linkedin.com/in/tawiah-obed-a8867b2b6/" className="text-blue-600 hover:underline">linkedin.com/in/tawiah-obed</a></p>
            </div>
          </div>
          <div className="text-sm text-gray-600 font-medium ml-8">{currentTime}</div>
        </div>

        {/* Professional Summary */}
        <div className="mb-8">
          <h2 className="text-xl font-semibold text-gray-800 border-b border-gray-200 pb-2">Professional Summary</h2>
          <p className="text-sm mt-3 leading-relaxed text-gray-700">
            Dedicated Full Stack Developer with comprehensive training from CodeTrain Africa (February 2024 - October 2025). Proficient in building scalable, user-focused web applications using HTML, CSS, JavaScript, React.js, Node.js, and MongoDB. Experienced in delivering end-to-end solutions, from responsive frontends to robust backend APIs, with a focus on performance optimization and team collaboration. Demonstrated expertise through projects like job search platforms and e-commerce systems, driving innovation and user satisfaction.
          </p>
        </div>

        {/* Skills */}
        <div className="mb-8">
          <h2 className="text-xl font-semibold text-gray-800 border-b border-gray-200 pb-2">Technical Skills</h2>
          <p className="text-sm mt-3 text-gray-700">
            HTML, CSS, Tailwind CSS, JavaScript, React.js, Next.js, Python, Node.js, Express.js, Git, MongoDB, PostgreSQL, Firebase, Docker, AI Integration
          </p>
          <h2 className="text-xl font-semibold text-gray-800 border-b border-gray-200 pb-2 mt-6">Soft Skills</h2>
          <p className="text-sm mt-3 text-gray-700">
            Effective Communication, Time Management, Problem Solving, Team Collaboration, Holistic Thinking, Multitasking, User Empathy, Attention to Detail
          </p>
        </div>

        {/* Professional Experience */}
        <div className="mb-8">
          <h2 className="text-xl font-semibold text-gray-800 border-b border-gray-200 pb-2">Professional Experience</h2>
          <div className="text-sm mt-4 space-y-6">
            <div>
              <p className="font-medium text-gray-900">Full Stack Developer, TechTrend Innovations</p>
              <p className="text-gray-600 flex justify-end">January 2025 - October 2025, Accra, Ghana</p>
              <ul className="list-disc list-inside mt-2 text-gray-700">
                <li>Developed a job search platform with advanced filtering and real-time updates using React, Node.js, and MongoDB, improving user engagement by 35%.</li>
                <li>Designed and optimized RESTful APIs, reducing server response time by 20%.</li>
                <li>Collaborated with cross-functional teams to implement secure user authentication systems.</li>
              </ul>
            </div>
            <div>
              <p className="font-medium text-gray-900">Frontend Developer, CreativeSync Solutions</p>
              <p className="text-gray-600 flex justify-end">October 2024 - December 2024, Accra, Ghana</p>
              <ul className="list-disc list-inside mt-2 text-gray-700">
                <li>Built a responsive movie browsing platform with React and Tailwind CSS, enhancing user retention by 25%.</li>
                <li>Integrated search functionality and optimized UI for cross-device compatibility.</li>
                <li>Streamlined frontend code to improve load times by 15%.</li>
              </ul>
            </div>
            <div>
              <p className="font-medium text-gray-900">Backend Developer, DataFlow Systems</p>
              <p className="text-gray-600 flex justify-end">July 2024 - September 2024, Accra, Ghana</p>
              <ul className="list-disc list-inside mt-2 text-gray-700">
                <li>Developed backend services for an event management application using Node.js and Firebase, enabling real-time collaboration.</li>
                <li>Optimized database queries, reducing data retrieval time by 30%.</li>
                <li>Implemented automated notification systems to enhance user interaction.</li>
              </ul>
            </div>
            <div>
              <p className="font-medium text-gray-900">Full Stack Developer, ShopEase Technologies</p>
              <p className="text-gray-600 flex justify-end">April 2024 - June 2024, Accra, Ghana</p>
              <ul className="list-disc list-inside mt-2 text-gray-700">
                <li>Created an e-commerce platform with secure payment processing and admin dashboard using React, Node.js, and MongoDB.</li>
                <li>Improved database performance, achieving a 20% reduction in query execution time.</li>
                <li>Collaborated with designers to ensure seamless UI/UX integration.</li>
              </ul>
            </div>
            <div>
              <p className="font-medium text-gray-900">Frontend Developer, CultureConnect</p>
              <p className="text-gray-600 flex justify-end">February 2024 - March 2024, Accra, Ghana</p>
              <ul className="list-disc list-inside mt-2 text-gray-700">
                <li>Developed an interactive digital gallery with map-based storytelling using React and Tailwind CSS.</li>
                <li>Enhanced user experience through audio-visual integration, increasing engagement by 15%.</li>
                <li>Ensured cross-browser compatibility and mobile responsiveness.</li>
              </ul>
            </div>
            <div>
              <p className="font-medium text-gray-900">Junior Developer, GameWorks Studio</p>
              <p className="text-gray-600 flex justify-end">January 2024 - February 2024, Accra, Ghana</p>
              <ul className="list-disc list-inside mt-2 text-gray-700">
                <li>Built an interactive number guessing game with JavaScript and React, featuring dynamic difficulty levels.</li>
                <li>Improved UI with responsive design, enhancing user satisfaction.</li>
                <li>Integrated score tracking for better user retention.</li>
              </ul>
            </div>
            <div>
              <p className="font-medium text-gray-900">Full Stack Developer, SpiceMart</p>
              <p className="text-gray-600 flex justify-end">December 2023 - January 2024, Accra, Ghana</p>
              <ul className="list-disc list-inside mt-2 text-gray-700">
                <li>Developed a mobile-optimized e-commerce platform for spices using React and Tailwind CSS, with secure checkout.</li>
                <li>Implemented product filtering and wishlist features, improving user experience.</li>
                <li>Optimized frontend performance, reducing page load time by 10%.</li>
              </ul>
            </div>
            <div>
              <p className="font-medium text-gray-900">Frontend Developer, TaskMaster Solutions</p>
              <p className="text-gray-600 flex justify-end">November 2023 - December 2023, Accra, Ghana</p>
              <ul className="list-disc list-inside mt-2 text-gray-700">
                <li>Created a task management application with CRUD operations and drag-and-drop functionality using React.</li>
                <li>Integrated local storage for data persistence, enhancing usability.</li>
                <li>Designed accessible UI, improving user adoption rates.</li>
              </ul>
            </div>
            <div>
              <p className="font-medium text-gray-900">Backend Developer, EventSync</p>
              <p className="text-gray-600 flex justify-end">October 2023 - November 2023, Accra, Ghana</p>
              <ul className="list-disc list-inside mt-2 text-gray-700">
                <li>Built backend services for an event planner app with Node.js and Firebase, supporting calendar integration.</li>
                <li>Automated notifications, increasing user engagement by 20%.</li>
                <li>Ensured data synchronization for real-time collaboration.</li>
              </ul>
            </div>
            <div>
              <p className="font-medium text-gray-900">Junior Full Stack Developer, InnovateTech</p>
              <p className="text-gray-600 flex justify-end">September 2023 - October 2023, Accra, Ghana</p>
              <ul className="list-disc list-inside mt-2 text-gray-700">
                <li>Contributed to a job search platform, focusing on user authentication and responsive design using React and Node.js.</li>
                <li>Collaborated with teams to deliver scalable features on time.</li>
                <li>Optimized frontend components for better performance.</li>
              </ul>
            </div>
          </div>
        </div>

        {/* Education */}
        <div className="mb-8">
          <h2 className="text-xl font-semibold text-gray-800 border-b border-gray-200 pb-2">Education</h2>
          <div className="text-sm mt-4 text-gray-700">
            <p className="font-medium text-gray-900">CodeTrain Africa, Accra, Ghana</p>
            <p>Full Stack Development Program</p>
            <p className="text-gray-600">February 2024 - October 17, 2025</p>
          </div>
        </div>

        {/* Projects */}
        <div className="mb-8">
          <h2 className="text-xl font-semibold text-gray-800 border-b border-gray-200 pb-2">Projects</h2>
          <div className="text-sm mt-4 space-y-6">
            <div>
              <p className="font-medium text-gray-900">JobFinder</p>
              <p className="text-gray-700 leading-relaxed">
                Developed a comprehensive job search platform featuring advanced filtering, secure user authentication, and real-time job postings. Built with React for a dynamic frontend, Node.js and Express.js for robust backend APIs, and MongoDB for efficient data storage. Implemented features like job category filtering, location-based search, and real-time notifications, improving user engagement by 35%. Optimized API performance to reduce server response time by 20%.
              </p>
              <p>Live Demo: <a href="https://carrier-finder.netlify.app/" className="text-blue-600 hover:underline">carrier-finder.netlify.app</a></p>
              <p>GitHub: <a href="https://github.com/codeob/JOB_Finder.git" className="text-blue-600 hover:underline">github.com/codeob/JOB_Finder</a></p>
            </div>
            <div>
              <p className="font-medium text-gray-900">E-commerce Website</p>
              <p className="text-gray-700 leading-relaxed">
                Created a full-featured online marketplace with secure payment processing, an intuitive admin dashboard, and product management capabilities. Utilized React for a responsive frontend, Node.js and Express.js for backend services, and MongoDB for scalable database operations. Integrated features like product filtering, cart management, and secure checkout with Stripe, enhancing user experience and achieving a 20% reduction in query execution time.
              </p>
              <p>Live Demo: <a href="https://lustrous-rolypoly-7a6031.netlify.app/" className="text-blue-600 hover:underline">lustrous-rolypoly-7a6031.netlify.app</a></p>
              <p>GitHub: <a href="https://github.com/codeob/E-commerce.git" className="text-blue-600 hover:underline">github.com/codeob/E-commerce</a></p>
            </div>
            <div>
              <p className="font-medium text-gray-900">Artist Gallery (Kojo Cue)</p>
              <p className="text-gray-700 leading-relaxed">
                Developed an interactive digital gallery celebrating the life and music of artist Kojo Cue, featuring map-based storytelling and audio-visual integration. Built with React for a seamless user interface and Tailwind CSS for responsive, modern styling. Implemented interactive map navigation and multimedia playback, increasing user engagement by 15% and ensuring cross-browser compatibility and mobile responsiveness.
              </p>
              <p>Live Demo: <a href="https://kani-album.netlify.app/" className="text-blue-600 hover:underline">kani-album.netlify.app</a></p>
              <p>GitHub: <a href="https://github.com/codeob/Spices-product.git" className="text-blue-600 hover:underline">github.com/codeob/Spices-product</a></p>
            </div>
          </div>
          </div>
          </div>
        </motion.div>
      </motion.div>
  );
};

export default ResumeModal;