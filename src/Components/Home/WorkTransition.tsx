import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';

/**
 * WorkTransition Component
 * 
 * Call-to-action section that bridges homepage content with the project showcase.
 * Acts as a transition point between skill presentation and tangible work examples.
 * 
 * Key Features:
 * - Single, prominent CTA button to view projects
 * - Arrow icon reinforces forward navigation
 * - Simple, focused design keeps attention on the action
 * 
 * Design Intent:
 * After establishing credibility and skills, this section creates natural momentum
 * toward exploring actual projects. The question format ("Ready to see it in action?")
 * creates anticipation and smoothly transitions from abstract skills to concrete work.
 */

export const WorkTransition = () => {
  const navigate = useNavigate();

  const handleNavigation = (path: string) => {
    navigate(path);
  };

  return (
    <section 
      id="work-transition"
      className="relative flex items-center justify-center px-4 sm:px-6 py-16 sm:py-20 md:py-32 lg:py-40 bg-black"
    >
      <div className="text-center max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.6 }}
        >
          {/* Transition Headline */}
          {/* Question format creates natural bridge from skills to portfolio */}
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold text-white mb-8 sm:mb-12 md:mb-16 px-4">
            Ready to see it in action?
          </h2>

          {/* Primary CTA to Projects Page */}
          {/* Filled white button with arrow creates strong visual hierarchy */}
          <motion.button
            onClick={() => handleNavigation('/work')}
            className="w-full sm:w-auto px-8 sm:px-10 md:px-12 py-4 sm:py-5 md:py-6 bg-white text-black rounded-full font-medium text-base sm:text-lg md:text-xl inline-flex items-center justify-center gap-3"
            style={{
              boxShadow: '0 4px 30px rgba(255, 255, 255, 0.3)',
            }}
            whileHover={{ 
              scale: 1.05, 
              y: -2,
              boxShadow: '0 8px 40px rgba(255, 255, 255, 0.4)',
            }}
            whileTap={{ scale: 0.95 }}
          >
            View My Work
            {/* Right arrow icon reinforces forward navigation */}
            <svg
              width="20"
              height="20"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
            >
              <path d="M5 12h14M12 5l7 7-7 7" />
            </svg>
          </motion.button>
        </motion.div>
      </div>
    </section>
  );
};