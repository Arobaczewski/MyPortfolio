import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';

/**
 * SeeItLive Component
 * 
 * Final call-to-action section for case studies that encourages users to
 * interact with the live project or view source code on GitHub.
 * 
 * Key Features:
 * - Large, prominent action buttons (Demo filled, GitHub outlined)
 * - Conditional rendering (not all projects have public repos)
 * - Subtle "Explore More Projects" link to encourage portfolio browsing
 * - Project-branded styling using accent color
 * 
 * Design Intent:
 * Creates a clear path for recruiters to experience the project firsthand
 * or review the codebase, followed by an easy way to continue exploring
 * other work in the portfolio.
 */

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

  // Navigate to projects page to encourage portfolio exploration
  const handleNavigation = (path: string) => {
    navigate(path);
  };

  return (
    <section 
      id="see-it-live"
      className="px-4 sm:px-6 md:px-8 lg:px-12 xl:px-20 py-16 sm:py-20 md:py-24 bg-black overflow-x-hidden"
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

        {/* Primary Action Buttons */}
        {/* Demo button uses filled style to draw more attention */}
        {/* GitHub button uses outlined style as secondary action */}
        <motion.div
          className="flex flex-col sm:flex-row gap-4 sm:gap-6 justify-center mb-12 sm:mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          {/* Demo Button - Primary CTA */}
          {/* Only renders if demo URL is provided */}
          {demoUrl && (
            <motion.a
              href={demoUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="px-8 sm:px-10 md:px-12 py-4 sm:py-5 md:py-6 rounded-lg font-bold text-lg sm:text-xl md:text-2xl text-center"
              style={{
                backgroundColor: accentColor, // Filled with project accent color
                color: '#ffffff',
              }}
              whileHover={{ scale: 1.05, y: -3 }}
              whileTap={{ scale: 0.95 }}
            >
              View Demo
            </motion.a>
          )}

          {/* GitHub Button - Secondary CTA */}
          {/* Only renders if GitHub URL is provided (not all projects are public) */}
          {githubUrl && (
            <motion.a
              href={githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="px-8 sm:px-10 md:px-12 py-4 sm:py-5 md:py-6 rounded-lg font-bold text-lg sm:text-xl md:text-2xl text-center"
              style={{
                backgroundColor: 'transparent',
                border: `3px solid ${accentColor}`, // Outlined style
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
        {/* Subtle styling encourages continued browsing without competing with CTAs */}
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