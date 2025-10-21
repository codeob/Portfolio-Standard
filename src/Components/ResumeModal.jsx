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
              <h3 className="font-medium text-gray-900 text-base">Full Stack Developer, TechWave Solutions</h3>
              <p className="text-gray-600 flex justify-end">June 2024 - October 2025, Accra, Ghana</p>
              <ul className="list-disc list-inside mt-2 text-gray-700">
                <li>Developed a customer relationship management (CRM) system using React.js, Node.js, and PostgreSQL, improving client data processing efficiency by 30% through optimized database queries and responsive UI design.</li>
                <li>Integrated third-party APIs for real-time analytics and reporting, enhancing decision-making processes for clients by 25% with effective problem-solving and attention to detail.</li>
                <li>Collaborated with UX designers to create intuitive dashboards, increasing user satisfaction by 20% through user empathy and iterative feedback loops.</li>
                <li>Implemented automated testing with Jest and Cypress, reducing bug incidence by 15% and ensuring robust application performance.</li>
              </ul>
            </div>
            <div>
              <h3 className="font-medium text-gray-900 text-base">Full Stack Developer, CodeTrain Africa Projects</h3>
              <p className="text-gray-600 flex justify-end">February 2024 - May 2024, Accra, Ghana</p>
              <ul className="list-disc list-inside mt-2 text-gray-700">
                <li>Led development of a job search platform using React.js, Node.js, and MongoDB, integrating advanced filtering and real-time updates with Firebase, boosting user engagement by 35% through effective communication and user empathy.</li>
                <li>Designed and optimized RESTful APIs with Express.js and PostgreSQL, reducing server response time by 25% via problem-solving and attention to detail.</li>
                <li>Built a scalable e-commerce platform with Next.js, Tailwind CSS, and Stripe for secure payments, enhancing user experience by 20% through multitasking and holistic thinking.</li>
                <li>Collaborated with cross-functional teams to deliver secure authentication systems and real-time notifications, improving project delivery efficiency by 25% through effective communication and time management.</li>
              </ul>
            </div>
            <div>
              <h3 className="font-medium text-gray-900 text-base">Full Stack Developer (Contract), InnovateTech Ltd.</h3>
              <p className="text-gray-600 flex justify-end">September 2023 - January 2024, Remote</p>
              <ul className="list-disc list-inside mt-2 text-gray-700">
                <li>Built a task management application using Next.js and MongoDB, streamlining team workflows and improving task completion rates by 40% through intuitive UI and efficient backend logic.</li>
                <li>Implemented secure user authentication with JWT and Firebase, enhancing application security and reducing unauthorized access incidents by 30%.</li>
                <li>Optimized frontend performance with lazy loading and code splitting, decreasing page load times by 20% and improving user retention.</li>
                <li>Contributed to agile sprints, delivering features on time and improving team collaboration through clear communication and multitasking.</li>
              </ul>
            </div>
            <div>
              <h3 className="font-medium text-gray-900 text-base">Junior Full Stack Developer, StartUp Innovators</h3>
              <p className="text-gray-600 flex justify-end">June 2023 - August 2023, Accra, Ghana</p>
              <ul className="list-disc list-inside mt-2 text-gray-700">
                <li>Developed a social networking platform with React.js and Express.js, integrating real-time chat functionality using WebSocket, increasing user interaction by 25%.</li>
                <li>Designed responsive UI components with Tailwind CSS, ensuring cross-device compatibility and boosting mobile user engagement by 15%.</li>
                <li>Assisted in database schema design with MongoDB, improving data retrieval efficiency by 20% through optimized indexing.</li>
                <li>Participated in code reviews and pair programming, enhancing code quality and team knowledge sharing through effective communication.</li>
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
            </div>
            <div>
              <p className="font-medium text-gray-900">E-commerce Website</p>
              <p className="text-gray-700 leading-relaxed">
                Created a full-featured online marketplace with secure payment processing, an intuitive admin dashboard, and product management capabilities. Utilized React for a responsive frontend, Node.js and Express.js for backend services, and MongoDB for scalable database operations. Integrated features like product filtering, cart management, and secure checkout with Stripe, enhancing user experience and achieving a 20% reduction in query execution time.
              </p>
            </div>
            <div>
              <p className="font-medium text-gray-900">Artist Gallery (Kojo Cue)</p>
              <p className="text-gray-700 leading-relaxed">
                Developed an interactive digital gallery celebrating the life and music of artist Kojo Cue, featuring map-based storytelling and audio-visual integration. Built with React for a seamless user interface and Tailwind CSS for responsive, modern styling. Implemented interactive map navigation and multimedia playback, increasing user engagement by 15% and ensuring cross-browser compatibility and mobile responsiveness.
              </p>
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  </motion.div>
  );
};

export default ResumeModal;