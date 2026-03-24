import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';

interface SeeItLiveProps {
  demoUrl?: string;
  githubUrl?: string;
  accentColor: string;
}

export const SeeItLive = ({
  demoUrl,
  githubUrl,
  accentColor,
}: SeeItLiveProps) => {
  const navigate = useNavigate();

  const handleNavigation = (path: string) => {
    navigate(path);
  };

  return (
    <section 
      id="see-it-live"
      className="px-4 sm:px-6 md:px-8 lg:px-12 xl:px-20 py-20 sm:py-24 md:py-32 bg-black"
    >
      <div className="max-w-4xl mx-auto w-full text-center">
        {/* Section Title */}
        <motion.h2 
          className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-white mb-12 sm:mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false }}
          transition={{ duration: 0.8 }}
        >
          See it Live!
        </motion.h2>

        {/* Main Buttons */}
        <motion.div
          className="flex flex-col sm:flex-row gap-4 sm:gap-6 justify-center mb-12 sm:mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          {/* Demo Button */}
          {demoUrl && (
            <motion.a
              href={demoUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="px-8 sm:px-10 md:px-12 py-4 sm:py-5 md:py-6 rounded-lg font-bold text-lg sm:text-xl md:text-2xl text-center"
              style={{
                backgroundColor: accentColor,
                color: '#ffffff',
              }}
              whileHover={{ scale: 1.05, y: -3 }}
              whileTap={{ scale: 0.95 }}
            >
              View Demo
            </motion.a>
          )}

          {/* GitHub Button */}
          {githubUrl && (
            <motion.a
              href={githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="px-8 sm:px-10 md:px-12 py-4 sm:py-5 md:py-6 rounded-lg font-bold text-lg sm:text-xl md:text-2xl text-center"
              style={{
                backgroundColor: 'transparent',
                border: `3px solid ${accentColor}`,
                color: accentColor,
              }}
              whileHover={{ scale: 1.05, y: -3 }}
              whileTap={{ scale: 0.95 }}
            >
              View on GitHub
            </motion.a>
          )}
        </motion.div>

        {/* Explore More Projects Link */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: false }}
          transition={{ duration: 0.8, delay: 0.4 }}
        >
          <button
            onClick={() => handleNavigation('/work')}
            className="text-sm sm:text-base text-neutral-500 hover:text-neutral-300 transition-colors underline cursor-pointer underline-offset-4"
          >
            Explore More Projects
          </button>
        </motion.div>
      </div>
    </section>
  );
};