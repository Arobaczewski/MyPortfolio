import { useEffect } from 'react';
import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import { PageTransition } from '../Components/Layout/PageTransition';

export const NotFoundPage = () => {
  const navigate = useNavigate();

  useEffect(() => {
    document.title = '404 - Page Not Found';
  }, []);

  const handleNavigation = (path: string) => {
    navigate(path);
  };

  const pages = [
    { path: '/', label: 'Home', description: 'Return to homepage' },
    { path: '/work', label: 'Work', description: 'View my projects' },
    { path: '/play', label: 'Play', description: 'See my creative side' },
    { path: '/about', label: 'About', description: 'Learn more about me' },
  ];

  return (
    <PageTransition>
      <div className="min-h-screen bg-black flex items-center justify-center px-4 sm:px-6">
        <div className="max-w-4xl mx-auto text-center">
          {/* 404 Number */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
          >
            <h1 
              className="text-8xl sm:text-9xl md:text-[12rem] lg:text-[14rem] font-bold text-white mb-6 sm:mb-8"
              style={{
                textShadow: '0 0 30px rgba(255, 255, 255, 0.2), 0 0 60px rgba(255, 255, 255, 0.1)',
              }}
            >
              404
            </h1>
          </motion.div>

          {/* Error Message */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-4 sm:mb-6">
              Page Not Found
            </h2>
            <p className="text-base sm:text-lg md:text-xl text-neutral-400 mb-12 sm:mb-16 max-w-2xl mx-auto">
              The page you're looking for doesn't exist or has been moved.
            </p>
          </motion.div>

          {/* Navigation Options */}
          <motion.div
            className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6 max-w-2xl mx-auto"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            {pages.map((page, index) => (
              <motion.button
                key={page.path}
                onClick={() => handleNavigation(page.path)}
                className="group relative overflow-hidden rounded-2xl bg-neutral-900 border border-neutral-800 hover:border-neutral-700 p-6 sm:p-8 text-left transition-all duration-300"
                whileHover={{ scale: 1.02, y: -4 }}
                whileTap={{ scale: 0.98 }}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.5 + index * 0.1 }}
              >
                {/* Subtle gradient on hover */}
                <div className="absolute inset-0 bg-gradient-to-br from-white/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                
                <div className="relative">
                  <h3 className="text-xl sm:text-2xl font-bold text-white mb-2 group-hover:text-neutral-200 transition-colors">
                    {page.label}
                  </h3>
                  <p className="text-sm sm:text-base text-neutral-400 group-hover:text-neutral-300 transition-colors">
                    {page.description}
                  </p>
                  
                  {/* Arrow icon */}
                  <div className="absolute top-1/2 right-4 -translate-y-1/2 transform translate-x-0 group-hover:translate-x-1 transition-transform duration-300">
                    <svg
                      width="20"
                      height="20"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      className="text-neutral-600 group-hover:text-white transition-colors"
                    >
                      <path d="M5 12h14M12 5l7 7-7 7" />
                    </svg>
                  </div>
                </div>
              </motion.button>
            ))}
          </motion.div>
        </div>
      </div>
    </PageTransition>
  );
};